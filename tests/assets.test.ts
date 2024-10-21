import { getAsset } from "../src";

describe("testing assets", () => {
  test("getAsset", () => {
    expect(
      getAsset("137", "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619")?.symbol,
    ).toBe("WETH");
    expect(
      getAsset("555", "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619")?.symbol,
    ).toBe(undefined);
    expect(
      getAsset("8453", "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913")?.symbol,
    ).toBe("USDC");
  });
});
