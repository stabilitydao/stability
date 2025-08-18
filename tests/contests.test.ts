import {
  contests,
  getContestGemsReward,
  getContestReward,
  getContestRewards,
  Reward,
  RewardType,
  YieldContest,
} from "../src";

describe("testing contests", () => {
  test("check start less then end", () => {
    for (const contestId of Object.keys(contests)) {
      expect(contests[contestId].start).toBeLessThan(contests[contestId].end);
    }
  });
  test("types", () => {
    const c: YieldContest = contests["y1"];
    expect((c.rewards[0] as Reward).type).toEqual(RewardType.POINTS);
  });
  test("getContestReward", () => {
    const c: YieldContest = contests["y9"];
    const rG = getContestReward(c, RewardType.GEMS1);
    expect(rG?.totalReward).toEqual(900000);
    const rP = getContestReward(c, RewardType.POINTS);
    expect(rP?.winners).toBeGreaterThan(49);
    const c30: YieldContest = contests["y30"];
    const und = getContestReward(c30, RewardType.POINTS);
    expect(und).toEqual(undefined);
  });
  test("getContestGemsReward", () => {
    const c: YieldContest = contests["y9"];
    const rG = getContestGemsReward(c);
    expect(rG?.totalReward).toEqual(900000);
    const c1 = contests["y1"];
    const und = getContestGemsReward(c1);
    expect(und).toEqual(undefined);
  });
  test("getContestRewards", () => {
    const c17: YieldContest = contests["y17"];
    const rGT1 = getContestRewards(c17, RewardType.GEMS1_TARGETED);
    expect(rGT1.reduce((acc, r) => acc + (r.totalReward ?? 0), 0)).toEqual(
      1500000,
    );
    expect(rGT1.length).toEqual(2);
    const c7 = contests["y7"];
    const rG = getContestRewards(c7, RewardType.GEMS1);
    expect(rG.length).toEqual(1);
    expect(rG[0].totalReward).toEqual(900000);
    const c30 = contests["y30"];
    const und = getContestRewards(c30, RewardType.GEMS1);
    expect(und.length).toEqual(0);
    expect(und).toEqual([]);
  });
});
