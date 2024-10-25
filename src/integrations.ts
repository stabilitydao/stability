import { strategies, StrategyShortId, StrategyState } from "./strategies";
import { ChainName, chains, getSupportedChainNames } from "./chains";

export type DeFiOrganization = {
  name: string;
  img: string;
  website: string;
  protocols: { [protocolId: string]: DeFiProtocol };
  defiLlama: string;
  github?: string;
};

export type DeFiProtocol = {
  name: string;
  img?: string; // separate img for protocol
  organization?: string; // optimal org slug for usability
  category: DefiCategory;
  chains: ChainName[];
  strategies?: StrategyShortId[];
  intermediaryStrategies?: StrategyShortId[];
  adapters?: string[];
  coreContracts?: string[];
};

export const enum IntegrationStatus {
  LIVE = "Live",
  IN_USE = "In use",
  BEING_DEPLOYED = "Being deployed",
  DEVELOPMENT = "Development",
  AWAITING = "Awaiting", // awaiting development
  POSSIBLE = "Possible",
  PROPOSED = "Proposed",
}

export enum DefiCategory {
  AMM = "AMM",
  ALM = "ALM",
  LENDING = "Lending",
  DEX_AGG = "DeX agg",
  YIELD_AGG = "Yield agg",
  VE_AGG = "VE-agg",
  ORACLE = "Oracle",
  REWARDING = "Rewarding",
  ERC4626 = "ERC-4626",
  LSP = "LSP",
  INTERCHAIN = "Interchain",
  CDP = "CDP",
}

