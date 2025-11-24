import { createPublicClient, http } from "viem";
import { lendingMarkets, IReserve, ILendingMarket } from "../src/lending";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

import poolDataProviderAbi from "../abis/PoolDataProviderABI.json";
import aaveOracleAbi from "../abis/AaveOracleABI.json";
import aTokenAbi from "../abis/ATokenABI.json";

const aaveOracles: Record<string, `0x${string}`> = {
  "1": "0x54586bE62E3c3580375aE3723C145253060Ca0C2",
  "146": "0xd63f7658c66b2934bd234d79d06aef5290734b30",
};

const rpcUrls: Record<string, string> = {
  "1": "https://eth.llamarpc.com",
  "146": "https://rpc.soniclabs.com",
};

const SOURCE_PATH = path.resolve(__dirname, "../src/lending.ts");

async function updateMarketReserves(market: ILendingMarket) {
  const rpcUrl = rpcUrls[market.chainId];
  if (!rpcUrl) {
    console.warn(`No RPC URL for chain: ${market.chainId}`);
    return market.reserves;
  }

  const client = createPublicClient({
    chain: undefined,
    transport: http(rpcUrl),
  });

  const provider = {
    address: market.protocolDataProvider,
    abi: poolDataProviderAbi,
  };

  const aaveOracle = {
    address: aaveOracles[market.chainId],
    abi: aaveOracleAbi,
  };

  const reserves = (await client.readContract({
    ...provider,
    functionName: "getAllReservesTokens",
  })) as any;

  const updated: IReserve[] = [];
  let oracleName = "Unknown";

  for (const r of reserves) {
    const asset = r.tokenAddress;
    const symbol = r.symbol;

    if (r.oracleName) oracleName = r.oracleName;

    const [aToken] = (await client.readContract({
      ...provider,
      functionName: "getReserveTokensAddresses",
      args: [asset],
    })) as any;

    const aTokenContract = { address: aToken, abi: aTokenAbi };

    const existing = market.reserves.find(
      (x) => x.asset.toLowerCase() === asset.toLowerCase(),
    );

    if (!existing) {
      const oracle = (await client.readContract({
        ...aaveOracle,
        functionName: "getSourceOfAsset",
        args: [asset],
      })) as `0x${string}`;

      const treasury = (await client.readContract({
        ...aTokenContract,
        functionName: "RESERVE_TREASURY_ADDRESS",
      })) as `0x${string}`;

      const isBorrowable = await client
        .readContract({
          ...provider,
          functionName: "getReserveConfigurationData",
          args: [asset],
        })
        .then((res) => (res as any[])?.[6] as boolean);

      updated.push({
        asset,
        aToken,
        aTokenSymbol: symbol,
        oracle,
        oracleName,
        treasury,
        isBorrowable,
      });
    } else {
      updated.push(existing);
    }
  }

  return updated;
}

function toTsObjectLiteralArray(arr: any[]) {
  return (
    "[\n" +
    arr.map((o) => toTsObjectLiteral(o).replace(/^/gm, "  ")).join(",\n") +
    "\n]"
  );
}

function toTsObjectLiteral(obj: Record<string, any>) {
  const entries = Object.entries(obj)
    .map(([key, value]) => {
      const formatted = typeof value === "string" ? `"${value}"` : value;
      return `  ${key}: ${formatted},`;
    })
    .join("\n");

  return `{\n${entries}\n}`;
}

async function main() {
  let updatedSource = fs.readFileSync(SOURCE_PATH, "utf8");

  for (const market of lendingMarkets) {
    console.log(`Updating: ${market.id}`);

    const updatedReserves = await updateMarketReserves(market);

    const marketIdEscaped = market.id.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

    const reservesRegex = new RegExp(
      `(id:\\s*"${marketIdEscaped}"[\\s\\S]*?reserves:\\s*)\\[[\\s\\S]*?\\]`,
      "m",
    );

    updatedSource = updatedSource.replace(
      reservesRegex,
      (_, prefix) => `${prefix}${toTsObjectLiteralArray(updatedReserves)}`,
    );
  }

  fs.writeFileSync(SOURCE_PATH, updatedSource);
  console.log("✅ Source updated");

  try {
    execSync(`prettier --write "${SOURCE_PATH}"`, { stdio: "inherit" });
    console.log("✨ Prettier formatted the file");
  } catch (err) {
    console.error("⚠️ Prettier failed:", err);
  }
}

main().catch(console.error);
