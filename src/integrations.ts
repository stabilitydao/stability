import {strategies, StrategyShortId, StrategyState} from "./strategies";
import {getSupportedNetworkIds, NetworkId} from "./networks";

export type DeFiOrganization = {
  name: string
  img: string
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
  intermediaryStrategies?: StrategyShortId[]
  adapters?: string[]
  coreContracts?: string[]
}

export const enum IntegrationStatus {
  LIVE = 'Live',
  IN_USE = 'In use',
  BEING_DEPLOYED = 'Being deployed',
  DEVELOPMENT = 'Development',
  AWAITING = 'Awaiting', // awaiting development
  POSSIBLE = 'Possible',
  PROPOSED = 'Proposed',
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
    name: 'ChainLink',
    img: 'Chainlink.svg',
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
    name: 'Angle',
    img: 'angle.svg',
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
        strategies: [
          StrategyShortId.QSMF,
          StrategyShortId.DQMF,
          StrategyShortId.IQMF,
          StrategyShortId.GQMF,
          StrategyShortId.IRMF,
          StrategyShortId.GRMF,
          StrategyShortId.SQMF,
          StrategyShortId.RSBMF,
          StrategyShortId.DRBMF,
          StrategyShortId.IRBMF,
          StrategyShortId.GUMF,
          StrategyShortId.ABMF,
          StrategyShortId.CBMF,
          StrategyShortId.CUMF,
        ],
      },
    },
    defiLlama: 'angle',
    github: 'AngleProtocol',
  },
  // DeX agg
  oneInch: {
    name: '1inch',
    img: '1inch.svg',
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
    name: "Uniswap",
    img: 'Uniswap.svg',
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
        strategies: [StrategyShortId.CUMF, StrategyShortId.GUMF,]
      },
    },
    defiLlama: 'uniswap',
    github: 'Uniswap,,'
  },
  quickswap: {
    name: 'QuickSwap',
    img: 'QuickSwap.svg',
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
    name: 'Retro',
    img: 'Retro.svg',
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
    name: 'Curve',
    img: 'Curve.svg',
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
  sushi: {
    name: 'Sushi',
    img: 'sushi.svg',
    website: 'https://www.sushi.com',
    protocols: {
      v3Amm: {
        name: 'V3 AMM',
        category: DefiCategory.AMM,
        networks: [
          NetworkId.ARBITRUM_NOVA,
          NetworkId.ARBITRUM,
          NetworkId.AVALANCHE,
          NetworkId.BASE,
          NetworkId.BITTORRENT,
          NetworkId.BLAST,
          NetworkId.BOBA,
          NetworkId.BSC,
          NetworkId.CORE,
          NetworkId.ETHEREUM,
          NetworkId.FANTOM,
          NetworkId.FILECOIN,
          NetworkId.FUSE,
          NetworkId.GNOSIS,
          NetworkId.HAQQ,
          NetworkId.KAVA,
          NetworkId.LINEA,
          NetworkId.METIS,
          NetworkId.MOONBEAM,
          NetworkId.MOONRIVER,
          NetworkId.OPTIMISM,
          NetworkId.POLYGON,
          NetworkId.POLYGON_ZKEVM,
          NetworkId.ROOTSTOCK,
          NetworkId.SCROLL,
          NetworkId.SKALE_EUROPA,
          NetworkId.THUNDERCORE,
          NetworkId.ZETA,
        ],
        strategies: [StrategyShortId.BSMF,],
      },
    },
    github: 'sushiswap',
    defiLlama: 'sushi',
  },
  gyroscope: {
    name: 'Gyroscope',
    img: 'Gyroscope.svg',
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
        strategies: [StrategyShortId.GAF,],
      },
    },
    defiLlama: 'gyroscope-protocol',
    github: 'gyrostable',
  },
  baseswap: {
    name: 'BaseSwap',
    img: 'BaseSwap.svg',
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
  agni: {
    name: 'Agni',
    img: 'agni.avif',
    website: 'https://agni.finance/',
    protocols: {
      agni: {
        name: 'Agni',
        category: DefiCategory.AMM,
        networks: [NetworkId.MANTLE,],
        adapters: ['UniswapV3Adapter',],
      },
    },
    defiLlama: 'agni-finance',
    github: 'agni-protocol',
  },
  // ALM
  gamma: {
    name: 'Gamma',
    img: 'Gamma.svg',
    website: 'https://gamma.xyz',
    protocols: {
      gamma: {
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
    name: 'DefiEdge',
    img: 'DefiEdge.svg',
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
    name: 'Ichi',
    img: 'Ichi.svg',
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
          NetworkId.SKALE_EUROPA,
        ],
        strategies: [StrategyShortId.IQMF, StrategyShortId.IRMF],
      },
    },
    defiLlama: 'ichi',
    github: 'ichifarm',
  },
  steer: {
    name: 'Steer',
    img: 'Steer.svg',
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
    name: 'Charm',
    img: 'Charm.svg',
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
    name: 'A51',
    img: 'A51.svg',
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
  skatefi: {
    name: 'SkateFi',
    img: 'skatefi.svg',
    website: 'https://www.skatefi.org',
    protocols: {
      range: {
        name: 'Range',
        category: DefiCategory.ALM,
        networks: [
          NetworkId.ETHEREUM,
          NetworkId.BSC,
          NetworkId.ARBITRUM,
          NetworkId.POLYGON,
          NetworkId.MANTLE,
          NetworkId.BASE,
          NetworkId.MANTA,
          NetworkId.SCROLL,
          NetworkId.BLAST,
          NetworkId.ZETA,
          NetworkId.ZKFAIR,
          NetworkId.MERLIN,
        ],
      },
    },
    defiLlama: 'skate-fi',
    github: 'Range-Protocol',
  },
  beefy: {
    name: 'Beefy',
    img: 'beefy.svg',
    website: 'https://beefy.com',
    protocols: {
      clm: {
        name: 'CLM',
        category: DefiCategory.ALM,
        networks: [
          NetworkId.BASE,
          NetworkId.BSC,
          NetworkId.ARBITRUM,
          NetworkId.OPTIMISM,
          NetworkId.LINEA,
          NetworkId.SEI,
          NetworkId.POLYGON,
          NetworkId.MANTLE,
          NetworkId.MANTA,
          NetworkId.MOONBEAM,
          NetworkId.ZKSYNC,
        ],
        strategies: [StrategyShortId.BSMF,],
      },
    },
    github: 'beefyfinance',
    defiLlama: 'beefy',
  },
  // Lending
  compound: {
    name: 'Compound',
    img: 'Compound.svg',
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
    name: 'Aave',
    img: 'Aave.svg',
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
        intermediaryStrategies: [StrategyShortId.Y],
      },
    },
    defiLlama: 'aave',
    github: 'aave',
  },
  // Boost aggregator
  convex: {
    name: 'Convex',
    img: 'Convex.svg',
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
    name: 'Aura',
    img: 'aura.png',
    website: 'https://aura.finance',
    protocols: {
      aura: {
        name: 'Aura',
        category: DefiCategory.VE_AGG,
        networks: [NetworkId.ETHEREUM, NetworkId.ARBITRUM, NetworkId.POLYGON,],
        strategies: [StrategyShortId.GAF,],
      },
    },
    defiLlama: 'aura',
    github: 'aurafinance',
  },
  // ERC-4626
  yearn: {
    name: 'Yearn',
    img: 'Yearn.svg',
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
    name: 'Tetu',
    img: 'Tetu.svg',
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
    name: 'dHEDGE',
    img: 'dhedge.svg',
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
    name: 'Stargate',
    img: 'Stargate.svg',
    website: 'https://stargate.finance',
    protocols: {
      stargate: {
        name: 'Stargate',
        category: DefiCategory.BRIDGE,
        networks: [NetworkId.ETHEREUM, NetworkId.BASE, NetworkId.ARBITRUM, NetworkId.POLYGON,],
        intermediaryStrategies: [StrategyShortId.Y],
      },
    },
    github: 'stargate-protocol',
    defiLlama: 'stargate',
  },
  // Liquid staking
  lido: {
    name: 'Lido',
    img: 'Lido.svg',
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
    name: 'Stader Labs',
    img: 'Stader.svg',
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

export const getIntegrationStatus = (p: DeFiProtocol): IntegrationStatus => {
  const supportedNetWorkIds = getSupportedNetworkIds()
  const isSupportedNetwork = p.networks.some(r => supportedNetWorkIds.includes(r))
  if (p.coreContracts && p.coreContracts.length > 0) {
    return isSupportedNetwork ? IntegrationStatus.LIVE : IntegrationStatus.PROPOSED
  }
  if (p.adapters && p.adapters.length > 0) {
    return isSupportedNetwork ? IntegrationStatus.LIVE : IntegrationStatus.PROPOSED
  }
  if (p.strategies) {
    for (const strategy of p.strategies) {
      if (strategies[strategy]?.state == StrategyState.LIVE) {
        return IntegrationStatus.LIVE
      }
      if (strategies[strategy]?.state == StrategyState.DEPLOYMENT) {
        return IntegrationStatus.BEING_DEPLOYED
      }
      if (strategies[strategy]?.state == StrategyState.DEVELOPMENT) {
        return IntegrationStatus.DEVELOPMENT
      }
      if (strategies[strategy]?.state == StrategyState.PROPOSAL) {
        return IntegrationStatus.AWAITING
      }
    }
  }
  if (p.intermediaryStrategies) {
    for (const strategy of p.intermediaryStrategies) {
      if (strategies[strategy]?.state == StrategyState.LIVE) {
        return IntegrationStatus.IN_USE
      }
      if (strategies[strategy]?.state == StrategyState.DEPLOYMENT) {
        return IntegrationStatus.BEING_DEPLOYED
      }
      if (strategies[strategy]?.state == StrategyState.DEVELOPMENT) {
        return IntegrationStatus.DEVELOPMENT
      }
      if (strategies[strategy]?.state == StrategyState.PROPOSAL) {
        return IntegrationStatus.AWAITING
      }
    }
  }

  return isSupportedNetwork ? IntegrationStatus.POSSIBLE : IntegrationStatus.PROPOSED
}
