import {
  NetworkId,
  networks,
  strategies,
  deployments,
  integrations,
  StrategyShortId,
  tokenlist, almFactories, assets, strategyStateDescription, StrategyState,
} from "../src";

describe('index', () => {
  test('deployments', () => {
    expect(deployments["137"].core.platform).toBe("0xb2a0737ef27b5Cc474D24c779af612159b1c3e60")
  })
  test('networks', () => {
    expect(networks["1"].id).toBe(NetworkId.ETHEREUM)
  })
  test('strategies', () => {
    expect(strategies[StrategyShortId.CCF].id).toBe('Curve Convex Farm')
  })
  test('integrations', () => {
    expect(integrations["chainlink"].name).toBe('ChainLink')
  })
  test('tokenlist', () => {
    expect(tokenlist.tokens.length).toBeGreaterThan(0)
  })
  test('almFactories', () => {
    expect(Object.keys(almFactories).length).toBeGreaterThan(0)
    expect(almFactories["137"].ichi.retro).toBe("0xb2f44D8545315cDd0bAaB4AC7233218b932a5dA7")
  })
  test('assets', () => {
    expect(assets.length).toBeGreaterThan(0)
  })
  test('strategyStateDescription', () => {
    expect(strategyStateDescription[StrategyState.DEPLOYMENT]).toBe("The strategy has been developed. Awaiting deployment.")
  })
})
