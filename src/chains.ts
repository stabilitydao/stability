import {deployments} from "./deployments";

export type Chain = {
  name: ChainName,
  chainId: number | string,
  status: ChainStatus,
}

export const enum ChainStatus {
  SUPPORTED = 'SUPPORTED',
  CHAINLIB_DONE = 'CHAINLIB_DONE',
  CHAINLIB_DEVELOPMENT = 'CHAINLIB_DEVELOPMENT',
  CHAINLIB_AWAITING = 'CHAINLIB_AWAITING',
  NOT_SUPPORTED = 'NOT_SUPPORTED',
}

export const enum ChainName {
  ETHEREUM = 'Ethereum',
  ARBITRUM = 'Arbitrum One',
  BASE = 'Base',
  POLYGON = 'Polygon',
  AVALANCHE = 'Avalanche C-Chain',
  BSC = 'Binance Smart Chain',
  CELO = 'Celo',
  FANTOM = 'Fantom',
  LINEA = 'Linea',
  GNOSIS = 'Gnosis',
  METIS = 'Metis Andromeda',
  MOONBEAM = 'Moonbeam',
  MOONRIVER = 'Moonriver',
  OPTIMISM = 'Optimism',
  POLYGON_ZKEVM = 'Polygon zkEVM',
  IMMUTABLE_ZKEVM = 'Immutable zkEVM',
  ASTAR_ZKEVM = 'Astar zkEVM',
  ZKFAIR = 'ZKFair',
  SCROLL = 'Scroll',
  ZKSYNC = 'zkSync',
  BLAST = 'Blast',
  MANTA = 'Manta Pacific',
  MANTLE = 'Mantle',
  MODE = 'Mode',
  BOBA = 'Boba',
  KLAYTN = 'Klaytn Cypress',
  AURORA = 'Aurora',
  DOGECHAIN = 'Dogechain',
  X_LAYER = 'X Layer',
  KAVA = 'Kava',
  FRAXTAL = 'Fraxtal',
  ROLLUX = 'Rollux',
  EVMOS = 'Evmos',
  TELOS = 'Telos EVM',
  ZETA = 'ZetaChain',
  MERLIN = 'Merlin',
  SKALE_EUROPA = 'SKALE Europa Hub',
  SEI = 'Sei',
  ARBITRUM_NOVA = 'Arbitrum Nova',
  BITTORRENT = 'BitTorrent Chain',
  CORE = 'Core Blockchain',
  FILECOIN = 'Filecoin',
  FUSE = 'Fuse',
  HAQQ = 'Haqq',
  ROOTSTOCK = 'Rootstock',
  THUNDERCORE = 'ThunderCore',
  KROMA = 'Kroma',
  WEMIX = 'WEMIX3.0',
}

