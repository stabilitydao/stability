import {deployments, integrations, IntegrationStatus, networks, strategies, StrategyShortId} from "../src";
import {Table} from "console-table-printer";
import {version} from '../package.json';
import ansis, {red, green, cyan, black, ansi256, hex, bold, rgb} from 'ansis';
import {getIntegrationStatus} from "../src/integrations";

console.log(bold`== Stability Integration Library v${version} ==`)
console.log('')
// @ts-ignore
console.log(bold`=== Deployments: ${Object.keys(deployments).length} ===`)
console.log(`${Object.keys(deployments).map(chainId => `Platform on ${networks[chainId].id} [${chainId}]: ${deployments[chainId].platform}`).join("\n")}`)
console.log('')
// @ts-ignore
console.log(bold`=== Networks: ${Object.keys(networks).length} ===`)
console.log(`${Object.keys(networks).map(n => `${networks[n].id} [${n}]`).join(', ')}`)
console.log('')
// @ts-ignore
console.log(bold`=== Strategies: ${Object.keys(strategies).length} ===`)
for (let strategyShortId in StrategyShortId) {
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

