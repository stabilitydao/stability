import {ChainName} from "./chains";

export type Bridge = {
  name: BridgeName,
  dapp: string,
  img: string,
  chains: ChainName[],
}

export const enum BridgeName {
  SUPERBRIDGE = 'Superbridge',
  BRIDGG = 'Brid.gg',
  ARBITRUM = 'Arbitrum',
  POLYGON = 'Polygon portal',
  ROOTSTOCK = 'Rootstock',
}

export const bridges: Bridge[] = [
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
