/**
 Stability OS MVP prototype
 Self-developing DAOs Operating System
*/

import { ChainName } from "./chains";
import { stabilityBuilderData } from "./builder";
import { AgentRole, emptyRuntime, IAgent } from "./agents";
import { strategies, StrategyShortId, StrategyState } from "./strategies";
import { LendingEngine } from "./lending";

export const STABILITY_OS_TYPES_VERSION = "v2025.11.22";

/**
 * Represents a DAO running on Stability OS.
 * @interface
 */
export interface IDAO {
  /** Name of the DAO, used in token names. Without DAO word. */
  name: string;

  /** Activities of the organization. */
  activity: Activity[];

  /** Revenue generating units owned by the organization. */
  units: IUnit[];

  /** Operating agents managed by the organization. */
  agents: IAgent[];

  /** Constants and state of DAO tokenization in blockchains. */
  tokenization: {
    /**
     * Tradeable interchain ERC-20 token symbol.
     * Lowercased used as slug - unique ID of DAO in OS.
     */
    tokenSymbol: string;

    /** VE-tokenomics entry token symbol. */
    xSymbol: string;

    /** Governance token symbol. */
    daoSymbol: string;

    /** The tokenization state changes as tokenomics milestones are passed. */
    state: TokenizationState;

    eta?: string;
  };

  /** On-chain DAO parameters for tokenomics, governance and revenue sharing */
  params: IDAOParameters;

  /** DAOs engaging BUILDER activity have  */
  builderActivity?: IBuilderActivity;

  emoji?: string;
}

export const enum Activity {
  DEFI_PROTOCOL_OPERATOR = "DEFI_PROTOCOL_OPERATOR",
  SAAS_OPERATOR = "SAAS_OPERATOR",
  MEV_SEARCHER = "MEV_SEARCHER",
  /** BUILDER is team of engineers managed by DAOs */
  BUILDER = "BUILDER",
}

export const enum TokenizationState {
  /** Initial funding */
  PRE_SEED = "PRE_SEED",
  RESEARCH = "RESEARCH",
  SEED = "SEED",
  BUILDING = "BUILDING",
  TGE = "TGE",
  LIVE_CLIFF = "LIVE_CLIFF",
  LIVE_VESTING = "LIVE_VESTING",
  LIVE = "LIVE",
  ABSORBED = "ABSORBED",
}

export interface IDAOParameters {
  lockPeriod: number;
  instantExitFee: number;
  minPower?: number;
  proposalThreshold?: number;
  sttBribe?: number;
  recoveryShare?: number;
}

export const enum UnitComponentCategory {
  CHAIN_SUPPORT = "CHAIN_SUPPORT",
  ENGINE_SUPPORT = "ENGINE_SUPPORT",
  DEFI_STRATEGY = "DEFI_STRATEGY",
  MEV_STRATEGY = "MEV_STRATEGY",
}

/**
 Revenue generating unit.
*/
export interface IUnit {
  unitId: string;
  name: string;
  revenueShare: number;
  type: UnitType;
  components: { [category in UnitComponentCategory]?: UnitComponent[] };
  ui?: IUnitUILink[];
  api?: string[];
}

export const enum UnitType {
  DEFI_PROTOCOL = "DEFI_PROTOCOL",
  SAAS = "SAAS",
  MEV = "MEV",
}

export interface IUnitUILink {
  href: `https://${string}`;
  title: string;
}

export type UnitComponent = StrategyShortId | ChainName | LendingEngine;

export interface IBuilderActivity {
  /** Safe multisig account of dev team */
  multisig: string[];
  /** Tracked Github repositories where development going on */
  repo: string[];
  burnRate: {
    period: string;
    usdAmount: number;
  }[];
  workers: string[];
  /** Conveyors of unit components. */
  conveyors: IConveyor[];
  /** Pools of development tasks. */
  pools: IPool[];
}

/**
 * Pool of development tasks.
 * @interface
 */
export interface IPool {
  unitIds: string[];
  name: string;
  label: ILabel;
  productTypes?: string[];
  artifacts?: ArtifactType[];
}

export interface IConveyor {
  unitId: string;
  componentCategory: UnitComponentCategory;
  name: string;
  symbol: string;
  type: string;
  label: ILabel;
  description: string;
  issueTitleTemplate: string;
  taskIdIs: string;
  steps: IConveyorStep[];
}

export const enum ArtifactType {
  LIBRARY_RELEASE_TAG = "Library release tag",
  DEPLOYMENT_ADDRESSES = "Deployment addresses",
  URL_UI = "URL to UI page",
  URL_API = "API endpoint",
  URL_STATIC = "Static content URL",
  CONTRACT_ADDRESS = "Address of deployed contract",
}

/*export interface IArtifact {
  type: ArtifactType;
  name?: string;
  value?: any;
}*/

