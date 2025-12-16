/**
 Stability OS MVP prototype.
*/

import { ChainName, chains, getChainByName } from "./chains";
import { IAgent } from "./agents";
import { StrategyShortId } from "./strategies";
import { LendingEngine } from "./lending";
import { IBuilderActivity, IBuildersMemory } from "./activity/builder";
import { Prices, RevenueChart } from "./api.types";

export const STABILITY_OS_DESCRIPTION =
  "Operating System of Self-developing DAOs";

/**
 Represents a DAO running on Stability OS.

 todo: Optimize it for effective on-chain storing
 todo: [META-ISSUE] DAO must manage properties itself via voting by executing Operating proposals.

 @version 0.1.0
 @alpha
 @interface
 */
export interface IDAO {
  /**
   DAO lifecycle phase.
   Changes permissionless when next phase start timestamp reached.
   */
  phase: LifecyclePhase;

  /** Name of the DAO, used in token names. Without DAO word. */
  name: string;

  /**
   * Tradeable interchain ERC-20 token symbol.
   * Lowercased used as slug - unique ID of DAO in OS.
   * While token symbol is SYM then additional DAO tokens symbols are:
   * seedSYM, saleSYM, xSYM, SYM_DAO
   */
  symbol: string;

  /** Community socials. Update by `OS.updateSocials` */
  socials: string[];

  /** Activities of the organization. */
  activity: Activity[];

  /** Images of tokens. Absolute or relative from stabilitydao/.github repo /os/ folder.  */
  images: IDAOImages;

  /** Deployed smart-contracts */
  deployments: IDAODeployments;

  /** Revenue generating units owned by the organization. */
  units: IUnit[];

  /** Operating agents managed by the organization. */
  agents: IAgent[];

  /** On-chain DAO parameters for tokenomics, governance and revenue sharing */
  params: IDAOParameters;

  /** Supply distribution and fundraising events */
  tokenomics: {
    /** Fundraising */
    funding: IFunding[];
    /** Where initial deployment became */
    initialChain: ChainName;
    /** Vesting allocations  */
    vesting?: IVesting[];
  };

  /** Deployer of a DAO have power only at DRAFT phase. */
  deployer: string;

  /** DAOs engaging BUILDER activity settings are stored off-chain  */
  builderActivity?: IBuilderActivity;

  /** Symbol of DAO who absorbed this DAO */
  absorberSymbol?: string;
}

/** Organization activities supported by OS. */
export enum Activity {
  /** Owner of Decentralized Finance protocols */
  DEFI_PROTOCOL_OPERATOR = "DEFI_PROTOCOL_OPERATOR",
  /** Owner of Software as a Service business */
  SAAS_OPERATOR = "SAAS_OPERATOR",
  /** Searching of Maximum Extractable Value opportunities and submitting it to block builders.  */
  MEV_SEARCHER = "MEV_SEARCHER",
  /** BUILDER is a team of engineers managed by DAOs. */
  BUILDER = "BUILDER",
}

/** Images of tokens. Absolute or relative from stabilitydao/.github repo /os/ folder.  */
export interface IDAOImages {
  seedToken?: string;
  tgeToken?: string;
  token?: string;
  xToken?: string;
  daoToken?: string;
}

/**
 Lifecycle phase represents DAO tokenomics stage.
 */
export enum LifecyclePhase {
  /** Created */
  DRAFT = "DRAFT",

  /**
   Initial funding. DAO project passed requirements.
   Since SEED started a DAO become real DAO:
   - noncustodial
   - tokenized share holdings
   - collective management via voting
   */
  SEED = "SEED",

  /** Seed was not success. Raised funds sent back to seeders. */
  SEED_FAILED = "SEED_FAILED",

  /** Using SEED funds to launch MVP / Unit generating */
  DEVELOPMENT = "DEVELOPMENT",

  /** TGE is funding event for token liquidity and DAO developments (optionally) */
  TGE = "TGE",

  /** Delay before any vesting allocation started */
  LIVE_CLIFF = "LIVE_CLIFF",

  /** Vesting period active */
  LIVE_VESTING = "LIVE_VESTING",

  /** Vesting ended - token fully distributed */
  LIVE = "LIVE",

  /** Absorbed by other DAO running on Stability OS */
  ABSORBED = "ABSORBED",
}

/**
 Parameters of VE-tokenomics, Governance and revenue sharing.
 @interface
 */
