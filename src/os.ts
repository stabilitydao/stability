/**
 Stability OS MVP prototype.
*/

import { ChainName } from "./chains";
import { IAgent } from "./agents";
import { StrategyShortId } from "./strategies";
import { LendingEngine } from "./lending";
import { IBuilderActivity, IBuildersMemory } from "./activity/builder";
import { RevenueChart } from "./api.types";

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

  /** Community socials */
  socials: string[];

  /** Activities of the organization. */
  activity: Activity[];

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
    /** Where initial deployment became */
    initialChain?: ChainName;
    /** Fundraising */
    funding: {
      seed?: {
        start: number | string;
        end: number | string;
        minRaise: number;
        maxRaise: number;
        raised?: number;
      };
      tge?: {
        start: number | string;
        end: number | string;
        claim: number | string;
        minRaise: number;
        maxRaise: number;
        raised?: number;
      };
    };
    /** Vesting allocations  */
    vesting?: IVesting[];
  };

  /** DAOs engaging BUILDER activity have  */
  builderActivity?: IBuilderActivity;
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
  /** Vested escrow period */
  lockPeriod: number;
  /** PvP fee */
  instantExitFee: number;
  /** Minimal power in chain to have voting rights */
  minPower?: number;
  /** Bribe share for Tokenomics Transactions (vested funds spending) */
  ttBribe?: number;
  /** Share of total DAO revenue going to accidents compensations */
  recoveryShare?: number;
  /** Minimal total voting power (self and delegated) need to create a proposal */
  proposalThreshold?: number;
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
  /** Components of the Unit */
  components: { [category in UnitComponentCategory]?: UnitComponent[] };
  /** The share of a Unit's profit received by the DAO to which it belongs. 100 - 100%. */
  revenueShare: number;
  /** A unique emoji for the shortest possible representation of a Unit in the Stability OS. */
  emoji?: string;
  /** Frontend endpoints of Unit */
  ui?: IUnitUILink[];
  api?: string[];
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

export function getTokensNaming(name: string, symbol: string) {
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
