import { getIL, StrategyShortId } from "../src";

describe("testing risk", () => {
  test("getIL", () => {
    const data = [
      ["DQMF", "Narrow 0x29f1..e22d", []],
      ["IQMF", "0x5d1b..ccb3", []],
      ["CF", "", []],
      ["Y", "", []],
      ["GRMF", "Narrow", []],
      ["QSMF", "276300 276360", []],
      ["GQMF", "Stable", []],
      ["CCF", "", []],
      ["IRMF", "0xe9bd..8283", []],
      ["GQMF", "Narrow", []],
      ["GQMF", "Narrow", []],
      ["ISF", "stS", []],
      ["SF", "vLP", []],
      ["SF", "sLP", []],
      ["ASF", "Fill-Up Narrow", []],
      ["SiL", "3 stS x17.4", []],
      ["EF", "vLP", []],
      ["ASF", "Fill-Up Aggressive", []],
      ["GUMF", "Narrow", []],
      ["BSF", "", []],
      ["BWF", "", []],
      ["SiF", "", []],
      ["ASF", "Fill-Up Stretched", []],
      ["GUMF", "Pegged", []],
      ["GUMF", "Stable", []],
      ["GUMF", "wide", []],
    ];
    for (const item of data) {
      const il = getIL(
        item[0] as StrategyShortId,
        item[1] as string,
        item[2] as `0x${string}`[],
      );
      if (!il) {
        console.log(item);
      }
      expect(!!il).toEqual(true);
    }
    const und = getIL("AAA_UNKN" as StrategyShortId, "", []);
    expect(und).toEqual(undefined);
  });
});