export interface IDAOParameters {
  /** Vested Escrow period, days. */
  vePeriod: number;
  /** Instant exit fee, percent */
  pvpFee: number;
  /** Minimal power in chain to have voting rights, amount of staked tokens */
  minPower?: number;
  /** Bribe share for Tokenomics Transactions (vested funds spending), percent */
  ttBribe?: number;
  /** Share of total DAO revenue going to accidents compensations, percent */
  recoveryShare?: number;
  /** Minimal total voting power (self and delegated) need to create a proposal */
  proposalThreshold?: number;
}

export interface IFunding {
  type: FundingType;
  start: number;
  end: number;
  minRaise: number;
  maxRaise: number;
  raised: number;
  claim?: number;
}

export enum FundingType {
  SEED = "SEED",
  TGE = "TGE",
}

/**
 Vesting allocation data
 @interface
 */
export interface IVesting {
  /** Short name of vesting allocation */
  name: string;
  /** How must be spent */
  description?: string;
  /** Vesting supply. 10 == 10e18 TOKEN */
  allocation: number;
  /** Start timestamp */
  start: number;
  /** End timestamp */
  end: number;
}

/**
 Deployments of running DAO on blockchains.

 @interface
 */
export interface IDAODeployments {
  [chainId: string]: {
    /** Seed round receipt token. */
    seedToken?: `0x${string}`;
    /** TGE pre-sale receipt token. */
    tgeToken?: `0x${string}`;
    /** Main tradable DAO token. */
    token?: `0x${string}`;
    /** VE-tokenomics entry token. */
    xToken?: `0x${string}`;
    /** Staking contract. */
    staking?: `0x${string}`;
    /** Governance token. */
    daoToken?: `0x${string}`;
    /** Revenue utilization and distributing contract. */
    revenueRouter?: `0x${string}`;
    /** Accident recovery system contract. */
    recovery?: `0x${string}`;
    /** Set of vesting contracts. */
    vesting?: { [name: string]: `0x${string}` };
    /** Bridge for Token */
    tokenBridge?: `0x${string}`;
    /** Bridge for XToken */
    xTokenBridge?: `0x${string}`;
    /** Bridge for Governance token */
    daoTokenBridge?: `0x${string}`;
  };
}

/**
 Revenue generating unit owned by a DAO.
 @interface
*/
export interface IUnit {
  /** Unique unit string id. For DeFi protocol its defiOrg:protocolKey. */
  unitId: string;
  /** Short name of the unit */
  name: string;
  /** Status of unit changes appear when unit starting to work and starting earning revenue */
  status: UnitStatus;
  /** Supported type of the Unit */
  type: UnitType;
  /** The share of a Unit's profit received by the DAO to which it belongs. 100 - 100%. */
  revenueShare: number;
  /** A unique emoji for the shortest possible representation of a Unit in the Stability OS. */
  emoji?: string;
  /** Frontend endpoints of Unit */
  ui?: IUnitUILink[];
  /** Links to API of the Unit */
  api?: string[];
  /** OFF-CHAIN stored Components of the Unit. Not need to store on-chain. */
  components?: { [category in UnitComponentCategory]?: UnitComponent[] };
}

/** Supported unit types */
export enum UnitType {
  /** VE-token early exit fees */
  PVP = "PVP",
  /** Decentralized finance protocol */
  DEFI_PROTOCOL = "DEFI_PROTOCOL",
  /** Software as a Service business */
  SAAS = "SAAS",
  /** Maximum Extractable Value tool */
  MEV = "MEV",
}

/** Unit status can be changed automatically on DAO lifecycle phase changes or manually by DAO holders */
export enum UnitStatus {
  RESEARCH = "RESEARCH",
  BUILDING = "BUILDING",
  LIVE = "LIVE",
}

/** Supported categories of running units. */
export enum UnitComponentCategory {
  CHAIN_SUPPORT = "CHAIN_SUPPORT",
  ENGINE_SUPPORT = "ENGINE_SUPPORT",
  DEFI_STRATEGY = "DEFI_STRATEGY",
  MEV_STRATEGY = "MEV_STRATEGY",
}

export interface IUnitUILink {
  href: `https://${string}`;
  title: string;
}

export type UnitComponent = StrategyShortId | ChainName | LendingEngine;

/**
 Hot memory with indexed and aggregated data. OS API reply.
 @interface
 */
export interface IOSMemory {
  /** Prices of assets */
  prices: Prices;

  /** Total Value Locked in blockchains */
  chainTvl: { [chainId: string]: number };

