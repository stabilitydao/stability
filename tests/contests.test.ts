import {contests, Reward, RewardType, YieldContest} from "../src";

describe('testing contests', () => {
  test('check start less then end', () => {
    for (const contestId of Object.keys(contests)) {
      expect(contests[contestId].start).toBeLessThan(contests[contestId].end)
    }
  })
  test('types', () => {
    const c: YieldContest = contests["y1"]
    expect((c.rewards[0] as Reward).type).toEqual(RewardType.POINTS)
  })
})
