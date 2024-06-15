import {getSupportedNetworkIds} from "../src";

describe('testing networks', () => {
  test('get supported network IDs', () => {
      expect(getSupportedNetworkIds().length).toBeGreaterThan(1)
  })
})