  /** DAO runtime data. Updates each minute or faster. */
  daos: {
    [symbol: string]: {
      /** Price from Stability interchain oracle */
      oraclePrice: string;
      /** Coingecko price */
      coingeckoPrice?: string;
      /** Data for total revenue chart */
      revenueChart: RevenueChart;
      /** Extracted on-chain data */
      onChainData: {
        [chainId: string]: {
          stakingAPR: number;
          staked: number;
          units: {
            [unitId: string]: {
              pendingRevenue: number;
            };
          };
        };
      };
    };
  };

  /** Instant Updates by subscribing to github application webhooks */
  builders: IBuildersMemory;
}

/**
 Typescript implementation of Stability Operating System
 Object of this class is OS instance deployed on a single blockchain.

 @class
 */
export class OS {
  /** Chain ID where instance deployed */
  chainId: string;

  /** Chain block timestamp */
  blockTimestamp: number = Math.floor(new Date().getTime() / 1000);

  /** Local DAOs storage (in form of a mapping) */
  daos: { [symbol: string]: IDAO } = {};

  /** Actual DAO symbols at all blockchains */
  usedSymbols: { [name: string]: boolean } = {};

  /** All emitted events */
  events: string[] = [];

  /** Governance proposals. Can be created only at initialChain of DAO. */
  proposals: { [proposalId: string]: IProposal } = {};

  /** Absorbing deals */
  absorbing: IAbsorbing[] = [];

  /** Current user address */
  from: string = "0x00";

  settings: IOSSettings = {
    priceDao: 1000,
    priceUnit: 1000,
    priceOracle: 1000,
    priceBridge: 1000,
    minNameLength: 1,
    maxNameLength: 20,
    minSymbolLength: 1,
    maxSymbolLength: 7,
    minVePeriod: 14,
    maxVePeriod: 365 * 4,
    minPvPFee: 10,
    maxPvPFee: 100,
    minFundingDuration: 1,
    maxFundingDuration: 180,
    // todo refactor, need percent of value
    minAbsorbOfferUsd: 50000, // 50k USD
  };

  constructor(chainId: string) {
    this.chainId = chainId;
  }

  static getTokensNaming(name: string, symbol: string) {
    return {
      seedName: `${name} SEED`,
      seedSymbol: `seed${symbol}`,
      tgeName: `${name} PRESALE`,
      tgeSymbol: `sale${symbol}`,
      tokenName: name,
      tokenSymbol: symbol,
      xName: `x${name}`,
      xSymbol: `x${symbol}`,
      daoName: `${name} DAO`,
      daoSymbol: `${symbol}_DAO`,
    };
  }

  static isLiveDAO(phase: LifecyclePhase) {
    return [
      LifecyclePhase.LIVE_CLIFF,
      LifecyclePhase.LIVE_VESTING,
      LifecyclePhase.LIVE,
    ].includes(phase);
  }

  /**
   * Create new DAO
   * @throws Error
   */
  createDAO(
    name: string,
    symbol: string,
    activity: Activity[],
    params: IDAOParameters,
    funding: IFunding[],
  ): IDAO {
    const dao: IDAO = {
      phase: LifecyclePhase.DRAFT,
      name,
      symbol,
      activity,
      socials: [],
      images: {},
      deployments: {},
      units: [],
      agents: [],
      params,
      tokenomics: {
        initialChain: chains[this.chainId].name,
        funding,
      },
      deployer: this.from,
    };

    this.validate(dao);

    this.daos[dao.symbol] = dao;
    this.usedSymbols[dao.symbol] = true;
    this._emit("DAO created");
    this._sendCrossChainMessage(CROSS_CHAIN_MESSAGE.NEW_DAO_SYMBOL, {
      symbol,
    });
    return dao;
  }

  /** Add live compatible DAO */
  addLiveDAO(dao: IDAO) {
    // todo _onlyVerifier
    this.validate(dao);
    this.daos[dao.symbol] = dao;
    this.usedSymbols[dao.symbol] = true;
    this._emit("DAO created");
    this._sendCrossChainMessage(CROSS_CHAIN_MESSAGE.NEW_DAO_SYMBOL, {
      symbol: dao.symbol,
    });
  }