export interface IConveyorStep {
  name: string;
  issues: {
    repo: string;
    taskList?: string[];
    issueTemplate?: string;
    body?: string;
    generator?: string;
  }[];
  artifacts?: ArtifactType[];
  result?: string;
  guide?: string;
}

export interface ILabel {
  name: string;
  description: string;
  color: string;
}

export interface IGithubUser {
  username: string;
  img: string;
}

export interface IIssue {
  repo: string;
  id: number;
  title: string;
  labels: ILabel[];
  assignees: IGithubUser;
  body?: string;
}

export interface IBuilderMemory {
  openIssues: {
    total: { [repo: string]: number };
    pools: { [poolName: string]: IIssue[] };
  };
  conveyors: {
    [conveyorName: string]: {
      [taskId: string]: {
        [stepName: string]: IIssue[];
      };
    };
  };
}

export const daos: IDAO[] = [
  {
    name: "Stability",
    activity: [Activity.DEFI_PROTOCOL_OPERATOR],
    tokenization: {
      state: TokenizationState.LIVE_VESTING,
      tokenSymbol: "STBL",
      xSymbol: "xSTBL",
      daoSymbol: "STBL_DAO",
    },
    units: [
      {
        unitId: "stability:stabilityFarm",
        name: "VaaS",
        revenueShare: 100,
        type: UnitType.DEFI_PROTOCOL,
        components: {
          [UnitComponentCategory.DEFI_STRATEGY]: Object.keys(strategies).filter(
            (s) =>
              strategies[s as StrategyShortId].state !==
              StrategyState.CANCELLED,
          ) as StrategyShortId[],
          [UnitComponentCategory.CHAIN_SUPPORT]: [
            ChainName.SONIC,
            ChainName.AVALANCHE,
            ChainName.PLASMA,
          ],
        },
        ui: [
          {
            href: "https://stability.farm/vaults",
            title: "All Vaults",
          },
          {
            href: "https://stability.farm/metavaults",
            title: "Meta Vaults",
          },
          {
            href: "https://stability.farm/leverage-vaults",
            title: "Leverage Vaults",
          },
        ],
      },
      {
        unitId: "stability:stabilityMarket",
        name: "Lending",
        revenueShare: 25,
        type: UnitType.DEFI_PROTOCOL,
        components: {
          [UnitComponentCategory.ENGINE_SUPPORT]: [LendingEngine.AAVE_3_0_2],
        },
        ui: [
          {
            href: "https://stability.farm/lending",
            title: "Markets",
          },
        ],
      },
    ],
    agents: [
      {
        roles: [AgentRole.OPERATOR],
        name: "Stability Operator",
        telegram: "@stability_dao_bot",
        image: "OPERATOR.png",
        ...emptyRuntime,
        api: ["https://api.stability.farm", "https://api.stabilitydao.org"],
      },
    ],
    params: {
      lockPeriod: 180,
      instantExitFee: 80,
      minPower: 4000,
      proposalThreshold: 100_000,
      sttBribe: 10,
      recoveryShare: 10,
    },
  },
  {
    name: "DeFi Builder",
    activity: [Activity.BUILDER, Activity.SAAS_OPERATOR],
    tokenization: {
      state: TokenizationState.BUILDING,
      tokenSymbol: "BUILDER",
      xSymbol: "xBUILDER",
      daoSymbol: "BUILDER_DAO",
    },
    units: [
      {
        unitId: "os",
        name: "Stability OS",
        revenueShare: 100,
        type: UnitType.SAAS,
        components: {},
      },
    ],
    agents: [
      {
        roles: [AgentRole.OPERATOR],
        name: "Stability OS",
        image: "BUILDER.png",
        ...emptyRuntime,
        api: [],
      },
    ],
    params: {
      lockPeriod: 180,
      instantExitFee: 100,
    },
    builderActivity: stabilityBuilderData,
  },
  {
    name: "MEV Fighter",
    activity: [Activity.BUILDER, Activity.MEV_SEARCHER],
    tokenization: {
      state: TokenizationState.PRE_SEED,
      tokenSymbol: "MEVBOT",
      xSymbol: "xMEVBOT",
      daoSymbol: "MEVBOT_DAO",
    },
    units: [
      {
        unitId: "mevbot:liquidation",
        name: "Liquidator",
        revenueShare: 100,
        type: UnitType.MEV,
        components: {},
      },
      {
        unitId: "mevbot:arb",
        name: "Arbitrager",
        revenueShare: 100,
        type: UnitType.MEV,
        components: {},
      },
    ],
    agents: [
      {
        roles: [AgentRole.OPERATOR],
        name: "MEV Earner",
        ...emptyRuntime,
        api: [],
      },
    ],
    params: {
      lockPeriod: 120,
      instantExitFee: 100,
    },
    builderActivity: {
      multisig: [],
      repo: ["stabilitydao/mevbot"],
      pools: [],
      conveyors: [],
      burnRate: [],
      workers: [],
    },
  },
];
