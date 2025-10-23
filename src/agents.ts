import { builder, IBuilderAgent } from "./builder";

export const enum AgentId {
  OPERATOR = "OPERATOR",
  BUILDER = "BUILDER",
  YIELD_TRACKER = "YIELD_TRACKER",
  TRADER = "TRADER",
}

export interface IAgentBase {
  id: AgentId;
  status: AgentStatus;
  name: string;
  tokenization?: string | boolean;
  directives?: string[];
  token?: `0x${string}`[];
  eoa?: `0x${string}`[];
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

export interface IYieldTrackerAgent extends IAgentBase, IAgentRuntime {
  chainIDs: string[];
}

export interface ITraderAgent extends IAgentBase, IAgentRuntime {
  asset: string[];
}

export type Agent =
  | IOperatorAgent
  | IBuilderAgent
  | ITraderAgent
  | IYieldTrackerAgent;

export const enum AgentStatus {
  PROPOSAL = "PROPOSAL",
  INITIAL_FUNDING = "INITIAL_FUNDING",
  UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION",
  LIVE = "LIVE",
}

export const agents: Agent[] = [
  {
    id: AgentId.OPERATOR,
    status: AgentStatus.UNDER_CONSTRUCTION,
    name: "Stability Operator",
    tokenization: "2026",
    telegram: "@stability_dao_bot",
    ...emptyRuntime,
    api: ["https://api.stability.farm", "https://api.stabilitydao.org"],
  },
  builder,
  {
    id: AgentId.YIELD_TRACKER,
    status: AgentStatus.INITIAL_FUNDING,
    name: "Yield Tracker",
    ...emptyRuntime,
    chainIDs: ["146"],
  },
  {
    id: AgentId.TRADER,
    status: AgentStatus.INITIAL_FUNDING,
    name: "ETH trader",
    ...emptyRuntime,
    asset: ["ETH"],
  },
];

export const getAgent = (agentId: AgentId): Agent =>
  agents.filter((a) => a.id === agentId)[0];
