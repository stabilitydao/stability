import {
  assets,
  deployments,
  getNetworksTotals,
  getStrategiesTotals,
  getSupportedNetworkIds,
  integrations,
  networks, seeds,
  strategies
} from "../src";
import {version} from '../package.json';
import tokenlist from '../src/stability.tokenlist.json'

const networkTotal = getNetworksTotals()
const strategiesTotal = getStrategiesTotals()

console.log(`## Stability Integration Library v${version}`)
console.log(``)
console.log(`Deployments: ${Object.keys(deployments).length} (${getSupportedNetworkIds().join(', ')})`)
console.log(`Strategies: ${Object.keys(strategies).length}. Live: ${strategiesTotal.LIVE}, deploying: ${strategiesTotal.DEPLOYMENT}, development: ${strategiesTotal.DEVELOPMENT}, awaiting: ${strategiesTotal.AWAITING}, blocked: ${strategiesTotal.BLOCKED}, possible: ${strategiesTotal.POSSIBLE}, proposal: ${strategiesTotal.PROPOSAL}.`)
console.log(`Chains: ${Object.keys(networks).length}. ChainLib: ${networkTotal.CHAINLIB_DONE + networkTotal.SUPPORTED} available, ${networkTotal.CHAINLIB_DEVELOPMENT} development, ${networkTotal.CHAINLIB_AWAITING} awaiting.`)
console.log(`Assets: ${assets.length}`)
console.log(`Tokenlist ${tokenlist.version.major}.${tokenlist.version.minor}.${tokenlist.version.patch}: ${tokenlist.tokens.length} tokens for ${tokenlist.tokens.map(t => t.chainId).filter((value, index, array) => array.indexOf(value) === index).length} networks.`)
let protocolsTotal = 0
for (const defiOrgCode of Object.keys(integrations)) {
  protocolsTotal += Object.keys(integrations[defiOrgCode].protocols).length
}
console.log(`DeFi protocols: ${protocolsTotal}`)
console.log(`Seed nodes: ${seeds.length}`)
console.log(``)
