import { getIntegrationStatus} from "../src";
import {NetworkId, strategies, StrategyShortId, StrategyState, DefiCategory, DeFiProtocol, IntegrationStatus} from "../src";

describe('testing integrations', () => {
  test('get protocol integration status', () => {
    const protocol: DeFiProtocol = {
      name: 'Test',
      category: DefiCategory.AMM,
      networks: [NetworkId.BSC,],
    }
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.PROPOSED)
    protocol.networks = [NetworkId.POLYGON,]
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.POSSIBLE)
    protocol.coreContracts = ['PriceReader',]
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.LIVE)
    protocol.coreContracts = undefined
    protocol.adapters = ['TestAdapter',]
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.LIVE)

    protocol.networks = [NetworkId.EVMOS,]
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.PROPOSED)
    protocol.adapters = undefined
    protocol.coreContracts = ['PriceReader',]
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.PROPOSED)
    protocol.coreContracts = undefined

    protocol.strategies = [StrategyShortId.IQMF,]
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.LIVE)
    strategies[StrategyShortId.IQMF].state = StrategyState.AWAITING_DEPLOYMENT
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.BEING_DEPLOYED)
    strategies[StrategyShortId.IQMF].state = StrategyState.DEVELOPMENT
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.DEVELOPMENT)
    strategies[StrategyShortId.IQMF].state = StrategyState.PROPOSED
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.AWAITING)
    protocol.strategies = undefined
    protocol.intermediaryStrategies = [StrategyShortId.IQMF,]
    strategies[StrategyShortId.IQMF].state = StrategyState.LIVE
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.IN_USE)
    strategies[StrategyShortId.IQMF].state = StrategyState.AWAITING_DEPLOYMENT
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.BEING_DEPLOYED)
    strategies[StrategyShortId.IQMF].state = StrategyState.DEVELOPMENT
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.DEVELOPMENT)
    strategies[StrategyShortId.IQMF].state = StrategyState.PROPOSED
    expect(getIntegrationStatus(protocol)).toBe(IntegrationStatus.AWAITING)
  })
})
