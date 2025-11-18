import { stabilityBuilderData } from "./builder";

/*
 * Stability agent is highly abstract and high-level entity that follow role directives.
 * Live agent is tokenized and managed by DAO
 */

export const enum AgentRole {
  OPERATOR = "OPERATOR",
  BUILDER = "BUILDER",
}

export const enum AgentTokenizationState {
  LIVE = "LIVE",
  UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION",
  INITIAL_FUNDING = "INITIAL_FUNDING",
}

export interface IAgentBase {
  roles: AgentRole[];
  tokenization: {
    state: AgentTokenizationState;
    eta?: string;
    tokenSymbol: string;
    xSymbol: string;
    daoSymbol: string;
  };
  name: string;
  directives?: string[];
  image?: string;
  telegram?: `@${string}`;
}

export interface IAgentRuntime {
  machineIDs: string[];
  providers: {
    name: string;
    image: string;
    queries: number;
  }[];
}

export const emptyRuntime: IAgentRuntime = {
  machineIDs: [],
  providers: [],
};

export interface IOperatorAgent extends IAgentBase, IAgentRuntime {
  api: string[];
}

export interface IOperatorData {
  units: Unit[];
}

export interface Unit {
  name: string;
  share: number;
}

export interface IBuilderAgent extends IAgentBase, IAgentRuntime {
  builderData: IBuilderData;
}

export interface IBuilderData {
  repo: string[];
  burnRate: {
    period: string;
    usdAmount: number;
  }[];
  workers: string[];
  conveyors: IConveyor[];
  pools: IPool[];
}

export interface IPool {
  name: string;
  label: ILabel;
  productTypes?: string[];
  artifacts?: IArtifact[];
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

export interface ILabel {
  name: string;
  description: string;
  color: string;
}

export interface IGithubUser {
  username: string;
  img: string;
}

export interface IIssue {
  repo: string;
  id: number;
  title: string;
  labels: ILabel[];
  assignees: IGithubUser;
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

export type Agent = IOperatorAgent | IBuilderAgent;

export const agents: Agent[] = [
  {
    roles: [AgentRole.OPERATOR],
    name: "Stability Operator",
    tokenization: {
      state: AgentTokenizationState.LIVE,
      tokenSymbol: "STBL",
      xSymbol: "xSTBL",
      daoSymbol: "STBL_DAO",
    },
    telegram: "@stability_dao_bot",
    image: "OPERATOR.png",
    ...emptyRuntime,
    api: ["https://api.stability.farm", "https://api.stabilitydao.org"],
  },
  {
    roles: [AgentRole.BUILDER],
    name: "Stability Builder",
    tokenization: {
      eta: "2026",
      state: AgentTokenizationState.UNDER_CONSTRUCTION,
      tokenSymbol: "BUILDER",
      xSymbol: "xBUILDER",
      daoSymbol: "BUILDER_DAO",
    },
    image: "BUILDER.png",
    ...emptyRuntime,
    builderData: stabilityBuilderData,
  },
  {
    roles: [AgentRole.OPERATOR, AgentRole.BUILDER],
    name: "MEV Fighter",
    tokenization: {
      state: AgentTokenizationState.INITIAL_FUNDING,
      tokenSymbol: "MEVBOT",
      xSymbol: "xMEVBOT",
      daoSymbol: "MEVBOTDAO",
    },
    ...emptyRuntime,
    api: [],
  },
];

export const getAgents = (role: AgentRole): Agent[] =>
  agents.filter((a) => a.roles.includes(role));
