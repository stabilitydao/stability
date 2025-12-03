import { daos, getUnitById } from "../src";
import { getTokensNaming } from "../src/os";

describe("testing OS", () => {
  test("getTokensNaming", () => {
    const naming = getTokensNaming("Destiny", "DESTINY");
    expect(naming.tokenSymbol).toBe("DESTINY");
    expect(naming.tokenName).toBe("Destiny");
  });

  test("emptyRuntime", () => {
    expect(getUnitById(daos[0].units[0].unitId)?.name).toBe("VaaS");
  });
});
