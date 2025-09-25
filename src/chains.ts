import { deployments } from "./deployments";

export type Chain = {
  name: ChainName;
  chainId: number | string;
  status: ChainStatus;
  img: string;
  multisig?: `0x${string}`;
  chainLibGithubId?: number;
};

export type ChainStatusInfo = {
  title: string;
  description: string;
  color: string;
  bgColor: string;
};

export const enum ChainStatus {
  SUPPORTED = "SUPPORTED",
  AWAITING_DEPLOYMENT = "AWAITING_DEPLOYMENT",
  CHAINLIB_DEVELOPMENT = "CHAINLIB_DEVELOPMENT",
  AWAITING_DEVELOPER = "AWAITING_DEVELOPER",
  AWAITING_ISSUE_CREATION = "AWAITING_ISSUE_CREATION",
  NOT_SUPPORTED = "NOT_SUPPORTED",
}

export const enum ChainName {
  ETHEREUM = "Ethereum",
  ARBITRUM = "Arbitrum One",
  BASE = "Base",
  POLYGON = "Polygon",
  AVALANCHE = "Avalanche",
  BSC = "BNB Chain",
  CELO = "Celo",
  FANTOM = "Fantom",
  LINEA = "Linea",
  GNOSIS = "Gnosis",
  METIS = "Metis Andromeda",
  MOONBEAM = "Moonbeam",
  MOONRIVER = "Moonriver",
  OPTIMISM = "Optimism",
  POLYGON_ZKEVM = "Polygon zkEVM",
  IMMUTABLE_ZKEVM = "Immutable zkEVM",
  ASTAR_ZKEVM = "Astar zkEVM",
  ZKFAIR = "ZKFair",
  SCROLL = "Scroll",
  ZKSYNC = "zkSync",
  BLAST = "Blast",
  MANTA = "Manta Pacific",
  MANTLE = "Mantle",
  MODE = "Mode",
  BOBA = "Boba",
  KLAYTN = "Klaytn Cypress",
  AURORA = "Aurora",
  DOGECHAIN = "Dogechain",
  X_LAYER = "X Layer",
  KAVA = "Kava",
  FRAXTAL = "Fraxtal",
  ROLLUX = "Rollux",
  EVMOS = "Evmos",
  TELOS = "Telos EVM",
  ZETA = "ZetaChain",
  MERLIN = "Merlin",
  SKALE_EUROPA = "SKALE Europa",
  SEI = "Sei",
  ARBITRUM_NOVA = "Arbitrum Nova",
  BITTORRENT = "BitTorrent Chain",
  CORE = "Core",
  FILECOIN = "Filecoin",
  FUSE = "Fuse",
  HAQQ = "Haqq",
  ROOTSTOCK = "Rootstock",
  THUNDERCORE = "ThunderCore",
  KROMA = "Kroma",
  WEMIX = "WEMIX3.0",
  REAL = "Re.al",
  HEDERA = "Hedera",
  ZORA = "Zora",
  TAIKO = "Taiko",
  GRAVITY = "Gravity Alpha",
  FLARE = "Flare",
  IOTA = "IOTA EVM",
  RARI = "Rari",
  OPBNB = "opBNB",
  CYBER = "Cyber",
  MINT = "Mint",
  ZIRCUIT = "Zircuit",
  BITLAYER = "Bitlayer",
  ZKLINK = "zkLink Nova",
  BOUNCEBIT = "BounceBit",
  BOB = "BOB",
  CARBON = "Carbon",
  XPLA = "Xpla",
  BEVM = "BEVM",
  DYMENSION = "Dymension",
  HELA = "Hela",
  ASSET_CHAIN = "Asset Chain",
  SONIC = "Sonic",
  TRON = "Tron",
  HYPERLIQUID = "Hyperliquid",
  CRONOS = "Cronos",
  KATANA = "Katana",
  PLASMA = "Plasma",
}

