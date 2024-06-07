import {integrations, networks, strategies, deployments} from "../src";
import {StrategyShortId} from "../src";

console.log('== Stability Integration Pack ==')
console.log('')
console.log(`=== Deployments (${Object.keys(deployments).length}) ===`)
console.log(`${Object.keys(deployments).map(chainId => `Platform on ${networks[chainId].id} [${chainId}]: ${deployments[chainId].platform}`).join("\n")}`)
console.log('')
console.log(`=== Strategies: ${Object.keys(strategies).length} ===`)
for (let strategyShortId in StrategyShortId) {
  // @ts-ignore
  console.log(`[${strategies[strategyShortId].state}] ${strategyShortId} | ${strategies[strategyShortId].id}`)
}
console.log('')
console.log(`=== Networks (${Object.keys(networks).length}) ===`)
console.log(`${Object.keys(networks).map(n => `${networks[n].id} [${n}]`).join(', ')}`)
console.log('')
console.log(`DeFi organizations: ${Object.keys(integrations).length}`)
