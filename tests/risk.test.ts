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
      [
        "TPF",
        "",
        [
          "0x25ea98ac87A38142561eA70143fd44c4772A16b6",
          "0x83feDBc0B85c6e29B589aA6BdefB1Cc581935ECD",
        ],
      ],
      [
        "TPF",
        "",
        [
          "0x6B2e0fACD2F2A8f407aC591067Ac06b5d29247E4",
          "0x90c6E93849E06EC7478ba24522329d14A5954Df4",
        ],
      ],
      [
        "TPF",
        "",
        [
          "0x75d0cBF342060b14c2fC756fd6E717dFeb5B1B70",
          "0xc518A88c67CECA8B3f24c4562CB71deeB2AF86B7",
        ],
      ],
      [
        "TPF",
        "",
        [
          "0x75d0cBF342060b14c2fC756fd6E717dFeb5B1B70",
          "0x83feDBc0B85c6e29B589aA6BdefB1Cc581935ECD",
        ],
      ],
      [
        "TPF",
        "",
        [
          "0x83feDBc0B85c6e29B589aA6BdefB1Cc581935ECD",
          "0x90c6E93849E06EC7478ba24522329d14A5954Df4",
        ],
      ],
      [
        "TPF",
        "",
        [
          "0x83feDBc0B85c6e29B589aA6BdefB1Cc581935ECD",
          "0xAEC9e50e3397f9ddC635C6c429C8C7eca418a143",
        ],
      ],
      [
        "TPF",
        "",
        [
          "0x90c6E93849E06EC7478ba24522329d14A5954Df4",
          "0xc518A88c67CECA8B3f24c4562CB71deeB2AF86B7",
        ],
      ],
      [
        "TPF",
        "",
        [
          "0x25ea98ac87A38142561eA70143fd44c4772A16b6",
          "0xc518A88c67CECA8B3f24c4562CB71deeB2AF86B7",
        ],
      ],
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