export const chains: { [chainId: string]: Chain } = {
  "1": {
    name: ChainName.ETHEREUM,
    chainId: 1,
    status: ChainStatus.CHAINLIB_DONE,
  },
  "10": {
    name: ChainName.OPTIMISM,
    chainId: 10,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "30": {
    name: ChainName.ROOTSTOCK,
    chainId: 30,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "40": {
    name: ChainName.TELOS,
    chainId: 40,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "56": {
    name: ChainName.BSC,
    chainId: 56,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "100": {
    name: ChainName.GNOSIS,
    chainId: 100,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "108": {
    name: ChainName.THUNDERCORE,
    chainId: 108,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "122": {
    name: ChainName.FUSE,
    chainId: 122,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "137": {
    name: ChainName.POLYGON,
    chainId: 137,
    status: ChainStatus.SUPPORTED,
  },
  "169": {
    name: ChainName.MANTA,
    chainId: 169,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "196": {
    name: ChainName.X_LAYER,
    chainId: 196,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "199": {
    name: ChainName.BITTORRENT,
    chainId: 199,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "238": {
    name: ChainName.BLAST,
    chainId: 238,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "250": {
    name: ChainName.FANTOM,
    chainId: 250,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "252": {
    name: ChainName.FRAXTAL,
    chainId: 252,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "255": {
    name: ChainName.KROMA,
    chainId: 255,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "288": {
    name: ChainName.BOBA,
    chainId: 288,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "314": {
    name: ChainName.GNOSIS,
    chainId: 314,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "324": {
    name: ChainName.ZKSYNC,
    chainId: 324,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "570": {
    name: ChainName.ROLLUX,
    chainId: 570,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "1088": {
    name: ChainName.METIS,
    chainId: 1088,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "1101": {
    name: ChainName.POLYGON_ZKEVM,
    chainId: 1101,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "1111" : {
    name: ChainName.WEMIX,
    chainId: 1111,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "1116": {
    name: ChainName.CORE,
    chainId: 1116,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "1284": {
    name: ChainName.MOONBEAM,
    chainId: 1284,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "1285": {
    name: ChainName.MOONRIVER,
    chainId: 1285,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "1329": {
    name: ChainName.SEI,
    chainId: 1329,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "2000": {
    name: ChainName.DOGECHAIN,
    chainId: 2000,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "2222": {
    name: ChainName.KAVA,
    chainId: 2222,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "3776": {
    name: ChainName.ASTAR_ZKEVM,
    chainId: 3776,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "4200": {
    name: ChainName.MERLIN,
    chainId: 4200,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "5000": {
    name: ChainName.MANTLE,
    chainId: 5000,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "7000": {
    name: ChainName.ZETA,
    chainId: 7000,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "8217": {
    name: ChainName.KLAYTN,
    chainId: 8217,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "8453": {
    name: ChainName.BASE,
    chainId: 8453,
    status: ChainStatus.SUPPORTED,
  },
  "9001": {
    name: ChainName.EVMOS,
    chainId: 9001,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "11235": {
    name: ChainName.HAQQ,
    chainId: 11235,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "13371": {
    name: ChainName.IMMUTABLE_ZKEVM,
    chainId: 13371,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "34443": {
    name: ChainName.MODE,
    chainId: 34443,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "42161": {
    name: ChainName.ARBITRUM,
    chainId: 42161,
    status: ChainStatus.CHAINLIB_DONE,
  },
  "42170": {
    name: ChainName.ARBITRUM_NOVA,
    chainId: 42170,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "42220": {
    name: ChainName.CELO,
    chainId: 42220,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "42766": {
    name: ChainName.ZKFAIR,
    chainId: 42766,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "43114": {
    name: ChainName.AVALANCHE,
    chainId: 43114,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "59144": {
    name: ChainName.LINEA,
    chainId: 59144,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "534352": {
    name: ChainName.SCROLL,
    chainId: 534352,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "1313161554": {
    name: ChainName.AURORA,
    chainId: 1313161554,
    status: ChainStatus.NOT_SUPPORTED,
  },
  "2046399126": {
    name: ChainName.SKALE_EUROPA,
    chainId: 2046399126,
    status: ChainStatus.NOT_SUPPORTED,
  },
}

export const getSupportedChainNames = (): ChainName[] => Object.keys(deployments).map(chainId => chains[chainId].name)

export const getChainsTotals = (): {[status in ChainStatus]: number} => {
  const ids = Object.keys(chains)
  return {
    [ChainStatus.SUPPORTED]: ids.filter(networkId => chains[networkId].status == ChainStatus.SUPPORTED ).length,
    [ChainStatus.CHAINLIB_DONE]: ids.filter(networkId => chains[networkId].status == ChainStatus.CHAINLIB_DONE ).length,
    [ChainStatus.CHAINLIB_DEVELOPMENT]: ids.filter(networkId => chains[networkId].status == ChainStatus.CHAINLIB_DEVELOPMENT ).length,
    [ChainStatus.CHAINLIB_AWAITING]: ids.filter(networkId => chains[networkId].status == ChainStatus.CHAINLIB_AWAITING ).length,
    [ChainStatus.NOT_SUPPORTED]: ids.filter(networkId => chains[networkId].status == ChainStatus.NOT_SUPPORTED ).length,
  }
}
