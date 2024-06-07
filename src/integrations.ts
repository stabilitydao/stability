import {StrategyShortId} from "./strategies";
import {NetworkId} from "./networks";

export type DeFiOrganization = {
  status: IntegrationStatus
  name: string
  website: string
  protocols: { [protocolId: string]: DeFiProtocol }
  defiLlama: string
  github?: string
}

export type DeFiProtocol = {
  name: string
  category: DefiCategory
  networks: NetworkId[],
  strategies?: StrategyShortId[]
  adapters?: string[]
  coreContracts?: string[]
}

export enum IntegrationStatus {
  LIVE = 'Live',
  USE_VIA_LIVE = 'Use via live',
  AWAITING_DEPLOYMENT = 'Awaiting Deployment',
  DEVELOPMENT = 'Development',
  ROADMAP = 'In Roadmap',
  POSSIBLE = 'Possible',
  PROPOSED = 'Proposed integration',
  DECLINED = 'Declined',
}

export enum DefiCategory {
  AMM = 'AMM',
  ALM = 'ALM',
  LENDING = 'Lending',
  DEX_AGG = 'DeX agg',
  YIELD_AGG = 'Yield agg',
  VE_AGG = 'Boost VE-agg',
  ORACLE = 'Oracle',
  REWARDING = 'Rewarding',
  VAULTS_ERC4626 = 'Vaults ERC-4626',
  BRIDGE = 'Bridge',
  LST = 'Liquid staking',
}

