import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { createPublicClient, http } from "viem";
import { ILendingMarket, IReserve, lendingMarkets } from "../src/lending";

const aaveOracles: Record<string, `0x${string}`> = {
  "1": "0x54586bE62E3c3580375aE3723C145253060Ca0C2",
  "146": "0xd63f7658c66b2934bd234d79d06aef5290734b30",
};

const rpcUrls: Record<string, string> = {
  //"1": "https://eth.llamarpc.com",
  "1": "https://ethereum-rpc.publicnode.com",
  "146": "https://rpc.soniclabs.com",
};

const getReserveTokensAddressesABI = [
  {
    inputs: [{ internalType: "address", name: "asset", type: "address" }],
    name: "getReserveTokensAddresses",
    outputs: [
      { internalType: "address", name: "aTokenAddress", type: "address" },
      {
        internalType: "address",
        name: "stableDebtTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "variableDebtTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const getAllReservesTokensABI = [
  {
    inputs: [],
    name: "getAllReservesTokens",
    outputs: [
      {
        components: [
          { internalType: "string", name: "symbol", type: "string" },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
        ],
        internalType: "struct IPoolDataProvider.TokenData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const getSourceOfAssetABI = [
  {
    inputs: [{ internalType: "address", name: "asset", type: "address" }],
    name: "getSourceOfAsset",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];

const getReserveConfigurationABI = [
  {
    inputs: [{ internalType: "address", name: "asset", type: "address" }],
    name: "getReserveConfigurationData",
    outputs: [
      { internalType: "uint256", name: "decimals", type: "uint256" },
      { internalType: "uint256", name: "ltv", type: "uint256" },
      {
        internalType: "uint256",
        name: "liquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationBonus",
        type: "uint256",
      },
      { internalType: "uint256", name: "reserveFactor", type: "uint256" },
      {
        internalType: "bool",
        name: "usageAsCollateralEnabled",
        type: "bool",
      },
      { internalType: "bool", name: "borrowingEnabled", type: "bool" },
      {
        internalType: "bool",
        name: "stableBorrowRateEnabled",
        type: "bool",
      },
      { internalType: "bool", name: "isActive", type: "bool" },
      { internalType: "bool", name: "isFrozen", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const reserveTreasuryAddressABI = [
  {
    inputs: [],
    name: "RESERVE_TREASURY_ADDRESS",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];

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

  const reserves = (await client.readContract({
    address: market.protocolDataProvider,
    abi: getAllReservesTokensABI,
    functionName: "getAllReservesTokens",
  })) as any;

  const updated: IReserve[] = [];
  let oracleName = "Unknown";

  for (const r of reserves) {
    process.stdout.write(".");
    const asset = r.tokenAddress;
    const symbol = r.symbol;

    if (r.oracleName) oracleName = r.oracleName;

    const [aToken] = (await client.readContract({
      address: market.protocolDataProvider,
      abi: getReserveTokensAddressesABI,
      functionName: "getReserveTokensAddresses",
      args: [asset],
    })) as any;

    const existing = market.reserves.find(
      (x) => x.asset.toLowerCase() === asset.toLowerCase(),
    );

    if (!existing) {
      const oracle = (await client.readContract({
        address: aaveOracles[market.chainId],
        abi: getSourceOfAssetABI,
        functionName: "getSourceOfAsset",
        args: [asset],
      })) as `0x${string}`;

      const treasury = (await client.readContract({
        address: aToken,
        abi: reserveTreasuryAddressABI,
        functionName: "RESERVE_TREASURY_ADDRESS",
      })) as `0x${string}`;

      const isBorrowable = await client
        .readContract({
          address: market.protocolDataProvider,
          abi: getReserveConfigurationABI,
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

/* ------------------------ COMMENTED OUTPUT ------------------------ */

function toTsObjectLiteralArray(arr: IReserve[]) {
  return (
    "[\n" +
    arr
      .map((o) => {
        const symbolComment = `  // ${o.aTokenSymbol.replace(/^asi/, "")}`;
        const literal = toTsObjectLiteral(o).replace(/^/gm, "  "); // indent object
        return `${symbolComment}\n${literal}`;
      })
      .join(",\n") +
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

/* ------------------------------------------------------------------ */

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
