import {
  assets,
  chains,
  integrations,
  lendingMarkets,
  seeds,
  strategies,
  daos,
  getChainByName,
  ChainName,
  StrategyShortId,
  StrategyState,
} from "../src";
import { version } from "../package.json";
import tokenlist from "../src/stability.tokenlist.json";

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

console.log(`## 📦 Stability Operation System Library v${version}`);

console.log(
  `
### DAOs

${daos
  .map((dao) => {
    const activities = `  * Activities: ${dao.activity.join(", ")}\n`;
    const tokenization = `  * Tokenization: ${dao.tokenization.state}. Tokens: ${dao.tokenization.tokenSymbol}, ${dao.tokenization.xSymbol}, ${dao.tokenization.daoSymbol}.\n`;
    const daoUnits = dao.units
      .map((unit) => {
        const uis = !!unit.ui?.length
          ? `\n    * UI: ${unit.ui.map((ui) => `[${ui.title}](${ui.href})`).join(", ")}`
          : "";
        const unitStr = `  * Unit **${unit.name}**${uis}`;
        const defiStrategies = !!unit.components.DEFI_STRATEGY?.length
          ? `\n    * DeFi Strategies: ${unit.components.DEFI_STRATEGY.length}. Being developed: ${Object.keys(
              strategies,
            )
              .filter(
                (shortId) =>
                  strategies[shortId as StrategyShortId].state ===
                  StrategyState.DEVELOPMENT,
              )
              .join(", ")}.`
          : "";
        const lendingEngines = !!unit.components.ENGINE_SUPPORT?.length
          ? `\n    * Engines: ${unit.components.ENGINE_SUPPORT.join(", ")}.`
          : "";
        const chains = !!unit.components.CHAIN_SUPPORT?.length
          ? `\n    * Chains: ${unit.components.CHAIN_SUPPORT.map((chainName) => getChainByName(chainName as ChainName).name).join(", ")}`
          : "";

        return `${unitStr} ${defiStrategies}${lendingEngines}${chains}`;
      })
      .join("\n");
    const builderPools = !!dao.builderActivity?.pools.length
      ? `\n    * Pools: ` +
        dao.builderActivity.pools
          .map(
            (pool) =>
              `${pool.unitIds.map((unitId) => daos.filter((d) => d.units.map((u) => u.unitId).includes(unitId))[0].tokenization.tokenSymbol)[0]} ${pool.name}`,
          )
          .join(", ")
      : "";
    const builderConveyors = !!dao.builderActivity?.conveyors.length
      ? `\n    * Conveyors: ` +
        dao.builderActivity.conveyors
          .map((conveyor) => conveyor.name)
          .join(", ")
      : "";
    const builderActivity = !!dao.builderActivity
      ? `\n  * BUILDER repos: ${dao.builderActivity?.repo.length}${builderPools}${builderConveyors}`
      : "";
    return `* **${dao.name}**\n${activities}${tokenization}${daoUnits}${builderActivity}`;
  })
  .join("\n")}  
`,
);

console.log(`### Knowledge`);
console.log(``);
console.log(`* ⛓️ Chains: ${Object.keys(chains).length}`);
console.log(
  `* 🪙 Assets: ${assets.length}. Tokenlist ${tokenlist.version.major}.${tokenlist.version.minor}.${tokenlist.version.patch}: ${tokenlist.tokens.length} tokens for ${tokenlist.tokens.map((t) => t.chainId).filter((value, index, array) => array.indexOf(value) === index).length} chains.`,
);
console.log(
  `* 🌐 DeFi protocols: ${protocolsTotal}. Organizations: ${Object.keys(integrations).length}.`,
);

console.log(`* 🏦 Money markets: ${lendingMarkets.length}`);
//console.log(`* 📡 Memory endpoints: ${seeds.join(', ')}`);
console.log(``);
