import {
  assets,
  deployments,
  getNetworksTotals,
  integrations,
  IntegrationStatus,
  networks,
  strategies,
  subgraphs
} from "../src";
import {Table} from "console-table-printer";
import {version} from '../package.json';
import {hex, bold} from 'ansis';
import {getIntegrationStatus} from "../src";
import tokenlist from '../src/stability.tokenlist.json'

const networkTotal = getNetworksTotals()

console.log(bold`== Stability Integration Library v${version} ==`)
console.log('')
// @ts-ignore
console.log(bold`=== Deployments: ${Object.keys(deployments).length} ===`)
console.log(`${Object.keys(deployments).map(chainId => `Platform on ${networks[chainId].id} [${chainId}]: ${deployments[chainId].platform}`).join("\n")}`)
console.log('')
// @ts-ignore
console.log(bold`=== Networks: ${Object.keys(networks).length} ===`)
console.log(`Chain libraries: ${networkTotal.CHAINLIB_DONE + networkTotal.SUPPORTED} available, ${networkTotal.CHAINLIB_DEVELOPMENT} development, ${networkTotal.CHAINLIB_AWAITING} awaiting.`)
console.log(`${Object.keys(networks).map(n => `[${n}] ${networks[n].id}`).join(', ')}`)
console.log('')
// @ts-ignore
console.log(bold`=== Tokenlist ${tokenlist.version.major}.${tokenlist.version.minor}.${tokenlist.version.patch}: ${tokenlist.tokens.length} tokens for ${tokenlist.tokens.map(t => t.chainId).filter((value, index, array) => array.indexOf(value) === index).length} networks ===`)
console.log(`${tokenlist.tokens.map(t => `[${t.chainId}] ${t.symbol}`).join(', ')}`)
console.log('')
// @ts-ignore
console.log(bold`=== Assets: ${assets.length}`)
console.log(`${assets.map(a => `${a.symbol}`).join(', ')}`)
console.log('')
// @ts-ignore
console.log(bold`=== Subgraph endpoints: ${Object.keys(subgraphs).length} ===`)
console.log(`${Object.keys(subgraphs).map(chainId => `[${chainId}] ${subgraphs[chainId]}`).join("\n")}`)
console.log('')
// @ts-ignore
console.log(bold`=== Strategies: ${Object.keys(strategies).length} ===`)
for (const strategyShortId of Object.keys(strategies)) {
  // @ts-ignore
  console.log(hex(strategies[strategyShortId].color).bgHex(strategies[strategyShortId].bgColor).bold`[${strategies[strategyShortId].state}] ${strategyShortId} | ${strategies[strategyShortId].id}`)
}
console.log('')

const table = new Table({
  columns: [
    { name: "Status", alignment: "left"},
    { name: "Name", alignment: "left"},
    { name: "Category", alignment: "left"},
    { name: "Strategies", alignment: "left", maxLen: 30,},
    { name: "Adapters", alignment: "left"},
  ],
});
let protocolsTotal = 0
for (const defiOrgCode of Object.keys(integrations)) {
  for (const protocolCode of Object.keys(integrations[defiOrgCode].protocols)) {
    const protocol = integrations[defiOrgCode].protocols[protocolCode]
    const status = getIntegrationStatus(protocol)
    let statusColor = "#9a9a9a"
    if (status === IntegrationStatus.LIVE) {
      statusColor = "#00ff00"
    } else if (status === IntegrationStatus.DEVELOPMENT) {
      statusColor = "#6161ff"
    } else if (status === IntegrationStatus.IN_USE) {
      statusColor = "#5dc000"
    } else if (status === IntegrationStatus.AWAITING) {
      statusColor = "#fff200"
    } else if (status === IntegrationStatus.POSSIBLE) {
      statusColor = "#e09c00"
    }

    table.addRow({
      Status: hex(statusColor)`${status}`,
      Name: protocol.name,
      Category: protocol.category,
      // @ts-ignore
      Strategies: protocol.strategies?.map(strategyShortId => hex(strategies[strategyShortId].color).bgHex(strategies[strategyShortId].bgColor).bold`${strategyShortId}`).join(', '),
      Adapters: protocol.adapters?.join(', '),
    }, {
      color: "default",
    })
    protocolsTotal++
  }
}
// @ts-ignore
console.log(bold`=== DeFi protocols: ${protocolsTotal} ===`)
table.printTable();
console.log('')
