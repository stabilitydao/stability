import {
  assets,
  baseStrategyContracts,
  ChainName,
  chains,
  ChainStatus,
  getStrategyProtocols,
  integrations,
  strategies,
  StrategyShortId,
  StrategyState,
  strategyStateDescription,
} from "../src";

console.log("== Issue generator ==");
console.log("");

// strategy issue for stability-contracts repo
for (const shortId of Object.keys(strategies)) {
  const strategy = strategies[shortId as StrategyShortId];
  if (strategy.contractGithubId === "is-being-created") {
    console.log(
      `------------------ Need to create or update issue for strategy ${strategy.shortId}`,
    );
    console.log(`Title: 📜 [${StrategyState.AWAITING}] ${strategy.id}`);
    console.log(`# ${strategy.shortId} | ${strategy.id}`);
    console.log("");
    console.log("<div>");
    const protocolsChains: ChainName[][] = [];
    const protocols = getStrategyProtocols(shortId as StrategyShortId);
    for (const protocol of protocols) {
      const org = integrations[protocol.organization as string];
      protocolsChains.push(protocol.chains);
      const img = `https://raw.githubusercontent.com/stabilitydao/.github/main/assets/${protocol.img || org.img}`;
      console.log(
        `<a href="${org.website}" target="_blank"><img src="${img}" width="80px" height="80px" alt="${protocol.name}"></a>`,
      );
    }
    console.log("</div>");
    console.log("");
    console.log(`## Status: ${StrategyState.AWAITING}`);
    console.log(``);
    console.log(`*${strategyStateDescription[StrategyState.AWAITING]}*`);
    console.log("");
    console.log(`## Chains`);
    console.log("");
    const showed: ChainName[] = [];
    for (let i = 0; i < protocolsChains.length; i++) {
      const curChains = protocolsChains[i];
      for (const chainName of curChains) {
        let good = true;
        for (let k = 0; k < protocolsChains.length; k++) {
          const otherChains = protocolsChains[k];
          if (!otherChains.includes(chainName)) {
            good = false;
            break;
          }
        }
        if (good === true && !showed.includes(chainName)) {
          console.log(`* ${chainName}`);
          showed.push(chainName);
        }
      }
    }
    console.log("");
    console.log(`## Description`);
    console.log("");
    console.log(`**${strategy.description}**`);
    console.log("");
    console.log(`## Base contracts`);
    console.log("");
    if (strategy.baseStrategies.length > 0) {
      for (const baseStrategy of strategy.baseStrategies) {
        console.log(`* \`${baseStrategyContracts[baseStrategy]}\``);
      }
    } else {
      console.log("None or can be implemented");
    }
    console.log("");
    console.log(`## Adapters`);
    console.log("");
    if (strategy.ammAdapter) {
      console.log(`* \`AmmAdapterIdLib.${strategy.ammAdapter.toUpperCase()}\``);
    } else {
      console.log("Not used");
    }

    console.log("");
    console.log("-----------------------------------------------");
  }
}

// assets issue for stability repo
for (const chainId in chains) {
  const chain = chains[chainId];
  const chainAssets = assets.filter((asset) =>
    Object.keys(asset.addresses).includes(chainId),
  );
  if (chainAssets.length === 0 && chain.status !== ChainStatus.NOT_SUPPORTED) {
    const img = `https://raw.githubusercontent.com/stabilitydao/.github/main/chains/${chain.img}`;

    console.log(`------------------ Assets issue for ${chain.name}`);

    console.log(
      `Title: 🪙 Add blue chip assets for ${chain.name} [${chainId}]`,
    );
    console.log(`
Need to add blue chip assets for the ${chain.name} blockchain to this integration library.

<div>
<img align="right" src="${img}" width="80px" height="80px" />
</div>

We usually consider the following as such assets: 

* top stables: USDC, USDT, DAI
* wrapped native coin 
* top crypto: bridged WBTC and WETH of available

## Task list

* [ ] add assets to \`stability.tokenlist.json\`
* [ ] add addresses and info (if necessary) to \`assets.ts\`
    `);
    console.log("-----------------------------------------------");
  }
}
