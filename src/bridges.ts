import { ChainName, chains } from "./chains";
import { integrations } from "./integrations";

export type Bridge = {
  name: BridgeName;
  dapp: string;
  img: string;
  chains: ChainName[];
};

export const enum BridgeName {
  // Liquidity transports
  STARGATE = "Stargate",
  SATELLITE = "Satellite",
  ORBITER = "Orbiter",
  THUNDERCORE = "ThunderCore Bridge",
  BITTORRENT = "BitTorrent Bridge",
  KROMA = "Kroma Bridge",
  ROLLUX = "Rollux Bridge",
  RHINO = "Rhino",
  //todo
  // WEMIX = "Block Producer Network(BPN)", | Native bridge suspended/maintenance? wemix classic/multichain bridge?
  // HEDERA = "??", | No native bridge
  // DOGECHAIN = "Dogechain Bridge", | Native bridge only support transf of doge from dogecoin chain -> dogechain chain

  // official, native multi
  SUPERBRIDGE = "Superbridge",
  BRIDGG = "Brid.gg",
  HELA = "HeLa Bridge",

  // official, native
  ARBITRUM = "Arbitrum",
  POLYGON = "Polygon portal",
  ROOTSTOCK = "Rootstock Token Bridge",
  TELOS = "Telos Bridge",
  BNB = "BNB Chain Bridge",
  SKALE = "SKALE Portal",
  CORE_APP = "Core Tools Bridge",
  MODE = "Mode App",
  MANTLE = "Mantle Bridge",
  REAL = "Re.al Bridge",
  SONIC = "Sonic Gateway",
}