export const integrations: { [org: string]: DeFiOrganization } = {
  // oracle
  chainlink: {
    status: IntegrationStatus.LIVE,
    name: 'ChainLink',
    website: 'https://chain.link',
    protocols: {
      chainlink: {
        name: 'Chainlink',
        category: DefiCategory.ORACLE,
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.BASE,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.AVALANCHE,
          NetworkId.BSC,
          NetworkId.CELO,
          NetworkId.FANTOM,
          NetworkId.LINEA,
          NetworkId.GNOSIS,
          NetworkId.OPTIMISM,
          NetworkId.MOONBEAM,
          NetworkId.MOONRIVER,
          NetworkId.POLYGON_ZKEVM,
          NetworkId.ZKSYNC,
          NetworkId.METIS,
          NetworkId.SCROLL,
        ],
        coreContracts: ['PriceReader'],
        adapters: ['ChainLinkAdapter',],
      },
    },
    defiLlama: 'chainlink',
    github: 'smartcontractkit',
  },
  // Rewarding
  angle: {
    status: IntegrationStatus.LIVE,
    name: 'Angle',
    website: 'https://angle.money',
    protocols: {
      merkl: {
        name: 'Merkl',
        category: DefiCategory.REWARDING,
        // networks with active rewards
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.BASE,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.OPTIMISM,
          NetworkId.POLYGON_ZKEVM,
          NetworkId.SCROLL,
          NetworkId.LINEA,
          NetworkId.BLAST,
          NetworkId.IMMUTABLE_ZKEVM,
        ],
        strategies: [StrategyShortId.QSMF, StrategyShortId.DQMF, StrategyShortId.GQMF, StrategyShortId.IRMF, StrategyShortId.GRMF],
      },
    },
    defiLlama: 'angle',
    github: 'AngleProtocol',
  },
  // DeX agg
  oneInch: {
    status: IntegrationStatus.LIVE,
    name: '1inch',
    website: 'https://1inch.io',
    protocols: {
      oneInch: {
        name: '1inch',
        category: DefiCategory.DEX_AGG,
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.BASE,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.OPTIMISM,
          NetworkId.ZKSYNC,
          NetworkId.BSC,
          NetworkId.GNOSIS,
          NetworkId.AVALANCHE,
          NetworkId.FANTOM,
          NetworkId.KLAYTN,
          NetworkId.AURORA,
        ],
        coreContracts: ['Zap'],
        strategies: [StrategyShortId.AS1BLS,],
      },
    },
    defiLlama: '1inch-network',
    github: '1inch',
  },
  // DeX
  uniswap: {
    status: IntegrationStatus.LIVE,
    name: "Uniswap",
    website: 'https://uniswap.org',
    protocols: {
      uniswapV3: {
        name: 'Uniswap V3',
        category: DefiCategory.AMM,
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.BASE,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.OPTIMISM,
          NetworkId.BSC,
          NetworkId.AVALANCHE,
          NetworkId.CELO,
          NetworkId.BLAST,
        ],
        adapters: ['UniswapV3Adapter'],
      },
    },
    defiLlama: 'uniswap',
    github: 'Uniswap,,'
  },
  quickswap: {
    status: IntegrationStatus.LIVE,
    name: 'QuickSwap',
    website: 'https://quickswap.exchange',
    protocols: {
      quickswapV3: {
        name: 'QuickSwap V3',
        category: DefiCategory.AMM,
        networks: [
          NetworkId.POLYGON,
          NetworkId.POLYGON_ZKEVM,
          NetworkId.MANTA,
          NetworkId.IMMUTABLE_ZKEVM,
          NetworkId.ASTAR_ZKEVM,
          NetworkId.DOGECHAIN,
          NetworkId.X_LAYER,
          NetworkId.KAVA,
        ],
        strategies: [StrategyShortId.QSMF, StrategyShortId.DQMF, StrategyShortId.GQMF],
        adapters: ['AlgebraAdapter',],
      },
    },
    defiLlama: 'quickswap',
    github: 'QuickSwap',
  },
  retro: {
    status: IntegrationStatus.LIVE,
    name: 'Retro',
    website: 'https://retro.finance',
    protocols: {
      retro: {
        name: 'Retro',
        category: DefiCategory.AMM,
        networks: [NetworkId.POLYGON,],
        strategies: [StrategyShortId.IRMF, StrategyShortId.GRMF],
        adapters: ['UniswapV3Adapter',],
      },
    },
    defiLlama: 'retro',
  },
  curve: {
    status: IntegrationStatus.LIVE,
    name: 'Curve',
    website: 'https://curve.fi',
    protocols: {
      stableSwapNg: {
        name: 'StableSwapNG',
        category: DefiCategory.AMM,
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.BASE,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.AVALANCHE,
          NetworkId.AURORA,
          NetworkId.BSC,
          NetworkId.CELO,
          NetworkId.FANTOM,
          NetworkId.GNOSIS,
          NetworkId.KAVA,
          NetworkId.MOONBEAM,
          NetworkId.OPTIMISM,
          NetworkId.X_LAYER,
          NetworkId.FRAXTAL,
        ],
        strategies: [StrategyShortId.CCF],
        adapters: ['CurveAdapter',],
      },
    },
    defiLlama: 'curve-finance',
    github: 'curvefi',
  },
  gyroscope: {
    status: IntegrationStatus.POSSIBLE,
    name: 'Gyroscope',
    website: 'https://gyro.finance',
    protocols: {
      eclp: {
        name: 'E-CLP',
        category: DefiCategory.AMM,
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.BASE,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.OPTIMISM,
          NetworkId.GNOSIS,
          NetworkId.POLYGON_ZKEVM,
        ],
      },
    },
    defiLlama: 'gyroscope-protocol',
    github: 'gyrostable',
  },
  baseswap: {
    status: IntegrationStatus.ROADMAP,
    name: 'BaseSwap',
    website: 'https://baseswap.fi',
    protocols: {
      baseswap: {
        name: 'BaseSwap',
        category: DefiCategory.AMM,
        networks: [NetworkId.BASE,],
        strategies: [StrategyShortId.ABMF, StrategyShortId.CBMF],
        adapters: ['UniswapV3Adapter',],
      },
    },
    defiLlama: 'baseswap',
  },
  // ALM
  gamma: {
    status: IntegrationStatus.LIVE,
    name: 'Gamma',
    website: 'https://gamma.xyz',
    protocols: {
      defiEdge: {
        name: 'Gamma',
        category: DefiCategory.ALM,
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.BASE,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.POLYGON_ZKEVM,
          NetworkId.MANTA,
          NetworkId.IMMUTABLE_ZKEVM,
          NetworkId.ASTAR_ZKEVM,
          NetworkId.BSC,
          NetworkId.MANTLE,
          NetworkId.LINEA,
          NetworkId.MOONBEAM,
          NetworkId.ROLLUX,
          NetworkId.AVALANCHE,
          NetworkId.GNOSIS,
          NetworkId.METIS,
          NetworkId.BLAST,
        ],
        strategies: [StrategyShortId.GQMF, StrategyShortId.GRMF],
      },
    },
    defiLlama: 'gamma',
    github: 'GammaStrategies',
  },
  defiEdge: {
    status: IntegrationStatus.LIVE,
    name: 'DefiEdge',
    website: 'https://www.defiedge.io',
    protocols: {
      defiEdge: {
        name: 'DefiEdge',
        category: DefiCategory.ALM,
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.BASE,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.AVALANCHE,
          NetworkId.BSC,
          NetworkId.OPTIMISM,
          NetworkId.LINEA,
          NetworkId.X_LAYER,
          NetworkId.POLYGON_ZKEVM,
          NetworkId.ZKSYNC,
        ],
        strategies: [StrategyShortId.DQMF],
      },
    },
    defiLlama: 'defiedge',
    github: 'defiedge',
  },
  ichi: {
    status: IntegrationStatus.LIVE,
    name: 'Ichi',
    website: 'https://www.ichi.org',
    protocols: {
      ichi: {
        name: 'Ichi',
        category: DefiCategory.ALM,
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.BSC,
          NetworkId.CELO,
        ],
        strategies: [StrategyShortId.IQMF, StrategyShortId.IRMF],
      },
    },
    defiLlama: 'ichi',
    github: 'ichifarm',
  },
  steer: {
    status: IntegrationStatus.DEVELOPMENT,
    name: 'Steer',
    website: 'https://steer.finance',
    protocols: {
      steer: {
        name: 'Steer',
        category: DefiCategory.ALM,
        networks: [
          NetworkId.BASE,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.OPTIMISM,
          NetworkId.AVALANCHE,
          NetworkId.KAVA,
          NetworkId.BSC,
          NetworkId.CELO,
          NetworkId.POLYGON_ZKEVM,
          NetworkId.METIS,
          NetworkId.LINEA,
          NetworkId.SCROLL,
          NetworkId.FANTOM,
          NetworkId.MANTLE,
          NetworkId.MANTA,
          NetworkId.ASTAR_ZKEVM,
          NetworkId.BLAST,
          NetworkId.X_LAYER,
          NetworkId.EVMOS,
          NetworkId.MODE,
          NetworkId.TELOS,
        ],
        strategies: [StrategyShortId.SQMF],
      },
    },
    defiLlama: 'steer-protocol',
    github: 'steerprotocol',
  },
  charm: {
    status: IntegrationStatus.ROADMAP,
    name: 'Charm',
    website: 'https://www.charm.fi',
    protocols: {
      alphaVaults: {
        name: 'Charm Alpha Vaults',
        category: DefiCategory.ALM,
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.ARBITRUM,
          NetworkId.OPTIMISM,
          NetworkId.BASE,
          NetworkId.POLYGON,
          NetworkId.BLAST,
          NetworkId.SCROLL,
          NetworkId.LINEA,
        ],
        strategies: [StrategyShortId.CUMF, StrategyShortId.CBMF,],
      },
    },
    defiLlama: 'charm-finance',
    github: 'charmfinance',
  },
  a51: {
    status: IntegrationStatus.ROADMAP,
    name: 'A51',
    website: 'https://a51.finance',
    protocols: {
      a51: {
        name: 'A51 Finance',
        category: DefiCategory.ALM,
        networks: [
          NetworkId.ARBITRUM,
          NetworkId.OPTIMISM,
          NetworkId.BASE,
          NetworkId.POLYGON,
          NetworkId.BLAST,
          NetworkId.SCROLL,
          NetworkId.LINEA,
          NetworkId.POLYGON_ZKEVM,
          NetworkId.MANTA,
        ],
        strategies: [StrategyShortId.ABMF],
      },
    },
    defiLlama: 'a51-finance',
    github: 'a51finance',
  },
  // Lending
  compound: {
    status: IntegrationStatus.LIVE,
    name: 'Compound',
    website: 'https://compound.finance',
    protocols: {
      compoundV3: {
        name: 'Compound 3',
        category: DefiCategory.LENDING,
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.BASE,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.OPTIMISM,
          NetworkId.SCROLL,
        ],
        strategies: [StrategyShortId.CF],
      },
    },
    defiLlama: 'compound-finance',
    github: 'compound-finance',
  },
  aave: {
    status: IntegrationStatus.USE_VIA_LIVE,
    name: 'Aave',
    website: 'https://aave.com',
    protocols: {
      aaveV3: {
        name: 'Aave V3',
        category: DefiCategory.LENDING,
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.BASE,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.AVALANCHE,
          NetworkId.FANTOM,
          NetworkId.OPTIMISM,
          NetworkId.METIS,
          NetworkId.GNOSIS,
          NetworkId.BSC,
          NetworkId.SCROLL,
        ],
        strategies: [StrategyShortId.Y],
      },
    },
    defiLlama: 'aave',
    github: 'aave',
  },
  // Boost aggregator
  convex: {
    status: IntegrationStatus.LIVE,
    name: 'Convex',
    website: 'https://www.convexfinance.com',
    protocols: {
      convex: {
        name: 'Convex',
        category: DefiCategory.VE_AGG,
        networks: [NetworkId.ETHEREUM, NetworkId.ARBITRUM, NetworkId.POLYGON,],
        strategies: [StrategyShortId.CCF],
      },
    },
    defiLlama: 'convex-finance',
    github: 'convex-eth',
  },
  aura: {
    status: IntegrationStatus.POSSIBLE,
    name: 'Aura',
    website: 'https://aura.finance',
    protocols: {
      aura: {
        name: 'Aura',
        category: DefiCategory.VE_AGG,
        networks: [NetworkId.ETHEREUM, NetworkId.ARBITRUM, NetworkId.POLYGON,],
      },
    },
    defiLlama: 'aura',
    github: 'aurafinance',
  },
  // ERC-4626
  yearn: {
    status: IntegrationStatus.AWAITING_DEPLOYMENT,
    name: 'Yearn',
    website: 'https://yearn.fi',
    protocols: {
      yearnV3: {
        name: 'Yearn V3',
        category: DefiCategory.VAULTS_ERC4626,
        networks: [NetworkId.ETHEREUM, NetworkId.ARBITRUM, NetworkId.POLYGON,],
        strategies: [StrategyShortId.Y],
      },
    },
    defiLlama: 'yearn-finance',
    github: 'yearn',
  },
  tetu: {
    status: IntegrationStatus.POSSIBLE,
    name: 'Tetu',
    website: 'https://tetu.io',
    protocols: {
      tetuV2: {
        name: 'Tetu V2',
        category: DefiCategory.VAULTS_ERC4626,
        networks: [NetworkId.BASE, NetworkId.POLYGON,],
      },
    },
    defiLlama: 'tetu',
    github: 'tetu-io',
  },
  // Index
  dhedge: {
    status: IntegrationStatus.POSSIBLE,
    name: 'dHEDGE',
    website: 'https://dhedge.org',
    protocols: {
      dhedge: {
        name: 'dHEDGE',
        category: DefiCategory.YIELD_AGG,
        networks: [NetworkId.ETHEREUM, NetworkId.BASE, NetworkId.ARBITRUM, NetworkId.POLYGON,],
      },
    },
    defiLlama: 'dhedge',
    github: 'dhedge',
  },
  // Bridge (liquidity transport etc)
  stargate: {
    status: IntegrationStatus.USE_VIA_LIVE,
    name: 'Stargate',
    website: 'https://stargate.finance',
    protocols: {
      stargate: {
        name: 'Stargate',
        category: DefiCategory.BRIDGE,
        networks: [NetworkId.ETHEREUM, NetworkId.BASE, NetworkId.ARBITRUM, NetworkId.POLYGON,],
        strategies: [StrategyShortId.Y],
      },
    },
    github: 'stargate-protocol',
    defiLlama: 'stargate',
  },
  // Liquid staking
  lido: {
    status: IntegrationStatus.USE_VIA_LIVE,
    name: 'Lido',
    website: 'https://lido.fi',
    protocols: {
      lido: {
        name: 'Lido Staked MATIC',
        category: DefiCategory.LST,
        networks: [NetworkId.ETHEREUM, NetworkId.POLYGON,],
        strategies: [StrategyShortId.Y,],
      },
    },
    github: 'lidofinance',
    defiLlama: 'lido',
  },
  stader: {
    status: IntegrationStatus.POSSIBLE,
    name: 'Stader Labs',
    website: 'https://www.staderlabs.com',
    protocols: {
      stader: {
        name: 'Stader Liquid Staking',
        category: DefiCategory.LST,
        networks: [NetworkId.ETHEREUM, NetworkId.POLYGON,],
        strategies: [StrategyShortId.AS1BLS,],
      },
    },
    github: 'stader-labs',
    defiLlama: 'stader',
  },
};