export const chains: { [chainId: string]: Chain } = {
  "1": {
    name: ChainName.ETHEREUM,
    chainId: 1,
    status: ChainStatus.NOT_SUPPORTED,
    img: "ethereum.svg",
    multisig: "0xEb49018157bAF7F1B385657D10fF5a5a5F4BB4c9",
    chainLibGithubId: 153,
  },
  "10": {
    name: ChainName.OPTIMISM,
    chainId: 10,
    status: ChainStatus.NOT_SUPPORTED,
    img: "optimism.svg",
    multisig: "0x06111E02BEb85B57caebEf15F5f90Bc82D54da3A",
  },
  "14": {
    name: ChainName.FLARE,
    chainId: 14,
    status: ChainStatus.NOT_SUPPORTED,
    img: "flare.png",
  },
  "25": {
    name: ChainName.CRONOS,
    chainId: 25,
    status: ChainStatus.NOT_SUPPORTED,
    img: "cronos.svg",
  },
  "30": {
    name: ChainName.ROOTSTOCK,
    chainId: 30,
    status: ChainStatus.NOT_SUPPORTED,
    img: "rootstock.svg",
  },
  "37": {
    name: ChainName.XPLA,
    chainId: 37,
    status: ChainStatus.NOT_SUPPORTED,
    img: "xpla.png",
  },
  "40": {
    name: ChainName.TELOS,
    chainId: 40,
    status: ChainStatus.NOT_SUPPORTED,
    img: "telos.svg",
  },
  "56": {
    name: ChainName.BSC,
    chainId: 56,
    status: ChainStatus.NOT_SUPPORTED,
    img: "bsc.svg",
    multisig: "0xFad77AAD3C3b769500F8743C16A27FBf951e3A78",
  },
  "999": {
    name: ChainName.HYPERLIQUID,
    chainId: 999,
    status: ChainStatus.NOT_SUPPORTED,
    img: "Hyperliquid.png",
  },
  "100": {
    name: ChainName.GNOSIS,
    chainId: 100,
    status: ChainStatus.NOT_SUPPORTED,
    img: "gnosis.svg",
  },
  "108": {
    name: ChainName.THUNDERCORE,
    chainId: 108,
    status: ChainStatus.NOT_SUPPORTED,
    img: "thundercore.png",
  },
  "122": {
    name: ChainName.FUSE,
    chainId: 122,
    status: ChainStatus.NOT_SUPPORTED,
    img: "fuse.svg",
  },
  "137": {
    name: ChainName.POLYGON,
    chainId: 137,
    status: ChainStatus.NOT_SUPPORTED,
    img: "polygon.svg",
    multisig: "0x36780E69D38c8b175761c6C5F8eD42E61ee490E9",
  },
  "146": {
    name: ChainName.SONIC,
    chainId: 146,
    status: ChainStatus.SUPPORTED,
    img: "sonic.png",
    multisig: "0xF564EBaC1182578398E94868bea1AbA6ba339652",
  },
  "169": {
    name: ChainName.MANTA,
    chainId: 169,
    status: ChainStatus.NOT_SUPPORTED,
    img: "manta.svg",
  },
  "185": {
    name: ChainName.MINT,
    chainId: 185,
    status: ChainStatus.NOT_SUPPORTED,
    img: "mint.png",
  },
  "196": {
    name: ChainName.X_LAYER,
    chainId: 196,
    status: ChainStatus.NOT_SUPPORTED,
    img: "x-layer.svg",
  },
  "199": {
    name: ChainName.BITTORRENT,
    chainId: 199,
    status: ChainStatus.NOT_SUPPORTED,
    img: "bittorrent.svg",
  },
  "204": {
    name: ChainName.OPBNB,
    chainId: 204,
    status: ChainStatus.NOT_SUPPORTED,
    img: "opbnb.png",
  },
  "250": {
    name: ChainName.FANTOM,
    chainId: 250,
    status: ChainStatus.NOT_SUPPORTED,
    img: "fantom.png",
  },
  "252": {
    name: ChainName.FRAXTAL,
    chainId: 252,
    status: ChainStatus.NOT_SUPPORTED,
    img: "fraxtal.png",
  },
  "255": {
    name: ChainName.KROMA,
    chainId: 255,
    status: ChainStatus.NOT_SUPPORTED,
    img: "kroma.svg",
  },
  "288": {
    name: ChainName.BOBA,
    chainId: 288,
    status: ChainStatus.NOT_SUPPORTED,
    img: "boba.svg",
  },
  "295": {
    name: ChainName.HEDERA,
    chainId: 295,
    status: ChainStatus.NOT_SUPPORTED,
    img: "hedera.svg",
  },
  "314": {
    name: ChainName.FILECOIN,
    chainId: 314,
    status: ChainStatus.NOT_SUPPORTED,
    img: "filecoin.png",
  },
  "324": {
    name: ChainName.ZKSYNC,
    chainId: 324,
    status: ChainStatus.NOT_SUPPORTED,
    img: "zksync.svg",
  },
  "570": {
    name: ChainName.ROLLUX,
    chainId: 570,
    status: ChainStatus.NOT_SUPPORTED,
    img: "rollux.svg",
  },
  "1088": {
    name: ChainName.METIS,
    chainId: 1088,
    status: ChainStatus.NOT_SUPPORTED,
    img: "metis.svg",
  },
  "1100": {
    name: ChainName.DYMENSION,
    chainId: 1100,
    status: ChainStatus.NOT_SUPPORTED,
    img: "dymension.svg",
  },
  "1101": {
    name: ChainName.POLYGON_ZKEVM,
    chainId: 1101,
    status: ChainStatus.NOT_SUPPORTED,
    img: "polygon-zkevm.png",
  },
  "1111": {
    name: ChainName.WEMIX,
    chainId: 1111,
    status: ChainStatus.NOT_SUPPORTED,
    img: "wemix.svg",
  },
  "1116": {
    name: ChainName.CORE,
    chainId: 1116,
    status: ChainStatus.NOT_SUPPORTED,
    img: "core-blockchain.svg",
  },
  "1284": {
    name: ChainName.MOONBEAM,
    chainId: 1284,
    status: ChainStatus.NOT_SUPPORTED,
    img: "moonbeam.png",
  },
  "1285": {
    name: ChainName.MOONRIVER,
    chainId: 1285,
    status: ChainStatus.NOT_SUPPORTED,
    img: "moonriver.png",
  },
  "1329": {
    name: ChainName.SEI,
    chainId: 1329,
    status: ChainStatus.NOT_SUPPORTED,
    img: "sei.png",
  },
  "1625": {
    name: ChainName.GRAVITY,
    chainId: 1625,
    status: ChainStatus.NOT_SUPPORTED,
    img: "gravity.png",
  },
  "2000": {
    name: ChainName.DOGECHAIN,
    chainId: 2000,
    status: ChainStatus.NOT_SUPPORTED,
    img: "dogechain.png",
  },
  "2222": {
    name: ChainName.KAVA,
    chainId: 2222,
    status: ChainStatus.NOT_SUPPORTED,
    img: "kava.svg",
  },
  "3776": {
    name: ChainName.ASTAR_ZKEVM,
    chainId: 3776,
    status: ChainStatus.NOT_SUPPORTED,
    img: "astar-zkevm.svg",
  },
  "4200": {
    name: ChainName.MERLIN,
    chainId: 4200,
    status: ChainStatus.NOT_SUPPORTED,
    img: "merlin.png",
  },
  "5000": {
    name: ChainName.MANTLE,
    chainId: 5000,
    status: ChainStatus.NOT_SUPPORTED,
    img: "mantle.svg",
  },
  "6001": {
    name: ChainName.BOUNCEBIT,
    chainId: 6001,
    status: ChainStatus.NOT_SUPPORTED,
    img: "bouncebit.png",
  },
  "7000": {
    name: ChainName.ZETA,
    chainId: 7000,
    status: ChainStatus.NOT_SUPPORTED,
    img: "zetachain.svg",
  },
  "7560": {
    name: ChainName.CYBER,
    chainId: 7560,
    status: ChainStatus.NOT_SUPPORTED,
    img: "cyber.svg",
  },
  "8217": {
    name: ChainName.KLAYTN,
    chainId: 8217,
    status: ChainStatus.NOT_SUPPORTED,
    img: "klaytn.svg",
  },
  "8453": {
    name: ChainName.BASE,
    chainId: 8453,
    status: ChainStatus.NOT_SUPPORTED,
    img: "base.svg",
    multisig: "0x626Bd898ca994c11c9014377f4c50d30f2B0006c",
    chainLibGithubId: 143,
  },
  "8668": {
    name: ChainName.HELA,
    chainId: 8668,
    status: ChainStatus.NOT_SUPPORTED,
    img: "hela.png",
  },
  "8822": {
    name: ChainName.IOTA,
    chainId: 8822,
    status: ChainStatus.NOT_SUPPORTED,
    img: "iota.png",
  },
  "9001": {
    name: ChainName.EVMOS,
    chainId: 9001,
    status: ChainStatus.NOT_SUPPORTED,
    img: "evmos.png",
  },
  "9745": {
    name: ChainName.PLASMA,
    chainId: 9745,
    status: ChainStatus.CHAINLIB_DEVELOPMENT,
    img: "plasma.webp",
    multisig: "0xE929438B5B53984FdBABf8562046e141e90E8099",
    chainLibGithubId: 397,
  },
  "9790": {
    name: ChainName.CARBON,
    chainId: 9790,
    status: ChainStatus.NOT_SUPPORTED,
    img: "carbon.svg",
  },
  "11235": {
    name: ChainName.HAQQ,
    chainId: 11235,
    status: ChainStatus.NOT_SUPPORTED,
    img: "haqq.svg",
  },
  "11501": {
    name: ChainName.BEVM,
    chainId: 11501,
    status: ChainStatus.NOT_SUPPORTED,
    img: "bevm.png",
  },
  "13371": {
    name: ChainName.IMMUTABLE_ZKEVM,
    chainId: 13371,
    status: ChainStatus.NOT_SUPPORTED,
    img: "immutable-zkevm.png",
  },
  "34443": {
    name: ChainName.MODE,
    chainId: 34443,
    status: ChainStatus.NOT_SUPPORTED,
    img: "mode.svg",
  },
  "42161": {
    name: ChainName.ARBITRUM,
    chainId: 42161,
    status: ChainStatus.NOT_SUPPORTED,
    img: "arbitrum.svg",
    multisig: "0xE28e3Ee2bD10328bC8A7299B83A80d2E1ddD8708",
    chainLibGithubId: 142,
  },
  "42170": {
    name: ChainName.ARBITRUM_NOVA,
    chainId: 42170,
    status: ChainStatus.NOT_SUPPORTED,
    img: "arbitrum-nova.svg",
  },
  "42220": {
    name: ChainName.CELO,
    chainId: 42220,
    status: ChainStatus.NOT_SUPPORTED,
    img: "celo.svg",
  },
  "42420": {
    name: ChainName.ASSET_CHAIN,
    chainId: 42420,
    status: ChainStatus.NOT_SUPPORTED,
    img: "Assetchain.svg",
  },
  "42766": {
    name: ChainName.ZKFAIR,
    chainId: 42766,
    status: ChainStatus.NOT_SUPPORTED,
    img: "zkfair.png",
  },
  "43114": {
    name: ChainName.AVALANCHE,
    chainId: 43114,
    status: ChainStatus.SUPPORTED,
    img: "avalanche.png",
    multisig: "0x06111E02BEb85B57caebEf15F5f90Bc82D54da3A",
    chainLibGithubId: 369,
  },
  "48900": {
    name: ChainName.ZIRCUIT,
    chainId: 48900,
    status: ChainStatus.NOT_SUPPORTED,
    img: "zircuit.svg",
  },
  "59144": {
    name: ChainName.LINEA,
    chainId: 59144,
    status: ChainStatus.NOT_SUPPORTED,
    img: "linea.svg",
  },
  "60808": {
    name: ChainName.BOB,
    chainId: 60808,
    status: ChainStatus.NOT_SUPPORTED,
    img: "bob.png",
  },
  "81457": {
    name: ChainName.BLAST,
    chainId: 81457,
    status: ChainStatus.NOT_SUPPORTED,
    img: "blast.png",
    multisig: "0xFad77AAD3C3b769500F8743C16A27FBf951e3A78",
  },
  "111188": {
    name: ChainName.REAL,
    chainId: 111188,
    status: ChainStatus.NOT_SUPPORTED,
    img: "real.png",
    multisig: "0x7B4388F4bD3A439E34a554EF67513112Bcd77Fba",
    chainLibGithubId: 173,
  },
  "167000": {
    name: ChainName.TAIKO,
    chainId: 167000,
    status: ChainStatus.NOT_SUPPORTED,
    img: "taiko.svg",
  },
  "200901": {
    name: ChainName.BITLAYER,
    chainId: 200901,
    status: ChainStatus.NOT_SUPPORTED,
    img: "bitlayer.png",
  },
  "534352": {
    name: ChainName.SCROLL,
    chainId: 534352,
    status: ChainStatus.NOT_SUPPORTED,
    img: "scroll.svg",
    multisig: "0xFad77AAD3C3b769500F8743C16A27FBf951e3A78",
  },
  "747474": {
    name: ChainName.KATANA,
    chainId: 747474,
    status: ChainStatus.NOT_SUPPORTED,
    img: "katana.png",
  },
  "810180": {
    name: ChainName.ZKLINK,
    chainId: 810180,
    status: ChainStatus.NOT_SUPPORTED,
    img: "zklink.png",
  },
  "7777777": {
    name: ChainName.ZORA,
    chainId: 7777777,
    status: ChainStatus.NOT_SUPPORTED,
    img: "zora.svg",
  },
  "728126428": {
    name: ChainName.TRON,
    chainId: 728126428,
    status: ChainStatus.NOT_SUPPORTED,
    img: "tron.svg",
  },
  "1380012617": {
    name: ChainName.RARI,
    chainId: 1380012617,
    status: ChainStatus.NOT_SUPPORTED,
    img: "rari.svg",
  },
  "1313161554": {
    name: ChainName.AURORA,
    chainId: 1313161554,
    status: ChainStatus.NOT_SUPPORTED,
    img: "aurora.svg",
  },
  "2046399126": {
    name: ChainName.SKALE_EUROPA,
    chainId: 2046399126,
    status: ChainStatus.NOT_SUPPORTED,
    img: "skale-europa.png",
  },
};

