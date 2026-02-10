import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { createPublicClient, formatUnits, http, PublicClient } from "viem";
import {
  ILendingMarket,
  IReserve,
  LendingEngine,
  lendingMarkets,
} from "../src/lending";
import {
  getAllReservesTokensABI,
  getReserveTokensAddressesABI,
  getSourceOfAssetABI,
  reserveTreasuryAddressABI,
  getReserveConfigurationABI,
  eModeAbi,
} from "./abis";

const aaveOracles: Record<string, `0x${string}`> = {
  "1": "0x54586bE62E3c3580375aE3723C145253060Ca0C2",
  "146": "0xd63f7658c66b2934bd234d79d06aef5290734b30",
  "9745": "0x33E0b3fc976DC9C516926BA48CfC0A9E10a2aAA5",
};

const rpcUrls: Record<string, string> = {
  //"1": "https://eth.llamarpc.com",
  "1": "https://ethereum-rpc.publicnode.com",
  "146": "https://rpc.soniclabs.com",
  "9745": "https://rpc.plasma.to",
};

type Reserve = {
  tokenAddress: `0x${string}`;
  symbol: string;
  oracleName: string;
};

type EModeRaw = {
  id: number;
  eMode: {
    ltv: number;
    liquidationThreshold: number;
    liquidationBonus: number;
    collateralBitmap: bigint;
    label: string;
    borrowableBitmap: bigint;
    ltvzeroBitmap: bigint;
  };
};

const SOURCE_PATH = path.resolve(__dirname, "../src/lending.ts");

async function updateMarketReserves(
  market: ILendingMarket,
  reserves: Reserve[],
  eModeData: ILendingMarket["eModes"],
  client: PublicClient,
) {
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

    const reserveConfig = (await client.readContract({
      address: market.protocolDataProvider,
      abi: getReserveConfigurationABI,
      functionName: "getReserveConfigurationData",
      args: [asset],
    })) as any[];

    const isBorrowable = reserveConfig[6] as boolean;

    let ltv = +formatUnits(reserveConfig[1], 2);
    let lt = +formatUnits(reserveConfig[2], 2);

    if (eModeData) {
      for (const eMode of eModeData) {
        const assetLower = asset.toLowerCase();
        const isInEMode = eMode.collateral.some(
          (addr) => addr.toLowerCase() === assetLower,
        );

        if (isInEMode) {
          ltv = eMode.ltv;
          lt = eMode.lt;
          break;
        }
      }
    }

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

      updated.push({
        asset,
        aToken,
        aTokenSymbol: symbol,
        oracle,
        oracleName,
        treasury,
        isBorrowable,
        lt,
        ltv,
      });
    } else {
      updated.push({
        ...existing,
        isBorrowable,
        lt,
        ltv,
      });
    }
  }

  return updated;
}

async function getEModeData(
  market: ILendingMarket,
  reserves: Reserve[],
  client: PublicClient,
): Promise<ILendingMarket["eModes"]> {
  if (market.engine != LendingEngine.AAVE_3_5) return [];

  const uiPoolDataProvider = market.uiPoolDataProvider;

  const addressProvider = await client.readContract({
    address: market.pool,
    abi: [
      {
        type: "function",
        name: "ADDRESSES_PROVIDER",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "address" }],
      },
    ],
    functionName: "ADDRESSES_PROVIDER",
  });

  const eModeData = (await client.readContract({
    address: uiPoolDataProvider,
    abi: eModeAbi,
    functionName: "getEModes",
    args: [addressProvider],
  })) as EModeRaw[];

  const result: ILendingMarket["eModes"] = [];

  for (const eMode of eModeData) {
    const collateralIndex = getReserveIdsFromBitmap(
      eMode.eMode.collateralBitmap,
    );
    const borrowableIndex = getReserveIdsFromBitmap(
      eMode.eMode.borrowableBitmap,
    );

    const collateral = collateralIndex.map((i) => reserves[i]);
    const borrowable = borrowableIndex.map((i) => reserves[i]);

    const ltv = eMode.eMode.ltv / 10 ** 2;
    const lt = eMode.eMode.liquidationThreshold / 10 ** 2;

    result.push({
      id: eMode.id,
      label: eMode.eMode.label,
      collateral: collateral.map((r) => r.tokenAddress),
      borrowable: borrowable.map((r) => r.tokenAddress),
      ltv,
      lt,
    });
  }

  return result;
}