  /** Change lifecycle phase of a DAO */
  changePhase(symbol: string) {
    // anybody can call this

    const dao = this.getDao(symbol);
    const currentTasks = this.tasks(symbol);
    if (currentTasks.length > 0) {
      throw new Error("SolveTasksFirst");
    }

    if (dao.phase === LifecyclePhase.DRAFT) {
      const seed =
        dao.tokenomics.funding[this.getFundingIndex(symbol, FundingType.SEED)];
      if (seed.start > this.blockTimestamp) {
        throw new Error("WaitFundingStart");
      }
      // SEED can be started not later than 1 week after must start
      // todo settings.maxSeedStartDelay
      if (
        seed.start < this.blockTimestamp &&
        this.blockTimestamp - seed.start > 7 * 86400
      ) {
        throw new Error("TooLateSoSetupFundingAgain");
      }
      /*// SEED can be started not later than 1 week before end
      if (seed.end - this.blockTimestamp < 7 * 86400) {
        throw new Error("TooLateSoSetupFundingAgain")
      }*/

      // deploy seedToken
      this.daos[symbol].deployments[this.chainId] = {
        seedToken: "0xProxyDeployed",
      };

      this.daos[symbol].phase = LifecyclePhase.SEED;
    } else if (dao.phase === LifecyclePhase.SEED) {
      const seed =
        dao.tokenomics.funding[this.getFundingIndex(symbol, FundingType.SEED)];
      if (seed.end > this.blockTimestamp) {
        throw new Error("WaitFundingEnd");
      }

      const sucess = seed.raised >= seed.minRaise;

      if (sucess) {
        this.daos[symbol].phase = LifecyclePhase.DEVELOPMENT;
      } else {
        // send all raised back to seeders

        this.daos[symbol].phase = LifecyclePhase.SEED_FAILED;
      }
    } else if (dao.phase === LifecyclePhase.DEVELOPMENT) {
      const tge =
        dao.tokenomics.funding[this.getFundingIndex(symbol, FundingType.TGE)];
      if (tge.start > this.blockTimestamp) {
        throw new Error("WaitFundingStart");
      }

      // deploy tgeToken
      this.daos[symbol].deployments[this.chainId].tgeToken =
        "0xProxyDeployedTge";

      this.daos[symbol].phase = LifecyclePhase.TGE;
    } else if (dao.phase === LifecyclePhase.TGE) {
      const tge =
        dao.tokenomics.funding[this.getFundingIndex(symbol, FundingType.TGE)];

      if (tge.end > this.blockTimestamp) {
        throw new Error("WaitFundingEnd");
      }

      const success = tge.raised >= tge.minRaise;

      if (success) {
        // deploy token, xToken, staking, daoToken
        this.daos[symbol].deployments[this.chainId].token = "0xProxyToken";
        this.daos[symbol].deployments[this.chainId].xToken = "0xProxyXToken";
        this.daos[symbol].deployments[this.chainId].staking = "0xProxyStaking";
        this.daos[symbol].deployments[this.chainId].daoToken =
          "0xProxyDAOToken";

        // todo deploy vesting contracts and allocate token

        // todo seedToken holders became xToken holders by predefined rate

        // todo deploy v2 liquidity from TGE funds at predefined price

        this.daos[symbol].phase = LifecyclePhase.LIVE_CLIFF;
      } else {
        // send all raised TGE funds back to funders

        this.daos[symbol].phase = LifecyclePhase.DEVELOPMENT;
      }
    } else if (dao.phase === LifecyclePhase.LIVE_CLIFF) {
      // if any vesting started then phase changed
      const isVestingStarted = !!dao.tokenomics.vesting?.filter(
        (v) => v.start < this.blockTimestamp,
      ).length;
      if (!isVestingStarted) {
        throw new Error("WaitVestingStart");
      }

      this.daos[symbol].phase = LifecyclePhase.LIVE_VESTING;
    } else if (dao.phase === LifecyclePhase.LIVE_VESTING) {
      // if any vesting started then phase changed
      const isVestingEnded = !dao.tokenomics.vesting?.filter(
        (v) => v.end > this.blockTimestamp,
      ).length;
      if (!isVestingEnded) {
        throw new Error("WaitVestingEnd");
      }

      this.daos[symbol].phase = LifecyclePhase.LIVE;
    }
  }

  /** @throws Error */
  updateImages(symbol: string, images: IDAOImages) {
    // check DAO symbol
    const dao = this.getDao(symbol);

    // instant execute for DRAFT
    if (dao.phase === LifecyclePhase.DRAFT) {
      this._onlyOwnerOf(symbol);
      this._updateImages(symbol, images);
      return true;
    }

    // create proposal for other phases
    return this._proposeAction(symbol, DAOAction.UPDATE_IMAGES, {
      images,
    });
  }

  private _updateImages(symbol: string, images: IDAOImages) {
    this.daos[symbol].images = images;
    this._emit(`Action ${DAOAction.UPDATE_IMAGES}`);
  }

