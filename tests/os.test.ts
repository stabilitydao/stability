import { daos, getUnitById } from "../src";

describe("testing OS", () => {
  test("emptyRuntime", () => {
    expect(getUnitById(daos[0].units[0].unitId)?.name).toBe("VaaS");
  });
});
