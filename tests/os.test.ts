import { daos, getUnitById, OS, UnitStatus, UnitType } from "../src";
import {
  Activity,
  FundingType,
  IFunding,
  IVesting,
  LifecyclePhase,
} from "../src/os";

describe("testing OS", () => {
  test("Lifecycle", () => {
    // OS supports 3 EVM blockchains
    // Ethereum
    const os1 = new OS("1");

    // Optimism
    const os10 = new OS("10");

    // BNB
    const os56 = new OS("56");

    // first DAO is Web3 developer studio team of aliens
    // they are building and running DAO operating system
    // SEED starts after 1 month
    const daoAliens = os56.createDAO(
      "Aliens Community",
      "ALIENS",
      [Activity.BUILDER, Activity.DEFI_PROTOCOL_OPERATOR],
      {
        vePeriod: 365,
        pvpFee: 100,
      },
      [_generateSeedFunding(os56)],
    );

    // todo other OS instances must see a symbol of new DAO

    // 7 days later
    os1.warpDays();
    os10.warpDays();
    os56.warpDays();

    try {
      os56.changePhase(daoAliens.symbol);
    } catch {}

    // check what aliens need to do
    const allTasks = os56.tasks(daoAliens.symbol);
    expect(allTasks.length).toBeGreaterThanOrEqual(2);

    // deployer drew token logotypes
    os56.updateImages(daoAliens.symbol, {
      seedToken: "/seedAliens.png",
      token: "/aliens.png",
    });
    let currentTasks = os56.tasks(daoAliens.symbol);
    expect(currentTasks.length).toBeLessThan(allTasks.length);

    // units project
    os56.updateUnits(daoAliens.symbol, [
      {
        unitId: "aliens:os",
        name: "DAO Factory",
        status: UnitStatus.BUILDING,
        type: UnitType.DEFI_PROTOCOL,
        revenueShare: 100,
        ui: [],
      },
    ]);

    // registered socials
    os56.updateSocials(daoAliens.symbol, ["https://a.aa/a", "https://b.bb/b"]);
    currentTasks = os56.tasks(daoAliens.symbol);
    expect(currentTasks.length).toEqual(0);

    // fix funding
    os56.updateFunding(daoAliens.symbol, {
      ...daoAliens.tokenomics.funding[0],
      maxRaise: 90000,
    });

    try {
      // phase cant be changed right now
      os56.changePhase(daoAliens.symbol);
    } catch {}

    // 24 days later
    os1.warpDays(24);
    os10.warpDays(24);
    os56.warpDays(24);

    os56.changePhase(daoAliens.symbol);

    // SEED started
    expect(os56.getDao(daoAliens.symbol).phase).toEqual(LifecyclePhase.SEED);
    expect(os56.tasks(daoAliens.symbol).length).toBeGreaterThan(0);

    // first seeder
    os56.from = "0xseeder1";
    os56.fund(daoAliens.symbol, 1000);

    // since seed has funds first governance proposal can be created
    let proposalId = os56.updateSocials(daoAliens.symbol, [
      "https://a.aa/a",
      "https://b.bb/b",
      "https://c.c/c",
    ]) as string;
    os56.receiveVotingResults(proposalId, true);
    expect(os56.getDao(daoAliens.symbol).socials.length).toEqual(3);
    try {
      os56.receiveVotingResults(proposalId, true);
    } catch {}
    try {
      os56.receiveVotingResults(proposalId + "1", true);
    } catch {}

    // second seeder
    os56.from = "0xseeder2";
    os56.fund(daoAliens.symbol, 10000);

    try {
      os56.fund(daoAliens.symbol, 1000000);
    } catch {}

    try {
      // phase cant be changed right now
      os56.changePhase(daoAliens.symbol);
    } catch {}

    // 100 days later
    os1.warpDays(100);
    os10.warpDays(100);
    os56.warpDays(100);

    // DEVELOPMENT phase started (SEED succeed)
    os56.changePhase(daoAliens.symbol);
    expect(os56.getDao(daoAliens.symbol).phase).toEqual(
      LifecyclePhase.DEVELOPMENT,
    );
    expect(os56.tasks(daoAliens.symbol).length).toBeGreaterThan(0);

    // fill TGE funding
    try {
      os56.getFundingIndex(daoAliens.symbol, FundingType.TGE);
    } catch {}
    proposalId = os56.updateFunding(
      daoAliens.symbol,
      _generateTGEFunding(os56),
    ) as string;
    os56.receiveVotingResults(proposalId, true);
    os56.getFundingIndex(daoAliens.symbol, FundingType.TGE); // not throws error

    // fix units
    proposalId = os56.updateUnits(daoAliens.symbol, [
      {
        ...daoAliens.units[0],
        status: UnitStatus.LIVE,
        ui: [
          {
            href: "https://mvp.ui",
            title: "OS MVO",
          },
        ],
      },
    ]) as string;
    os56.receiveVotingResults(proposalId, true);

    // add images
    proposalId = os56.updateImages(daoAliens.symbol, {
      seedToken: "/seedALIENS.png",
      token: "/ALIENS.png",
      tgeToken: "/tgeALIENS.png",
      xToken: "/xALIENS.png",
      daoToken: "/ALIENS_DAO.png",
    }) as string;
    os56.receiveVotingResults(proposalId, true);

    // add vesting

    proposalId = os56.updateVesting(daoAliens.symbol, [
      _generateVesting(
        "Development",
        daoAliens.tokenomics.funding[
          os56.getFundingIndex(daoAliens.symbol, FundingType.TGE)
        ].end as number,
      ),
    ]) as string;
    os56.receiveVotingResults(proposalId, true);

    // owner of DAO is seed token
    expect(os56.getDaoOwner(daoAliens.symbol)).toBe(
      daoAliens.deployments[os56.chainId].seedToken,
    );

    // try fund on not funding phase
    try {
      os56.fund(daoAliens.symbol, 100000000);
    } catch {}

    try {
      // too early
      os56.changePhase(daoAliens.symbol);
    } catch {}

    // 180 days later
    os1.warpDays(180);
    os10.warpDays(180);
    os56.warpDays(180);

    // TGE phase started (DEVELOPMENT done)
    os56.changePhase(daoAliens.symbol);
    expect(os56.getDao(daoAliens.symbol).phase).toEqual(LifecyclePhase.TGE);
    expect(os56.tasks(daoAliens.symbol).length).toBeGreaterThan(0);

    // TGE funders
    os56.from = "0xseeder1";
    os56.fund(daoAliens.symbol, 10000);
    os56.from = "0xseeder3";
    os56.fund(daoAliens.symbol, 100000);
    try {
      os56.fund(daoAliens.symbol, 100000000);
    } catch {}

    try {
      // too early
      os56.changePhase(daoAliens.symbol);
    } catch {}

    // 8 days later
    os1.warpDays(8);
    os10.warpDays(8);
    os56.warpDays(8);

    // LIVE CLIFF
    os56.changePhase(daoAliens.symbol);
    expect(os56.getDao(daoAliens.symbol).phase).toEqual(
      LifecyclePhase.LIVE_CLIFF,
    );

    // owner of DAO is DAO token
    expect(os56.getDaoOwner(daoAliens.symbol)).toBe(
      daoAliens.deployments[os56.chainId].daoToken,
    );

    try {
      // too early
      os56.changePhase(daoAliens.symbol);
    } catch {}

    // 200 days later
    os1.warpDays(200);
    os10.warpDays(200);
    os56.warpDays(200);

    // LIVE_VESTING
    os56.changePhase(daoAliens.symbol);
    expect(os56.getDao(daoAliens.symbol).phase).toEqual(
      LifecyclePhase.LIVE_VESTING,
    );
    os56.tasks(daoAliens.symbol);

    try {
      // too early
      os56.changePhase(daoAliens.symbol);
    } catch {}

    // 4000 days later
    os1.warpDays(4000);
    os10.warpDays(4000);
    os56.warpDays(4000);
    os56.changePhase(daoAliens.symbol);
    expect(os56.getDao(daoAliens.symbol).phase).toEqual(LifecyclePhase.LIVE);
    os56.tasks(daoAliens.symbol);

    // try update fundings for coverage
    try {
      os56.updateFunding(
        daoAliens.symbol,
        _generateSeedFunding(os1, 7 * 86400),
      );
    } catch {}
    try {
      os56.updateFunding(daoAliens.symbol, _generateTGEFunding(os1, 7 * 86400));
    } catch {}
    try {
      os56.updateVesting(daoAliens.symbol, [
        _generateVesting(
          "Development",
          daoAliens.tokenomics.funding[
            os56.getFundingIndex(daoAliens.symbol, FundingType.TGE)
          ].end as number,
        ),
      ]);
    } catch {}

    const roadmap = os56.roadmap(daoAliens.symbol);
    expect(roadmap.length).toBeGreaterThanOrEqual(6);
    //console.log(roadmap)

    // second DAO are APES syndicate
    // they cant build but need their own DeFi lending protocol
    // they do many errors
    const daoApes = os1.createDAO(
      "Apes Syndicate",
      "APES",
      [Activity.DEFI_PROTOCOL_OPERATOR],
      {
        vePeriod: 30,
        pvpFee: 90,
      },
      [_generateSeedFunding(os1, 7 * 86400)],
    );

    // todo other OS instances must see a symbol of new DAO

    os1.updateImages(daoApes.symbol, {
      seedToken: "/seedApes.png",
      token: "/apes.png",
    });
    os1.updateUnits(daoApes.symbol, [
      {
        unitId: "aliens:os",
        name: "DAO Factory",
        status: UnitStatus.BUILDING,
        type: UnitType.DEFI_PROTOCOL,
        revenueShare: 100,
        ui: [],
      },
    ]);
    os1.updateSocials(daoApes.symbol, ["https://apes.aa", "https://apes.bb"]);
    os1.updateVesting(daoApes.symbol, [
      _generateVesting(
        "Development",
        daoAliens.tokenomics.funding[
          os1.getFundingIndex(daoApes.symbol, FundingType.SEED)
        ].end as number,
      ),
    ]);

    // apes forgot they created DRAFT
    // 15 days later
    os1.warpDays(15);
    os10.warpDays(15);
    os56.warpDays(15);

    try {
      // too late
      os1.changePhase(daoApes.symbol);
    } catch {}

    os1.updateFunding(daoApes.symbol, _generateSeedFunding(os1, 7 * 86400));

    // 7 days later
    os1.warpDays();
    os10.warpDays();
    os56.warpDays();

    os1.changePhase(daoApes.symbol);

    // fund small amount
    os1.from = "0xseeder1";
    os1.fund(daoApes.symbol, 1000);

    // 127 days later
    os1.warpDays(127);
    os10.warpDays(127);
    os56.warpDays(127);

    os1.changePhase(daoApes.symbol);
    expect(os1.getDao(daoApes.symbol).phase).toEqual(
      LifecyclePhase.SEED_FAILED,
    );

    // third DAO are Machines Cartel
    const daoMachines = os10.createDAO(
      "Machines Cartel",
      "MACHINE",
      [Activity.MEV_SEARCHER],
      {
        vePeriod: 14,
        pvpFee: 99,
      },
      [_generateSeedFunding(os10, 7 * 86400), _generateTGEFunding(os10)],
    );

    os10.updateImages(daoMachines.symbol, {
      seedToken: "/seedMACHINE.png",
      token: "/MACHINE.png",
      tgeToken: "/saleMACHINE.png",
      xToken: "/xMACHINE.png",
      daoToken: "/MACHINE_DAO.png",
    });
    os10.updateUnits(daoMachines.symbol, [
      {
        unitId: "MACHINES:MEVBOT",
        name: "MEV searcher",
        status: UnitStatus.LIVE,
        type: UnitType.MEV,
        revenueShare: 100,
        ui: [],
        api: [],
      },
    ]);
    os10.updateSocials(daoMachines.symbol, [
      "https://apes.aa",
      "https://apes.bb",
    ]);
    os10.updateVesting(daoMachines.symbol, [
      _generateVesting(
        "Development",
        daoMachines.tokenomics.funding[
          os10.getFundingIndex(daoMachines.symbol, FundingType.SEED)
        ].end as number,
      ),
    ]);

    // 7 days later
    os1.warpDays();
    os10.warpDays();
    os56.warpDays();

    os10.changePhase(daoMachines.symbol);

    // fund enough amount
    os10.from = "0xseeder1";
    os10.fund(daoMachines.symbol, 50000);

    // 127 days later
    os1.warpDays(127);
    os10.warpDays(127);
    os56.warpDays(127);

    os10.changePhase(daoMachines.symbol);

    // now DEVELOPMENT

    // 180 days later
    os1.warpDays(180);
    os10.warpDays(180);
    os56.warpDays(180);

    os10.changePhase(daoMachines.symbol);

    // now TGE

    // 180 days later
    os1.warpDays(180);
    os10.warpDays(180);
    os56.warpDays(180);

    // TGE FAILED
    os10.changePhase(daoMachines.symbol);

    expect(os10.getDao(daoMachines.symbol).phase).toEqual(
      LifecyclePhase.DEVELOPMENT,
    );

    // rejected proposal coverage
    proposalId = os10.updateSocials(daoMachines.symbol, [
      "https://t.me/stabilitydao1",
    ]) as string;
    os10.receiveVotingResults(proposalId as string, false);
  });

  test("launch", () => {
    const os = new OS("146");
    os.addLiveDAO(daos[0]);
    expect(Object.keys(os.daos).length).toBe(1);
    expect(getUnitById(daos[0].units[1].unitId)?.name).toBe("VaaS");
    const roadmap = os.roadmap(daos[0].symbol);
    expect(roadmap.length).toBe(4);
    //console.log(roadmap)
  });

  test("create DAO", () => {
    const os = new OS("1");
    const dao = _createDAO(os);
    expect(dao.name).toBe("SpaceSwap");
    expect(os.events.length).toBe(1);

    const funding: IFunding[] = [
      {
        type: FundingType.SEED,
        start: 1800000000,
        end: 1805000000,
        minRaise: 20000,
        maxRaise: 1000000,
        raised: 0,
      },
    ];

    // bad name length
    try {
      os.createDAO(
        "SpaceSwap_000000000000000000",
        "SPACE",
        [Activity.DEFI_PROTOCOL_OPERATOR],
        {
          vePeriod: 365,
          pvpFee: 90,
        },
        funding,
      );
      expect(0).toBe(1);
    } catch (error: Error | unknown) {
      expect((error as Error).message).toBe("NameLength(28)");
    }

    // bad symbol length
    try {
      os.createDAO(
        "SpaceSwap",
        "SPACESWAP",
        [Activity.DEFI_PROTOCOL_OPERATOR],
        {
          vePeriod: 365,
          pvpFee: 90,
        },
        funding,
      );
      expect(0).toBe(1);
    } catch (error: Error | unknown) {
      expect((error as Error).message).toBe("SymbolLength(9)");
    }

    // not unique symbol
    try {
      os.createDAO(
        "SpaceSwap",
        "SPACE",
        [Activity.DEFI_PROTOCOL_OPERATOR],
        {
          vePeriod: 365,
          pvpFee: 90,
        },
        funding,
      );
      expect(0).toBe(1);
    } catch (error: Error | unknown) {
      expect((error as Error).message).toBe("SymbolNotUnique(SPACE)");
    }

    // bad vePeriod
    try {
      os.createDAO(
        "SpaceSwap",
        "SPACE1",
        [Activity.DEFI_PROTOCOL_OPERATOR],
        {
          vePeriod: 365 * 5,
          pvpFee: 100,
        },
        funding,
      );
      expect(0).toBe(1);
    } catch (error: Error | unknown) {
      expect((error as Error).message).toBe("VePeriod(1825)");
    }

    // bad pvpFee
    try {
      os.createDAO(
        "SpaceSwap",
        "SPACE1",
        [Activity.DEFI_PROTOCOL_OPERATOR],
        {
          vePeriod: 365,
          pvpFee: 101,
        },
        funding,
      );
      expect(0).toBe(1);
    } catch (error: Error | unknown) {
      expect((error as Error).message).toBe("PvPFee(101)");
    }

    // no funding
    try {
      os.createDAO(
        "SpaceSwap",
        "SPACE1",
        [Activity.DEFI_PROTOCOL_OPERATOR],
        {
          vePeriod: 365,
          pvpFee: 90,
        },
        [],
      );
      expect(0).toBe(1);
    } catch (error: Error | unknown) {
      expect((error as Error).message).toBe("NeedFunding");
    }
  });

  test("update DAO images", () => {
    const os = new OS("1");
    const dao = _createDAO(os);

    os.updateImages(dao.symbol, {
      seedToken: "/img.png",
    });

    // force phase change
    os.daos[Object.keys(os.daos)[0]].deployments = {
      "1": {
        seedToken: "0x1",
      },
    };
    os.daos[Object.keys(os.daos)[0]].phase = LifecyclePhase.SEED;
    os.from = "0x1";
    os.updateImages(dao.symbol, {
      seedToken: "/img.png",
    });
  });

  test("update DAO socials", () => {
    const os = new OS("146");
    os.addLiveDAO(daos[0]);

    os.from = "randomUserAddress1";
    const dao = _createDAO(os);
    os.from = "randomUserAddress2";
    try {
      os.updateSocials(dao.symbol, ["https://t.me/stabilitydao"]);
      expect(false).toBe(true);
    } catch {}

    os.from = "randomUserAddress1";
    os.updateSocials(dao.symbol, ["https://t.me/stabilitydao"]);

    expect(os.getDao(dao.symbol).socials.length).toBe(1);
    expect(os.events.length).toBe(3);

    try {
      os.updateSocials(daos[0].symbol, ["https://t.me/stabilitydao"]);
    } catch {}
    os.from = daos[0].deployments["146"].daoToken as string;
    os.chainId = "146";
    let proposalId = os.updateSocials(daos[0].symbol, [
      "https://t.me/stabilitydao1",
    ]);
    os.receiveVotingResults(proposalId as string, true);
    expect(os.getDao(daos[0].symbol).socials[0]).toBe(
      "https://t.me/stabilitydao1",
    );
  });

  test("get DAO", () => {
    const os = new OS("1");
    const dao = _createDAO(os);
    os.getDao(dao.symbol);

    try {
      os.getDao("x");
      expect(0).toBe(1);
    } catch (error: Error | unknown) {
      expect((error as Error).message).toBe("DAONotFound");
    }

    const roadmap = os.roadmap(dao.symbol);
    expect(roadmap.length).toBeGreaterThanOrEqual(1);
    //console.log(roadmap)
  });

  test("getters", () => {
    // getTokensNaming
    const naming = OS.getTokensNaming("Destiny", "DESTINY");
    expect(naming.tokenSymbol).toBe("DESTINY");
    expect(naming.tokenName).toBe("Destiny");

    // isLiveDAO
    expect(OS.isLiveDAO(LifecyclePhase.TGE)).toBe(false);
  });

  const _createDAO = (os: OS) => {
    const funding = [_generateSeedFunding(os)];
    return os.createDAO(
      "SpaceSwap",
      "SPACE",
      [Activity.DEFI_PROTOCOL_OPERATOR],
      {
        vePeriod: 365,
        pvpFee: 90,
      },
      funding,
    );
  };

  const _generateSeedFunding = (
    os: OS,
    after: number = 30 * 86400, // 1 month
    duration: number = 3 * 30 * 86400, // 3 months
    minRaise: number = 10000, // 10k USD
    maxRaise: number = 100000, // 100k USD
  ): IFunding => {
    return {
      type: FundingType.SEED,
      start: os.blockTimestamp + after,
      end: os.blockTimestamp + after + duration,
      minRaise,
      maxRaise,
      raised: 0,
    };
  };

  const _generateTGEFunding = (
    os: OS,
    after: number = 6 * 30 * 86400, // 6 month
    duration: number = 7 * 86400, // 7 days
    minRaise: number = 100000, // 100k USD
    maxRaise: number = 500000, // 500k USD
  ): IFunding => {
    return {
      type: FundingType.TGE,
      start: os.blockTimestamp + after,
      end: os.blockTimestamp + after + duration,
      minRaise,
      maxRaise,
      raised: 0,
    };
  };

  const _generateVesting = (
    name: string,
    tgeEnd: number,
    cliff: number = 180 * 86400,
    duration: number = 365 * 86400,
    allocation: number = 100,
  ): IVesting => {
    return {
      name,
      start: tgeEnd + cliff,
      end: tgeEnd + cliff + duration,
      allocation,
    };
  };
});