  /** @throws Error */
  updateSocials(symbol: string, socials: string[]) {
    // check DAO symbol
    const dao = this.getDao(symbol);

    // instant execute for DRAFT
    if (dao.phase === LifecyclePhase.DRAFT) {
      this._onlyOwnerOf(symbol);
      this._updateSocials(symbol, socials);
      return true;
    }

    // create proposal for other phases
    return this._proposeAction(symbol, DAOAction.UPDATE_SOCIALS, {
      socials,
    });
  }

  private _updateSocials(symbol: string, socials: string[]) {
    this.daos[symbol].socials = socials;
    this._emit(`Action ${DAOAction.UPDATE_SOCIALS}`);
  }

  /** @throws Error */
  updateUnits(symbol: string, units: IUnit[]): string | true {
    // check DAO symbol
    const dao = this.getDao(symbol);

    // instant execute for DRAFT
    if (dao.phase === LifecyclePhase.DRAFT) {
      this._onlyOwnerOf(symbol);
      this._updateUnits(symbol, units);
      return true;
    }

    // create proposal for other phases
    return this._proposeAction(symbol, DAOAction.UPDATE_UNITS, {
      units,
    });
  }

  private _updateUnits(symbol: string, units: IUnit[]) {
    this.daos[symbol].units = units;
    this._emit(`Action ${DAOAction.UPDATE_UNITS}`);
  }

  /** @throws Error */
  updateFunding(symbol: string, funding: IFunding): string | true {
    // check DAO symbol
    const dao = this.getDao(symbol);

    // validate payload
    this._validateFunding(dao.phase, [funding]);

    // instant execute for DRAFT
    if (dao.phase === LifecyclePhase.DRAFT) {
      this._onlyOwnerOf(symbol);
      this._updateFunding(symbol, funding);
      return true;
    }

    // create proposal for other phases
    return this._proposeAction(symbol, DAOAction.UPDATE_FUNDING, {
      funding,
    });
  }

  private _updateFunding(symbol: string, funding: IFunding) {
    const dao = this.getDao(symbol);

    const fundingExist =
      dao.tokenomics.funding.filter((f) => f.type === funding.type).length ===
      1;
    if (fundingExist) {
      const fundingIndex = this.getFundingIndex(symbol, funding.type);
      this.daos[symbol].tokenomics.funding[fundingIndex] = funding;
    } else {
      this.daos[symbol].tokenomics.funding.push(funding);
    }

    this._emit(`Action ${DAOAction.UPDATE_FUNDING}`);
  }

  updateVesting(symbol: string, vestings: IVesting[]) {
    // check DAO symbol
    const dao = this.getDao(symbol);

    // validate
    this._validateVesting(dao.phase, vestings);

    // instant execute for DRAFT
    if (dao.phase === LifecyclePhase.DRAFT) {
      this._onlyOwnerOf(symbol);
      this._updateVesting(symbol, vestings);
      return true;
    }

    // create proposal for other phases
    return this._proposeAction(symbol, DAOAction.UPDATE_VESTING, {
      vestings,
    });
  }

  private _updateVesting(symbol: string, vestings: IVesting[]) {
    this.daos[symbol].tokenomics.vesting = vestings;
    this._emit(`Action ${DAOAction.UPDATE_VESTING}`);
  }

  fund(symbol: string, amount: number) {
    // todo settings.minFunding
    const dao = this.getDao(symbol);
    if (dao.phase === LifecyclePhase.SEED) {
      const seedIndex = this.getFundingIndex(symbol, FundingType.SEED);
      const seed = dao.tokenomics.funding[seedIndex];
      if (seed.raised + amount >= seed.maxRaise) {
        throw new Error("RaiseMaxExceed");
      }

      // transfer amount of exchangeAsset to seedToken contract
      this.daos[symbol].tokenomics.funding[seedIndex].raised += amount;

      // mint seedToken to user

      return;
    }

    if (dao.phase === LifecyclePhase.TGE) {
      const tgeIndex = this.getFundingIndex(symbol, FundingType.TGE);
      const tge = dao.tokenomics.funding[tgeIndex];
      if (tge.raised + amount >= tge.maxRaise) {
        throw new Error("RaiseMaxExceed");
      }

      // transfer amount of exchangeAsset to tgeToken contract

      this.daos[symbol].tokenomics.funding[tgeIndex].raised += amount;

      // mint tgeToken to user

      return;
    }

    throw new Error("NotFundingPhase");
  }

