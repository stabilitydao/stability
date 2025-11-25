/**
 Stability OS MVP prototype
 Self-developing DAOs Operating System
*/

import { ChainName } from "./chains";
import { AgentRole, emptyRuntime, IAgent } from "./agents";
import { strategies, StrategyShortId, StrategyState } from "./strategies";
import { LendingEngine } from "./lending";
import { ArtifactType, IBuilderActivity } from "./activity/builder";

export const STABILITY_OS_TYPES_VERSION = "v2025.11.22";

/**
 Represents a DAO running on Stability OS.
 @interface
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

export const enum UnitType {
  DEFI_PROTOCOL = "DEFI_PROTOCOL",
  SAAS = "SAAS",
  MEV = "MEV",
}

export const enum UnitStatus {
  RESEARCH = "RESEARCH",
  BUILDING = "BUILDING",
  LIVE = "LIVE",
}

export interface IUnitUILink {
  href: `https://${string}`;
  title: string;
}

export type UnitComponent = StrategyShortId | ChainName | LendingEngine;

export function getUnitById(unitId: string): IUnit | undefined {
  for (const dao of daos) {
    for (const unit of dao.units) {
      if (unit.unitId === unitId) {
        return unit;
      }
    }
  }
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
        status: UnitStatus.LIVE,
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
        emoji: "🧊",
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
        status: UnitStatus.LIVE,
        revenueShare: 25,
        type: UnitType.DEFI_PROTOCOL,
        components: {
          [UnitComponentCategory.ENGINE_SUPPORT]: [LendingEngine.AAVE_3_0_2],
        },
        emoji: "🏦",
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
        status: UnitStatus.BUILDING,
        revenueShare: 100,
        type: UnitType.SAAS,
        components: {},
        emoji: "🍀",
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
    builderActivity: {
      multisig: [
        "matic:0x36780E69D38c8b175761c6C5F8eD42E61ee490E9",
        "sonic:0xF564EBaC1182578398E94868bea1AbA6ba339652",
        "avax:0x06111E02BEb85B57caebEf15F5f90Bc82D54da3A",
      ],
      repo: [
        "stabilitydao/stability",
        "stabilitydao/stability-contracts",
        "stabilitydao/stability-ui",
        "stabilitydao/stability-subgraph",
        "stabilitydao/lending-deploy",
        "stabilitydao/stability-os",
        "stabilitydao/stability-os-ui",
        "stabilitydao/stability-node-pro",
      ],
      burnRate: [
        {
          period: "Sep, 2025",
          usdAmount: 32200,
        },
        {
          period: "Oct, 2025",
          usdAmount: 31100,
        },
      ],
      workers: ["a17", "omriss", "DevTeaLeaf", "nikita-dogil", "iammrjude"],
      conveyors: [
        {
          unitId: "stability:stabilityFarm",
          componentCategory: UnitComponentCategory.DEFI_STRATEGY,
          name: "Strategies",
          symbol: "📜",
          type: "Task",
          label: {
            name: "conveyor:STRATEGY",
            description:
              "Developing and deploying a new DeFi asset management strategy on the **Strategies** conveyor belt.",
            color: "#cc02ff",
          },
          issueTitleTemplate:
            "📜 %STRATEGY_SHORT_ID% | %STRATEGY_ID%: %STEP_NAME%",
          taskIdIs: "%STRATEGY_SHORT_ID%",
          description: "Implement and integrate new strategy smart contract",
          steps: [
            {
              name: "Prepare",
              issues: [
                {
                  repo: "stabilitydao/stability",
                  issueTemplate: "strategy.md",
                },
              ],
              artifacts: [ArtifactType.LIBRARY_RELEASE_TAG],
            },
            {
              name: "Contract",
              issues: [
                {
                  repo: "stabilitydao/stability-contracts",
                  generator: "yarn issue",
                },
              ],
              artifacts: [ArtifactType.CONTRACT_ADDRESS],
            },
            {
              name: "Integrate",
              issues: [
                {
                  repo: "stabilitydao/stability",
                  taskList: [
                    "Setup platform in chains",
                    "Add farms / strategy init params",
                    "Deploy vaults",
                    "Do post setup (toggleDistributorOperator, etc)",
                    "Add all necessary tokens to `src/stability.tokenlist.json`, `src/assets.ts`",
                    "Set status READY to strategy in `src/strategies.ts`",
                  ],
                },
              ],
              artifacts: [ArtifactType.LIBRARY_RELEASE_TAG],
            },
            {
              name: "Backend",
              issues: [
                {
                  repo: "stabilitydao/stability-node-pro",
                  taskList: ["Update library"],
                },
              ],
            },
            {
              name: "Frontend",
              issues: [
                {
                  repo: "stabilitydao/stability-ui",
                  taskList: [
                    "Update library",
                    "Generate and fill new vault OG images",
                  ],
                },
              ],
            },
          ],
        },
        {
          unitId: "stability:stabilityFarm",
          componentCategory: UnitComponentCategory.CHAIN_SUPPORT,
          name: "Chains",
          symbol: "⛓️",
          type: "Task",
          label: {
            name: "conveyor:CHAIN",
            description: "Chain integration by Chains conveyor",
            color: "#b1dc13",
          },
          issueTitleTemplate: "⛓️ %CHAIN_NAME% [%CHAIN_ID%]: %STEP_NAME%",
          taskIdIs: "%CHAIN_NAME%",
          description: "Add chain support",
          steps: [
            {
              name: "Prepare",
              issues: [
                {
                  repo: "stabilitydao/stability",
                  taskList: [
                    "Add chain image to static repo",
                    "add new chain to `src/chains.ts` with status `ChainStatus.DEVELOPMENT`",
                    "fill multisig",
                    "fill assets",
                    "fill integrations",
                  ],
                },
              ],
              artifacts: [ArtifactType.LIBRARY_RELEASE_TAG],
            },
            {
              name: "Contracts",
              issues: [
                {
                  repo: "stabilitydao/stability-contracts",
                  generator:
                    "🎇 Run `yarn issue` in library repo, fill issue id to `src/chains.ts`.",
                },
              ],
              artifacts: [ArtifactType.CONTRACT_ADDRESS],
            },
            {
              name: "Subgraph",
              issues: [
                {
                  repo: "stabilitydao/stability-subgraph",
                  taskList: ["add chain support", "deploy subgraph"],
                },
              ],
              result: "subgraph endpoint url",
            },
            {
              name: "Deployment",
              issues: [
                {
                  repo: "stabilitydao/stability",
                  taskList: ["Add chain to `src/deployments.ts`"],
                },
              ],
              artifacts: [ArtifactType.LIBRARY_RELEASE_TAG],
            },
            {
              name: "Backend",
              issues: [
                {
                  repo: "stabilitydao/stability-node-pro",
                  taskList: ["Show chain in API", "Setup TxSender"],
                },
              ],
              result: "API reply has chain data",
            },
            {
              name: "Frontend",
              issues: [
                {
                  repo: "stabilitydao/stability-ui",
                  taskList: [
                    "add chain support to dapp",
                    "show chain in vaults filter",
                  ],
                },
              ],
              result: "beta UI show chain",
            },
          ],
        },
      ],
      pools: [
        {
          unitIds: ["stability:stabilityFarm", "stability:stabilityMarket"],
          name: "Products",
          label: {
            name: "builder:PRODUCT",
            description: "New product request",
            color: "#02a3fc",
          },
          productTypes: ["CVault", "MetaVault", "Lending market"],
          artifacts: [ArtifactType.URL_UI],
        },
        {
          unitIds: ["stability:stabilityFarm", "stability:stabilityMarket"],
          name: "Features",
          label: {
            name: "builder:FEAT",
            description: "",
            color: "#3b15d2",
          },
        },
        {
          unitIds: ["stability:stabilityFarm", "stability:stabilityMarket"],
          name: "Maintenance",
          label: {
            name: "builder:MAINTENANCE",
            description: "",
            color: "#da7130",
          },
        },
        {
          unitIds: ["os"],
          name: "Stability OS",
          label: {
            name: "builder:OS",
            description: "",
            color: "#00b243",
          },
        },
      ],
    },
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
        status: UnitStatus.RESEARCH,
        revenueShare: 100,
        type: UnitType.MEV,
        components: {
          [UnitComponentCategory.MEV_STRATEGY]: [],
        },
        emoji: "🥷",
      },
      {
        unitId: "mevbot:arb",
        name: "Arbitrager",
        status: UnitStatus.RESEARCH,
        revenueShare: 100,
        type: UnitType.MEV,
        components: {
          [UnitComponentCategory.MEV_STRATEGY]: [],
        },
        emoji: "🧑‍💼",
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
      workers: ["a17", "iammrjude"],
    },
  },
];
