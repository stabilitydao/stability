import { chains, getAssetBySymbol, tokenlist } from "@stabilitydao/host";
import { getLendingMarketsForAsset } from "../src/lending";

export interface LeverageBasePair {
  borrowSymbol: string;
  collateralTags: string[];
}

export interface LeveragePair {
  borrowSymbol: string;
  collateralSymbol: string;
}

const leverageBasePairs: LeverageBasePair[] = [
  {
    borrowSymbol: "WETH",
    collateralTags: ["eth", "lst"],
  },
  {
    borrowSymbol: "WBTC",
    collateralTags: ["btc", "lst"],
  },
];

const leverageStablecoinPairs: LeveragePair[] = [
  {
    borrowSymbol: "USDe",
    collateralSymbol: "sUSDe",
  },
  {
    borrowSymbol: "USDT",
    collateralSymbol: "syrupUSDT",
  },
];

console.log("# Leveraged lending opportunities\n");

for (const basePair of leverageBasePairs) {
  console.log(
    `## Supply ${basePair.collateralTags.join(" ").toUpperCase()}, borrow ${basePair.borrowSymbol}\n`,
  );

  for (const token of tokenlist.tokens) {
    let tagsMatch = true;
    for (const tag of basePair.collateralTags) {
      if (!token.tags || !token.tags.includes(tag)) {
        tagsMatch = false;
        break;
      }
    }
    if (!tagsMatch) {
      continue;
    }
    const chainId = token.chainId.toString();

    const markets = getLendingMarketsForAsset(chainId, token.address);
    for (const market of markets) {
      console.log(
        `* ${chains[chainId].name} ${market.operator} ${token.symbol}-${basePair.borrowSymbol}`,
      );
    }
  }

  console.log("");
}

console.log("## Supply yield-bearing stablecoin, borrow stablecoin\n");

for (const pair of leverageStablecoinPairs) {
  const borrowAsset = getAssetBySymbol(pair.borrowSymbol);
  if (!borrowAsset) {
    throw new Error("Borrow asset is not supported");
  }
  const collateralAsset = getAssetBySymbol(pair.collateralSymbol);
  if (!collateralAsset) {
    throw new Error("Collateral asset is not supported");
  }

  const collateralAssetChainIds = Object.keys(collateralAsset.addresses);
  for (const chainId of collateralAssetChainIds) {
    if (!borrowAsset.addresses[chainId]) {
      continue;
    }
    const markets = getLendingMarketsForAsset(
      chainId,
      Array.isArray(collateralAsset.addresses[chainId])
        ? collateralAsset.addresses[chainId][0]
        : (collateralAsset.addresses[chainId] as string),
    );
    for (const market of markets) {
      console.log(
        `* ${chains[chainId].name} ${market.operator} ${pair.collateralSymbol}-${pair.borrowSymbol}`,
      );
    }
  }
}

console.log("");
