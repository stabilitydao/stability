import { daos, getUnitById, OS } from "../src";
import { Activity, FundingType, LifecyclePhase } from "../src/os";

describe("testing OS", () => {
  test("launch", () => {
    const os = new OS(daos);
    expect(os.daos.length).toBe(daos.length);
  });

  test("create DAO", () => {
    const os = new OS([]);
    const dao = _createDAO(os);
    expect(dao.name).toBe("SpaceSwap");
    expect(os.events.length).toBe(1);

    // bad symbol length
    try {
      os.createDAO(
        "SpaceSwap",
        "SPACESWAP",
        [Activity.DEFI_PROTOCOL_OPERATOR],
        365,
        90,
        [
          {
            type: FundingType.SEED,
            start: 1800000000,
            end: 1805000000,
            minRaise: 20000,
            maxRaise: 1000000,
          },
        ],
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

  test("update DAO socials", () => {
    const os = new OS([]);
    const dao = _createDAO(os);
    os.updateSocials(dao.symbol, ["https://t.me/stabilitydao"]);
    expect(os.getDao(dao.symbol).socials.length).toBe(1);
    expect(os.events.length).toBe(2);
  });

  test("get DAO", () => {
    const os = new OS([]);
    const dao = _createDAO(os);
    os.getDao(dao.symbol);

    try {
      os.getDao("x");
      expect(0).toBe(1);
    } catch (error: Error | unknown) {
      expect((error as Error).message).toBe("DAONotFound");
    }
  });

  test("getters", () => {
    // getTokensNaming
    const naming = OS.getTokensNaming("Destiny", "DESTINY");
    expect(naming.tokenSymbol).toBe("DESTINY");
    expect(naming.tokenName).toBe("Destiny");

    // isLiveDAO
    expect(OS.isLiveDAO(LifecyclePhase.TGE)).toBe(false);
  });

  test("emptyRuntime", () => {
    expect(getUnitById(daos[0].units[1].unitId)?.name).toBe("VaaS");
  });

  const _createDAO = (os: OS) => {
    const funding = [
      {
        type: FundingType.SEED,
        start: 1800000000,
        end: 1805000000,
        minRaise: 20000,
        maxRaise: 1000000,
      },
    ];
    return os.createDAO(
      "SpaceSwap",
      "SPACE",
      [Activity.DEFI_PROTOCOL_OPERATOR],
      365,
      90,
      funding,
    );
  };
});
