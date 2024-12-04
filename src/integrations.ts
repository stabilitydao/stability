import { strategies, StrategyShortId, StrategyState } from "./strategies";
import { ChainName, chains, getSupportedChainNames } from "./chains";

export type DeFiOrganization = {
  name: string;
  img: string;
  website: string;
  protocols: { [protocolId: string]: DeFiProtocol };
  defiLlama?: string;
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
  LIVE = "LIVE",
  IN_USE = "IN_USE",
  BEING_DEPLOYED = "BEING_DEPLOYED",
  DEVELOPMENT = "DEVELOPMENT",
  AWAITING = "AWAITING", // awaiting development
  POSSIBLE = "POSSIBLE",
  PROPOSED = "PROPOSED",
}

export type ProtocolStatusInfo = {
  title: string;
  description: string;
  color: string;
  bgColor: string;
};

export const protocolStatusInfo: {
  [status in IntegrationStatus]: ProtocolStatusInfo;
} = {
  [IntegrationStatus.LIVE]: {
    title: "Live",
    description: "Integration is live",
    color: "#4ade80", // green-400
    bgColor: "#00521f",
  },
  [IntegrationStatus.IN_USE]: {
    title: "In use",
    description: "Protocol in use by other integration",
    color: "#59f5ff",
    bgColor: "#215d60",
  },
  [IntegrationStatus.BEING_DEPLOYED]: {
    title: "Being deployed",
    description: "Integration is being deployed",
    color: "#a78bfa", // violet-400
    bgColor: "#55009d",
  },
  [IntegrationStatus.DEVELOPMENT]: {
    title: "Development",
    description: "Integration is under development",
    color: "#60a5fa", // blue-400
    bgColor: "#1d3f6c",
  },
  [IntegrationStatus.AWAITING]: {
    title: "Awaiting development",
    description: "We awaiting developer to solve integration issue",
    color: "#fef08a", // yellow-200
    bgColor: "#796e00",
  },
  [IntegrationStatus.POSSIBLE]: {
    title: "Possible",
    description: "Protocols for integration are live at supported chain",
    color: "#ff4646",
    bgColor: "#7c0000",
  },
  [IntegrationStatus.PROPOSED]: {
    title: "Proposed",
    description: "There are proposed strategies to integrate protocol",
    color: "#eeeeee",
    bgColor: "#2c2c2c",
  },
};

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
        adapters: ["ChainLinkAdapter"],
        coreContracts: ["PriceReader"],
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
  dia: {
    name: "DIA",
    img: "Diadata.svg",
    website: "https://www.diadata.org/",
    protocols: {
      diadata: {
        name: "Dia Data",
        category: DefiCategory.ORACLE,
        chains: [
          ChainName.ARBITRUM,
          ChainName.AURORA,
          ChainName.AVALANCHE,
          ChainName.BASE,
          ChainName.BEVM,
          ChainName.CELO,
          ChainName.ETHEREUM,
          ChainName.EVMOS,
          ChainName.FANTOM,
          ChainName.FUSE,
          ChainName.LINEA,
          ChainName.METIS,
          ChainName.MOONBEAM,
          ChainName.MOONRIVER,
          ChainName.ZKSYNC,
          ChainName.TELOS,
          ChainName.OPTIMISM,
          ChainName.POLYGON,
          ChainName.POLYGON_ZKEVM,
          ChainName.GNOSIS,
          ChainName.BSC,
          ChainName.BOBA,
          ChainName.ASTAR_ZKEVM,
        ],
        adapters: ["DiaAdapter"],
      },
    },
    github: "diadata-org",
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
        strategies: [StrategyShortId.AS1BLS],
        coreContracts: ["Zap"],
      },
    },
    defiLlama: "1inch-network",
    github: "1inch",
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
    },
    defiLlama: "bouncebit-cedefi",
    github: "BounceBit-Labs",
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
        strategies: [StrategyShortId.CUMF, StrategyShortId.GUMF],
        adapters: ["UniswapV3Adapter"],
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
    defiLlama: "sushi",
    github: "sushiswap",
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
    defiLlama: "pearl-v2",
    github: "Pearl-Finance",
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
    defiLlama: "dezswap",
    github: "dezswap",
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
    defiLlama: "mintswap-finance",
    github: "MintSwapFinance",
  },
  kiloex: {
    name: "KiloEx",
    img: "Kiloex.svg",
    website: "https://www.kiloex.io/",
    protocols: {
      kiloex: {
        name: "KiloEx",
        category: DefiCategory.AMM,
        chains: [
          ChainName.OPBNB,
          ChainName.BSC,
          ChainName.MANTA,
          ChainName.TAIKO,
        ],
        //todo BSqared
      },
    },
    defiLlama: "kiloex",
    github: "KiloExPerp",
  },
  dymension: {
    name: "Dymension DEX",
    img: "Dymensiondex.svg",
    website: "https://dymension.xyz/",
    protocols: {
      dymensiondex: {
        name: "Dymension DEX",
        category: DefiCategory.AMM,
        chains: [
          ChainName.DYMENSION,
          // mande
          // nim
        ],
      },
    },
    defiLlama: "dymension-dex",
    github: "dymensionxyz",
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
    defiLlama: "camelot",
    github: "camelotlabs",
  },
  cyberswap: {
    name: "CyberSwap",
    img: "Cyberswap.svg",
    website: "https://cyberswap.cc/",
    protocols: {
      cyberswap: {
        name: "CyberSwap",
        category: DefiCategory.AMM,
        chains: [ChainName.CYBER],
      },
    },
    defiLlama: "cyberswap",
    github: "Cyberswap-DEX",
  },
  demex: {
    name: "Demex",
    img: "Nitron.svg",
    website: "https://app.dem.exchange",
    protocols: {
      demex: {
        name: "Demex",
        category: DefiCategory.AMM,
        chains: [ChainName.MANTLE, ChainName.CARBON],
      },
      nitron: {
        name: "Nitron",
        category: DefiCategory.LENDING,
        chains: [ChainName.MANTLE, ChainName.CARBON],
      },
    },
    defiLlama: "demex",
    github: "switcheo",
  },
  izumi: {
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
    defiLlama: "iziswap",
    github: "IzumiFinance",
  },
  cytoswap: {
    name: "Cytoswap",
    img: "Cytoswap.svg",
    website: "https://cytoswap.com/",
    protocols: {
      cytoswap: {
        name: "Cytoswap",
        category: DefiCategory.AMM,
        chains: [ChainName.HELA],
      },
    },
    defiLlama: "cytoswap",
  },
  beethovenx: {
    name: "Beethoven X",
    img: "beethovenx.png",
    website: "https://beets.fi/",
    protocols: {
      beethovenx: {
        name: "Beethoven X",
        category: DefiCategory.AMM,
        chains: [
          ChainName.FANTOM,
          ChainName.OPTIMISM,
          // SONIC
        ],
        adapters: [
          // stable pools
          // weighted pools
        ],
      },
    },
    defiLlama: "beethoven-x",
    github: "beethovenxfi",
  },
  wigo: {
    name: "Wygo",
    img: "wigo.png",
    website: "https://wigoswap.io/",
    protocols: {
      wigoswap: {
        name: "WigoSwap",
        category: DefiCategory.AMM,
        chains: [
          ChainName.FANTOM,
          // SONIC
        ],
        adapters: ["UniswapV3Adapter"],
      },
    },
    defiLlama: "wigoswap",
    github: "wigoswap",
  },
  gravity: {
    name: "Gravity",
    img: "gravityfinance.png",
    website: "https://gravityfinance.io",
    protocols: {
      gravity: {
        name: "Gravity",
        category: DefiCategory.AMM,
        chains: [
          ChainName.POLYGON,
          ChainName.POLYGON_ZKEVM,
          // sonic
        ],
      },
    },
    defiLlama: "gravity-finance",
    github: "inthenextversion",
  },
  shadow: {
    name: "Shadow",
    img: "shadow.png",
    website: "https://www.shadowdex.fi/",
    protocols: {
      shadow: {
        name: "Shadow Exchange",
        category: DefiCategory.AMM,
        chains: [
          // sonic
        ],
        adapters: ["UniswapV3Adapter"],
      },
    },
  },
  swapx: {
    name: "SwapX",
    img: "swapx.png",
    website: "https://swapx.fi/",
    protocols: {
      swapx: {
        name: "SwapX",
        category: DefiCategory.AMM,
        chains: [
          // sonic
        ],
        adapters: [
          // "AlgebraAdapter", ?
        ],
      },
    },
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
          // sonic
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
    defiLlama: "beefy",
    github: "beefyfinance",
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
    defiLlama: "clearpool",
    github: "clearpool-finance",
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
    defiLlama: "deepr-finance",
    github: "Deepr-Finance",
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
          ChainName.MODE,
          ChainName.TAIKO,
          ChainName.ZETA,
          // sonic
          // b^2
          // iotex
          // kaia
        ],
      },
    },
    defiLlama: "avalon-finance",
  },
  silo: {
    name: "Silo",
    img: "silo.png",
    website: "https://www.silo.finance",
    protocols: {
      siloV1: {
        name: "Silo V1",
        category: DefiCategory.LENDING,
        chains: [
          ChainName.ARBITRUM,
          ChainName.OPTIMISM,
          ChainName.ETHEREUM,
          // sonic?
        ],
      },
      siloV2: {
        name: "Silo V2",
        category: DefiCategory.LENDING,
        chains: [
          ChainName.ARBITRUM,
          // sonic?
        ],
      },
    },
    defiLlama: "silo-finance",
    github: "silo-finance",
  },
  vicuna: {
    name: "Vicuna",
    website: "https://vicunafinance.com/",
    img: "vicuna.png",
    protocols: {
      vicuna: {
        name: "Vicuna",
        category: DefiCategory.LENDING,
        chains: [
          // sonic
        ],
      },
    },
  },
  zerolend: {
    name: "ZeroLend",
    website: "https://zerolend.xyz/",
    img: "zerolend.png",
    protocols: {
      zerolend: {
        name: "ZeroLend",
        category: DefiCategory.LENDING,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.LINEA,
          ChainName.BLAST,
          ChainName.ZIRCUIT,
          ChainName.X_LAYER,
          ChainName.ZKSYNC,
          ChainName.MANTA,
          // berachain bartio
        ],
      },
      lever: {
        name: "Lever",
        category: DefiCategory.LENDING,
        chains: [
          // sonic
        ],
      },
    },
    github: "zerolend",
    defiLlama: "zerolend",
  },
  // leveraged lending
  impermax: {
    name: "Impermax",
    img: "Impermax.svg",
    website: "https://www.impermax.finance/",
    protocols: {
      impermax: {
        name: "Impermax",
        category: DefiCategory.LENDING,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.OPTIMISM,
          ChainName.POLYGON,
          ChainName.ARBITRUM,
          ChainName.AVALANCHE,
          ChainName.SCROLL,
          ChainName.FANTOM,
          ChainName.MOONRIVER,
          ChainName.ZKSYNC,
          ChainName.MANTLE,
          ChainName.REAL,
          // canto
        ],
      },
    },
    defiLlama: "impermax-finance",
    github: "Impermax-Finance",
  },
  mach: {
    name: "Mach Finance",
    website: "https://www.machfi.xyz/",
    img: "mach.png",
    protocols: {
      mach: {
        name: "Mach Finance",
        category: DefiCategory.LENDING,
        chains: [
          // sonic
        ],
      },
    },
    github: "Mach-Finance",
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
        chains: [
          ChainName.ETHEREUM,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          // sonic
        ],
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
  // yield agg
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
    defiLlama: "desyn-liquid-strategy",
    github: "Meta-DesynLab",
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
    defiLlama: "stargate",
    github: "stargate-protocol",
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
    defiLlama: "lido",
    github: "lidofinance",
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
    defiLlama: "stader",
    github: "stader-labs",
  },
  bido: {
    name: "Bido",
    img: "Bido.svg",
    website: "https://app.bido.finance/",
    protocols: {
      bidofinance: {
        name: "Bido",
        category: DefiCategory.LSP,
        chains: [ChainName.BEVM],
      },
    },
    defiLlama: "bido-finance",
    github: "Bidohub",
  },
  zircuit: {
    name: "Zircuit",
    img: "Zircuitstaking.svg",
    website: "https://www.zircuit.com/",
    protocols: {
      zircuitstaking: {
        name: "Zircuit Staking",
        category: DefiCategory.LSP,
        chains: [ChainName.ETHEREUM, ChainName.ZIRCUIT],
      },
    },
    defiLlama: "zircuit-staking",
    github: "zircuit-labs",
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