export const chainStatusInfo: { [status in ChainStatus]: ChainStatusInfo } = {
  [ChainStatus.SUPPORTED]: {
    title: "Supported",
    description: "Platform deployed and live in the chain",
    color: "#4ade80", // green-400
    bgColor: "#00521f",
  },
  [ChainStatus.AWAITING_DEPLOYMENT]: {
    title: "Awaiting deployment",
    description:
      "ChainLib and strategy contracts ready for deployment to the chain",
    color: "#a78bfa", // violet-400
    bgColor: "#55009d",
  },
  [ChainStatus.CHAINLIB_DEVELOPMENT]: {
    title: "Development",
    description: "Chain library being developed",
    color: "#60a5fa", // blue-400
    bgColor: "#1d3f6c",
  },
  [ChainStatus.AWAITING_DEVELOPER]: {
    title: "Awaiting developer",
    description:
      "We awaiting developer to be assigned to solve chain library issue",
    color: "#fef08a", // yellow-200
    bgColor: "#796e00",
  },
  [ChainStatus.AWAITING_ISSUE_CREATION]: {
    title: "Awaiting issue",
    description:
      "We have treasury in this chain and chain library contract can be developed, need issue.",
    color: "#ff4646",
    bgColor: "#7c0000",
  },
  [ChainStatus.NOT_SUPPORTED]: {
    title: "Not supported",
    description:
      "Platform know this chain but dont has treasury and ChainLib issue for it",
    color: "#eeeeee",
    bgColor: "#2c2c2c",
  },
};

