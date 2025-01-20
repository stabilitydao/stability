import {
  ChainName,
  chains,
  strategies,
  deployments,
  integrations,
  StrategyShortId,
  tokenlist,
  almFactories,
  assets,
  strategyStateDescription,
  StrategyState,
  seeds,
  ChainStatus,
  InteractionType,
  chainStatusInfo, assetOracles, vaultOracles
} from "../src";

describe("index", () => {
  test("deployments", () => {
    expect(deployments["137"].core.platform).toBe(
      "0xb2a0737ef27b5Cc474D24c779af612159b1c3e60",
    );
  });
  test("chains", () => {
    expect(chains["1"].name).toBe(ChainName.ETHEREUM);
    expect(ChainStatus.NOT_SUPPORTED.toLowerCase()).toContain("not");
    expect(chainStatusInfo[ChainStatus.SUPPORTED].title.length).toBeGreaterThan(
      0,
    );
  });
  test("strategies", () => {
    expect(strategies[StrategyShortId.CCF].id).toBe("Curve Convex Farm");
  });
  test("integrations", () => {
    expect(integrations["chainlink"].name).toBe("ChainLink");
  });
  test("tokenlist", () => {
    expect(tokenlist.tokens.length).toBeGreaterThan(0);
  });
  test("almFactories", () => {
    expect(Object.keys(almFactories).length).toBeGreaterThan(0);
    expect(almFactories["137"].ichi.retro).toBe(
      "0xb2f44D8545315cDd0bAaB4AC7233218b932a5dA7",
    );
  });
  test("assets", () => {
    expect(assets.length).toBeGreaterThan(0);
  });
  test("strategyStateDescription", () => {
    expect(strategyStateDescription[StrategyState.DEPLOYMENT]).toBe(
      "The strategy has been developed. Awaiting deployment.",
    );
  });
  test("seeds", () => {
    expect(seeds.length).toBeGreaterThan(0);
  });
  test("api", () => {
    expect(InteractionType.SYNC).toEqual("SYNC");
  });
  test("oracles", () => {
    expect(Object.keys(assetOracles).length).toBeGreaterThan(0);
    expect(Object.keys(vaultOracles).length).toBeGreaterThan(0);
  });
});
