import { Agent, AgentRole, getAgents } from "../src";

describe("testing agents", () => {
  test("getAgent", () => {
    const operators: Agent[] = getAgents(AgentRole.OPERATOR);
    const builders: Agent[] = getAgents(AgentRole.BUILDER);
    expect(operators.length).toBeGreaterThan(1);
    expect(builders.length).toBeGreaterThan(1);
    expect(operators[0].tokenization.daoSymbol).toEqual("STBL_DAO");
  });
});
