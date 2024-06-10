import {integrations, networks, strategies, deployments} from "../src";
import {version} from '../package.json';

console.log(`== Stability Integration Library v${version} ==`)
console.log(`Deployments: ${Object.keys(deployments).length}`)
console.log(`Strategies: ${Object.keys(strategies).length}`)
console.log(`Networks: ${Object.keys(networks).length}`)
let protocolsTotal = 0
for (const defiOrgCode of Object.keys(integrations)) {
  protocolsTotal += Object.keys(integrations[defiOrgCode].protocols).length
}
console.log(`DeFi protocols: ${protocolsTotal}`)
