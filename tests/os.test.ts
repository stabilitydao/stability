import { daos, getUnitById, OS } from "../src";
import { Activity, FundingType } from "../src/os";

describe("testing OS", () => {
  test("launch", () => {
    const os = new OS(daos);
    expect(os.daos.length).toBe(daos.length);
  });

  test("create DAO", () => {
    const os = new OS([]);
    const funding = [
      {
        type: FundingType.SEED,
        start: 1800000000,
        end: 1805000000,
        minRaise: 20000,
        maxRaise: 1000000,
      },
    ];
    const dao = os.createDAO(
      "SpaceSwap",
      "SPACE",
      [Activity.DEFI_PROTOCOL_OPERATOR],
      365,
      90,
      funding,
    );
    expect(dao.name).toBe("SpaceSwap");

    // bad symbol length
    try {
      os.createDAO(
        "SpaceSwap",
        "SPACESWAP",
        [Activity.DEFI_PROTOCOL_OPERATOR],
        365,
        90,
        funding,
      );
      expect(0).toBe(1);
    } catch (error: Error | unknown) {
      expect((error as Error).message).toBe("SymbolLengthError(9)");
    }

    // no funding
    try {
      os.createDAO(
        "SpaceSwap",
        "SPACE",
        [Activity.DEFI_PROTOCOL_OPERATOR],
        365,
        90,
        [],
      );
      expect(0).toBe(1);
    } catch (error: Error | unknown) {
      expect((error as Error).message).toBe("NeedFunding");
    }
  });

  test("getTokensNaming", () => {
    const naming = OS.getTokensNaming("Destiny", "DESTINY");
    expect(naming.tokenSymbol).toBe("DESTINY");
    expect(naming.tokenName).toBe("Destiny");
  });

  test("emptyRuntime", () => {
    expect(getUnitById(daos[0].units[1].unitId)?.name).toBe("VaaS");
  });
});
