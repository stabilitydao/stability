import {getMerklStrategies, getStrategiesTotals, getStrategyShortId} from "../src";
import {StrategyShortId} from "../src";

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
});
