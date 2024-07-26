import {deployments} from "./deployments";

export type Network = {
  id: NetworkId,
  chainId: number | string,
  status: NetworkStatus,
}

export const enum NetworkStatus {
  SUPPORTED = 'SUPPORTED',
  CHAINLIB_DONE = 'CHAINLIB_DONE',
  CHAINLIB_DEVELOPMENT = 'CHAINLIB_DEVELOPMENT',
  CHAINLIB_AWAITING = 'CHAINLIB_AWAITING',
  NOT_SUPPORTED = 'NOT_SUPPORTED',
}

export const enum NetworkId {
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
}

export const networks: { [chainId: string]: Network } = {
  "1": {
    id: NetworkId.ETHEREUM,
    chainId: 1,
    status: NetworkStatus.CHAINLIB_DONE,
  },
  "10": {
    id: NetworkId.OPTIMISM,
    chainId: 10,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "40": {
    id: NetworkId.TELOS,
    chainId: 40,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "56": {
    id: NetworkId.BSC,
    chainId: 56,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "100": {
    id: NetworkId.GNOSIS,
    chainId: 100,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "137": {
    id: NetworkId.POLYGON,
    chainId: 137,
    status: NetworkStatus.SUPPORTED,
  },
  "169": {
    id: NetworkId.MANTA,
    chainId: 169,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "196": {
    id: NetworkId.X_LAYER,
    chainId: 196,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "238": {
    id: NetworkId.BLAST,
    chainId: 238,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "250": {
    id: NetworkId.FANTOM,
    chainId: 250,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "252": {
    id: NetworkId.FRAXTAL,
    chainId: 252,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "288": {
    id: NetworkId.BOBA,
    chainId: 288,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "324": {
    id: NetworkId.ZKSYNC,
    chainId: 324,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "570": {
    id: NetworkId.ROLLUX,
    chainId: 570,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "1088": {
    id: NetworkId.METIS,
    chainId: 1088,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "1101": {
    id: NetworkId.POLYGON_ZKEVM,
    chainId: 1101,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "1284": {
    id: NetworkId.MOONBEAM,
    chainId: 1284,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "1285": {
    id: NetworkId.MOONRIVER,
    chainId: 1285,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "2000": {
    id: NetworkId.DOGECHAIN,
    chainId: 2000,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "2222": {
    id: NetworkId.KAVA,
    chainId: 2222,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "3776": {
    id: NetworkId.ASTAR_ZKEVM,
    chainId: 3776,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "4200": {
    id: NetworkId.MERLIN,
    chainId: 4200,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "5000": {
    id: NetworkId.MANTLE,
    chainId: 5000,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "7000": {
    id: NetworkId.ZETA,
    chainId: 7000,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "8217": {
    id: NetworkId.KLAYTN,
    chainId: 8217,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "8453": {
    id: NetworkId.BASE,
    chainId: 8453,
    status: NetworkStatus.SUPPORTED,
  },
  "9001": {
    id: NetworkId.EVMOS,
    chainId: 9001,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "13371": {
    id: NetworkId.IMMUTABLE_ZKEVM,
    chainId: 13371,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "34443": {
    id: NetworkId.MODE,
    chainId: 34443,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "42161": {
    id: NetworkId.ARBITRUM,
    chainId: 42161,
    status: NetworkStatus.CHAINLIB_DONE,
  },
  "42220": {
    id: NetworkId.CELO,
    chainId: 42220,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "42766": {
    id: NetworkId.ZKFAIR,
    chainId: 42766,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "43114": {
    id: NetworkId.AVALANCHE,
    chainId: 43114,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "59144": {
    id: NetworkId.LINEA,
    chainId: 59144,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "534352": {
    id: NetworkId.SCROLL,
    chainId: 534352,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "1313161554": {
    id: NetworkId.AURORA,
    chainId: 1313161554,
    status: NetworkStatus.NOT_SUPPORTED,
  },
  "2046399126": {
    id: NetworkId.SKALE_EUROPA,
    chainId: 2046399126,
    status: NetworkStatus.NOT_SUPPORTED,
  },
}

export const getSupportedNetworkIds = (): NetworkId[] => Object.keys(deployments).map(chainId => networks[chainId].id)

export const getNetworksTotals = (): {[status in NetworkStatus]: number} => {
  const ids = Object.keys(networks)
  return {
    [NetworkStatus.SUPPORTED]: ids.filter(networkId => networks[networkId].status == NetworkStatus.SUPPORTED ).length,
    [NetworkStatus.CHAINLIB_DONE]: ids.filter(networkId => networks[networkId].status == NetworkStatus.CHAINLIB_DONE ).length,
    [NetworkStatus.CHAINLIB_DEVELOPMENT]: ids.filter(networkId => networks[networkId].status == NetworkStatus.CHAINLIB_DEVELOPMENT ).length,
    [NetworkStatus.CHAINLIB_AWAITING]: ids.filter(networkId => networks[networkId].status == NetworkStatus.CHAINLIB_AWAITING ).length,
    [NetworkStatus.NOT_SUPPORTED]: ids.filter(networkId => networks[networkId].status == NetworkStatus.NOT_SUPPORTED ).length,
  }
}
