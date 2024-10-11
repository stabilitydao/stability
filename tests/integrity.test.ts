import {strategies, StrategyShortId} from "../src";

describe('integrity', () => {
  test('strategy github issues created', () => {
    for (const shortId of Object.keys(strategies)) {
      const strategy = strategies[shortId as StrategyShortId]
      expect(typeof strategy.contractGithubId).toEqual('number')
    }
  })
})
