import {integrations, networks, strategies, deployments, subgraphs} from "../src";
import {version} from '../package.json';
import tokenlist from '../src/stability.tokenlist.json'

console.log(`== Stability Integration Library v${version} ==`)
console.log(`Deployments: ${Object.keys(deployments).length}`)
console.log(`Networks: ${Object.keys(networks).length}`)
console.log(`Tokenlist ${tokenlist.version.major}.${tokenlist.version.minor}.${tokenlist.version.patch}: ${tokenlist.tokens.length} tokens for ${tokenlist.tokens.map(t => t.chainId).filter((value, index, array) => array.indexOf(value) === index).length} networks.`)
console.log(`Subgraph endpoints: ${Object.keys(subgraphs).length}`)
console.log(`Strategies: ${Object.keys(strategies).length}`)
let protocolsTotal = 0
for (const defiOrgCode of Object.keys(integrations)) {
  protocolsTotal += Object.keys(integrations[defiOrgCode].protocols).length
}
console.log(`DeFi protocols: ${protocolsTotal}`)