  /** @throws Error */
  absorbingOffer(
    absorberSymbol: string,
    absorbTargetSymbol: string,
    amount: number,
  ) {
    this._onlyOwnerOf(absorberSymbol);

    // absorb target must exist in this chain
    /*const absorbTarget = */ this.getDao(absorbTargetSymbol);

    if (amount < this.settings.minAbsorbOfferUsd) {
      throw new Error(`TooLowAbsorbOfferAmount(${amount})`);
    }

    // transfer amount from absorber to OS contract for escrow

    // start voting for target DAO
    this.absorbing.push({
      absorberSymbol,
      absorbTargetSymbol,
      amount,
      status: VotingStatus.VOTING,
    });

    this._emit(`Action ${DAOAction.ABSORBING_OFFER}`);
  }

  /** Approve absorbing offer after voting succeed */
  /** @throws Error */
  absorbingApprove(absorberSymbol: string, absorbTargetSymbol: string) {
    this._onlyOwnerOf(absorbTargetSymbol);
    for (let k = 0; k < this.absorbing.length; k++) {
      const absorbing = this.absorbing[k];
      if (
        absorbing.absorberSymbol === absorberSymbol &&
        absorbing.absorbTargetSymbol === absorbTargetSymbol &&
        absorbing.status === VotingStatus.VOTING
      ) {
        const target = this.getDao(absorbing.absorbTargetSymbol);
        for (const symbol of Object.keys(this.daos)) {
          if (symbol === absorberSymbol) {
            // absorb units
            for (const unit of target.units) {
              this.daos[symbol].units.push(unit);
            }
          }
        }

        for (const symbol of Object.keys(this.daos)) {
          if (symbol === absorbTargetSymbol) {
            // absorb units
            this.daos[symbol].units = [];
            // set absorber
            this.daos[symbol].absorberSymbol = absorberSymbol;
            // change phase
            this.daos[symbol].phase = LifecyclePhase.ABSORBED;
          }
        }

        // transfer offer amount to target DAO holders (airdrop/claim)

        this.absorbing[k].status = VotingStatus.APPROVED;

        this._emit(`Action ${DAOAction.ABSORBING_APPROVE}`);

        this._sendCrossChainMessage(CROSS_CHAIN_MESSAGE.DAO_ABSORBED, {
          absorberSymbol,
          absorbTargetSymbol,
        });

        return;
      }
    }
    throw new Error("AbsorbingOfferNotFound");
  }

  /** Reject absorbing offer after voting succeed */
  /** @throws Error */
  absorbingReject(absorberSymbol: string, absorbTargetSymbol: string) {
    this._onlyOwnerOf(absorbTargetSymbol);
    for (let i = 0; i < this.absorbing.length; i++) {
      if (
        this.absorbing[i].absorberSymbol === absorberSymbol &&
        this.absorbing[i].absorbTargetSymbol === absorbTargetSymbol &&
        this.absorbing[i].status === VotingStatus.VOTING
      ) {
        this.absorbing[i].status = VotingStatus.REJECTED;
        this._emit(`Action ${DAOAction.ABSORBING_REJECT}`);
        return;
      }
    }
    throw new Error("AbsorbingOfferNotFound");
  }

  private _proposeAction(
    symbol: string,
    action: DAOAction,
    payload: any = {},
  ): string {
    const dao = this.getDao(symbol);

    // todo check for initial chain
    // todo get user power
    // todo check proposalThreshold
    // todo validate payload

    const proposalId = Math.round(Math.random() * Math.random()).toString();

    this.proposals[proposalId] = {
      id: proposalId,
      created: this.blockTimestamp,
      action,
      symbol,
      payload,
      status: VotingStatus.VOTING,
    };

    return proposalId;
  }

  receiveVotingResults(proposalId: string, succeed: boolean) {
    const proposal = this.proposals[proposalId];
    if (!proposal) {
      throw new Error("IncorrectProposal");
    }
    if (proposal.status !== VotingStatus.VOTING) {
      throw new Error("AlreadyReceived");
    }
    this.proposals[proposalId].status = succeed
      ? VotingStatus.APPROVED
      : VotingStatus.REJECTED;

    if (succeed) {
      if (proposal.action === DAOAction.UPDATE_IMAGES) {
        this._updateImages(proposal.symbol, proposal.payload.images);
      }
      if (proposal.action === DAOAction.UPDATE_SOCIALS) {
        this._updateSocials(proposal.symbol, proposal.payload.socials);
      }
      if (proposal.action === DAOAction.UPDATE_UNITS) {
        this._updateUnits(proposal.symbol, proposal.payload.units);
      }
      if (proposal.action === DAOAction.UPDATE_FUNDING) {
        this._updateFunding(proposal.symbol, proposal.payload.funding);
      }
      if (proposal.action === DAOAction.UPDATE_VESTING) {
        this._updateVesting(proposal.symbol, proposal.payload.vestings);
      }
      // todo other actions
    }
  }

