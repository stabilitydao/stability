import {getChainsTotals, getSupportedChainNames} from "../src";

describe('testing chains', () => {
  test('get supported network IDs', () => {
      expect(getSupportedChainNames().length).toBeGreaterThan(1)
  })
  test('getNetworksTotals', () => {
    const s = getChainsTotals()
    expect(s.SUPPORTED).toBeGreaterThan(1)
  })
})
