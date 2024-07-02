import {getNetworksTotals, getSupportedNetworkIds} from "../src";

describe('testing networks', () => {
  test('get supported network IDs', () => {
      expect(getSupportedNetworkIds().length).toBeGreaterThan(1)
  })
  test('getNetworksTotals', () => {
    const s = getNetworksTotals()
    expect(s.SUPPORTED).toBeGreaterThan(1)
  })
})
