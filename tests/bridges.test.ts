import { bridges, ChainName, getChainBridges } from "../src";

describe("testing bridges", () => {
  test("getBridges", () => {
    expect(getChainBridges(ChainName.ROOTSTOCK).length).toBeGreaterThan(0);
    expect(bridges.length).toBeGreaterThan(0);
  });
});
