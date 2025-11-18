import { ArtifactType, IBuilderData } from "./agents";

export const stabilityBuilderData: IBuilderData = {
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
  workers: [],
  conveyors: [
    {
      name: "Strategies",
      symbol: "📜",
      type: "Task",
      label: {
        name: "conveyor:STRATEGY",
        description:
          "Developing and deploying a new strategy on the **Strategies** conveyor belt.",
        color: "#00d0ff",
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
          artifacts: [
            {
              type: ArtifactType.LIBRARY_RELEASE_TAG,
              name: "Library with prepared strategy architecture",
            },
          ],
        },
        {
          name: "Contract",
          issues: [
            {
              repo: "stabilitydao/stability-contracts",
              generator: "yarn issue",
            },
          ],
          artifacts: [
            {
              type: ArtifactType.CONTRACT_ADDRESS,
              name: "Strategy implementations in chains",
            },
          ],
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
          artifacts: [
            {
              type: ArtifactType.LIBRARY_RELEASE_TAG,
            },
          ],
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
      name: "Chains",
      symbol: "⛓️",
      type: "Task",
      label: {
        name: "conveyor:CHAIN",
        description: "Chain integration by Chains conveyor",
        color: "#30da71",
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
          artifacts: [
            {
              type: ArtifactType.LIBRARY_RELEASE_TAG,
              name: "Library with prepared chain data",
            },
          ],
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
          result: "deployed and verified core and periphery contract addresses",
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
          result: "library release tag",
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
      name: "Products",
      label: {
        name: "builder:PRODUCT",
        description: "New product request",
        color: "#00ff62",
      },
      productTypes: ["CVault", "MetaVault", "Lending market"],
      artifacts: [
        {
          type: ArtifactType.URL_UI,
        },
      ],
    },
    {
      name: "Features",
      label: {
        name: "builder:FEAT",
        description: "",
        color: "#30da71",
      },
    },
    {
      name: "Maintenance",
      label: {
        name: "builder:MAINTENANCE",
        description: "",
        color: "#30da71",
      },
    },
    {
      name: "Content",
      label: {
        name: "builder:CONTENT",
        description: "",
        color: "#30da71",
      },
      productTypes: ["Image"],
      artifacts: [
        {
          type: ArtifactType.URL_STATIC,
        },
      ],
    },
  ],
};
