import {getMerklStrategies} from "../src/strategies";

describe('testing strategies', () => {
  test('get merkl strategies', () => {
    const merklStrategies = getMerklStrategies();
    expect(merklStrategies.includes('Gamma UniswapV3 Merkl Farm')).toBe(true);
    expect(merklStrategies.includes('A51 BaseSwap Merkl Farm')).toBe(true);
    expect(merklStrategies.length).toBeGreaterThan(13)
  });
});
