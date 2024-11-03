export type Asset = {
  addresses: { [chainId: string]: `0x${string}` | `0x${string}`[] };
  symbol: string;
  description: string;
  website: string;
  color: string;
};

export const assets: Asset[] = [
  {
    addresses: {
      "137": [
        "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
      ],
      "8453": [
        "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
        "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      ],
      "111188": "0xc518A88c67CECA8B3f24c4562CB71deeB2AF86B7",
      "1": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "42161": [
        "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
        "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      ],
      "42420": "0x2B7C1342Cc64add10B2a79C8f9767d2667DE64B2",
    },
    symbol: "USDC",
    description:
      "USDC is a fully-reserved stablecoin, which is a type of cryptocurrency, or digital asset.",
    website: "https://www.circle.com/en/usdc",
    color: "#3b87df",
  },
  {
    addresses: {
      "137": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      "8453": "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
      "1": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "42161": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      "42420": "0x26E490d30e73c36800788DC6d6315946C4BbEa24",
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
      "111188": "0x75d0cBF342060b14c2fC756fd6E717dFeb5B1B70",
      "1": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      "42161": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
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
      "1": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      "42161": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      "42420": "0xbe231A8492487aAe6096278A97050FAe6B9d5BEc",
    },
    symbol: "WETH",
    description: "WETH is an ERC-20 token that represents 1 Ether (ETH)",
    website: "https://weth.io/",
    color: "#6372a2",
  },
  {
    addresses: {
      "137": "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
      "1": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      "42161": "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      "42420": "0xDBDc8c7B96286899aB624F6a59dd0250DD4Ce9bC",
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
    description:
      "Coinbase Wrapped Staked ETH (“cbETH”) is a utility token that represents ETH staked through Coinbase.",
    website: "https://www.coinbase.com/cbeth",
    color: "#2151f5",
  },
  {
    addresses: {
      "137": "0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD",
      "8453": "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
    },
    symbol: "wstETH",
    description: "wstETH is a wrapped version of stETH.",
    website: "https://lido.fi",
    color: "#00a3ff",
  },
  {
    addresses: {
      "111188": "0x90c6E93849E06EC7478ba24522329d14A5954Df4",
    },
    symbol: "WREETH",
    description: "Wrapped reETH (native gas token to the chain)",
    website: "https://re.al",
    color: "#ababab",
  },
  {
    addresses: {
      "111188": "0x83feDBc0B85c6e29B589aA6BdefB1Cc581935ECD",
    },
    symbol: "USTB",
    description:
      "The permissionless, cross-chain, rebasing stablecoin backed by T-Bills.",
    website: "https://www.tangible.store/ustb",
    color: "#339985",
  },
  {
    addresses: {
      "111188": "0xAEC9e50e3397f9ddC635C6c429C8C7eca418a143",
    },
    symbol: "arcUSD",
    description:
      "Arcana is a protocol built on re.al that captures the yield from a variety of delta-neutral trade strategies and distributes it in the form of a rebasing token that is soft-pegged to the dollar, arcUSD.",
    website: "https://www.arcana.finance/",
    color: "#f8f295",
  },
  {
    addresses: {
      "111188": "0xCE1581d7b4bA40176f0e219b2CaC30088Ad50C7A",
    },
    symbol: "PEARL",
    description: "Main utility token of Pearl DeX. ",
    website: "https://www.pearl.exchange/",
    color: "#2457ab",
  },
  {
    addresses: {
      "111188": "0x25ea98ac87A38142561eA70143fd44c4772A16b6",
    },
    symbol: "MORE",
    description:
      "Stack Finance is a borrowing and leverage platform that uses a variety of crypto native and real world asset tokens as collateral to borrow the stablecoin $MORE.",
    website: "https://www.stackmore.xyz/",
    color: "#d60d1d",
  },
  {
    addresses: {
      "111188": "0x4644066f535Ead0cde82D209dF78d94572fCbf14",
    },
    symbol: "RWA",
    description:
      "The RWA token is the governance token to the re.al ecosystem.",
    website: "https://re.al",
    color: "#ffffff",
  },
  {
    addresses: {
      "111188": "0x835d3E1C0aA079C6164AAd21DCb23E60eb71AF48",
    },
    symbol: "UKRE",
    description: "Real estate basket in Tangible",
    website:
      "https://www.tangible.store/baskets/0x835d3E1C0aA079C6164AAd21DCb23E60eb71AF48",
    color: "#8d8be1",
  },
  {
    addresses: {
      "111188": "0xB08F026f8a096E6d92eb5BcbE102c273A7a2d51C",
    },
    symbol: "CVR",
    description:
      "Caviar $CVR is a self-sustaining liquid-wrapper for locked tokens $vePEARL, the governance token of the Pearl Exchange. Initially developed by Tangible and now managed by the Pearl team.",
    website: "https://www.pearl.exchange/caviar",
    color: "#8d8be1",
  },
  {
    addresses: {
      "111188": "0x6B2e0fACD2F2A8f407aC591067Ac06b5d29247E4",
    },
    symbol: "SACRA",
    description: "Dark Fantasy on-chain RPG",
    website: "https://sacra.game",
    color: "#ff0000",
  },
];

export const getAsset = (
  chainId: string,
  tokenAddress: `0x${string}`,
): Asset | undefined => {
  for (const asset of assets) {
    const chainAddresses = asset.addresses[chainId];
    if (chainAddresses) {
      if (Array.isArray(chainAddresses)) {
        for (const address of chainAddresses) {
          if (address.toLowerCase() == tokenAddress.toLowerCase()) {
            return asset;
          }
        }
      } else {
        if (chainAddresses.toLowerCase() == tokenAddress.toLowerCase()) {
          return asset;
        }
      }
    }
  }
  return undefined;
};
