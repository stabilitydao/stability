/*
 * Stability Agent is highly abstract and high-level entity that follow role directives.
 * Agents are owned by DAOs built on Stability OS.
 */

export interface IAgent {
  api: string[];
  roles: AgentRole[];
  name: string;
  directives?: string[];
  image?: string;
  telegram?: `@${string}`;
}

export const enum AgentRole {
  OPERATOR = "OPERATOR",
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
