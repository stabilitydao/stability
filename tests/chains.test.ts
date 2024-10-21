import {
  ChainName,
  getChainByName,
  getChainsTotals,
  getSupportedChainNames,
} from "../src";

describe("testing chains", () => {
  test("get supported chain names", () => {
    expect(getSupportedChainNames().length).toBeGreaterThan(1);
  });
  test("getChainsTotals", () => {
    const s = getChainsTotals();
    expect(s.SUPPORTED).toBeGreaterThan(1);
  });
  test("getChainByName", () => {
    let s = getChainByName(ChainName.POLYGON);
    expect(s.name).toEqual("Polygon");
    const t = () => {
      s = getChainByName("incorrect" as ChainName);
    };
    expect(t).toThrow(Error);
  });
});