export const integrations: { [org: string]: DeFiOrganization } = {
  // oracle
  chainlink: {
    name: "ChainLink",
    img: "Chainlink.svg",
    website: "https://chain.link",
    protocols: {
      chainlink: {
        name: "Data Feeds",
        category: DefiCategory.ORACLE,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.AVALANCHE,
          ChainName.BSC,
          ChainName.CELO,
          ChainName.FANTOM,
          ChainName.LINEA,
          ChainName.GNOSIS,
          ChainName.OPTIMISM,
          ChainName.MOONBEAM,
          ChainName.MOONRIVER,
          ChainName.POLYGON_ZKEVM,
          ChainName.ZKSYNC,
          ChainName.METIS,
          ChainName.SCROLL,
        ],
        coreContracts: ["PriceReader"],
        adapters: ["ChainLinkAdapter"],
      },
      ccip: {
        name: "CCIP",
        category: DefiCategory.INTERCHAIN,
        chains: [
          ChainName.ARBITRUM,
          ChainName.AVALANCHE,
          ChainName.BASE,
          ChainName.BLAST,
          ChainName.BSC,
          ChainName.CELO,
          ChainName.ETHEREUM,
          ChainName.GNOSIS,
          ChainName.KROMA,
          ChainName.METIS,
          ChainName.MODE,
          ChainName.OPTIMISM,
          ChainName.POLYGON,
          ChainName.WEMIX,
          ChainName.ZKSYNC,
        ],
      },
    },
    defiLlama: "chainlink",
    github: "smartcontractkit",
  },
  // Rewarding
  angle: {
    name: "Angle",
    img: "angle.svg",
    website: "https://angle.money",
    protocols: {
      merkl: {
        name: "Merkl",
        img: "Merkl.svg",
        category: DefiCategory.REWARDING,
        // chains with active rewards
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.OPTIMISM,
          ChainName.POLYGON_ZKEVM,
          ChainName.SCROLL,
          ChainName.LINEA,
          ChainName.BLAST,
          ChainName.IMMUTABLE_ZKEVM,
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
    defiLlama: "angle",
    github: "AngleProtocol",
  },
  // DeX agg
  oneInch: {
    name: "1inch",
    img: "1inch.svg",
    website: "https://1inch.io",
    protocols: {
      oneInch: {
        name: "1inch",
        category: DefiCategory.DEX_AGG,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.OPTIMISM,
          ChainName.ZKSYNC,
          ChainName.BSC,
          ChainName.GNOSIS,
          ChainName.AVALANCHE,
          ChainName.FANTOM,
          ChainName.KLAYTN,
          ChainName.AURORA,
        ],
        coreContracts: ["Zap"],
        strategies: [StrategyShortId.AS1BLS],
      },
    },
    defiLlama: "1inch-network",
    github: "1inch",
  },
  // DeX
  uniswap: {
    name: "Uniswap",
    img: "Uniswap.svg",
    website: "https://uniswap.org",
    protocols: {
      uniswapV3: {
        name: "Uniswap V3",
        category: DefiCategory.AMM,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.OPTIMISM,
          ChainName.BSC,
          ChainName.AVALANCHE,
          ChainName.CELO,
          ChainName.BLAST,
        ],
        adapters: ["UniswapV3Adapter"],
        strategies: [StrategyShortId.CUMF, StrategyShortId.GUMF],
      },
      uniswapV2: {
        name: "Uniswap V2",
        category: DefiCategory.AMM,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.OPTIMISM,
          ChainName.BSC,
          ChainName.AVALANCHE,
          ChainName.CELO,
          ChainName.ZORA,
        ],
      },
    },
    defiLlama: "uniswap",
    github: "Uniswap",
  },
  quickswap: {
    name: "QuickSwap",
    img: "QuickSwap.svg",
    website: "https://quickswap.exchange",
    protocols: {
      quickswapV3: {
        name: "QuickSwap V3",
        category: DefiCategory.AMM,
        chains: [
          ChainName.POLYGON,
          ChainName.POLYGON_ZKEVM,
          ChainName.MANTA,
          ChainName.IMMUTABLE_ZKEVM,
          ChainName.ASTAR_ZKEVM,
          ChainName.DOGECHAIN,
          ChainName.X_LAYER,
          ChainName.KAVA,
        ],
        strategies: [
          StrategyShortId.QSMF,
          StrategyShortId.DQMF,
          StrategyShortId.GQMF,
          StrategyShortId.IQMF,
        ],
        adapters: ["AlgebraAdapter"],
      },
    },
    defiLlama: "quickswap",
    github: "QuickSwap",
  },
  retro: {
    name: "Retro",
    img: "Retro.svg",
    website: "https://retro.finance",
    protocols: {
      retro: {
        name: "Retro",
        category: DefiCategory.AMM,
        chains: [ChainName.POLYGON],
        strategies: [
          StrategyShortId.IRMF,
          StrategyShortId.GRMF,
          StrategyShortId.RSBMF,
          StrategyShortId.DRBMF,
          StrategyShortId.IRBMF,
        ],
        adapters: ["UniswapV3Adapter"],
      },
    },
    defiLlama: "retro",
  },
  curve: {
    name: "Curve",
    img: "Curve.svg",
    website: "https://curve.fi",
    protocols: {
      stableSwapNg: {
        name: "StableSwapNG",
        category: DefiCategory.AMM,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.AVALANCHE,
          ChainName.AURORA,
          ChainName.BSC,
          ChainName.CELO,
          ChainName.FANTOM,
          ChainName.GNOSIS,
          ChainName.KAVA,
          ChainName.MOONBEAM,
          ChainName.OPTIMISM,
          ChainName.X_LAYER,
          ChainName.FRAXTAL,
        ],
        strategies: [StrategyShortId.CCF],
        adapters: ["CurveAdapter"],
      },
      llamalend: {
        name: "LlamaLend",
        category: DefiCategory.LENDING,
        chains: [ChainName.ETHEREUM, ChainName.ARBITRUM],
      },
    },
    defiLlama: "curve-finance",
    github: "curvefi",
  },
  sushi: {
    name: "Sushi",
    img: "sushi.svg",
    website: "https://www.sushi.com",
    protocols: {
      v3Amm: {
        name: "V3 AMM",
        category: DefiCategory.AMM,
        chains: [
          ChainName.ARBITRUM_NOVA,
          ChainName.ARBITRUM,
          ChainName.AVALANCHE,
          ChainName.BASE,
          ChainName.BITTORRENT,
          ChainName.BLAST,
          ChainName.BOBA,
          ChainName.BSC,
          ChainName.CORE,
          ChainName.ETHEREUM,
          ChainName.FANTOM,
          ChainName.FILECOIN,
          ChainName.FUSE,
          ChainName.GNOSIS,
          ChainName.HAQQ,
          ChainName.KAVA,
          ChainName.LINEA,
          ChainName.METIS,
          ChainName.MOONBEAM,
          ChainName.MOONRIVER,
          ChainName.OPTIMISM,
          ChainName.POLYGON,
          ChainName.POLYGON_ZKEVM,
          ChainName.ROOTSTOCK,
          ChainName.SCROLL,
          ChainName.SKALE_EUROPA,
          ChainName.THUNDERCORE,
          ChainName.ZETA,
        ],
        strategies: [StrategyShortId.BSMF],
      },
    },
    github: "sushiswap",
    defiLlama: "sushi",
  },
  gyroscope: {
    name: "Gyroscope",
    img: "Gyroscope.svg",
    website: "https://gyro.finance",
    protocols: {
      eclp: {
        name: "E-CLP",
        category: DefiCategory.AMM,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.OPTIMISM,
          ChainName.GNOSIS,
          ChainName.POLYGON_ZKEVM,
        ],
        strategies: [StrategyShortId.GAF],
      },
    },
    defiLlama: "gyroscope-protocol",
    github: "gyrostable",
  },
  baseswap: {
    name: "BaseSwap",
    img: "BaseSwap.png",
    website: "https://baseswap.fi",
    protocols: {
      baseswap: {
        name: "BaseSwap",
        category: DefiCategory.AMM,
        chains: [ChainName.BASE],
        strategies: [StrategyShortId.ABMF, StrategyShortId.CBMF],
        adapters: ["UniswapV3Adapter"],
      },
    },
    defiLlama: "baseswap",
  },
  agni: {
    name: "Agni",
    img: "agni.png",
    website: "https://agni.finance/",
    protocols: {
      agni: {
        name: "Agni",
        category: DefiCategory.AMM,
        chains: [ChainName.MANTLE],
        adapters: ["UniswapV3Adapter"],
      },
    },
    defiLlama: "agni-finance",
    github: "agni-protocol",
  },
  pearl: {
    name: "Pearl",
    img: "Pearl.png",
    website: "https://www.pearl.exchange/",
    protocols: {
      pearlV2: {
        name: "Pearl V2",
        category: DefiCategory.AMM,
        chains: [ChainName.REAL],
        strategies: [StrategyShortId.TPF, StrategyShortId.IPF],
      },
      trident: {
        name: "Trident",
        img: "Trident.png",
        category: DefiCategory.ALM,
        chains: [ChainName.REAL],
        strategies: [StrategyShortId.TPF],
      },
      stack: {
        name: "Stack",
        img: "Stack.svg",
        category: DefiCategory.CDP,
        chains: [ChainName.REAL],
        strategies: [StrategyShortId.SL, StrategyShortId.SS],
      },
    },
    github: "Pearl-Finance",
    defiLlama: "pearl-v2",
  },
  // ALM
  gamma: {
    name: "Gamma",
    img: "Gamma.png",
    website: "https://gamma.xyz",
    protocols: {
      gamma: {
        name: "Gamma",
        category: DefiCategory.ALM,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.POLYGON_ZKEVM,
          ChainName.MANTA,
          ChainName.IMMUTABLE_ZKEVM,
          ChainName.ASTAR_ZKEVM,
          ChainName.BSC,
          ChainName.MANTLE,
          ChainName.LINEA,
          ChainName.MOONBEAM,
          ChainName.ROLLUX,
          ChainName.AVALANCHE,
          ChainName.GNOSIS,
          ChainName.METIS,
          ChainName.BLAST,
        ],
        strategies: [StrategyShortId.GQMF, StrategyShortId.GRMF],
      },
    },
    defiLlama: "gamma",
    github: "GammaStrategies",
  },
  defiEdge: {
    name: "DefiEdge",
    img: "DefiEdge.svg",
    website: "https://www.defiedge.io",
    protocols: {
      defiEdge: {
        name: "DefiEdge",
        category: DefiCategory.ALM,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.AVALANCHE,
          ChainName.BSC,
          ChainName.OPTIMISM,
          ChainName.LINEA,
          ChainName.X_LAYER,
          ChainName.POLYGON_ZKEVM,
          ChainName.ZKSYNC,
        ],
        strategies: [StrategyShortId.DQMF],
      },
    },
    defiLlama: "defiedge",
    github: "defiedge",
  },
  ichi: {
    name: "Ichi",
    img: "Ichi.svg",
    website: "https://www.ichi.org",
    protocols: {
      ichi: {
        name: "Ichi",
        category: DefiCategory.ALM,
        chains: [
          ChainName.ETHEREUM,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.BSC,
          ChainName.CELO,
          ChainName.SKALE_EUROPA,
          ChainName.REAL,
        ],
        strategies: [
          StrategyShortId.IQMF,
          StrategyShortId.IRMF,
          StrategyShortId.IPF,
        ],
      },
    },
    defiLlama: "ichi",
    github: "ichifarm",
  },
  steer: {
    name: "Steer",
    img: "Steer.png",
    website: "https://steer.finance",
    protocols: {
      steer: {
        name: "Steer",
        category: DefiCategory.ALM,
        chains: [
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.OPTIMISM,
          ChainName.AVALANCHE,
          ChainName.KAVA,
          ChainName.BSC,
          ChainName.CELO,
          ChainName.POLYGON_ZKEVM,
          ChainName.METIS,
          ChainName.LINEA,
          ChainName.SCROLL,
          ChainName.FANTOM,
          ChainName.MANTLE,
          ChainName.MANTA,
          ChainName.ASTAR_ZKEVM,
          ChainName.BLAST,
          ChainName.X_LAYER,
          ChainName.EVMOS,
          ChainName.MODE,
          ChainName.TELOS,
        ],
        strategies: [StrategyShortId.SQMF],
      },
    },
    defiLlama: "steer-protocol",
    github: "steerprotocol",
  },
  charm: {
    name: "Charm",
    img: "Charm.png",
    website: "https://www.charm.fi",
    protocols: {
      alphaVaults: {
        name: "Alpha Vaults",
        category: DefiCategory.ALM,
        chains: [
          ChainName.ETHEREUM,
          ChainName.ARBITRUM,
          ChainName.OPTIMISM,
          ChainName.BASE,
          ChainName.POLYGON,
          ChainName.BLAST,
          ChainName.SCROLL,
          ChainName.LINEA,
        ],
        strategies: [StrategyShortId.CUMF, StrategyShortId.CBMF],
      },
    },
    defiLlama: "charm-finance",
    github: "charmfinance",
  },
  a51: {
    name: "A51",
    img: "A51.png",
    website: "https://a51.finance",
    protocols: {
      a51: {
        name: "A51 Finance",
        category: DefiCategory.ALM,
        chains: [
          ChainName.ARBITRUM,
          ChainName.OPTIMISM,
          ChainName.BASE,
          ChainName.POLYGON,
          ChainName.BLAST,
          ChainName.SCROLL,
          ChainName.LINEA,
          ChainName.POLYGON_ZKEVM,
          ChainName.MANTA,
        ],
        strategies: [StrategyShortId.ABMF],
      },
    },
    defiLlama: "a51-finance",
    github: "a51finance",
  },
  skatefi: {
    name: "SkateFi",
    img: "skatefi.svg",
    website: "https://www.skatefi.org",
    protocols: {
      range: {
        name: "Range",
        category: DefiCategory.ALM,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BSC,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.MANTLE,
          ChainName.BASE,
          ChainName.MANTA,
          ChainName.SCROLL,
          ChainName.BLAST,
          ChainName.ZETA,
          ChainName.ZKFAIR,
          ChainName.MERLIN,
        ],
      },
    },
    defiLlama: "skate-fi",
    github: "Range-Protocol",
  },
  beefy: {
    name: "Beefy",
    img: "beefy.svg",
    website: "https://beefy.com",
    protocols: {
      clm: {
        name: "CLM",
        category: DefiCategory.ALM,
        chains: [
          ChainName.BASE,
          ChainName.BSC,
          ChainName.ARBITRUM,
          ChainName.OPTIMISM,
          ChainName.LINEA,
          ChainName.SEI,
          ChainName.POLYGON,
          ChainName.MANTLE,
          ChainName.MANTA,
          ChainName.MOONBEAM,
          ChainName.ZKSYNC,
        ],
        strategies: [StrategyShortId.BSMF],
      },
    },
    github: "beefyfinance",
    defiLlama: "beefy",
  },
  // Lending
  compound: {
    name: "Compound",
    img: "Compound.png",
    website: "https://compound.finance",
    protocols: {
      compoundV3: {
        name: "Compound 3",
        category: DefiCategory.LENDING,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.OPTIMISM,
          ChainName.SCROLL,
        ],
        strategies: [StrategyShortId.CF],
      },
    },
    defiLlama: "compound-finance",
    github: "compound-finance",
  },
  aave: {
    name: "Aave",
    img: "Aave.png",
    website: "https://aave.com",
    protocols: {
      aaveV3: {
        name: "Aave V3",
        category: DefiCategory.LENDING,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.AVALANCHE,
          ChainName.FANTOM,
          ChainName.OPTIMISM,
          ChainName.METIS,
          ChainName.GNOSIS,
          ChainName.BSC,
          ChainName.SCROLL,
        ],
        intermediaryStrategies: [StrategyShortId.Y],
      },
    },
    defiLlama: "aave",
    github: "aave",
  },
  // Boost aggregator
  convex: {
    name: "Convex",
    img: "Convex.png",
    website: "https://www.convexfinance.com",
    protocols: {
      convex: {
        name: "Convex",
        category: DefiCategory.VE_AGG,
        chains: [ChainName.ETHEREUM, ChainName.ARBITRUM, ChainName.POLYGON],
        strategies: [StrategyShortId.CCF],
      },
    },
    defiLlama: "convex-finance",
    github: "convex-eth",
  },
  aura: {
    name: "Aura",
    img: "aura1.png",
    website: "https://aura.finance",
    protocols: {
      aura: {
        name: "Aura",
        category: DefiCategory.VE_AGG,
        chains: [ChainName.ETHEREUM, ChainName.ARBITRUM, ChainName.POLYGON],
        strategies: [StrategyShortId.GAF],
      },
    },
    defiLlama: "aura",
    github: "aurafinance",
  },
  // ERC-4626
  yearn: {
    name: "Yearn",
    img: "Yearn.svg",
    website: "https://yearn.fi",
    protocols: {
      yearnV3: {
        name: "Yearn V3",
        category: DefiCategory.ERC4626,
        chains: [ChainName.ETHEREUM, ChainName.ARBITRUM, ChainName.POLYGON],
        strategies: [StrategyShortId.Y],
      },
    },
    defiLlama: "yearn-finance",
    github: "yearn",
  },
  tetu: {
    name: "Tetu",
    img: "Tetu.svg",
    website: "https://tetu.io",
    protocols: {
      tetuV2: {
        name: "Tetu V2",
        category: DefiCategory.ERC4626,
        chains: [ChainName.BASE, ChainName.POLYGON],
      },
    },
    defiLlama: "tetu",
    github: "tetu-io",
  },
  // Index
  dhedge: {
    name: "dHEDGE",
    img: "dhedge.svg",
    website: "https://dhedge.org",
    protocols: {
      dhedge: {
        name: "dHEDGE",
        category: DefiCategory.YIELD_AGG,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
        ],
      },
    },
    defiLlama: "dhedge",
    github: "dhedge",
  },
  // INTEROPERABILITY (liquidity transport, cross-chain messaging etc)
  stargate: {
    name: "Stargate",
    img: "Stargate.svg",
    website: "https://stargate.finance",
    protocols: {
      stargateV2: {
        name: "Stargate V2",
        category: DefiCategory.INTERCHAIN,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BSC,
          ChainName.AVALANCHE,
          ChainName.POLYGON,
          ChainName.ARBITRUM,
          ChainName.OPTIMISM,
          ChainName.METIS,
          ChainName.LINEA,
          ChainName.MANTLE,
          ChainName.BASE,
          ChainName.KAVA,
          ChainName.SCROLL,
          ChainName.AURORA,
          ChainName.SEI,
          // NetworkId.ZKSYNC, coming soon
        ],
        intermediaryStrategies: [StrategyShortId.Y],
      },
    },
    github: "stargate-protocol",
    defiLlama: "stargate",
  },
  // Liquid staking
  lido: {
    name: "Lido",
    img: "Lido.svg",
    website: "https://lido.fi",
    protocols: {
      lido: {
        name: "stETH",
        category: DefiCategory.LSP,
        chains: [ChainName.ETHEREUM, ChainName.POLYGON],
        strategies: [StrategyShortId.Y],
      },
    },
    github: "lidofinance",
    defiLlama: "lido",
  },
  stader: {
    name: "Stader Labs",
    img: "Stader.svg",
    website: "https://www.staderlabs.com",
    protocols: {
      stader: {
        name: "Stader",
        category: DefiCategory.LSP,
        chains: [
          ChainName.ETHEREUM,
          ChainName.POLYGON,
          ChainName.BSC,
          ChainName.HEDERA,
        ],
        strategies: [StrategyShortId.AS1BLS],
      },
    },
    github: "stader-labs",
    defiLlama: "stader",
  },
  dezswap: {
    name: "Dezswap",
    img: "dezswap.svg",
    website: "https://dezswap.io/",
    protocols: {
      dezswap: {
        name: "Dezswap",
        category: DefiCategory.AMM,
        chains: [ChainName.XPLA],
        adapters: ["UniswapV3Adapter"],
      },
    },
    github: "dezswap",
    defiLlama: "dezswap",
  },
  clearpool: {
    name: "Clearpool",
    img: "Clearpool.png",
    website: "https://clearpool.finance/",
    protocols: {
      clearpool: {
        name: "Clearpool",
        category: DefiCategory.LENDING,
        chains: [
          ChainName.FLARE,
          ChainName.ETHEREUM,
          ChainName.OPTIMISM,
          ChainName.MANTLE,
          ChainName.BASE,
          ChainName.POLYGON_ZKEVM,
          ChainName.POLYGON,
          ChainName.AVALANCHE,
          ChainName.ARBITRUM,
        ],
      },
    },
    github: "clearpool-finance",
    defiLlama: "clearpool",
  },
  mintswap: {
    name: "MintSwap",
    img: "Mintswap.svg",
    website: "https://www.mintswap.finance/",
    protocols: {
      mintswapfinance: {
        name: "MintSwap Finance",
        category: DefiCategory.AMM,
        chains: [ChainName.MINT],
        adapters: ["UniswapV3Adapter"],
      },
    },
    github: "MintSwapFinance",
    defiLlama: "mintswap-finance",
  },
  kiloex: {
    name: "KiloEx",
    img: "Kiloex.svg",
    website: "https://www.kiloex.io/",
    protocols: {
      kiloex: {
        name: "KiloEx",
        category: DefiCategory.DEX_AGG,
        chains: [
          ChainName.OPBNB,
          ChainName.BSC,
          ChainName.MANTA,
          ChainName.TAIKO,
        ],
        //todo BSqared
      },
    },
    github: "KiloExPerp",
    defiLlama: "kiloex",
  },
  dymension: {
    name: "Dymension DEX",
    img: "Dymensiondex.svg",
    website: "https://dymension.xyz/",
    protocols: {
      dymensiondex: {
        name: "Dymension DEX",
        category: DefiCategory.DEX_AGG,
        chains: [ChainName.DYMENSION],
      },
    },
    github: "dymensionxyz",
    defiLlama: "dymension-dex",
  },
  camelot: {
    name: "Camelot",
    img: "Camelot.svg",
    website: "https://camelot.exchange/",
    protocols: {
      camelotV3: {
        name: "Camelot 3",
        category: DefiCategory.AMM,
        chains: [ChainName.GRAVITY, ChainName.ARBITRUM, ChainName.RARI],
        //todo ApeChain, Xai, Sanko, Reya Network
        adapters: ["UniswapV3Adapter"],
      },
    },
    github: "camelotlabs",
    defiLlama: "camelot",
  },
  bouncebit: {
    name: "BounceBit",
    img: "Bouncebit.svg",
    website: "https://bouncebit.io/",
    protocols: {
      bouncebitcedefi: {
        name: "BounceBit CeDeFi",
        category: DefiCategory.DEX_AGG,
        chains: [ChainName.BOUNCEBIT, ChainName.BSC, ChainName.ETHEREUM],
      },
      bouncebitpremium: {
        name: "BounceBit Premium",
        category: DefiCategory.YIELD_AGG,
        chains: [ChainName.BOUNCEBIT, ChainName.BSC, ChainName.ETHEREUM],
      },
      bouncebiteasy: {
        name: "BounceBit Easy",
        category: DefiCategory.YIELD_AGG,
        chains: [ChainName.BOUNCEBIT, ChainName.BSC, ChainName.ETHEREUM],
      },
    },
    github: "BounceBit-Labs",
    defiLlama: "bouncebit-cedefi",
  },
  cyberswap: {
    name: "CyberSwap",
    img: "Cyberswap.svg",
    website: "https://cyberswap.cc/",
    protocols: {
      cyberswap: {
        name: "CyberSwap",
        category: DefiCategory.DEX_AGG,
        chains: [ChainName.CYBER],
      },
    },
    github: "Cyberswap-DEX",
    defiLlama: "cyberswap",
  },
  deepr: {
    name: "Deepr",
    img: "Deepr.png",
    website: "https://www.deepr.finance/",
    protocols: {
      deeprfinance: {
        name: "Deepr Finance",
        category: DefiCategory.LENDING,
        chains: [ChainName.IOTA],
        //todo ShimmerEVM
      },
    },
    github: "Deepr-Finance",
    defiLlama: "deepr-finance",
  },
  nitron: {
    name: "Nitron",
    img: "Nitron.svg",
    website: "https://app.dem.exchange/nitron",
    protocols: {
      nitron: {
        name: "Nitron",
        category: DefiCategory.DEX_AGG,
        chains: [ChainName.CARBON],
      },
    },
    github: "switcheo",
    defiLlama: "nitron",
  },
  bidofinance: {
    name: "Bido Finance",
    img: "Bido.svg",
    website: "https://app.bido.finance/",
    protocols: {
      bidofinance: {
        name: "Bido Finance",
        category: DefiCategory.YIELD_AGG,
        chains: [ChainName.BEVM],
      },
    },
    github: "Bidohub",
    defiLlama: "bido-finance",
  },
  zircuit: {
    name: "Zircuit",
    img: "Zircuitstaking.svg",
    website: "https://www.zircuit.com/",
    protocols: {
      zircuitstaking: {
        name: "Zircuit Staking",
        category: DefiCategory.REWARDING,
        chains: [ChainName.ETHEREUM, ChainName.ZIRCUIT],
      },
    },
    defiLlama: "zircuit-staking",
  },
  avalonlabs: {
    name: "Avalon Labs",
    img: "Avalonlabs.svg",
    website: "https://www.avalonfinance.xyz/",
    protocols: {
      avalonfinance: {
        name: "Avalon Finance",
        category: DefiCategory.LENDING,
        chains: [
          ChainName.BITLAYER,
          ChainName.CORE,
          ChainName.BSC,
          ChainName.MERLIN,
          ChainName.BOB,
          ChainName.ARBITRUM,
          ChainName.BASE,
          ChainName.ETHEREUM,
          ChainName.SCROLL,
        ],
      },
    },
    defiLlama: "avalon-finance",
  },
  iziswap: {
    name: "iZiSwap",
    img: "Iziswap.svg",
    website: "https://izumi.finance/",
    protocols: {
      iziswap: {
        name: "iZiSwap",
        category: DefiCategory.AMM,
        chains: [
          ChainName.LINEA,
          ChainName.ZETA,
          ChainName.SCROLL,
          ChainName.TAIKO,
          ChainName.ZKSYNC,
          ChainName.MODE,
          ChainName.GRAVITY,
          ChainName.BOB,
          ChainName.MANTA,
          ChainName.BSC,
          ChainName.KROMA,
          ChainName.BASE,
          ChainName.MANTLE,
          ChainName.X_LAYER,
          ChainName.ZKLINK,
          ChainName.ZKFAIR,
          ChainName.CORE,
          ChainName.ARBITRUM,
          ChainName.BLAST,
          ChainName.AURORA,
          ChainName.POLYGON,
          ChainName.ETHEREUM,
        ],
        //todo Ultron, OntologyEVM, Meter, Cronos
      },
    },
    github: "IzumiFinance",
    defiLlama: "iziswap",
  },
  desyn: {
    name: "DeSyn",
    img: "Desynliquidstrategy.svg",
    website: "https://www.desyn.io/",
    protocols: {
      desynliquidstrategy: {
        name: "DeSyn Liquid Strategy",
        category: DefiCategory.YIELD_AGG,
        chains: [
          ChainName.BITLAYER,
          ChainName.MODE,
          ChainName.ZKLINK,
          ChainName.CORE,
        ],
      },
    },
    github: "Meta-DesynLab",
    defiLlama: "desyn-liquid-strategy",
  },
};

