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
  type: string;
  label: ILabel;
  description: string;
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
    title: string;
    issueTemplate?: string;
    body?: string;
    taskList?: string[];
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
    type: "Task",
    label: {
      name: "builder:STRATEGY",
      description:
        "Developing and deploying a new strategy on the **Strategies** conveyor belt.",
      color: "#00d0ff",
    },
    description: "Implement and integrate new strategy contract",
    steps: [
      {
        name: "Prepare library",
        issues: [
          {
            repo: "stabilitydao/stability",
            title:
              "📜 %STRATEGY_SHORT_ID% | %STRATEGY_ID%: strategy architecture",
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
        name: "Implement deploy and strategy smart contract",
        issues: [
          {
            repo: "stabilitydao/stability-contracts",
            title: "📜 [%SHORT_NAME%] | %ID%: implement strategy",
          },
        ],
        /*artifacts: [
          {
            type: ArtifactType.CONTRACT_ADDRESS,
            name: "Strategy implementation",
          },
        ],*/
      },
      {
        name: "Integrate strategy",
        // todo
        issues: [],
        artifacts: [
          {
            type: ArtifactType.LIBRARY_RELEASE_TAG,
            name: "Library where strategy is READY to use and live with all necessary tokens",
          },
        ],
      },
    ],
  },
  {
    name: "Chains",
    type: "Task",
    label: {
      name: "builder:CHAIN",
      description: "",
      color: "#30da71",
    },
    description: "Add chain support",
    steps: [
      {
        name: "Prepare and release library",
        issues: [
          {
            repo: "stabilitydao/stability",
            title: "⛓️ %CHAIN_NAME% [%CHAIN_ID%]: prepare chain",
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
        name: "Prepare and deploy platform contracts",
        issues: [
          {
            repo: "stabilitydao/stability-contracts",
            title: "⛓️ %CHAIN_NAME% [%CHAIN_ID%] deployment",
            generator:
              "🎇 Run `yarn issue` in library repo, fill issue id to `src/chains.ts`.",
          },
        ],
        result: "deployed and verified core and periphery contract addresses",
      },
      {
        name: "Deploy subgraph",
        issues: [
          {
            repo: "stabilitydao/stability-subgraph",
            title: "⛓️ %CHAIN_NAME% [%CHAIN_ID%]: deploy subgraph",
          },
        ],
        result: "subgraph endpoint url",
      },
      {
        name: "Release library with deployment",
        issues: [
          {
            repo: "stabilitydao/stability",
            title: "⛓️ %CHAIN_NAME% [%CHAIN_ID%]: add deployment",
            taskList: ["Add chain to `src/deployments.ts`"],
          },
        ],
        result: "library release tag",
      },
      {
        name: "Backend support",
        issues: [
          {
            repo: "stabilitydao/stability-node-pro",
            title: "⛓️ %CHAIN_NAME% [%CHAIN_ID%]: add chain support",
          },
        ],
        result: "API reply has chain data",
      },
      {
        name: "Frontend support",
        issues: [
          {
            repo: "stabilitydao/stability-ui",
            title: "⛓️ %CHAIN_NAME% [%CHAIN_ID%]: add chain support",
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
  tokenization: "2026",
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
  ],
  workers: [],
  conveyors,
  pools,
};
