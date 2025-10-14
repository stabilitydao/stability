import {
  assets,
  deployments,
  getChainsTotals,
  getStrategiesTotals,
  integrations,
  IntegrationStatus,
  chains,
  seeds,
  strategies,
  bridges,
  contests,
  agents,
} from "../src";
import { Table } from "console-table-printer";
import { version } from "../package.json";
import { hex, bold } from "ansis";
import { getIntegrationStatus } from "../src";
import tokenlist from "../src/stability.tokenlist.json";

const networkTotal = getChainsTotals();
const strategiesTotal = getStrategiesTotals();

console.log(bold`== Stability Integration Library v${version} ==`);
console.log("");
// @ts-ignore
console.log(bold`=== Deployments: ${Object.keys(deployments).length} ===`);
console.log(
  `${Object.keys(deployments)
    .map(
      (chainId) =>
        `==== [${chainId}] ${chains[chainId].name} ====\nPlatform: ${deployments[chainId].core.platform}.\nSubgraph: ${deployments[chainId].subgraph}`,
    )
    .join("\n")}`,
);
console.log("");
// @ts-ignore
console.log(bold`=== Strategies: ${Object.keys(strategies).length} ===`);
console.log(
  `Live: ${strategiesTotal.LIVE}, ready: ${strategiesTotal.READY}, development: ${strategiesTotal.DEVELOPMENT}, cancelled: ${strategiesTotal.CANCELLED}.`,
);
for (const strategyShortId of Object.keys(strategies)) {
  // @ts-ignore
  console.log(
    // @ts-ignore
    // @ts-ignore @no-prettier
    hex(strategies[strategyShortId].color).bgHex(
      // @ts-ignore
      strategies[strategyShortId].bgColor,
    )
      // prettier-ignore
      // @ts-ignore
      .bold`[${strategies[strategyShortId].state}] ${strategyShortId} | ${strategies[strategyShortId].id}`,
  );
}
console.log("");
// @ts-ignore
console.log(bold`=== Chains: ${Object.keys(chains).length} ===`);
let multisigsTotal = 0;
for (const chain of Object.keys(chains)) {
  if (chains[chain].multisig) {
    multisigsTotal++;
  }
}
console.log(
  `Supported: ${networkTotal.SUPPORTED} available, ${networkTotal.DEVELOPMENT} development. Multisigs: ${multisigsTotal}.`,
);
console.log(
  `${Object.keys(chains)
    .map((n) => `[${n}] ${chains[n].name}`)
    .join(", ")}`,
);
console.log("");
console.log(`=== Bridges: ${bridges.length} ===`);
console.log(`${bridges.map((b) => `${b.name}`).join(", ")}`);
console.log("");
const table = new Table({
  columns: [
    { name: "Status", alignment: "left" },
    { name: "Name", alignment: "left" },
    { name: "Category", alignment: "left" },
    { name: "Strategies", alignment: "left", maxLen: 30 },
    { name: "Adapters", alignment: "left" },
  ],
});
let protocolsTotal = 0;
for (const defiOrgCode of Object.keys(integrations)) {
  for (const protocolCode of Object.keys(integrations[defiOrgCode].protocols)) {
    const protocol = integrations[defiOrgCode].protocols[protocolCode];
    const status = getIntegrationStatus(protocol);
    let statusColor = "#9a9a9a";
    if (status === IntegrationStatus.LIVE) {
      statusColor = "#00ff00";
    } else if (status === IntegrationStatus.DEVELOPMENT) {
      statusColor = "#6161ff";
    } else if (status === IntegrationStatus.IN_USE) {
      statusColor = "#5dc000";
    } else if (status === IntegrationStatus.AWAITING) {
      statusColor = "#fff200";
    } else if (status === IntegrationStatus.POSSIBLE) {
      statusColor = "#e09c00";
    }

    table.addRow(
      {
        Status: hex(statusColor)`${status}`,
        Name: protocol.name,
        Category: protocol.category,
        // @ts-ignore
        Strategies: protocol.strategies
          ?.map(
            (strategyShortId) =>
              hex(strategies[strategyShortId].color).bgHex(
                strategies[strategyShortId].bgColor,
              ).bold`${strategyShortId}`,
          )
          .join(", "),
        Adapters: protocol.adapters?.join(", "),
      },
      {
        color: "default",
      },
    );
    protocolsTotal++;
  }
}
// @ts-ignore
console.log(bold`=== DeFi protocols: ${protocolsTotal} ===`);
table.printTable();
console.log("");
// @ts-ignore
console.log(bold`=== Assets: ${assets.length}`);
console.log(`${assets.map((a) => `${a.symbol}`).join(", ")}`);
console.log("");
console.log(
  // @ts-ignore
  bold`=== Tokenlist ${tokenlist.version.major}.${tokenlist.version.minor}.${tokenlist.version.patch}: ${tokenlist.tokens.length} tokens for ${tokenlist.tokens.map((t) => t.chainId).filter((value, index, array) => array.indexOf(value) === index).length} chains ===`,
);
console.log(
  `${tokenlist.tokens.map((t) => `[${t.chainId}] ${t.symbol}`).join(", ")}`,
);
console.log("");
console.log(bold`=== Seed nodes: ${"" + seeds.length} ===`);
for (const seedNode of seeds) {
  console.log(seedNode);
}
console.log("");
console.log(
  // @ts-ignore
  bold`=== Contests: ${Object.keys(contests).filter((c) => !contests[c].hidden).length} ===`,
);
for (const contestId of Object.keys(contests).filter(
  (c) => !contests[c].hidden,
)) {
  const contest = contests[contestId];
  const startDateArr = new Date(contest.start * 1000).toUTCString().split(" ");
  const endDateArr = new Date(contest.end * 1000).toUTCString().split(" ");
  const dates = `${startDateArr[1]} ${startDateArr[2]} ${startDateArr[3]} - ${endDateArr[1]} ${endDateArr[2]} ${endDateArr[3]}`;
  console.log(
    // @ts-ignore
    `[${contestId}] ${contest.name}. ${dates}. Rewards: ${Array.isArray(contest.rewards) ? contest.rewards.map((r) => r.type).join(", ") : contest.rewards}.${!!contest.img ? ` Image: ${contest.img}.` : ""}${!!contest.integration ? ` Integration: ${Object.keys(contest.integration)[0]}, ${contest.integration[Object.keys(contest.integration)[0]] || ""}.` : ""}`,
  );
}
console.log(`=== Agents: ${Object.keys(agents).length}`);
console.log("");