  /** @throws Error */
  tasks(symbol: string): ITask[] {
    const dao: IDAO = this.getDao(symbol);
    const r: ITask[] = [];

    if (dao.phase === LifecyclePhase.DRAFT) {
      // images
      if (!dao.images.seedToken || !dao.images.token) {
        r.push({
          name: "Need images of token and seedToken",
        });
      }

      // socials
      if (dao.socials.length < 2) {
        r.push({
          name: "Need at least 2 socials",
        });
      }

      // units projected
      if (dao.units.length === 0) {
        r.push({
          name: "Need at least 1 projected unit",
        });
      }
    } else if (dao.phase === LifecyclePhase.SEED) {
      const seedIndex = this.getFundingIndex(symbol, FundingType.SEED);
      if (
        dao.tokenomics.funding[seedIndex].raised <
          dao.tokenomics.funding[seedIndex].minRaise &&
        dao.tokenomics.funding[seedIndex].end > this.blockTimestamp
      ) {
        r.push({
          name: "Need attract minimal seed funding",
        });
      }
    } else if (dao.phase === LifecyclePhase.DEVELOPMENT) {
      // check funding
      const tgeExist =
        dao.tokenomics.funding.filter((f) => f.type === FundingType.TGE)
          .length === 1;
      if (!tgeExist) {
        r.push({
          name: "Need add pre-TGE funding",
        });
      }

      // images
      if (!dao.images.tgeToken || !dao.images.xToken || !dao.images.daoToken) {
        r.push({
          name: "Need images of all DAO tokens",
        });
      }

      // setup vesting allocations
      if (!dao.tokenomics.vesting?.length) {
        r.push({
          name: "Need vesting allocations",
        });
      }

      if (dao.units.filter((u) => u.status === UnitStatus.LIVE).length === 0) {
        r.push({
          name: "Run revenue generating units",
        });
      }
    } else if (dao.phase === LifecyclePhase.TGE) {
      const tgeIndex = this.getFundingIndex(symbol, FundingType.TGE);
      if (
        dao.tokenomics.funding[tgeIndex].raised <
          dao.tokenomics.funding[tgeIndex].minRaise &&
        dao.tokenomics.funding[tgeIndex].end > this.blockTimestamp
      ) {
        r.push({
          name: "Need attract minimal TGE funding",
        });
      }
    } else if (dao.phase === LifecyclePhase.LIVE_CLIFF) {
      // establish and improve
      // build money markets
      // bridge to chains
    } else if (dao.phase === LifecyclePhase.LIVE_VESTING) {
      // distribute vesting funds to leverage token
    } else if (dao.phase === LifecyclePhase.LIVE) {
      // lifetime revenue generating for DAO holders till possible absorbing
    }

    return r;
  }

  /** Strict on-chain validation */
  /** @throws Error */
  validate(dao: IDAO) {
    this._validateName(dao.name);
    this._validateSymbol(dao.symbol);
    if (
      dao.params.vePeriod < this.settings.minVePeriod ||
      dao.params.vePeriod > this.settings.maxVePeriod
    ) {
      throw new Error(`VePeriod(${dao.params.vePeriod})`);
    }
    this._validatePvpFee(dao.params.pvpFee);
    if (!dao.tokenomics.funding.length) {
      throw new Error("NeedFunding");
    }

    // todo: check activity are correct
    // todo: check funding array has unique funding types
    // todo: check funding dates
    // todo: check funding raise goals
  }

  /** @throws Error */
  getDao(symbol: string): IDAO {
    if (this.daos[symbol]) {
      return this.daos[symbol];
    }
    throw new Error("DAONotFound");
  }

  getDaoOwner(symbol: string): string {
    const dao = this.getDao(symbol);

    if (dao.phase === LifecyclePhase.ABSORBED) {
      return this.getDaoOwner(dao.absorberSymbol as string) as string;
    }

    if (dao.phase === LifecyclePhase.DRAFT) {
      return dao.deployer;
    }

    if (
      [
        LifecyclePhase.SEED,
        LifecyclePhase.DEVELOPMENT,
        LifecyclePhase.TGE,
      ].includes(dao.phase)
    ) {
      return dao.deployments[
        getChainByName(dao.tokenomics.initialChain).chainId
      ].seedToken as string;
    }

    return dao.deployments[this.chainId]?.daoToken as string;
  }

