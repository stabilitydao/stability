export type Asset = {
  addresses: {[chainId:string]: `0x${string}`|`0x${string}`[]},
  symbol: string,
  description: string,
  website: string,
  color: string,
}

export const assets: Asset[] = [
  {
    addresses: {
      "137": ["0x2791bca1f2de4661ed88a30c99a7a9449aa84174", "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",],
      "8453": ["0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA", "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",],
    },
    symbol: 'USDC',
    description:
      "USDC is a fully-reserved stablecoin, which is a type of cryptocurrency, or digital asset.",
    website: "https://www.circle.com/en/usdc",
    color: "#3b87df",
  },
  {
    addresses: {
      "137": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      "8453": "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
    },
    symbol: "USDT",
    description:
      "Tether (USDT) is a cryptocurrency with a value meant to mirror the value of the U.S. dollar.",
    website: "https://tether.to/en/",
    color: "#5bc7af",
  },
  {
    addresses: {
      "137": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      "8453": "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    },
    symbol: "DAI",
    description:
      "DAI is an algorithmic stablecoin issued by MakerDAO, an Ethereum-based protocol, that seeks to maintain an exact ratio of one-to-one with the U.S. dollar.",
    website: "https://makerdao.com/",
    color: "#f3ba42",
  },
  {
    addresses: {
      "137": "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
    },
    symbol: "WMATIC",
    description:
      "WMATIC is a wrapped version of MATIC that enables it to be easily used within DeFi.",
    website: "https://polygon.technology/",
    color: "#9663ee",
  },
  {
    addresses: {
      "137": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      "8453": "0x4200000000000000000000000000000000000006",
    },
    symbol: "WETH",
    description:
      "WETH is an ERC-20 token that represents 1 Ether (ETH)",
    website: "https://weth.io/",
    color: "#6372a2",
  },
  {
    addresses: {
      "137": "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    },
    symbol: "WBTC",
    description:
      "WBTC is an ERC-20 token on the EVM blockchains that is pegged to Bitcoin (BTC). WBTC is backed one-to-one with Bitcoin.",
    website: "https://wbtc.network/",
    color: "#f0a051",
  },
  {
    addresses: {
      "137": "0xc4ce1d6f5d98d65ee25cf85e9f2e9dcfee6cb5d6",
      "8453": "0x417Ac0e078398C154EdFadD9Ef675d30Be60Af93",
    },
    symbol: "crvUSD",
    description:
      "crvUSD is a collateralized-debt-position (CDP) stablecoin pegged to the US Dollar",
    website: "https://crvusd.curve.fi/",
    color: "#397949",
  },
  {
    addresses: {
      "8453": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
    },
    symbol: "cbETH",
    description: "Coinbase Wrapped Staked ETH (“cbETH”) is a utility token that represents ETH staked through Coinbase.",
    website: "https://www.coinbase.com/cbeth",
    color: "#2151f5",
  },
]
