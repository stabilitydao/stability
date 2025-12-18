import {
  Activity,
  FundingType,
  IDAO,
  IUnit,
  LifecyclePhase,
  UnitComponentCategory,
  UnitStatus,
  UnitType,
} from "./os";
import { strategies, StrategyShortId, StrategyState } from "./strategies";
import { ChainName } from "./chains";
import { LendingEngine } from "./lending";
import { AgentRole, emptyRuntime } from "./agents";
import { ArtifactType } from "./activity/builder";

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
    phase: LifecyclePhase.LIVE_VESTING,
    name: "Stability",
    symbol: "STBL",
    socials: [
      "https://x.com/stabilitydao",
      "https://discord.com/invite/R3nnetWzC9",
      "https://t.me/stabilitydao",
    ],
    activity: [Activity.DEFI_PROTOCOL_OPERATOR],
    images: {
      token: "/stbl.svg",
      xToken: "/xstbl.png",
      daoToken: "/STBL_DAO.png",
    },
    deployments: {
      ["146"]: {
        tgeToken: "0x4D61CB8553bB5Db02DF3bdc6CDa88AA85b32224b",
        token: "0x78a76316F66224CBaCA6e70acB24D5ee5b2Bd2c7",
        xToken: "0x902215dd96a291b256a3aef6c4dee62d2a9b80cb",
        staking: "0x17a7cf838a7c91de47552a9f65822b547f9a6997",
        daoToken: "0x77773Cb473aD1bfE991bA299a127F64b45C17777",
        revenueRouter: "0x23b8cc22c4c82545f4b451b11e2f17747a730810",
        recovery: "0xB8d6019eD82a9e6216c9Bf87cAf145fFe4439b40",
        vesting: {
          ["Investors"]: "0x1a125ff7efdB54dc9EFB4Ad90C552C4C8822b212",
          ["Foundation"]: "0x8C42C261A3104cEEFBb388CFd6C1f0E7c9F22062",
          ["Community"]: "0xEF2CE83527FAE22E0012Efc4d64987C1a51448c5",
          ["Team"]: "0xe6C2AA6e67EF1B806B9Daec7147b113051a445E8",
        },
        tokenBridge: "0xD6a8b05f08834Ed2f205E3d591CD6D1A84b7C19B",
        xTokenBridge: "0x533A0c7869e36D1640D4058Bac4604DB6b4d7AD5",
      },
      ["9745"]: {
        token: "0xfdf91362B7E9330F232e500c0236a02B0DE3e492",
        xToken: "0xF40D0724599282CaF9dfb66feB630e936bC0CFBE",
        staking: "0x601572b91DC054Be500392A6d3e15c690140998D",
        revenueRouter: "0x5AC5b2740F77200CCe6562795cFcf4c3c2aC3745",
        daoToken: "0x87C51aa090587790A5298ea4C2d0DBbcCD0026A6",
        tokenBridge: "0xfdf91362B7E9330F232e500c0236a02B0DE3e492",
        xTokenBridge: "0x4E3F0A27bbF443Ba81FCf17E28F4100f35b1b51B",
      },
    },
    units: [
      {
        unitId: "xstbl",
        name: "PVP",
        status: UnitStatus.LIVE,
        revenueShare: 100,
        type: UnitType.PVP,
        components: {},
      },
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
      vePeriod: 180,
      pvpFee: 80,
      minPower: 4000,
      proposalThreshold: 100_000,
      ttBribe: 10,
      recoveryShare: 10,
    },
    tokenomics: {
      initialChain: ChainName.SONIC,
      funding: [
        {
          type: FundingType.TGE,
          start: 1740700800,
          end: 1741132800,
          minRaise: 250000,
          maxRaise: 500000,
          raised: 500000,
          claim: 1741167300,
        },
      ],
      vesting: [
        {
          name: "Investors",
          allocation: 20000000,
          start: 1756954800,
          end: 1788490800,
        },
        {
          name: "Foundation",
          allocation: 30000000,
          start: 1756954800,
          end: 1883098800,
        },
        {
          name: "Community",
          allocation: 19972000,
          start: 1756954800,
          end: 1883098800,
        },
        {
          name: "Team",
          allocation: 20000000,
          start: 1756954800,
          end: 1883098800,
        },
      ],
    },
    deployer: "0x0",
  },
  {
    phase: LifecyclePhase.DRAFT,
    name: "Host Dev",
    symbol: "HOST",
    socials: ["https://t.me/dao_host"],
    activity: [
      Activity.BUILDER,
      Activity.SAAS_OPERATOR,
      Activity.DEFI_PROTOCOL_OPERATOR,
    ],
    images: {
      token: "/builder.png",
    },
    deployments: {},
    units: [
      {
        unitId: "os",
        name: "dao.host",
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
      vePeriod: 180,
      pvpFee: 100,
    },
    tokenomics: {
      initialChain: ChainName.ETHEREUM,
      funding: [
        {
          type: FundingType.SEED,
          start: 1768521600, // Friday, 16 January 2026
          end: 1776211200, // Wednesday, 15 April 2026
          minRaise: 40000,
          maxRaise: 500000,
          raised: 0,
        },
        {
          type: FundingType.TGE,
          start: 1793577600, // Monday, 2 November 2026
          end: 1794182399, // Sunday, 8 November 2026, 23:59:59
          claim: 1794268800, // Tuesday, 10 November 2026
          minRaise: 400000,
          maxRaise: 1200000,
          raised: 0,
        },
      ],
    },
    deployer: "0x0",
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
        {
          period: "Nov, 2025",
          usdAmount: 31345,
        },
      ],
      workers: [
        {
          github: "a17",
          rate: 65,
        },
        {
          github: "iammrjude",
          rate: 20,
        },
        {
          github: "omriss",
          rate: 50,
        },
        {
          github: "DevTeaLeaf",
          rate: 25,
        },
        {
          github: "nikita-dogil",
          rate: 26,
        },
      ],
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
              artifacts: [ArtifactType.URL_RELEASE],
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
              artifacts: [ArtifactType.URL_RELEASE],
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
              artifacts: [ArtifactType.URL_RELEASE],
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
              artifacts: [ArtifactType.URL_RELEASE],
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
            name: "STBL:PRODUCT",
            description: "New product request",
            color: "#02a3fc",
          },
          description: "Build CVault, MetaVault, Lending market",
          artifacts: [ArtifactType.URL_UI],
        },
        {
          unitIds: ["stability:stabilityFarm", "stability:stabilityMarket"],
          name: "Features",
          label: {
            name: "STBL:FEAT",
            description: "",
            color: "#3b15d2",
          },
        },
        {
          unitIds: ["stability:stabilityFarm", "stability:stabilityMarket"],
          name: "Maintenance",
          label: {
            name: "STBL:MAINTENANCE",
            description: "",
            color: "#da7130",
          },
        },
        {
          unitIds: ["os"],
          name: "Stability OS",
          label: {
            name: "BUILDER:OS",
            description: "",
            color: "#00b243",
          },
        },
      ],
    },
  },
  {
    phase: LifecyclePhase.DRAFT,
    name: "MEV Fighter",
    symbol: "MEVBOT",
    socials: [],
    activity: [Activity.BUILDER, Activity.MEV_SEARCHER],
    images: {
      token: "/mevbot.jpg",
    },
    deployments: {},
    units: [
      {
        unitId: "mevbot:liquidation",
        name: "Liquidation",
        status: UnitStatus.RESEARCH,
        revenueShare: 100,
        type: UnitType.MEV,
        components: {
          [UnitComponentCategory.MEV_STRATEGY]: [],
        },
        emoji: "🐺",
      },
      {
        unitId: "mevbot:arb",
        name: "Arbitrage",
        status: UnitStatus.RESEARCH,
        revenueShare: 100,
        type: UnitType.MEV,
        components: {
          [UnitComponentCategory.MEV_STRATEGY]: [],
        },
        emoji: "🦄",
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
      vePeriod: 120,
      pvpFee: 100,
    },
    tokenomics: {
      initialChain: ChainName.PLASMA,
      funding: [
        {
          type: FundingType.SEED,
          start: 1767225600,
          end: 1774915200,
          minRaise: 50000,
          maxRaise: 250000,
          raised: 0,
        },
      ],
    },
    deployer: "0x0",
    builderActivity: {
      multisig: [],
      repo: ["stabilitydao/mevbot"],
      pools: [],
      conveyors: [],
      burnRate: [],
      workers: [
        {
          github: "a17",
        },
        {
          github: "iammrjude",
        },
      ],
    },
  },
];