  getFundingIndex(symbol: string, type: FundingType) {
    const dao = this.getDao(symbol);
    for (let i = 0; i < dao.tokenomics.funding.length; i++) {
      if (type === dao.tokenomics.funding[i].type) {
        return i;
      }
    }
    throw new Error("FundingNotFound");
  }

  warpDays(days: number = 7) {
    this.blockTimestamp += days * 86400;
  }

  /** @throws Error */
  private _onlyOwnerOf(symbol: string) {
    if (this.from != this.getDaoOwner(symbol)) {
      throw new Error(`YouAreNotOwnerOf(${symbol})`);
    }
  }

  private _emit(event: string) {
    this.events.push(event);
  }

  private _validateName(name: string) {
    if (
      name.length < this.settings.minNameLength ||
      name.length > this.settings.maxNameLength
    ) {
      throw new Error(`NameLength(${name.length})`);
    }
  }

  private _validateSymbol(symbol: string) {
    if (
      symbol.length < this.settings.minSymbolLength ||
      symbol.length > this.settings.maxSymbolLength
    ) {
      throw new Error(`SymbolLength(${symbol.length})`);
    }
    if (this.usedSymbols[symbol]) {
      throw new Error(`SymbolNotUnique(${symbol})`);
    }
  }

  private _validatePvpFee(pvpFee: number) {
    if (pvpFee < this.settings.minPvPFee || pvpFee > this.settings.maxPvPFee) {
      throw new Error(`PvPFee(${pvpFee})`);
    }
  }

  private _validateFunding(daoPhase: LifecyclePhase, fundings: IFunding[]) {
    for (const funding of fundings) {
      if (
        funding.type === FundingType.SEED &&
        daoPhase !== LifecyclePhase.DRAFT
      ) {
        throw new Error("TooLateToUpdateSuchFunding");
      }
      if (
        funding.type === FundingType.TGE &&
        ![
          LifecyclePhase.DRAFT,
          LifecyclePhase.SEED,
          LifecyclePhase.DEVELOPMENT,
        ].includes(daoPhase)
      ) {
        throw new Error("TooLateToUpdateSuchFunding");
      }

      // todo check min round duration
      // todo check max round duration
      // todo check start date delay
      // todo check min amount
      // todo check max amount
    }
  }

  private _validateVesting(daoPhase: LifecyclePhase, vestings: IVesting[]) {
    if (
      [
        LifecyclePhase.LIVE_CLIFF,
        LifecyclePhase.LIVE_VESTING,
        LifecyclePhase.LIVE,
      ].includes(daoPhase)
    ) {
      throw new Error("TooLateToUpdateVesting");
    }
    for (const vesting of vestings) {
      // todo check vesting consistency
    }
  }

  private _sendCrossChainMessage(type: CROSS_CHAIN_MESSAGE, payload: any = {}) {
    // todo some stub
  }
}

export enum DAOAction {
  UPDATE_IMAGES = 0,
  UPDATE_SOCIALS,
  UPDATE_NAMING,
  UPDATE_UNITS,
  UPDATE_FUNDING,
  UPDATE_VESTING,
  ABSORBING_OFFER,
  ABSORBING_APPROVE,
  ABSORBING_REJECT,
}

interface IOSSettings {
  priceDao: number;
  priceUnit: number;
  priceOracle: number;
  priceBridge: number;
  minNameLength: number;
  maxNameLength: number;
  minSymbolLength: number;
  maxSymbolLength: number;
  minVePeriod: number;
  maxVePeriod: number;
  minPvPFee: number;
  maxPvPFee: number;
  minFundingDuration: number;
  maxFundingDuration: number;
  minAbsorbOfferUsd: number;
}

interface IAbsorbing {
  status: VotingStatus;
  absorberSymbol: string;
  absorbTargetSymbol: string;
  amount: number;
}

enum VotingStatus {
  VOTING = 0,
  APPROVED,
  REJECTED,
}

enum CROSS_CHAIN_MESSAGE {
  NEW_DAO_SYMBOL = 0,
  DAO_RENAME_SYMBOL,
  DAO_BRIDGED,
  DAO_ABSORBED,
}

interface ITask {
  name: string;
}

interface IProposal {
  id: string;
  created: number;
  symbol: string;
  action: DAOAction;
  payload: any;
  status: VotingStatus;
}