export const bridges: Bridge[] = [
  // Liquidity transports
  {
    name: BridgeName.STARGATE,
    dapp: "https://stargate.finance/bridge",
    img: `assets/${integrations["stargate"].img}`,
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
      ChainName.FLARE,
      ChainName.FRAXTAL,
      ChainName.GNOSIS,
      ChainName.GRAVITY,
      ChainName.IOTA,
      // kaia
      ChainName.KAVA,
      ChainName.LINEA,
      ChainName.MANTA,
      ChainName.MANTLE,
      ChainName.METIS,
      ChainName.MODE,
      ChainName.MOONBEAM,
      ChainName.MOONRIVER,
      ChainName.OPBNB,
      ChainName.OPTIMISM,
      ChainName.POLYGON,
      ChainName.POLYGON_ZKEVM,
      ChainName.RARI,
      ChainName.SCROLL,
      ChainName.SEI,
      // solana
      ChainName.TAIKO,
      ChainName.X_LAYER,
      ChainName.ZIRCUIT,
      ChainName.ZKSYNC,
    ],
  },
  {
    name: BridgeName.SATELLITE,
    dapp: "https://satellite.money",
    img: "assets/satellite.svg",
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
      ChainName.CARBON,
      // celestia
      ChainName.CELO,
      // centrifuge
      // chihuahua
      // comdex
      // cosomhub
      // crescent
      ChainName.DYMENSION,
      ChainName.EVMOS,
      ChainName.FANTOM,
      // fetch
      ChainName.FILECOIN,
      ChainName.FRAXTAL,
      ChainName.HAQQ,
      ChainName.IMMUTABLE_ZKEVM,
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
      ChainName.XPLA,
      // osmosis
    ],
  },
  {
    name: BridgeName.ORBITER,
    dapp: "https://www.orbiter.finance",
    img: "assets/orbiter.jpg",
    chains: [
      ChainName.ETHEREUM,
      ChainName.ARBITRUM,
      ChainName.OPTIMISM,
      ChainName.BASE,
      ChainName.LINEA,
      ChainName.SCROLL,
      ChainName.TAIKO,
      ChainName.ZKSYNC,
      ChainName.ZORA,
      // solana
      // ton
      ChainName.X_LAYER,
      ChainName.BLAST,
      ChainName.MODE,
      ChainName.MERLIN,
      ChainName.BEVM,
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
      ChainName.MINT,
      ChainName.OPBNB,
      // b^2 network
      ChainName.FRAXTAL,
      // matchain
      ChainName.CORE,
      ChainName.GRAVITY,
      ChainName.MANTLE,
      ChainName.BOUNCEBIT,
      ChainName.ZETA,
      ChainName.CYBER,
      // bomechain
      ChainName.ZKFAIR,
      ChainName.ZIRCUIT,
      ChainName.BOB,
      // optopia
      // proof of play apex
      ChainName.BITLAYER,
      ChainName.ZKLINK,
      // alienxchain
    ],
  },
  {
    name: BridgeName.RHINO,
    dapp: "https://app.rhino.fi/",
    img: "assets/rhino.webp",
    chains: [
      ChainName.ETHEREUM,
      ChainName.SONIC,
      ChainName.BASE,
      ChainName.ARBITRUM,
      ChainName.BSC,
      ChainName.POLYGON,
      ChainName.AVALANCHE,
      // berachain
      ChainName.LINEA,
      ChainName.MANTA,
      ChainName.MANTLE,
      ChainName.MODE,
      ChainName.OPTIMISM,
      ChainName.SCROLL,
      // soneium
      // story
      ChainName.TAIKO,
      ChainName.POLYGON_ZKEVM,
      ChainName.ZKSYNC,
      // abstract
      ChainName.BLAST,
      // ink
      ChainName.OPBNB,
      // plume
      // unichain
    ],
  },

  // official, native multi
  {
    name: BridgeName.BRIDGG,
    dapp: "https://www.brid.gg/",
    img: "assets/bridgg.png",
    chains: [
      ChainName.ETHEREUM,
      ChainName.OPTIMISM,
      ChainName.BASE,
      ChainName.FRAXTAL,
      ChainName.MODE,
      ChainName.ZORA,
      // redstone (no in defillama)
      // lisk (no in defillama)
    ],
  },
  {
    name: BridgeName.SUPERBRIDGE,
    dapp: "https://superbridge.app/",
    img: "assets/superbridge.jpg",
    chains: [
      ChainName.ETHEREUM,
      ChainName.BASE,
      ChainName.OPTIMISM,
      ChainName.MODE,
      ChainName.FRAXTAL,
      ChainName.ZORA,
      // public goods network
      // lyra
      // orderly
      // lumic
      // metal l2
      ChainName.CYBER,
      ChainName.MINT,
      // lisk
      // redstone
      // xterio
      // swan
      // snaxchain
      // world chain
      // ChainName: soneium
    ],
  },

  // official, native
  {
    name: BridgeName.BNB,
    dapp: "https://www.bnbchain.org/en/bnb-chain-bridge",
    img: `chains/${chains["56"].img}`,
    chains: [
      ChainName.ETHEREUM,
      ChainName.BSC,
      ChainName.OPBNB,
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
      ChainName.FLARE,
      // godwoken
      ChainName.GRAVITY,
      ChainName.IOTA,
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
      ChainName.RARI,
      ChainName.SCROLL,
      ChainName.TAIKO,
      ChainName.ZKSYNC,
    ],
  },
  {
    name: BridgeName.ARBITRUM,
    dapp: "https://bridge.arbitrum.io/",
    img: "chains/arbitrum.svg",
    chains: [
      ChainName.ETHEREUM,
      ChainName.ARBITRUM,
      ChainName.ARBITRUM_NOVA,
      // orbit: sanko, muster, l3x, pmon, superposition, proof of play apex...
    ],
  },
  {
    name: BridgeName.MANTLE,
    dapp: "https://bridge.mantle.xyz/",
    img: `chains/${chains["5000"].img}`,
    chains: [ChainName.ETHEREUM, ChainName.MANTLE],
  },
  {
    name: BridgeName.POLYGON,
    dapp: "https://portal.polygon.technology/bridge",
    img: "chains/polygon.svg",
    chains: [ChainName.ETHEREUM, ChainName.POLYGON, ChainName.POLYGON_ZKEVM],
  },
  {
    name: BridgeName.MODE,
    dapp: "https://app.mode.network",
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
    dapp: "https://core.app/en/bridge/",
    img: "assets/core-app.png",
    chains: [ChainName.ETHEREUM, ChainName.AVALANCHE],
  },
  {
    name: BridgeName.SKALE,
    dapp: "https://portal.skale.space/bridge",
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
    name: BridgeName.TELOS,
    dapp: "https://bridge.telos.net/bridge",
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
    dapp: "https://dapp.tokenbridge.rootstock.io/",
    img: "chains/rootstock.png",
    chains: [ChainName.ETHEREUM, ChainName.ROOTSTOCK],
  },
  {
    name: BridgeName.REAL,
    dapp: "https://www.re.al/bridge",
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
    name: BridgeName.HELA,
    dapp: "https://bridge.helachain.com/",
    img: `chains/${chains["8668"].img}`,
    chains: [
      ChainName.ETHEREUM,
      ChainName.BSC,
      ChainName.POLYGON,
      ChainName.HELA,
    ],
  },
  {
    name: BridgeName.THUNDERCORE,
    dapp: "https://bridge.thundercore.com/",
    img: `chains/${chains["108"].img}`,
    chains: [ChainName.ETHEREUM, ChainName.BSC, ChainName.THUNDERCORE],
  },
  {
    name: BridgeName.BITTORRENT,
    dapp: "https://bttc.bittorrent.com/bridge/",
    img: `chains/${chains["199"].img}`,
    chains: [ChainName.BITTORRENT, ChainName.BSC, ChainName.ETHEREUM],
  },
  {
    name: BridgeName.KROMA,
    dapp: "https://kcu.kroma.network/?dialog=bridgeTransfer",
    img: `chains/${chains["255"].img}`,
    chains: [ChainName.KROMA, ChainName.ETHEREUM],
  },
  {
    name: BridgeName.ROLLUX,
    dapp: "https://bridge.rollux.com/",
    img: `chains/${chains["570"].img}`,
    chains: [
      ChainName.ROLLUX,
      ChainName.ETHEREUM,
      ChainName.BSC,
      ChainName.POLYGON,
    ],
  },
  {
    name: BridgeName.SONIC,
    dapp: "https://gateway.soniclabs.com/",
    img: `chains/${chains["146"].img}`,
    chains: [ChainName.SONIC, ChainName.ETHEREUM],
  },
];

export const getChainBridges = (chainName: ChainName): Bridge[] => {
  const r: Bridge[] = [];
  for (const bridge of bridges) {
    if (bridge.chains.includes(chainName)) {
      r.push(bridge);
    }
  }
  return r;
};
