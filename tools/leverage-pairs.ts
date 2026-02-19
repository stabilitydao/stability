export interface LeverageBasePair {
  borrowSymbol: string;
  collateralTags: string[];
}

export interface LeverageStablecoinPair {
  borrowSymbol: string;
  collateralSymbol: string;
}

export const leverageBasePairs: LeverageBasePair[] = [
  {
    borrowSymbol: "WETH",
    collateralTags: ["eth", "lst"],
  },
  {
    borrowSymbol: "WBTC",
    collateralTags: ["btc", "lst"],
  },
];

export const leverageStablecoinPairs: LeverageStablecoinPair[] = [
  {
    borrowSymbol: "USDe",
    collateralSymbol: "sUSDe",
  },
  {
    borrowSymbol: "USDT",
    collateralSymbol: "syrupUSDT",
  },
];
