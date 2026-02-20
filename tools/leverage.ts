import { chains, getAsset } from "@daohost/host";
import { lendingMarkets } from "../src/lending";

console.log("# Leveraged lending opportunities\n");

// ---- helpers -------------------------------------------------

const ETH_LST_SUPPLY_HEADER = "## Supply ETH LST, borrow WETH\n";
const BTC_LST_SUPPLY_HEADER = "## Supply BTC LST, borrow WBTC\n";
const STABLE_SUPPLY_HEADER =
  "## Supply yield-bearing stablecoin, borrow stablecoin\n";

const ethBorrowSymbols = new Set(["WETH"]);
const btcBorrowSymbols = new Set(["WBTC"]);
const stableBorrowSymbols = new Set(["USDT", "USDe"]);

// ---- collectors ---------------------------------------------

const ethLstLines: string[] = [];
const btcLstLines: string[] = [];
const stableLines: string[] = [];

// ---- main scan ----------------------------------------------

for (const market of lendingMarkets) {
  if (!market.leverage?.length) continue;

  for (const lev of market.leverage) {
    const supplyAsset = getAsset(market.chainId, lev.supply);
    const borrowAsset = getAsset(market.chainId, lev.borrow);

    if (!supplyAsset || !borrowAsset) continue;

    const line = `* ${chains[market.chainId].name} ${market.operator} ${supplyAsset.symbol}-${borrowAsset.symbol}`;

    // ETH LST → WETH
    if (ethBorrowSymbols.has(borrowAsset.symbol)) {
      ethLstLines.push(line);
      continue;
    }

    // BTC LST → WBTC
    if (btcBorrowSymbols.has(borrowAsset.symbol)) {
      btcLstLines.push(line);
      continue;
    }

    // Yield-bearing stable → stable
    if (stableBorrowSymbols.has(borrowAsset.symbol)) {
      stableLines.push(line);
    }
  }
}

// ---- output (order preserved) -------------------------------

console.log(ETH_LST_SUPPLY_HEADER);
ethLstLines.forEach((l) => console.log(l));
console.log("");

console.log(BTC_LST_SUPPLY_HEADER);
btcLstLines.forEach((l) => console.log(l));
console.log("");

console.log(STABLE_SUPPLY_HEADER);
stableLines.forEach((l) => console.log(l));
console.log("");
