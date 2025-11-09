import {
  Agent,
  AgentId,
  AgentStatus,
  emptyRuntime,
  IAgentBase,
  IAgentRuntime,
} from "./agents";

export interface ILabel {
  name: string;
  description: string;
  color: string;
}

export interface IBuilderAgent extends IAgentBase, IAgentRuntime {
  repo: string[];
  burnRate: {
    period: string;
    usdAmount: number;
  }[];
  workers: string[];
  conveyors: IConveyor[];
  pools: IPool[];
}

export interface IConveyor {
  name: string;
  symbol: string;
  type: string;
  label: ILabel;
  description: string;
  issueTitleTemplate: string;
  taskIdIs: string;
  steps: IConveyorStep[];
}

export const enum ProductType {
  CVAULT = "CVault",
  METAVAULT = "MetaVault",
  LENDING_MARKET = "Lending market",
  IMAGE = "Image",
}

export interface IPool {
  name: string;
  label: ILabel;
  productTypes?: ProductType[];
  artifacts?: IArtifact[];
}

export const enum ArtifactType {
  LIBRARY_RELEASE_TAG = "Library release tag",
  DEPLOYMENT_ADDRESSES = "Deployment addresses",
  URL_UI = "URL to UI page",
  URL_API = "API endpoint",
  URL_STATIC = "Static content URL",
  CONTRACT_ADDRESS = "Address of deployed contract",
}

export interface IArtifact {
  type: ArtifactType;
  name?: string;
  value?: any;
}

export interface IConveyorStep {
  name: string;
  issues: {
    repo: string;
    taskList?: string[];
    issueTemplate?: string;
    body?: string;
    generator?: string;
  }[];
  artifacts?: IArtifact[];
  result?: string;
  guide?: string;
}

export interface IWorker {
  username: string;
  img: string;
}

export interface IIssue {
  repo: string;
  id: number;
  title: string;
  labels: ILabel[];
  assignees: IWorker;
  body?: string;
}

export interface IBuilderMemory {
  openIssues: {
    total: { [repo: string]: number };
    pools: { [poolName: string]: IIssue[] };
  };
  conveyors: {
    [conveyorName: string]: {
      [taskId: string]: {
        [stepName: string]: IIssue[];
      };
    };
  };
}

export const pools: IPool[] = [
  {
    name: "Products",
    label: {
      name: "builder:PRODUCT",
      description: "New product request",
      color: "#00ff62",
    },
    productTypes: [
      ProductType.CVAULT,
      ProductType.METAVAULT,
      ProductType.LENDING_MARKET,
    ],
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
    productTypes: [ProductType.IMAGE],
    artifacts: [
      {
        type: ArtifactType.URL_STATIC,
      },
    ],
  },
];

export const conveyors: IConveyor[] = [
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
];

export const builder: Agent = {
  id: AgentId.BUILDER,
  status: AgentStatus.UNDER_CONSTRUCTION,
  name: "Stability Builder",
  tokenization: "Q1 2026",
  image: "BUILDER.png",
  ...emptyRuntime,
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
  conveyors,
  pools,
};
