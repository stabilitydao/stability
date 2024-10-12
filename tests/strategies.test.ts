import {
  baseStrategyContracts, ChainName, getChainStrategies,
  getMerklStrategies,
  getStrategiesTotals,
  getStrategyProtocols,
  getStrategyShortId,
  StrategyShortId
} from "../src";
import {BaseStrategy} from "../src/strategies";

describe('testing strategies', () => {
  test('get merkl strategies', () => {
    expect(getStrategyShortId('QuickSwap Static Merkl Farm')).toBe(StrategyShortId.QSMF)
    expect(getStrategyShortId('unknown')).toBe(undefined)
  })
  test('get merkl strategies', () => {
    const merklStrategies = getMerklStrategies();
    expect(merklStrategies.includes('Gamma UniswapV3 Merkl Farm')).toBe(true);
    expect(merklStrategies.includes('A51 BaseSwap Merkl Farm')).toBe(true);
    expect(merklStrategies.length).toBeGreaterThan(13)
  });
  test('get strategies totals', () => {
    expect(getStrategiesTotals().LIVE).toBeGreaterThan(2)
  })
  test('get strategy protocols', () => {
    expect(getStrategyProtocols(StrategyShortId.IPF).length).toBeGreaterThan(0)
  })
  test('get strategy protocols', () => {
    expect(baseStrategyContracts[BaseStrategy.FARMING]).toEqual('FarmingStrategyBase')
  })
  test('get chain strategies', () => {
    const realStrategies = getChainStrategies(ChainName.REAL)
    expect(realStrategies.length).toBeGreaterThan(3)
  })
});
