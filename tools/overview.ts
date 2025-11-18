import {
  Agent,
  agents,
  assets,
  bridges,
  chains,
  ChainStatus,
  contests,
  deployments,
  getChainsTotals,
  getStrategiesTotals,
  getSupportedChainNames,
  integrations,
  lendingMarkets,
  seeds,
  status,
  strategies,
} from "../src";
import { version } from "../package.json";
import tokenlist from "../src/stability.tokenlist.json";
import { IBuilderAgent, IOperatorAgent } from "../src/agents";

const networkTotal = getChainsTotals();
const strategiesTotal = getStrategiesTotals();
let protocolsTotal = 0;
for (const defiOrgCode of Object.keys(integrations)) {
  protocolsTotal += Object.keys(integrations[defiOrgCode].protocols).length;
}
let multisigsTotal = 0;
for (const chain of Object.keys(chains)) {
  if (chains[chain].multisig) {
    multisigsTotal++;
  }
}

console.log(`## 📦 Stability Integration Library v${version}`);
console.log(``);
console.log(`* 🤖 Agents: ${Object.keys(agents).length}`);
console.log(
  `* #️⃣ Platform deployments: ${Object.keys(deployments).filter((chainId) => chains[chainId].status === ChainStatus.SUPPORTED).length} (${getSupportedChainNames().join(", ")})`,
);
console.log(`* 🏦 Lending markets: ${lendingMarkets.length}`);
console.log(
  `* 📜 Strategies: ${Object.keys(strategies).length}. Live: ${strategiesTotal.LIVE}, ready: ${strategiesTotal.READY}, development: ${strategiesTotal.DEVELOPMENT}, cancelled: ${strategiesTotal.CANCELLED}.`,
);
console.log(
  `* ⛓️ Chains: ${Object.keys(chains).length}. Status: ${networkTotal.SUPPORTED} supported, ${networkTotal.DEVELOPMENT} development. Multisigs: ${multisigsTotal}. Bridges: ${bridges.length}.`,
);
console.log(
  `* 🌐 DeFi organizations: ${Object.keys(integrations).length}. Protocols: ${protocolsTotal}.`,
);
console.log(
  `* 🪙 Assets: ${assets.length}. Tokenlist ${tokenlist.version.major}.${tokenlist.version.minor}.${tokenlist.version.patch}: ${tokenlist.tokens.length} tokens for ${tokenlist.tokens.map((t) => t.chainId).filter((value, index, array) => array.indexOf(value) === index).length} chains.`,
);
console.log(`* 📡 Seed nodes: ${seeds.length}`);
/*console.log(
  `🏆 Contests: ${Object.keys(contests).filter((c) => !contests[c].hidden).length}. Banner images: ${
    Object.keys(contests)
      .filter((c) => !contests[c].hidden)
      .filter((c) => !!contests[c].img).length
  }, quest platform integrations: ${
    Object.keys(contests)
      .filter((c) => !contests[c].hidden)
      .filter((c) => !!contests[c].integration).length
  }.`,
);*/
console.log(``);
const operator = agents[0] as IOperatorAgent;
console.log(`### 🤖 ${operator.name}`);
console.log(``);
console.log(`* Status checks: ${Object.keys(status).length}`);

console.log(``);
const builder = agents[1] as IBuilderAgent;
console.log(`### 🤖 ${builder.name}`);
console.log(``);
console.log(
  `* Conveyors: ${builder.builderData.conveyors.map((c) => `${c.symbol} ${c.name}`).join(", ")}`,
);
console.log(
  `* Pools: ${builder.builderData.pools.map((c) => c.name).join(", ")}`,
);

console.log(``);
