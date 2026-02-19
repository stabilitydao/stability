import { chains } from "@daohost/host";
import { lendingMarkets } from "../src/lending";
import { leverageBasePairs, leverageStablecoinPairs } from "./leverage-pairs";

// Strips the aToken protocol prefix to recover the underlying asset symbol.
// Examples: "aWETH" -> "WETH", "aEthwstETH" -> "wstETH", "aEthcbBTC" -> "cbBTC"
function stripATokenPrefix(aTokenSymbol: string): string {
  // Remove leading "a" followed by an optional chain-prefix word (uppercase
  // letter then lowercase letters, e.g. "Eth", "Matic", "Arb", "Opt").
  return aTokenSymbol.replace(/^a(?:[A-Z][a-z]+)?/, "");
}

function getSymbol(
  market: (typeof lendingMarkets)[number],
  addr: string,
): string {
  const reserve = market.reserves.find(
    (r) => r.asset.toLowerCase() === addr.toLowerCase(),
  );
  return reserve ? stripATokenPrefix(reserve.aTokenSymbol) : addr;
}

console.log("# Leveraged lending opportunities\n");

for (const basePair of leverageBasePairs) {
  console.log(
    `## Supply ${basePair.collateralTags.join(" ").toUpperCase()}, borrow ${basePair.borrowSymbol}\n`,
  );

  for (const market of lendingMarkets) {
    if (!market.leverage) continue;
    const chainName = chains[market.chainId]?.name ?? market.chainId;

    for (const pair of market.leverage) {
      const borrowSymbol = getSymbol(market, pair.borrow);
      if (borrowSymbol !== basePair.borrowSymbol) continue;

      const supplySymbol = getSymbol(market, pair.supply);
      console.log(
        `* ${chainName} ${market.operator} ${supplySymbol}-${borrowSymbol}`,
      );
    }
  }

  console.log("");
}

console.log("## Supply yield-bearing stablecoin, borrow stablecoin\n");

for (const pair of leverageStablecoinPairs) {
  for (const market of lendingMarkets) {
    if (!market.leverage) continue;
    const chainName = chains[market.chainId]?.name ?? market.chainId;

    for (const leveragePair of market.leverage) {
      const borrowSymbol = getSymbol(market, leveragePair.borrow);
      const supplySymbol = getSymbol(market, leveragePair.supply);
      if (borrowSymbol !== pair.borrowSymbol) continue;
      if (supplySymbol !== pair.collateralSymbol) continue;

      console.log(
        `* ${chainName} ${market.operator} ${supplySymbol}-${borrowSymbol}`,
      );
    }
  }
}

console.log("");
