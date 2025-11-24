import { strategies, StrategyShortId, StrategyState } from "./strategies";
import { ChainName, chains } from "./chains";

export type DeFiOrganization = {
  name: string;
  img: string;
  website: string;
  creationDate?: number; // UNIX timestamp
  protocols: { [protocolId: string]: DeFiProtocol };
  defiLlama?: string;
  github?: string;
};

type Accident = {
  date: number; // UNIX timestamp
  url: string; // link to the accident description
  name: string;
};

export type DeFiProtocol = {
  name: string;
  img?: string; // separate img for protocol
  organization?: string; // optimal org slug for usability
  audits?: {
    name: string;
    url: string;
  }[];
  accidents?: Accident[];
  creationDate?: number; // UNIX timestamp
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
    creationDate: 1559174400,
    protocols: {
      chainlink: {
        name: "Data Feeds",
        category: DefiCategory.ORACLE,
        creationDate: 1559174400,
        audits: [],
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
          ChainName.SONIC,
        ],
        adapters: ["ChainLinkAdapter"],
        coreContracts: ["PriceReader"],
      },
      ccip: {
        name: "CCIP",
        category: DefiCategory.INTERCHAIN,
        audits: [],
        creationDate: 1713916800,
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
    creationDate: 1596430800,
    protocols: {
      diadata: {
        name: "Dia Data",
        category: DefiCategory.ORACLE,
        creationDate: 1596430800,
        audits: [
          {
            name: "DIA Multi Scope Security Audit Report.pdf",
            url: "https://github.com/mixbytes/audits_public/blob/master/DIA/Multi%20Scope/DIA%20Multi%20Scope%20Security%20Audit%20Report.pdf",
          },
          {
            url: "https://github.com/mixbytes/audits_public/blob/master/DIA/Lumina%20Staking/DIA%20Lumina%20Staking%20Security%20Audit%20Report.pdf",
            name: "DIA Lumina Staking Security Audit Report",
          },
        ],
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
    creationDate: 1635724800,
    protocols: {
      merkl: {
        name: "Merkl",
        img: "Merkl.svg",
        audits: [
          {
            name: "Code4rena June 2023 - July 2023",
            url: "https://code4rena.com/reports/2023-06-angle",
          },
          {
            name: "Chainsecurity April 2022 - May 2022",
            url: "https://4248327772-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MZrRrYejMtN3SzZU10r%2Fuploads%2Fgit-blob-d7b65a667a47d946739e5e91bf5109c9b5ddaa48%2Fchainsecurity-spring22.pdf?alt=media",
          },
          {
            name: "Chainsecurity December 2021 - January 2022",
            url: "https://4248327772-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MZrRrYejMtN3SzZU10r%2Fuploads%2Fgit-blob-6023f8616d0a1fcab59ae83422eba19de15d1185%2Fchainsecurity-december.pdf?alt=media",
          },
          {
            name: "Chainsecurity July - October 2021",
            url: "https://4248327772-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MZrRrYejMtN3SzZU10r%2Fuploads%2Fgit-blob-f078bbb95dabc1ec00f84eb8f77f74bcd984cf7e%2Fchainsecurity.pdf?alt=media",
          },
          {
            name: "Sigma Prime July - October 2021",
            url: "https://4248327772-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MZrRrYejMtN3SzZU10r%2Fuploads%2Fgit-blob-d8ac640f964f9da5c79f2cff8727bc27ada250f7%2Fsp.pdf?alt=media",
          },
        ],
        creationDate: 1680307200,
        category: DefiCategory.REWARDING,
        // chains with active rewards
        chains: [
          ChainName.ETHEREUM,
          ChainName.AVALANCHE,
          ChainName.BASE,
          ChainName.ARBITRUM,
          ChainName.POLYGON,
          ChainName.OPTIMISM,
          ChainName.POLYGON_ZKEVM,
          ChainName.SCROLL,
          ChainName.LINEA,
          ChainName.BLAST,
          ChainName.IMMUTABLE_ZKEVM,
          ChainName.SONIC,
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
          StrategyShortId.MMF,
          StrategyShortId.VMF,
          StrategyShortId.AMF,
          StrategyShortId.SiALMF,
          StrategyShortId.SiMerklF,
          StrategyShortId.SiMMF,
          StrategyShortId.EMF,
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
    creationDate: 1556668800,
    protocols: {
      oneInch: {
        name: "1inch",
        creationDate: 1604188800,
        category: DefiCategory.DEX_AGG,
        audits: [
          {
            name: "1inch Aggregation Router V5_ABDK Consulting.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_ABDK%20Consulting.pdf",
          },
          {
            name: "1inch Aggregation Router V5_CoinFabrik.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_CoinFabrik.pdf",
          },
          {
            name: "1inch Aggregation Router V5_Consensys.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_Consensys.pdf",
          },
          {
            name: "1inch Aggregation Router V5_IgorGulamov.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_IgorGulamov.pdf",
          },
          {
            name: "1inch Aggregation Router V5_MixBytes.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_MixBytes.pdf",
          },
          {
            name: "1inch Aggregation Router V5_OpenZepplin.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_OpenZepplin.pdf",
          },
          {
            name: "1inch Aggregation Router V5_PeckShield.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_PeckShield.pdf",
          },
          {
            name: "1inch Aggregation Router V5_Pessimistic.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_Pessimistic.pdf",
          },
          {
            name: "1inch Aggregation Router V5_Statemind.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_Statemind.pdf",
          },
          {
            name: "1inch Aggregation Router V5_Zokyo.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_Zokyo.pdf",
          },
          {
            name: "1inch Aggregation Router V6.1_Decurity.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6.1_Decurity.pdf",
          },
          {
            name: "1inch Aggregation Router V6.1_Hexens.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6.1_Hexens.pdf",
          },
          {
            name: "1inch Aggregation Router V6.1_OpenZeppelin.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6.1_OpenZeppelin.pdf",
          },
          {
            name: "1inch Aggregation Router V6.1_PeckShield.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6.1_PeckShield.pdf",
          },
          {
            name: "1inch Aggregation Router V6.2_Decurity.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6.2_Decurity.pdf",
          },
          {
            name: "1inch Aggregation Router V6.2_Hexens.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6.2_Hexens.pdf",
          },
          {
            name: "1inch Aggregation Router V6.2_Pessimistic.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6.2_Pessimistic.pdf",
          },
          {
            name: "1inch Aggregation Router V6_Consensys.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6_Consensys.pdf",
          },
          {
            name: "1inch Aggregation Router V6_Decurity.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6_Decurity.pdf",
          },
          {
            name: "1inch Aggregation Router V6_Hexens.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6_Hexens.pdf",
          },
          {
            name: "1inch Aggregation Router V6_OpenZeppelin.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6_OpenZeppelin.pdf",
          },
          {
            name: "1inch Aggregation Router V6_PeckShield.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6_PeckShield.pdf",
          },
          {
            name: "1inch Aggregation Router V6_Pessimistic.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Aggregation%20Router%20V6_Pessimistic.pdf",
          },
          {
            name: "1inch Limit Order Protocol v4.1_OpenZeppelin.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Limit%20Order%20Protocol%20v4.1_OpenZeppelin.pdf",
          },
          {
            name: "1inch Limit Order Protocol v4_OpenZeppelin.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V6%20and%20Limit%20Order%20Pr.V4/1inch%20Limit%20Order%20Protocol%20v4_OpenZeppelin.pdf",
          },
          {
            name: "Certik - 1inch v2 Audit Report.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V2/Certik%20-%201inch%20v2%20Audit%20Report.pdf",
          },
          {
            name: "Chainsulting - 1inch v2 Audit Report.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V2/Chainsulting%20-%201inch%20v2%20Audit%20Report.pdf",
          },
          {
            name: "Coinfabrik - 1inch v2 Audit Report.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V2/Coinfabrik%20-%201inch%20v2%20Audit%20Report.pdf",
          },
          {
            name: "Hacken - 1inch v2 Audit Report.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V2/Hacken%20-%201inch%20v2%20Audit%20Report.pdf",
          },
          {
            name: "Haechi - 1inch v2 Audit Report.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V2/Haechi%20-%201inch%20v2%20Audit%20Report.pdf",
          },
          {
            name: "MixBytes - 1inch v2 Audit Report.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V2/MixBytes%20-%201inch%20v2%20Audit%20Report.pdf",
          },
          {
            name: "Scott Bigelow - 1inch v2 Audit Report.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V2/Scott%20Bigelow%20-%201inch%20v2%20Audit%20Report.pdf",
          },
          {
            name: "Slowmist - 1inch v2 Audit Report.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V2/Slowmist%20-%201inch%20v2%20Audit%20Report.pdf",
          },
          {
            name: "Certik - 1inch v3 Audit Report.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V3/Certik%20-%201inch%20v3%20Audit%20Report.pdf",
          },
          {
            name: "Gulamov - 1inch v3 Audit Report.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V3/Gulamov%20-%201inch%20v3%20Audit%20Report.pdf",
          },
          {
            name: "MixBytes - 1inch v3 Audit Report.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V3/MixBytes%20-%201inch%20v3%20Audit%20Report.pdf",
          },
          {
            name: "1inch Aggregation Router v4 Audit_ABDK.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V4/1inch%20Aggregation%20Router%20v4%20Audit_ABDK.pdf",
          },
          {
            name: "1inch Aggregation Router v4 Audit_Chainsulting.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V4/1inch%20Aggregation%20Router%20v4%20Audit_Chainsulting.pdf",
          },
          {
            name: "1inch Aggregation Router v4 Audit_Coinfabrik.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V4/1inch%20Aggregation%20Router%20v4%20Audit_Coinfabrik.pdf",
          },
          {
            name: "1inch Aggregation Router v4 Audit_Consensys.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V4/1inch%20Aggregation%20Router%20v4%20Audit_Consensys.pdf",
          },
          {
            name: "1inch Aggregation Router v4 Audit_Igor Gulamov.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V4/1inch%20Aggregation%20Router%20v4%20Audit_Igor%20Gulamov.pdf",
          },
          {
            name: "1Inch Aggregation Router v4 Audit_MixBites.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V4/1Inch%20Aggregation%20Router%20v4%20Audit_MixBites.pdf",
          },
          {
            name: "1inch Aggregation Router v4 Audit_Pessimistic.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V4/1inch%20Aggregation%20Router%20v4%20Audit_Pessimistic.pdf",
          },
          {
            name: "1inch-cross-chain-swap-v1-AstraSec.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-swap-v1-AstraSec.pdf",
          },
          {
            name: "1inch-cross-chain-swap-v1-Consensys.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-swap-v1-Consensys.pdf",
          },
          {
            name: "1inch-cross-chain-swap-v1-Decurity.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-swap-v1-Decurity.pdf",
          },
          {
            name: "1inch-cross-chain-swap-v1-Igor Gulamov.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-swap-v1-Igor%20Gulamov.pdf",
          },
          {
            name: "1inch-cross-chain-swap-v1-Open Zeppelin.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-swap-v1-Open%20Zeppelin.pdf",
          },
          {
            name: "1inch-cross-chain-swap-v1-Pessimistic.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-swap-v1-Pessimistic.pdf",
          },
          {
            name: "1inch-cross-chain-v2-Astrasec.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-v2-Astrasec.pdf",
          },
          {
            name: "1inch-cross-chain-v2-Consensys.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-v2-Consensys.pdf",
          },
          {
            name: "1inch-cross-chain-v2-Decurity.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-v2-Decurity.pdf",
          },
          {
            name: "1inch-cross-chain-v2-Igor Gulamov.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-v2-Igor%20Gulamov.pdf",
          },
          {
            name: "1inch-cross-chain-v2-Open Zeppelin.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-v2-Open%20Zeppelin.pdf",
          },
          {
            name: "1inch-cross-chain-v2-Pessimistic.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-v2-Pessimistic.pdf",
          },
          {
            name: "Fee flow v1-AstraSec.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fees%20for%20LO%20and%20Fusion%20V1/Fee%20flow%20v1-AstraSec.pdf",
          },
          {
            name: "Fee flow v1-Bailsec.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fees%20for%20LO%20and%20Fusion%20V1/Fee%20flow%20v1-Bailsec.pdf",
          },
          {
            name: "Fee flow v1-ChainLight.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fees%20for%20LO%20and%20Fusion%20V1/Fee%20flow%20v1-ChainLight.pdf",
          },
          {
            name: "Fee flow v1-Decurity.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fees%20for%20LO%20and%20Fusion%20V1/Fee%20flow%20v1-Decurity.pdf",
          },
          {
            name: "Fee flow v1-Open Zepplin.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fees%20for%20LO%20and%20Fusion%20V1/Fee%20flow%20v1-Open%20Zepplin.pdf",
          },
          {
            name: "Fee flow v1-Sherlock.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fees%20for%20LO%20and%20Fusion%20V1/Fee%20flow%20v1-Sherlock.pdf",
          },
          {
            name: "1inch FixedRateSwap_Ackee Blockchain.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fixed%20Rate%20Swap%20V1/1inch%20FixedRateSwap_Ackee%20Blockchain.pdf",
          },
          {
            name: "1inch FixedRateSwap_Chainsulting.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fixed%20Rate%20Swap%20V1/1inch%20FixedRateSwap_Chainsulting.pdf",
          },
          {
            name: "1inch FixedRateSwap_CoinFabrik.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fixed%20Rate%20Swap%20V1/1inch%20FixedRateSwap_CoinFabrik.pdf",
          },
          {
            name: "1inch FixedRateSwap_MixedBytes.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fixed%20Rate%20Swap%20V1/1inch%20FixedRateSwap_MixedBytes.pdf",
          },
          {
            name: "1inch FixedRateSwap_Pessimistic.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fixed%20Rate%20Swap%20V1/1inch%20FixedRateSwap_Pessimistic.pdf",
          },
          {
            name: "1inch_FusionMode_ABDK.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_ABDK.pdf",
          },
          {
            name: "1inch_FusionMode_ChainSecurity1.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_ChainSecurity1.pdf",
          },
          {
            name: "1inch_FusionMode_ChainSecurity2.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_ChainSecurity2.pdf",
          },
          {
            name: "1inch_FusionMode_ChainSecurity3.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_ChainSecurity3.pdf",
          },
          {
            name: "1inch_FusionMode_Decurity.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_Decurity.pdf",
          },
          {
            name: "1inch_FusionMode_Hexens.1.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_Hexens.1.pdf",
          },
          {
            name: "1inch_FusionMode_Hexens.2.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_Hexens.2.pdf",
          },
          {
            name: "1inch_FusionMode_iosiro.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_iosiro.pdf",
          },
          {
            name: "1inch_FusionMode_OpenZepplin.1.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_OpenZepplin.1.pdf",
          },
          {
            name: "1inch_FusionMode_OpenZepplin.2.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_OpenZepplin.2.pdf",
          },
          {
            name: "1inch_FusionMode_Oxorio.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_Oxorio.pdf",
          },
          {
            name: "1inch_FusionMode_Peckshield.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_Peckshield.pdf",
          },
          {
            name: "1inch_FusionMode_Pessimistic.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_FusionMode_Pessimistic.pdf",
          },
          {
            name: "1inch_TokenPlugins-Pashov.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20mode%20and%20Token-plugins/1inch_TokenPlugins-Pashov.pdf",
          },
          {
            name: "1inch Settlement v2.1_AstraSec.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20Settlement%20V2/1inch%20Settlement%20v2.1_AstraSec.pdf",
          },
          {
            name: "1inch Settlement v2.1_Decurity.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20Settlement%20V2/1inch%20Settlement%20v2.1_Decurity.pdf",
          },
          {
            name: "1inch Settlement v2.1_Hexens.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20Settlement%20V2/1inch%20Settlement%20v2.1_Hexens.pdf",
          },
          {
            name: "1inch Settlement v2.1_Open Zepplin.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20Settlement%20V2/1inch%20Settlement%20v2.1_Open%20Zepplin.pdf",
          },
          {
            name: "1inch Settlement v2.1_Pashov.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20Settlement%20V2/1inch%20Settlement%20v2.1_Pashov.pdf",
          },
          {
            name: "1inch Settlement v2.1_Pessemistic.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20Settlement%20V2/1inch%20Settlement%20v2.1_Pessemistic.pdf",
          },
          {
            name: "1inch Settlement v2_Decurity.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20Settlement%20V2/1inch%20Settlement%20v2_Decurity.pdf",
          },
          {
            name: "1inch Settlement v2_Hexens.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20Settlement%20V2/1inch%20Settlement%20v2_Hexens.pdf",
          },
          {
            name: "1inch Settlement v2_Open Zeppelin.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20Settlement%20V2/1inch%20Settlement%20v2_Open%20Zeppelin.pdf",
          },
          {
            name: "1inch Settlement v2_Peckshield.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20Settlement%20V2/1inch%20Settlement%20v2_Peckshield.pdf",
          },
          {
            name: "1inch Settlement v2_Pessimistic.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Fusion%20Settlement%20V2/1inch%20Settlement%20v2_Pessimistic.pdf",
          },
          {
            name: "ABDK - 1inch Limit Order Protocol audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol/ABDK%20-%201inch%20Limit%20Order%20Protocol%20audit.pdf",
          },
          {
            name: "Chainsulting - 1inch Limit Order Protocol audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol/Chainsulting%20-%201inch%20Limit%20Order%20Protocol%20audit.pdf",
          },
          {
            name: "Coinfabrik - 1inch Limit Order Protocol audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol/Coinfabrik%20-%201inch%20Limit%20Order%20Protocol%20audit.pdf",
          },
          {
            name: "Coinspect - 1inch Limit Order Protocol audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol/Coinspect%20-%201inch%20Limit%20Order%20Protocol%20audit.pdf",
          },
          {
            name: "LimitSwap audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol/LimitSwap%20audit.pdf",
          },
          {
            name: "Pessimistic - 1inch Limit Order Protocol audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol/Pessimistic%20-%201inch%20Limit%20Order%20Protocol%20audit.pdf",
          },
          {
            name: "1inch Limit Order Portocol_Certik.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol%20V2/1inch%20Limit%20Order%20Portocol_Certik.pdf",
          },
          {
            name: "1Inch Limit Order Protocol_ABDK.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol%20V2/1Inch%20Limit%20Order%20Protocol_ABDK.pdf",
          },
          {
            name: "1Inch Limit Order Protocol_Chainsulting.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol%20V2/1Inch%20Limit%20Order%20Protocol_Chainsulting.pdf",
          },
          {
            name: "1Inch Limit Order Protocol_CoinFabrik.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol%20V2/1Inch%20Limit%20Order%20Protocol_CoinFabrik.pdf",
          },
          {
            name: "1Inch Limit Order Protocol_IgorGulamov.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol%20V2/1Inch%20Limit%20Order%20Protocol_IgorGulamov.pdf",
          },
          {
            name: "1Inch Limit Order Protocol_MixBytes.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol%20V2/1Inch%20Limit%20Order%20Protocol_MixBytes.pdf",
          },
          {
            name: "1Inch Limit Order Protocol_Pessimistic.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol%20V2/1Inch%20Limit%20Order%20Protocol_Pessimistic.pdf",
          },
          {
            name: "Certik - 1inch Liquidity Protocol audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/Certik%20-%201inch%20Liquidity%20Protocol%20audit.pdf",
          },
          {
            name: "Chainsulting - 1inch Liquidity Protocol Audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/Chainsulting%20-%201inch%20Liquidity%20Protocol%20Audit.pdf",
          },
          {
            name: "Coinfabrik - 1inch Liquidity Protocol Audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/Coinfabrik%20-%201inch%20Liquidity%20Protocol%20Audit.pdf",
          },
          {
            name: "Cure53 - 1inch Liquidity Protocol audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/Cure53%20-%201inch%20Liquidity%20Protocol%20audit.pdf",
          },
          {
            name: "Gulamov - 1inch Liquidity Protocol audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/Gulamov%20-%201inch%20Liquidity%20Protocol%20audit.pdf",
          },
          {
            name: "MixBytes - 1inch Liquidity Protocol Report.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/MixBytes%20-%201inch%20Liquidity%20Protocol%20Report.pdf",
          },
          {
            name: "Gulamov - 1inch Farming audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/Farming/Gulamov%20-%201inch%20Farming%20audit.pdf",
          },
          {
            name: "1inch Multi-Farming Contracts V3_Chainsafe.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Multi-Farming%20Contracts%20V3/1inch%20Multi-Farming%20Contracts%20V3_Chainsafe.pdf",
          },
          {
            name: "1inch Multi-Farming Contracts V3_CoinFabrik.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Multi-Farming%20Contracts%20V3/1inch%20Multi-Farming%20Contracts%20V3_CoinFabrik.pdf",
          },
          {
            name: "1inch Multi-Farming Contracts V3_Decurity.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Multi-Farming%20Contracts%20V3/1inch%20Multi-Farming%20Contracts%20V3_Decurity.pdf",
          },
          {
            name: "1inch Multi-Farming Contracts V3_Gulamov.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Multi-Farming%20Contracts%20V3/1inch%20Multi-Farming%20Contracts%20V3_Gulamov.pdf",
          },
          {
            name: "1inch Multi-Farming Contracts V3_Peckshield.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Multi-Farming%20Contracts%20V3/1inch%20Multi-Farming%20Contracts%20V3_Peckshield.pdf",
          },
          {
            name: "1inch Multi-Farming Contracts V3_Pessimistic.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Multi-Farming%20Contracts%20V3/1inch%20Multi-Farming%20Contracts%20V3_Pessimistic.pdf",
          },
          {
            name: "1inch Multi-Farming Contracts V3_Smartstate.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Multi-Farming%20Contracts%20V3/1inch%20Multi-Farming%20Contracts%20V3_Smartstate.pdf",
          },
          {
            name: "1inch Solana - Decurity v1.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Solana-Fusion/1inch%20Solana%20-%20Decurity%20v1.pdf",
          },
          {
            name: "Solan Fusion - Hexens v1.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Solana-Fusion/Solan%20Fusion%20-%20Hexens%20v1.pdf",
          },
          {
            name: "Solana Fusion - Quantstamp v1.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Solana-Fusion/Solana%20Fusion%20-%20Quantstamp%20v1.pdf",
          },
          {
            name: "Solana Fusion - Zenith v1.01.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Solana-Fusion/Solana%20Fusion%20-%20Zenith%20v1.01.pdf",
          },
          {
            name: "Chainsulting - 1inch Vesting Contract audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Vesting%20Contract/Chainsulting%20-%201inch%20Vesting%20Contract%20audit.pdf",
          },
          {
            name: "Coinfabrik - 1inch Vesting Contract audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Vesting%20Contract/Coinfabrik%20-%201inch%20Vesting%20Contract%20audit.pdf",
          },
          {
            name: "Gulamov - 1inch Vesting Contract audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Vesting%20Contract/Gulamov%20-%201inch%20Vesting%20Contract%20audit.pdf",
          },
          {
            name: "Pessimistic - 1inch Vesting Contract audit.pdf",
            url: "https://github.com/1inch/1inch-audits/blob/master/Vesting%20Contract/Pessimistic%20-%201inch%20Vesting%20Contract%20audit.pdf",
          },
        ],
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
    creationDate: 1715568000,
    protocols: {
      bouncebitcedefi: {
        name: "BounceBit CeDeFi",
        audits: [
          {
            name: "BounceBit-Vault_audit_report_2024-02-09",
            url: "https://1316604192-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FaNWumH92fd1205exOOBs%2Fuploads%2FKFpCcHfuzqSvO1yGpUJL%2FBounceBit-Vault_audit_report_2024-02-09.pdf?alt=media&token=cbf843a2-8ec1-43bc-addc-1a584d4deacf",
          },
        ],
        creationDate: 1715568000,
        category: DefiCategory.DEX_AGG,
        chains: [ChainName.BOUNCEBIT, ChainName.BSC, ChainName.ETHEREUM],
      },
      bouncebitpremium: {
        name: "BounceBit Premium",
        creationDate: 1715568000,
        audits: [],
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
    creationDate: 1541155200,
    website: "https://uniswap.org",
    protocols: {
      uniswapV3: {
        name: "Uniswap V3",
        category: DefiCategory.AMM,
        creationDate: 1620000000,
        audits: [
          {
            name: "ABDK_UniswapV3_v1",
            url: "https://abdk.consulting/ABDK_UniswapV3_v1.pdf",
          },
        ],
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
          ChainName.SONIC,
        ],
        strategies: [StrategyShortId.CUMF, StrategyShortId.GUMF],
        adapters: ["UniswapV3Adapter"],
      },
      uniswapV2: {
        name: "Uniswap V2",
        category: DefiCategory.AMM,
        audits: [
          {
            name: "Uniswap V2 Audit Report",
            url: "https://dapp.org.uk/reports/uniswapv2.html",
          },
        ],
        creationDate: 1588291200,
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
    creationDate: 1601510400,
    protocols: {
      quickswapV3: {
        name: "QuickSwap V3",
        category: DefiCategory.AMM,
        audits: [],
        creationDate: 1662921600,
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
    creationDate: 1690944000,
    website: "https://retro.finance",
    protocols: {
      retro: {
        name: "Retro",
        category: DefiCategory.AMM,
        chains: [ChainName.POLYGON],
        audits: [
          {
            name: "PeckShield-Audit-Report-Thena-v1.0",
            url: "https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Thena-v1.0.pdf",
          },
        ],
        creationDate: 1690944000,
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
    creationDate: 1577836800,
    protocols: {
      stableSwapNg: {
        name: "StableSwapNG",
        creationDate: 1577836800,
        category: DefiCategory.AMM,
        audits: [
          {
            name: "Curve Finance/StableSwapNG/Curve Finance StableSwapNG Security Audit Report",
            url: "https://github.com/mixbytes/audits_public/blob/master/Curve%20Finance/StableSwapNG/Curve%20Finance%20StableSwapNG%20Security%20Audit%20Report.pdf",
          },
        ],
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
          ChainName.SONIC,
        ],
        strategies: [StrategyShortId.CCF],
        adapters: ["CurveAdapter"],
      },
      llamalend: {
        creationDate: 1675209600,
        name: "LlamaLend",
        audits: [
          {
            url: "https://github.com/statemindio/public-audits/blob/main/Curve/2024-02-02_Curve_Lending.pdf",
            name: "Curve/2024-02-02_Curve_Lending",
          },
        ],
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
    creationDate: 1683158400,
    protocols: {
      v3Amm: {
        name: "V3 AMM",
        audits: [
          {
            name: "SushiSwap/BentoBox/Sushiswap Bentobox Smart Contract Audit",
            url: "https://github.com/mixbytes/audits_public/blob/master/SushiSwap/BentoBox/Sushiswap%20Bentobox%20Smart%20Contract%20Audit%20(1).pdf",
          },
        ],
        creationDate: 1683158400,
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
  enclabs: {
    name: "Enclabs",
    img: "enclabs.svg",
    creationDate: 1738225563,
    website: "https://www.enclabs.finance/",
    protocols: {
      enclabs: {
        name: "Enclabs",
        accidents: [],
        audits: [],
        creationDate: 1738225563,
        category: DefiCategory.LENDING,
        chains: [ChainName.SONIC],
      },
    },
    defiLlama: "enclabs",
    github: "enclabs-io",
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
    creationDate: 1631059200,
    protocols: {
      beethovenx: {
        name: "Beethoven X",
        creationDate: 1631059200,
        audits: [
          {
            name: "adbk-2022-05-27",
            url: "https://github.com/balancer/balancer-v2-monorepo/blob/master/audits/abdk/2022-05-27.pdf",
          },
          {
            name: "certora-2021-04-22",
            url: "https://github.com/balancer/balancer-v2-monorepo/blob/master/audits/certora/2021-04-22.pdf",
          },
          {
            name: "certora-2022-09-23",
            url: "https://github.com/balancer/balancer-v2-monorepo/blob/master/audits/certora/2022-09-23.pdf",
          },
          {
            name: "certora-2023-05-08",
            url: "https://github.com/balancer/balancer-v2-monorepo/blob/master/audits/certora/2023-05-08.pdf",
          },
          {
            name: "openzeppelin-2021-03-15",
            url: "https://github.com/balancer/balancer-v2-monorepo/blob/master/audits/openzeppelin/2021-03-15.pdf",
          },
          {
            name: "openzeppelin-2021-10-09",
            url: "https://github.com/balancer/balancer-v2-monorepo/blob/master/audits/openzeppelin/2021-10-09.pdf",
          },
          {
            name: "trail-of-bits-2021-04-02",
            url: "https://github.com/balancer/balancer-v2-monorepo/blob/master/audits/trail-of-bits/2021-04-02.pdf",
          },
          {
            name: "trail-of-bits-2021-10-08",
            url: "https://github.com/balancer/balancer-v2-monorepo/blob/master/audits/trail-of-bits/2021-10-08.pdf",
          },
          {
            name: "trail-of-bits-2022-05-27",
            url: "https://github.com/balancer/balancer-v2-monorepo/blob/master/audits/trail-of-bits/2022-05-27.pdf",
          },
          {
            name: "trail-of-bits-2022-09-02",
            url: "https://github.com/balancer/balancer-v2-monorepo/blob/master/audits/trail-of-bits/2022-05-27.pdf",
          },
          {
            name: "trail-of-bits-2022-10-25",
            url: "https://github.com/balancer/balancer-v2-monorepo/blob/master/audits/trail-of-bits/2022-05-27.pdf",
          },
        ],
        accidents: [
          {
            date: 1677445200,
            url: "https://www.sharkteam.org/report/analysis/20230228001A_en.pdf",
            name: "SwapXAttack: Permission Vulnerability And Price Manipulation",
          },
        ],
        category: DefiCategory.AMM,
        chains: [ChainName.FANTOM, ChainName.OPTIMISM, ChainName.SONIC],
        adapters: [
          "BalancerComposableStableAdapter",
          "BalancerWeightedAdapter",
        ],
        strategies: [StrategyShortId.BSF, StrategyShortId.BWF],
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
        chains: [ChainName.FANTOM, ChainName.SONIC],
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
        chains: [ChainName.POLYGON, ChainName.POLYGON_ZKEVM, ChainName.SONIC],
      },
    },
    defiLlama: "gravity-finance",
    github: "inthenextversion",
  },
  shadow: {
    name: "Shadow",
    img: "shadow.png",
    creationDate: 1709251200,
    website: "https://www.shadow.so/",
    protocols: {
      shadow: {
        name: "Shadow Exchange",
        audits: [
          {
            name: "Spearbit Shadow Exchange Audit",
            url: "https://cantina.xyz/portfolio/98695d75-ee7d-4e1c-aa96-6379f73c5b2c",
          },
          {
            name: "Consensys Diligence Ramses V3 CLMM Audit",
            url: "https://diligence.consensys.io/audits/2024/08/ramses-v3/",
          },
          {
            name: "Code4rena Ramses V3 CLMM Contest",
            url: "https://code4rena.com/reports/2024-10-ramses-exchange",
          },
        ],
        accidents: [],
        creationDate: 1709251200,
        category: DefiCategory.AMM,
        chains: [ChainName.SONIC],
        adapters: ["UniswapV3Adapter"],
        strategies: [StrategyShortId.ASF, StrategyShortId.ShF],
      },
    },
  },
  swapx: {
    name: "SwapX",
    img: "swapx.png",
    website: "https://swapx.fi/",
    creationDate: 1638720000,
    protocols: {
      swapx: {
        name: "SwapX",
        category: DefiCategory.AMM,
        chains: [ChainName.SONIC],
        creationDate: 1704600000,
        audits: [
          {
            name: "SwapXPSL_AuditReport_InterFi",
            url: "https://github.com/swapxco/swapx-presales-audit/blob/main/SwapXPSL_AuditReport_InterFi.pdf",
          },
          {
            name: "Algebra Paladin_report",
            url: "https://3468129680-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FKboRABceyMllFm7vMRLZ%2Fuploads%2FzOHbuUvv7J9tfSUwL2J7%2FAlgebra_Paladin_report.pdf?alt=media&token=6545c2b0-d58b-41c1-b16f-55bbb2649c53",
          },
          {
            name: "Riley_Holterhus_Algebra_Integral",
            url: "https://3468129680-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FKboRABceyMllFm7vMRLZ%2Fuploads%2FGnxb8BWEHoG0ZEA8pSzy%2FRiley_Holterhus_Algebra_Integral.pdf?alt=media&token=21953cd9-3bf2-45d8-b2fe-a51a5ed52a52",
          },
          {
            name: "Farming_Plugin_report",
            url: "https://3468129680-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FKboRABceyMllFm7vMRLZ%2Fuploads%2F0yHo7kH4GQd2b7Illfd2%2FFarming_Plugin_report_MixBytes.pdf?alt=media&token=4ffb005d-b003-43e3-a8b7-f4b4e86c8d92",
          },
        ],
        adapters: [
          "SolidlyAdapter",
          // "AlgebraV3Adapter",
        ],
        strategies: [StrategyShortId.ISF, StrategyShortId.SF],
      },
    },
  },
  supersonic: {
    name: "SuperSonic",
    website: "https://www.supersonic.trade",
    img: "supersonic.png",
    protocols: {
      supersonic: {
        name: "SuperSonic",
        category: DefiCategory.AMM,
        chains: [ChainName.SONIC],
      },
    },
  },
  equalizer: {
    name: "Equalizer",
    website: "https://equalizer.exchange",
    img: "equalizer.png",
    protocols: {
      equalizer: {
        name: "Equalizer",
        category: DefiCategory.AMM,
        chains: [ChainName.FANTOM, ChainName.BASE, ChainName.SONIC],
        adapters: ["UniswapV3Adapter", "SolidlyAdapter"],
        strategies: [StrategyShortId.EF],
      },
    },
    defiLlama: "equalizer",
  },
  metropolis: {
    name: "Metropolis",
    website: "https://metropolis.exchange",
    img: "metropolis.png",
    protocols: {
      metropolis: {
        name: "Metropolis",
        category: DefiCategory.AMM,
        chains: [ChainName.SONIC],
      },
    },
  },
  ramses: {
    name: "Ramses",
    website: "https://www.ramses.exchange",
    img: "ramses.png",
    protocols: {
      ramses: {
        name: "Ramses Exchange",
        category: DefiCategory.AMM,
        chains: [ChainName.ARBITRUM],
      },
    },
    github: "RamsesExchange",
    defiLlama: "ramses-exchange",
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
          ChainName.SONIC,
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
          ChainName.SONIC,
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
          ChainName.SONIC,
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
      compoundV2: {
        name: "Compound 2",
        category: DefiCategory.LENDING,
        chains: [ChainName.ETHEREUM],
        strategies: [StrategyShortId.C],
      },
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
    creationDate: 1578633600,
    protocols: {
      aaveV3: {
        name: "Aave V3",
        category: DefiCategory.LENDING,
        creationDate: 1674787200,
        audits: [
          {
            name: "2024-09-10_Certora_Aave-v3.2_Stable_Rate_Removal",
            url: "https://github.com/aave-dao/aave-v3-origin/blob/74412e2b6e0b1973fac6837b6a488f8eaaeac4b1/audits/2024-09-10_Certora_Aave-v3.2_Stable_Rate_Removal.pdf",
          },
          {
            name: "2024-09-12_Oxorio_Aav3-v3.2",
            url: "https://github.com/aave-dao/aave-v3-origin/blob/74412e2b6e0b1973fac6837b6a488f8eaaeac4b1/audits/2024-09-12_Oxorio_Aav3-v3.2.pdf",
          },
          {
            name: "2024-09-15_Pashov_Aave-v3.2",
            url: "https://github.com/aave-dao/aave-v3-origin/blob/74412e2b6e0b1973fac6837b6a488f8eaaeac4b1/audits/2024-09-15_Pashov_Aave-v3.2.pdf",
          },
          {
            name: "2024-09-19_Certora_Aave-v3.2_Liquid_eModes",
            url: "https://github.com/aave-dao/aave-v3-origin/blob/74412e2b6e0b1973fac6837b6a488f8eaaeac4b1/audits/2024-09-19_Certora_Aave-v3.2_Liquid_eModes.pdf",
          },
          {
            name: "2024-09-30_Enigma_Aave-v3.2",
            url: "https://github.com/aave-dao/aave-v3-origin/blob/74412e2b6e0b1973fac6837b6a488f8eaaeac4b1/audits/2024-09-30_Enigma_Aave-v3.2.pdf",
          },
        ],
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
          ChainName.SONIC,
          ChainName.PLASMA,
        ],
        strategies: [StrategyShortId.AMF, StrategyShortId.A],
        intermediaryStrategies: [StrategyShortId.Y],
      },
      merit: {
        name: "Merit",
        img: "merit.png",
        category: DefiCategory.REWARDING,
        chains: [
          ChainName.ETHEREUM,
          ChainName.AVALANCHE,
          ChainName.BASE,
          ChainName.SONIC,
          ChainName.GNOSIS,
          ChainName.CELO,
        ],
        strategies: [StrategyShortId.AMeritF],
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
          ChainName.SONIC,
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
    creationDate: 1637760000,
    img: "silo.png",
    website: "https://www.silo.finance",
    protocols: {
      siloV1: {
        name: "Silo V1",
        audits: [
          {
            name: "ChainSecurity Curve & Convex Audit Report",
            url: "https://drive.google.com/file/d/1h-vjVceL2k03jXAN_mBcEmeUbATcrrEt/view",
          },
          {
            name: "Certora Formal Verification Report of Silo Protocol",
            url: "https://drive.google.com/file/d/1D2EIOb0XaRov5Ph2AE0DTfIsMISd7UXG/view",
          },
          {
            name: "Certora Formal Verification Report of Chainlink Price Provider",
            url: "https://prover.certora.com/output/74264/b233863cce92448566db?anonymousKey=2a3af53f3a3da84fa1a7763b6122b1d9c32caf32",
          },
          {
            name: "ABDK Audit Report",
            url: "https://drive.google.com/file/d/1WXaB3ICLv4rSEX86POK3-NaOIxXwyq9l/view",
          },
          {
            name: "Quantstamp Audit Report",
            url: "https://drive.google.com/file/d/10GyfA-nBJ5jqLWW9LEYJQeFem8qSgNH6/view",
          },
        ],
        creationDate: 1675814400,
        category: DefiCategory.LENDING,
        chains: [ChainName.ARBITRUM, ChainName.OPTIMISM, ChainName.ETHEREUM],
      },
      siloV2: {
        name: "Silo V2",
        category: DefiCategory.LENDING,
        creationDate: 1710307200,
        /*accidents: [
          {
            date: 1750798800,
            url: "https://www.certora.com/blog/silo-incident-report-contract-exploit",
            name: "Silo Leverage Contract Exploit",
          },
        ],*/
        audits: [
          {
            name: "Silo-Certora (SiloV2) Audit Report May 2025",
            url: "https://silodocs2.netlify.app/assets/files/Certora_SiloV2_Fix_Review_Report-971fffb9b3a0338a21cf95870e53eb0b.pdf",
          },
          {
            name: "Silo-Certora (SiloV2) Audit Report November 2024",
            url: "https://silodocs2.netlify.app/assets/files/Silo-Certora-(SiloV2)-Audit-Report-89e958fc5048dc4a5d3b42bd079c8bce.pdf",
          },
          {
            name: "Finalized_Silo_Coverage_Security_Report",
            url: "https://silodocs2.netlify.app/assets/files/Enigma_Security_Review_Silo_v2_Core-0bff605e42a23f1d8cecfd82f40f814d.pdf",
          },
          {
            name: "Certora Silo Router Report",
            url: "https://silodocs2.netlify.app/assets/files/Certora_Silo_Router_Report-81f689029e8a6380ed377c9b5aee2bea",
          },
          {
            name: "Enigma Dark (SiloV2) Audit Report",
            url: "https://silodocs2.netlify.app/assets/files/Enigma_Security_Review_Silo_v2_Core-0bff605e42a23f1d8cecfd82f40f814d",
          },
          {
            name: "Silo-Cantina (SiloV2) Audit Report",
            url: "https://silodocs2.netlify.app/assets/files/Silov2-Competition-Report-406f6f02c91daf8aaac99e9249177e82.pdf",
          },
          {
            name: "Sigma Prime Security Assessment Report",
            url: "https://silodocs2.netlify.app/assets/files/SP_Silo_Core_Security_Assessment_Report_v2.0-6c5f5bb40b34450300b9fe59133ea870.pdf",
          },
          {
            name: "Leverage Audit Report July 2025",
            url: "https://silodocs2.netlify.app/assets/files/Certora_Silo_Leverage_Audit_Report-720a99e129df36314f92b293704548c7.pdf",
          },
          {
            name: "Leverage Audit Report July 2025",
            url: "https://silodocs2.netlify.app/assets/files/Certora_Silo_Leverage_Formal_Verification_Report-98045fcc87e8f4ee46a92bca82d58c85.pdf",
          },
          {
            name: "Silo-Certora (SiloV2) Audit Report May 2025",
            url: "https://silodocs2.netlify.app/assets/files/Certora_Silo_Leverage_Formal_Verification_Report-98045fcc87e8f4ee46a92bca82d58c85.pdf",
          },
          {
            name: "Silo Vaults Audit & Formal Verification Report",
            url: "https://silodocs2.netlify.app/assets/files/Certora_Silo_Vault_Audit_Report-18f189172bc797604545b1fed1f44cfd.pdf",
          },
          {
            name: "Silo Vaults Security Assessment Report",
            url: "https://silodocs2.netlify.app/assets/files/SP_Silo_Vault_Security_Report-70db5210d95752e3b380ed823a4591d8.pdf",
          },
          {
            name: "Code4arena Audit Report",
            url: "https://silodocs2.netlify.app/assets/files/Code4rena_Silo_Vaults_Audit_Report-4bc6446f3010491fc65875a8a08ab484.pdf",
          },
          {
            name: "SILOv2 Token Audit Report",
            url: "https://silodocs2.netlify.app/assets/files/SiloV2_Token_Audit_Report-65dcfeb4cf68a8e2a97d0d5e72918df3.pdf",
          },
        ],
        chains: [ChainName.ARBITRUM, ChainName.SONIC, ChainName.AVALANCHE],
        strategies: [
          StrategyShortId.Si,
          StrategyShortId.SiL,
          StrategyShortId.SiMF,
          StrategyShortId.SiF,
          StrategyShortId.SiMMF,
          StrategyShortId.SiMerklF,
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
        chains: [ChainName.SONIC],
        strategies: [StrategyShortId.VMF],
      },
    },
  },
  stability: {
    name: "Stability",
    website: "https://stability.farm/",
    img: "Stability.svg",
    protocols: {
      stabilityFarm: {
        name: "Stability",
        category: DefiCategory.YIELD_AGG,
        chains: [ChainName.SONIC],
      },
      stabilityMarket: {
        name: "Stability Market",
        creationDate: 1739998800,
        audits: [
          {
            name: "03-2023_2023_Certora_AaveV3-0-2",
            url: "https://github.com/aave-dao/aave-v3-origin/blob/74412e2b6e0b1973fac6837b6a488f8eaaeac4b1/audits/03-2023_2023_Certora_AaveV3-0-2.pdf",
          },
          {
            name: "19-04-2023_SigmaPrime_AaveV3-0-2",
            url: "https://github.com/aave-dao/aave-v3-origin/blob/74412e2b6e0b1973fac6837b6a488f8eaaeac4b1/audits/19-04-2023_SigmaPrime_AaveV3-0-2.pdf",
          },
        ],
        category: DefiCategory.LENDING,
        chains: [ChainName.SONIC],
        strategies: [StrategyShortId.A],
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
        chains: [ChainName.SONIC],
      },
    },
    github: "zerolend",
    defiLlama: "zerolend",
  },
  euler: {
    name: "Euler",
    img: "euler.svg",
    creationDate: 1577836800,
    website: "https://euler.finance/",
    protocols: {
      eulerV2: {
        name: "Euler V2",
        creationDate: 1725408000,
        audits: [
          {
            name: "Euler yAudit report (EVC)",
            url: "https://github.com/euler-xyz/ethereum-vault-connector/blob/master/audits/Euler%20yAudit%20report%20(EVC).pdf",
          },
          {
            name: "Euler yAudit report (EVC + EVK + Price Oracle)",
            url: "https://github.com/euler-xyz/ethereum-vault-connector/blob/master/audits/Euler%20yAudit%20report%20(EVC%20%2B%20EVK%20%2B%20Price%20Oracle).pdf",
          },
          {
            name: "Euler ChainSecurity report",
            url: "https://github.com/euler-xyz/ethereum-vault-connector/blob/master/audits/Euler%20ChainSecurity%20report.pdf",
          },
          {
            name: "Euler Hunter Security report",
            url: "https://github.com/euler-xyz/ethereum-vault-connector/blob/master/audits/Euler%20Hunter%20Security%20report.pdf",
          },
          {
            name: "Euler Omniscia report",
            url: "https://github.com/euler-xyz/ethereum-vault-connector/blob/master/audits/Euler%20Omniscia%20report.pdf",
          },
          {
            name: "Euler OpenZeppelin report",
            url: "https://github.com/euler-xyz/ethereum-vault-connector/blob/master/audits/Euler%20OpenZeppelin%20report.pdf",
          },
          {
            name: "Euler Spearbit report",
            url: "https://github.com/euler-xyz/ethereum-vault-connector/blob/master/audits/Euler%20Spearbit%20report.pdf",
          },
          {
            name: "Euler Certora report",
            url: "https://github.com/euler-xyz/ethereum-vault-connector/blob/master/audits/Euler%20Certora%20report.pdf",
          },
          {
            name: "Euler Trail of Bits report",
            url: "https://github.com/euler-xyz/ethereum-vault-connector/blob/master/audits/Euler%20Trail%20of%20Bits%20report.pdf",
          },
        ],
        category: DefiCategory.LENDING,
        chains: [
          ChainName.ETHEREUM,
          ChainName.BASE,
          ChainName.BSC,
          ChainName.ARBITRUM,
          ChainName.LINEA,
          // swellchain
          // bob
          // tac
          // unichain
          ChainName.SONIC,
          ChainName.BOB,
          // berachain
          ChainName.AVALANCHE,
          ChainName.PLASMA,
        ],
        strategies: [StrategyShortId.EMF, StrategyShortId.E],
      },
    },
    defiLlama: "euler",
    github: "euler-xyz",
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
        chains: [ChainName.SONIC],
        strategies: [StrategyShortId.M, StrategyShortId.MMF],
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
  const supportedNetWorkIds = [
    ChainName.POLYGON,
    ChainName.BASE,
    ChainName.SONIC,
  ];
  const isSupportedNetwork = p.chains.some((r) =>
    supportedNetWorkIds.includes(r),
  );
  if (p.coreContracts && p.coreContracts.length > 0) {
    return isSupportedNetwork
      ? IntegrationStatus.LIVE
      : IntegrationStatus.PROPOSED;
  }
  if (p.adapters && p.adapters.length > 0 && p.category !== DefiCategory.AMM) {
    return isSupportedNetwork
      ? IntegrationStatus.LIVE
      : IntegrationStatus.PROPOSED;
  }
  if (p.strategies) {
    for (const strategy of p.strategies) {
      if (
        strategies[strategy]?.state == StrategyState.LIVE ||
        strategies[strategy]?.state == StrategyState.READY
      ) {
        return IntegrationStatus.LIVE;
      }
      if (strategies[strategy]?.state == StrategyState.DEVELOPMENT) {
        return IntegrationStatus.DEVELOPMENT;
      }
    }
  }
  if (p.intermediaryStrategies) {
    for (const strategy of p.intermediaryStrategies) {
      if (strategies[strategy]?.state == StrategyState.LIVE) {
        return IntegrationStatus.IN_USE;
      }
      if (strategies[strategy]?.state == StrategyState.DEVELOPMENT) {
        return IntegrationStatus.DEVELOPMENT;
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