export const getIntegrationStatus = (p: DeFiProtocol): IntegrationStatus => {
  const supportedNetWorkIds = getSupportedChainNames();
  const isSupportedNetwork = p.chains.some((r) =>
    supportedNetWorkIds.includes(r),
  );
  if (p.coreContracts && p.coreContracts.length > 0) {
    return isSupportedNetwork
      ? IntegrationStatus.LIVE
      : IntegrationStatus.PROPOSED;
  }
  if (p.adapters && p.adapters.length > 0) {
    return isSupportedNetwork
      ? IntegrationStatus.LIVE
      : IntegrationStatus.PROPOSED;
  }
  if (p.strategies) {
    for (const strategy of p.strategies) {
      if (strategies[strategy]?.state == StrategyState.LIVE) {
        return IntegrationStatus.LIVE;
      }
      if (strategies[strategy]?.state == StrategyState.DEPLOYMENT) {
        return IntegrationStatus.BEING_DEPLOYED;
      }
      if (strategies[strategy]?.state == StrategyState.DEVELOPMENT) {
        return IntegrationStatus.DEVELOPMENT;
      }
      if (strategies[strategy]?.state == StrategyState.PROPOSAL) {
        return IntegrationStatus.AWAITING;
      }
    }
  }
  if (p.intermediaryStrategies) {
    for (const strategy of p.intermediaryStrategies) {
      if (strategies[strategy]?.state == StrategyState.LIVE) {
        return IntegrationStatus.IN_USE;
      }
      if (strategies[strategy]?.state == StrategyState.DEPLOYMENT) {
        return IntegrationStatus.BEING_DEPLOYED;
      }
      if (strategies[strategy]?.state == StrategyState.DEVELOPMENT) {
        return IntegrationStatus.DEVELOPMENT;
      }
      if (strategies[strategy]?.state == StrategyState.PROPOSAL) {
        return IntegrationStatus.AWAITING;
      }
    }
  }

  return isSupportedNetwork
    ? IntegrationStatus.POSSIBLE
    : IntegrationStatus.PROPOSED;
};

export const getChainProtocols = (chainId: string): DeFiProtocol[] => {
  const r: DeFiProtocol[] = [];
  for (const orgSlug of Object.keys(integrations)) {
    const org = integrations[orgSlug];
    for (const protocolSlug of Object.keys(org.protocols)) {
      const protocol = org.protocols[protocolSlug];
      if (protocol.chains.includes(chains[chainId].name)) {
        protocol.organization = orgSlug;
        r.push(protocol);
      }
    }
  }
  return r;
};
