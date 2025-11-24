import { emptyRuntime } from "../src/agents";

describe("testing agents", () => {
  test("emptyRuntime", () => {
    expect(emptyRuntime.machineIDs.length).toBe(0);
  });
});