function getReserveIdsFromBitmap(bitmap: bigint) {
  const reserveIds = [];
  let position = 0;

  while (bitmap > BigInt(0)) {
    if (bitmap & BigInt(1)) {
      reserveIds.push(position);
    }
    bitmap >>= BigInt(1);
    position++;
  }

  return reserveIds;
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

function toTsValue(value: any): string {
  if (Array.isArray(value)) {
    return `[\n${value.map((v) => `    ${toTsValue(v)}`).join(",\n")}\n  ]`;
  }

  if (typeof value === "string") {
    return `"${value}"`;
  }

  if (typeof value === "bigint") {
    return `${value}n`;
  }

  return String(value);
}

function toTsObjectLiteral(obj: Record<string, any>) {
  const entries = Object.entries(obj)
    .map(([key, value]) => `  ${key}: ${toTsValue(value)},`)
    .join("\n");

  return `{\n${entries}\n}`;
}
function toTsEModesArray(arr: NonNullable<ILendingMarket["eModes"]>) {
  return (
    "[\n" +
    arr
      .map((eMode) => {
        const comment = `  // ${eMode.label}`;
        const literal = toTsObjectLiteral(eMode as any).replace(/^/gm, "  ");
        return `${comment}\n${literal}`;
      })
      .join(",\n") +
    "\n]"
  );
}

/* ------------------------------------------------------------------ */

async function main() {
  let updatedSource = fs.readFileSync(SOURCE_PATH, "utf8");

  for (const market of lendingMarkets) {
    console.log(`\nUpdating: ${market.id}`);

    const rpcUrl = rpcUrls[market.chainId];
    if (!rpcUrl) {
      console.warn(`No RPC URL for chain: ${market.chainId}`);
      continue;
    }

    const client = createPublicClient({
      chain: undefined,
      transport: http(rpcUrl),
    });

    const reserves = (await client.readContract({
      address: market.protocolDataProvider,
      abi: getAllReservesTokensABI,
      functionName: "getAllReservesTokens",
    })) as Reserve[];

    const eModeData = await getEModeData(market, reserves, client).catch(
      () => [],
    );

    const updatedReserves = await updateMarketReserves(
      market,
      reserves,
      eModeData,
      client,
    );

    console.log(`  Reserves: ${updatedReserves.length}`);
    console.log(`  eModes: ${eModeData?.length || 0}`);

    const marketIdEscaped = market.id.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

    const reservesRegex = new RegExp(
      `(id:\\s*"${marketIdEscaped}"[\\s\\S]*?reserves:\\s*)\\[[\\s\\S]*?\\](\\s*,\\s*(?:uiPoolDataProvider|deployed|show|eModes))`,
      "m",
    );

    const reservesReplacement = toTsObjectLiteralArray(updatedReserves);

    if (reservesRegex.test(updatedSource)) {
      updatedSource = updatedSource.replace(
        reservesRegex,
        (match, prefix, suffix) => {
          console.log(`  ✓ Updated reserves`);
          return `${prefix}${reservesReplacement}${suffix}`;
        },
      );
    } else {
      console.warn(`  ✗ Could not find reserves pattern`);
    }

    if (eModeData && eModeData.length > 0) {
      const eModesUpdateRegex = new RegExp(
        `(id:\\s*"${marketIdEscaped}"[\\s\\S]*?eModes:\\s*)\\[[\\s\\S]*?\\](\\s*,?\\s*})`,
        "m",
      );

      const eModesReplacement = toTsEModesArray(eModeData);

      if (eModesUpdateRegex.test(updatedSource)) {
        updatedSource = updatedSource.replace(
          eModesUpdateRegex,
          (match, prefix, suffix) => {
            console.log(`  ✓ Updated eModes`);
            return `${prefix}${eModesReplacement}${suffix}`;
          },
        );
      } else {
        const eModesInsertRegex = new RegExp(
          `(id:\\s*"${marketIdEscaped}"[\\s\\S]*?show:\\s*(?:true|false)\\s*,)(\\s*})`,
          "m",
        );

        if (eModesInsertRegex.test(updatedSource)) {
          updatedSource = updatedSource.replace(
            eModesInsertRegex,
            (match, prefix, suffix) => {
              console.log(`  ✓ Inserted eModes`);
              return `${prefix}\n    eModes: ${eModesReplacement},${suffix}`;
            },
          );
        } else {
          console.warn(`  ✗ Could not insert eModes (pattern not found)`);
        }
      }
    }
  }

  fs.writeFileSync(SOURCE_PATH, updatedSource);
  console.log("\n✅ Source updated");

  try {
    execSync(`prettier --write "${SOURCE_PATH}"`, { stdio: "inherit" });
    console.log("✨ Prettier formatted the file");
  } catch (err) {
    console.error("⚠️ Prettier failed:", err);
  }
}

main().catch(console.error);