export const getSupportedChainNames = (): ChainName[] =>
  Object.keys(deployments).map((chainId) => chains[chainId].name);

export const getChainsTotals = (): { [status in ChainStatus]: number } => {
  const ids = Object.keys(chains);
  return {
    [ChainStatus.SUPPORTED]: ids.filter(
      (networkId) => chains[networkId].status == ChainStatus.SUPPORTED,
    ).length,
    [ChainStatus.AWAITING_DEPLOYMENT]: ids.filter(
      (networkId) =>
        chains[networkId].status == ChainStatus.AWAITING_DEPLOYMENT,
    ).length,
    [ChainStatus.CHAINLIB_DEVELOPMENT]: ids.filter(
      (networkId) =>
        chains[networkId].status == ChainStatus.CHAINLIB_DEVELOPMENT,
    ).length,
    [ChainStatus.AWAITING_DEVELOPER]: ids.filter(
      (networkId) => chains[networkId].status == ChainStatus.AWAITING_DEVELOPER,
    ).length,
    [ChainStatus.AWAITING_ISSUE_CREATION]: ids.filter(
      (networkId) =>
        chains[networkId].status == ChainStatus.AWAITING_ISSUE_CREATION,
    ).length,
    [ChainStatus.NOT_SUPPORTED]: ids.filter(
      (networkId) => chains[networkId].status == ChainStatus.NOT_SUPPORTED,
    ).length,
  };
};

export const getChainByName = (chainName: ChainName): Chain => {
  for (const chainId in chains) {
    const chain = chains[chainId];
    if (chain && chain.name === chainName) {
      return chain;
    }
  }
  throw new Error(`Incorrect chain name ${chainName}`);
};
