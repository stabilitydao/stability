import {IntegrationStatus} from "./integrations";

export type Network = {
  id: NetworkId,
  chainId: number|string,
  status: IntegrationStatus,
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
}

export const networks: {[chainId: string]: Network} = {
  "1": {
    id: NetworkId.ETHEREUM,
    chainId: 1,
    status: IntegrationStatus.PROPOSED,
  },
  "10": {
    id: NetworkId.OPTIMISM,
    chainId: 10,
    status: IntegrationStatus.PROPOSED,
  },
  "40": {
    id: NetworkId.TELOS,
    chainId: 40,
    status: IntegrationStatus.PROPOSED,
  },
  "56": {
    id: NetworkId.BSC,
    chainId: 56,
    status: IntegrationStatus.PROPOSED,
  },
  "100": {
    id: NetworkId.GNOSIS,
    chainId: 100,
    status: IntegrationStatus.PROPOSED,
  },
  "137": {
    id: NetworkId.POLYGON,
    chainId: 137,
    status: IntegrationStatus.LIVE,
  },
  "169": {
    id: NetworkId.MANTA,
    chainId: 169,
    status: IntegrationStatus.PROPOSED,
  },
  "196": {
    id: NetworkId.X_LAYER,
    chainId: 196,
    status: IntegrationStatus.PROPOSED,
  },
  "238": {
    id: NetworkId.BLAST,
    chainId: 238,
    status: IntegrationStatus.PROPOSED,
  },
  "250": {
    id: NetworkId.FANTOM,
    chainId: 250,
    status: IntegrationStatus.PROPOSED,
  },
  "252": {
    id: NetworkId.FRAXTAL,
    chainId: 252,
    status: IntegrationStatus.PROPOSED,
  },
  "288": {
    id: NetworkId.BOBA,
    chainId: 288,
    status: IntegrationStatus.PROPOSED,
  },
  "324": {
    id: NetworkId.ZKSYNC,
    chainId: 324,
    status: IntegrationStatus.PROPOSED,
  },
  "570": {
    id: NetworkId.ROLLUX,
    chainId: 570,
    status: IntegrationStatus.PROPOSED,
  },
  "3776": {
    id: NetworkId.ASTAR_ZKEVM,
    chainId: 3776,
    status: IntegrationStatus.PROPOSED,
  },
  "1088": {
    id: NetworkId.METIS,
    chainId: 1088,
    status: IntegrationStatus.PROPOSED,
  },
  "1101": {
    id: NetworkId.POLYGON_ZKEVM,
    chainId: 1101,
    status: IntegrationStatus.PROPOSED,
  },
  "1284": {
    id: NetworkId.MOONBEAM,
    chainId: 1284,
    status: IntegrationStatus.PROPOSED,
  },
  "1285": {
    id: NetworkId.MOONRIVER,
    chainId: 1285,
    status: IntegrationStatus.PROPOSED,
  },
  "2000": {
    id: NetworkId.DOGECHAIN,
    chainId: 2000,
    status: IntegrationStatus.PROPOSED,
  },
  "2222": {
    id: NetworkId.KAVA,
    chainId: 2222,
    status: IntegrationStatus.PROPOSED,
  },
  "5000": {
    id: NetworkId.MANTLE,
    chainId: 5000,
    status: IntegrationStatus.PROPOSED,
  },
  "8217": {
    id: NetworkId.KLAYTN,
    chainId: 8217,
    status: IntegrationStatus.PROPOSED,
  },
  "8453": {
    id: NetworkId.BASE,
    chainId: 8453,
    status: IntegrationStatus.DEVELOPMENT,
  },
  "9001": {
    id: NetworkId.EVMOS,
    chainId: 9001,
    status: IntegrationStatus.PROPOSED,
  },
  "13371": {
    id: NetworkId.IMMUTABLE_ZKEVM,
    chainId: 13371,
    status: IntegrationStatus.PROPOSED,
  },
  "34443": {
    id: NetworkId.MODE,
    chainId: 34443,
    status: IntegrationStatus.PROPOSED,
  },
  "42161": {
    id: NetworkId.ARBITRUM,
    chainId: 42161,
    status: IntegrationStatus.ROADMAP,
  },
  "42220": {
    id: NetworkId.CELO,
    chainId: 42220,
    status: IntegrationStatus.PROPOSED,
  },
  "43114": {
    id: NetworkId.AVALANCHE,
    chainId: 43114,
    status: IntegrationStatus.PROPOSED,
  },
  "59144": {
    id: NetworkId.LINEA,
    chainId: 59144,
    status: IntegrationStatus.PROPOSED,
  },
  "534352": {
    id: NetworkId.SCROLL,
    chainId: 534352,
    status: IntegrationStatus.PROPOSED,
  },
  "1313161554": {
    id: NetworkId.AURORA,
    chainId: 1313161554,
    status: IntegrationStatus.PROPOSED,
  },
}
