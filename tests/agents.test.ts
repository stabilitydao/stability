import { Agent, AgentId, agents, getAgent } from "../src";

describe("testing agents", () => {
  test("getAgent", () => {
    const agent: Agent = getAgent(AgentId.OPERATOR);
    expect(agent.id).toEqual(AgentId.OPERATOR);
    expect(agents[0].id).toEqual(AgentId.OPERATOR);
  });
});
