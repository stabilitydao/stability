import {ChainName, chains} from "./chains";
import {integrations} from "./integrations";

export type Bridge = {
  name: BridgeName,
  dapp: string,
  img: string,
  chains: ChainName[],
}

export const enum BridgeName {
  // Liquidity transports
  STARGATE = 'Stargate',
  SATELLITE = 'Satellite',
  ORBITER = 'Orbiter',

  // Native official bridges
  SUPERBRIDGE = 'Superbridge',
  BRIDGG = 'Brid.gg',
  ARBITRUM = 'Arbitrum',
  POLYGON = 'Polygon portal',
  ROOTSTOCK = 'Rootstock Token Bridge',
  TELOS = 'Telos Bridge',
  BNB = 'BNB Chain Bridge',
  SKALE = 'SKALE Portal',
  CORE_APP = 'Core Tools Bridge',
  MODE = 'Mode App',
  MANTLE = 'Mantle Bridge',
  REAL = 're.al Bridge',
}

export const bridges: Bridge[] = [
  {
    name: BridgeName.REAL,
    dapp: 'https://www.re.al/bridge',
    img: `chains/${chains["111188"].img}`,
    chains: [
      ChainName.ETHEREUM,
      ChainName.REAL,
      ChainName.OPTIMISM,
      ChainName.BSC,
      ChainName.POLYGON,
      ChainName.BASE,
      ChainName.ARBITRUM,
      ChainName.BLAST,
      ChainName.SCROLL,
    ],
  },
  {
    name: BridgeName.ORBITER,
    dapp: 'https://www.orbiter.finance',
    img: 'assets/orbiter.jpg',
    chains: [
      ChainName.ETHEREUM,
      ChainName.ARBITRUM,
      ChainName.OPTIMISM,
      ChainName.BASE,
      ChainName.LINEA,
      ChainName.SCROLL,
      // taiko
      ChainName.ZKSYNC,
      // zora
      // solana
      // ton
      ChainName.X_LAYER,
      ChainName.BLAST,
      ChainName.MODE,
      ChainName.MERLIN,
      // bevm
      // zksync lite
      ChainName.POLYGON_ZKEVM,
      ChainName.POLYGON,
      ChainName.ARBITRUM_NOVA,
      // loopring
      // immutable x
      // starknet
      ChainName.BSC,
      // tron
      ChainName.FUSE,
      ChainName.MANTA,
      // mint
      // opbnb
      // b^2 network
      ChainName.FRAXTAL,
      // matchain
      ChainName.CORE,
      // gravity
      ChainName.MANTLE,
      // bouncebit
      ChainName.ZETA,
      // cyber
      // bomechain
      ChainName.ZKFAIR,
      // zircuit
      // bob
      // optopia
      // proof of play apex
      // bitlayer
      // zklink nova
      // alienxchain
    ],
  },
  {
    name: BridgeName.SATELLITE,
    dapp: 'https://satellite.money',
    img: 'assets/satellite.svg',
    chains: [
      ChainName.ETHEREUM,
      // agoric
      ChainName.ARBITRUM,
      // archway
      ChainName.AVALANCHE,
      // axelar
      ChainName.BASE,
      ChainName.BSC,
      // bitsong
      ChainName.BLAST,
      // c4e
      // carbon
      // celestia
      ChainName.CELO,
      // centrifuge
      // chihuahua
      // comdex
      // cosomhub
      // crescent
      // dymension
      ChainName.EVMOS,
      ChainName.FANTOM,
      // fetch
      ChainName.FILECOIN,
      ChainName.FRAXTAL,
      ChainName.HAQQ,
      // immutable
      // ixo
      // juno
      ChainName.KAVA,
      // ki
      // kujira
      // lava
      ChainName.LINEA,
      ChainName.MANTLE,
      // migaloo
      ChainName.MOONBEAM,
      // neutron
      // nolus
      // ojo
      ChainName.OPTIMISM,
      // persistence
      ChainName.POLYGON,
      // provenance
      // rebus
      // regen
      // saga
      ChainName.SCROLL,
      ChainName.SEI,
      // somellier
      // stargaze
      // stride
      // territori
      // umee
      // xpla
      // osmosis
    ],
  },
  {
    name: BridgeName.STARGATE,
    dapp: 'https://stargate.finance/bridge',
    img: `assets/${integrations['stargate'].img}`,
    chains: [
      ChainName.ETHEREUM,
      ChainName.ARBITRUM,
      // astar
      ChainName.ASTAR_ZKEVM,
      ChainName.AURORA,
      ChainName.AVALANCHE,
      ChainName.BASE,
      ChainName.BLAST,
      ChainName.BSC,
      // ebi
      ChainName.FANTOM,
      // flare
      ChainName.FRAXTAL,
      ChainName.GNOSIS,
      // gravity
      // iota
      // kaia
      ChainName.KAVA,
      ChainName.LINEA,
      ChainName.MANTA,
      ChainName.MANTLE,
      ChainName.METIS,
      ChainName.MODE,
      ChainName.MOONBEAM,
      ChainName.MOONRIVER,
      // opbnb
      ChainName.OPTIMISM,
      ChainName.POLYGON,
      ChainName.POLYGON_ZKEVM,
      // rari
      ChainName.SCROLL,
      ChainName.SEI,
      // solana
      // taiko
      ChainName.X_LAYER,
      // zircuit
      ChainName.ZKSYNC,
    ],
  },
  {
    name: BridgeName.MANTLE,
    dapp: 'https://bridge.mantle.xyz/',
    img: `chains/${chains["5000"].img}`,
    chains: [
      ChainName.ETHEREUM,
      ChainName.MANTLE,
    ],
  },
  {
    name: BridgeName.MODE,
    dapp: 'https://app.mode.network',
    img: `chains/${chains["34443"].img}`,
    chains: [
      ChainName.ETHEREUM,
      ChainName.MODE,
      ChainName.OPTIMISM,
      ChainName.BASE,
      ChainName.ARBITRUM,
      ChainName.POLYGON,
    ],
  },
  {
    name: BridgeName.CORE_APP,
    dapp: 'https://core.app/en/bridge/',
    img: 'assets/core-app.png',
    chains: [
      ChainName.ETHEREUM,
      ChainName.AVALANCHE,
    ],
  },
  {
    name: BridgeName.SKALE,
    dapp: 'https://portal.skale.space/bridge',
    img: `chains/${chains["2046399126"].img}`,
    chains: [
      ChainName.ETHEREUM,
      ChainName.SKALE_EUROPA,
      // Calypso Hub
      // Nebula Gaming Hub
      // CryptoBlades
      // Wan-Red-Ain
      // Razor network
      // Adorable-Quaint-Bellatrix
      // Titan AI hub
    ],
  },
  {
    name: BridgeName.BNB,
    dapp: 'https://www.bnbchain.org/en/bnb-chain-bridge',
    img: `chains/${chains["56"].img}`,
    chains: [
      ChainName.ETHEREUM,
      ChainName.BSC,
      // opBNB
      ChainName.ARBITRUM,
      ChainName.BASE,
      ChainName.POLYGON,
      ChainName.AVALANCHE,
      ChainName.BLAST,
      ChainName.LINEA,
      ChainName.OPTIMISM,
      ChainName.ASTAR_ZKEVM,
      ChainName.AURORA,
      ChainName.BOBA,
      // canto
      // conflux espace
      ChainName.EVMOS,
      // fncy
      ChainName.FANTOM,
      // flare
      // godwoken
      // gravity alpha
      // iota evm
      ChainName.KAVA,
      ChainName.KLAYTN,
      ChainName.MANTLE,
      ChainName.METIS,
      // milkomeda a1
      // milkomeda c1
      ChainName.MOONBEAM,
      // oasis saphire
      // oasis
      ChainName.POLYGON_ZKEVM,
      // rari
      ChainName.SCROLL,
      // taiko
      ChainName.ZKSYNC,
    ],
  },
  {
    name: BridgeName.TELOS,
    dapp: 'https://bridge.telos.net/bridge',
    img: `chains/${chains["40"].img}`,
    chains: [
      ChainName.ETHEREUM,
      ChainName.TELOS,
      ChainName.POLYGON,
      ChainName.BSC,
      ChainName.AVALANCHE,
      ChainName.ARBITRUM,
      ChainName.ZKSYNC,
      ChainName.LINEA,
    ],
  },
  {
    name: BridgeName.ROOTSTOCK,
    dapp: 'https://dapp.tokenbridge.rootstock.io/',
    img: 'chains/rootstock.png',
    chains: [
      ChainName.ETHEREUM,
      ChainName.ROOTSTOCK,
    ],
  },
  {
    name: BridgeName.POLYGON,
    dapp: 'https://portal.polygon.technology/bridge',
    img: 'chains/polygon.svg',
    chains: [
      ChainName.ETHEREUM,
      ChainName.POLYGON,
      ChainName.POLYGON_ZKEVM,
    ],
  },
  {
    name: BridgeName.ARBITRUM,
    dapp: 'https://bridge.arbitrum.io/',
    img: 'chains/arbitrum.svg',
    chains: [
      ChainName.ETHEREUM,
      ChainName.ARBITRUM,
      ChainName.ARBITRUM_NOVA,
      // orbit: sanko, muster, l3x, pmon, superposition, proof of play apex...
    ],
  },
  {
    name: BridgeName.BRIDGG,
    dapp: 'https://www.brid.gg/',
    img: 'assets/bridgg.png',
    chains: [
      ChainName.ETHEREUM,
      ChainName.OPTIMISM,
      ChainName.BASE,
      ChainName.FRAXTAL,
      ChainName.MODE,
      // zora
      // redstone
      // lisk
    ],
  },
  {
    name: BridgeName.SUPERBRIDGE,
    dapp: 'https://superbridge.app/',
    img: 'assets/superbridge.jpg',
    chains: [
      ChainName.ETHEREUM,
      ChainName.BASE,
      ChainName.OPTIMISM,
      ChainName.MODE,
      ChainName.FRAXTAL,
      // zora
      // public goods network
      // lyra
      // orderly
      // lumic
      // metal l2
      // cyber
      // mint
      // lisk
      // redstone
      // xterio
      // swan
      // snaxchain
      // world chain
      // ChainName: soneium
    ],
  },
]

export const getChainBridges = (chainName: ChainName): Bridge[] => {
  const r: Bridge[] = []
  for (const bridge of bridges) {
    if (bridge.chains.includes(chainName)) {
      r.push(bridge)
    }
  }
  return  r
}
