import { ArtifactType, IBuilderActivity, UnitComponentCategory } from "./os";

export const stabilityBuilderData: IBuilderActivity = {
  multisig: [
    "matic:0x36780E69D38c8b175761c6C5F8eD42E61ee490E9",
    "sonic:0xF564EBaC1182578398E94868bea1AbA6ba339652",
    "avax:0x06111E02BEb85B57caebEf15F5f90Bc82D54da3A",
  ],
  repo: [
    "stabilitydao/stability",
    "stabilitydao/stability-contracts",
    "stabilitydao/stability-ui",
    "stabilitydao/stability-subgraph",
    "stabilitydao/lending-deploy",
    "stabilitydao/builder",
    "stabilitydao/stability-node-pro",
  ],
  burnRate: [
    {
      period: "Sep, 2025",
      usdAmount: 32200,
    },
    {
      period: "Oct, 2025",
      usdAmount: 31100,
    },
  ],
  workers: ["a17", "omriss"],
  conveyors: [
    {
      unitId: "stability:stabilityFarm",
      componentCategory: UnitComponentCategory.DEFI_STRATEGY,
      name: "Strategies",
      symbol: "📜",
      type: "Task",
      label: {
        name: "conveyor:STRATEGY",
        description:
          "Developing and deploying a new DeFi asset management strategy on the **Strategies** conveyor belt.",
        color: "#cc02ff",
      },
      issueTitleTemplate: "📜 %STRATEGY_SHORT_ID% | %STRATEGY_ID%: %STEP_NAME%",
      taskIdIs: "%STRATEGY_SHORT_ID%",
      description: "Implement and integrate new strategy smart contract",
      steps: [
        {
          name: "Prepare",
          issues: [
            {
              repo: "stabilitydao/stability",
              issueTemplate: "strategy.md",
            },
          ],
          artifacts: [ArtifactType.LIBRARY_RELEASE_TAG],
        },
        {
          name: "Contract",
          issues: [
            {
              repo: "stabilitydao/stability-contracts",
              generator: "yarn issue",
            },
          ],
          artifacts: [ArtifactType.CONTRACT_ADDRESS],
        },
        {
          name: "Integrate",
          issues: [
            {
              repo: "stabilitydao/stability",
              taskList: [
                "Setup platform in chains",
                "Add farms / strategy init params",
                "Deploy vaults",
                "Do post setup (toggleDistributorOperator, etc)",
                "Add all necessary tokens to `src/stability.tokenlist.json`, `src/assets.ts`",
                "Set status READY to strategy in `src/strategies.ts`",
              ],
            },
          ],
          artifacts: [ArtifactType.LIBRARY_RELEASE_TAG],
        },
        {
          name: "Backend",
          issues: [
            {
              repo: "stabilitydao/stability-node-pro",
              taskList: ["Update library"],
            },
          ],
        },
        {
          name: "Frontend",
          issues: [
            {
              repo: "stabilitydao/stability-ui",
              taskList: [
                "Update library",
                "Generate and fill new vault OG images",
              ],
            },
          ],
        },
      ],
    },
    {
      unitId: "stability:stabilityFarm",
      componentCategory: UnitComponentCategory.CHAIN_SUPPORT,
      name: "Chains",
      symbol: "⛓️",
      type: "Task",
      label: {
        name: "conveyor:CHAIN",
        description: "Chain integration by Chains conveyor",
        color: "#b1dc13",
      },
      issueTitleTemplate: "⛓️ %CHAIN_NAME% [%CHAIN_ID%]: %STEP_NAME%",
      taskIdIs: "%CHAIN_NAME%",
      description: "Add chain support",
      steps: [
        {
          name: "Prepare",
          issues: [
            {
              repo: "stabilitydao/stability",
              taskList: [
                "Add chain image to static repo",
                "add new chain to `src/chains.ts` with status `ChainStatus.DEVELOPMENT`",
                "fill multisig",
                "fill assets",
                "fill integrations",
              ],
            },
          ],
          artifacts: [ArtifactType.LIBRARY_RELEASE_TAG],
        },
        {
          name: "Contracts",
          issues: [
            {
              repo: "stabilitydao/stability-contracts",
              generator:
                "🎇 Run `yarn issue` in library repo, fill issue id to `src/chains.ts`.",
            },
          ],
          artifacts: [ArtifactType.CONTRACT_ADDRESS],
        },
        {
          name: "Subgraph",
          issues: [
            {
              repo: "stabilitydao/stability-subgraph",
              taskList: ["add chain support", "deploy subgraph"],
            },
          ],
          result: "subgraph endpoint url",
        },
        {
          name: "Deployment",
          issues: [
            {
              repo: "stabilitydao/stability",
              taskList: ["Add chain to `src/deployments.ts`"],
            },
          ],
          artifacts: [ArtifactType.LIBRARY_RELEASE_TAG],
        },
        {
          name: "Backend",
          issues: [
            {
              repo: "stabilitydao/stability-node-pro",
              taskList: ["Show chain in API", "Setup TxSender"],
            },
          ],
          result: "API reply has chain data",
        },
        {
          name: "Frontend",
          issues: [
            {
              repo: "stabilitydao/stability-ui",
              taskList: [
                "add chain support to dapp",
                "show chain in vaults filter",
              ],
            },
          ],
          result: "beta UI show chain",
        },
      ],
    },
  ],
  pools: [
    {
      unitIds: ["stability:stabilityFarm", "stability:stabilityMarket"],
      name: "Products",
      label: {
        name: "builder:PRODUCT",
        description: "New product request",
        color: "#02a3fc",
      },
      productTypes: ["CVault", "MetaVault", "Lending market"],
      artifacts: [ArtifactType.URL_UI],
    },
    {
      unitIds: ["stability:stabilityFarm", "stability:stabilityMarket"],
      name: "Features",
      label: {
        name: "builder:FEAT",
        description: "",
        color: "#3b15d2",
      },
    },
    {
      unitIds: ["stability:stabilityFarm", "stability:stabilityMarket"],
      name: "Maintenance",
      label: {
        name: "builder:MAINTENANCE",
        description: "",
        color: "#da7130",
      },
    },
    {
      unitIds: ["os"],
      name: "Stability OS",
      label: {
        name: "builder:OS",
        description: "",
        color: "#00b243",
      },
    },
  ],
};
