import { tokenlist } from "./index";

export type Asset = {
  addresses: { [chainId: string]: `0x${string}` | `0x${string}`[] };
  symbol: string;
  description: string;
  website: string;
  color: string;
};

export type TokenData = {
  address: `0x${string}`;
  name: string;
  symbol: string;
  chainId: number;
  decimals: number;
  logoURI: string;
  tags?: string[];
};

export const assets: Asset[] = [
  {
    addresses: {
      "1": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "10": "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
      "56": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      "137": [
        "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
      ],
      "8453": [
        "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
        "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      ],
      "42161": [
        "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
        "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      ],
      "42420": "0x2B7C1342Cc64add10B2a79C8f9767d2667DE64B2",
      "43114": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      "111188": "0xc518A88c67CECA8B3f24c4562CB71deeB2AF86B7",
      "534352": "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
      "146": "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
    },
    symbol: "USDC",
    description:
      "USDC is a fully-reserved stablecoin, which is a type of cryptocurrency, or digital asset.",
    website: "https://www.circle.com/en/usdc",
    color: "#3b87df",
  },
  {
    addresses: {
      "1": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "10": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
      "56": "0x55d398326f99059fF775485246999027B3197955",
      "137": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      "8453": "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
      "42161": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      "42420": "0x26E490d30e73c36800788DC6d6315946C4BbEa24",
      "43114": "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
      "534352": "0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df",
    },
    symbol: "USDT",
    description:
      "Tether (USDT) is a cryptocurrency with a value meant to mirror the value of the U.S. dollar.",
    website: "https://tether.to/en/",
    color: "#5bc7af",
  },
  {
    addresses: {
      "1": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      "10": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      "56": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
      "137": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      "8453": "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
      "42161": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      "43114": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
      "111188": "0x75d0cBF342060b14c2fC756fd6E717dFeb5B1B70",
      "534352": "0xcA77eB3fEFe3725Dc33bccB54eDEFc3D9f764f97",
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
      "1": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      "10": "0x4200000000000000000000000000000000000006",
      "56": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      "137": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      "8453": "0x4200000000000000000000000000000000000006",
      "42161": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      "42420": "0xbe231A8492487aAe6096278A97050FAe6B9d5BEc",
      "43114": "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      "81457": "0x4300000000000000000000000000000000000004",
      "534352": "0x5300000000000000000000000000000000000004",
      "146": "0x50c42dEAcD8Fc9773493ED674b675bE577f2634b",
    },
    symbol: "WETH",
    description: "WETH is an ERC-20 token that represents 1 Ether (ETH)",
    website: "https://weth.io/",
    color: "#6372a2",
  },
  {
    addresses: {
      "1": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      "10": "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
      "56": "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
      "137": "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
      "42161": "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      "42420": "0xDBDc8c7B96286899aB624F6a59dd0250DD4Ce9bC",
      "43114": "0x152b9d0FdC40C096757F570A51E494bd4b943E50",
      "81457": "0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692",
      "534352": "0x3C1BCa5a656e69edCD0D4E36BEbb3FcDAcA60Cf1",
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
      "534352": "0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32",
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
      "146": "0x7AD5935EA295c4E743e4f2f5B4CDA951f41223c2",
      "111188": "0x6B2e0fACD2F2A8f407aC591067Ac06b5d29247E4",
    },
    symbol: "SACRA",
    description: "Dark Fantasy on-chain RPG",
    website: "https://sacra.game",
    color: "#ff0000",
  },
  {
    addresses: {
      "146": "0xfC0dd337b92Baa949bC5D25FD9A99Cb3b6873204",
    },
    symbol: "SACRA_GEM_1",
    description: "Sonic GEMs wrapped for Sacra: Dark Fantasy on-chain RPG",
    website: "https://sacra.game",
    color: "#7e0000",
  },
  {
    addresses: {
      "10": "0x4200000000000000000000000000000000000042",
    },
    symbol: "OP",
    description:
      "OP is the native token of Optimism, a Layer 2 scaling solution for Ethereum. It is used for governance, incentives, and security through staking.",
    website: "https://www.optimism.io/",
    color: "#ff0000",
  },
  {
    addresses: {
      "56": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    },
    symbol: "WBNB",
    description:
      "WBNB is an ERC-20 token that allows BNB to be used in Ethereum-compatible applications, such as smart contracts and DeFi platforms. wBNB enables interoperability between BNB and other ERC-20 supported networks.",
    website: "https://www.bnbchain.org/",
    color: "#ffea00",
  },
  {
    addresses: {
      "43114": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    },
    symbol: "WAVAX",
    description:
      "It is an ERC-20 token used for compatibility with decentralized finance (DeFi) platforms that require ERC-20 tokens. wAVAX allows AVAX to be used across multiple networks, enabling interoperability and broader DeFi participation.",
    website: "https://www.avax.network/",
    color: "#ff0026",
  },
  {
    addresses: {
      "81457": "0xb1a5700fA2358173Fe465e6eA4Ff52E36e88E2ad",
    },
    symbol: "BLAST",
    description:
      "Native token of Blast. It's mainly used for paying transaction fees, participating in network governance, staking to secure the network or earn rewards, and interacting with decentralized applications (dApps) on the Blast network.",
    website: "https://blast.io/es",
    color: "#FCFC03",
  },
  {
    addresses: {
      "81457": "0x4300000000000000000000000000000000000003",
    },
    symbol: "USDB",
    description:
      "USDB is a stablecoin pegged to the value of the US dollar, issued within the Blast ecosystem.",
    website: "https://blast.io/es",
    color: "#FCFC03",
  },
  {
    addresses: {
      "534352": "0xd29687c813D741E2F938F4aC377128810E217b1b",
    },
    symbol: "SCR",
    description:
      "It's the native token of the Scroll network, a Layer-2 solution for Ethereum based on zk-rollups. It is used for transaction fees, network governance, and staking to secure the network.",
    website: "https://scroll.io/",
    color: "#c8a981",
  },
  {
    addresses: {
      "146": "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
    },
    symbol: "wS",
    description: "Wrapped native Sonic coin",
    website: "https://www.soniclabs.com/",
    color: "#fec160",
  },
  {
    addresses: {
      "146": "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955",
    },
    symbol: "stS",
    description: "Beets liquid staked Sonic",
    website: "https://beets.fi/",
    color: "#f50000",
  },
  {
    addresses: {
      "146": "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
    },
    symbol: "scUSD",
    description: "A scalable yield bearing meta-stablecoin on Sonic",
    website: "https://rings.money/",
    color: "#8484db",
  },
  {
    addresses: {
      "146": "0x3bcE5CB273F0F148010BbEa2470e7b5df84C7812",
    },
    symbol: "scETH",
    description: "A scalable yield bearing meta-stablecoin on Sonic",
    website: "https://rings.money/",
    color: "#8484db",
  },
  {
    addresses: {
      "146": "0x9fDbC3f8Abc05Fa8f3Ad3C17D2F806c1230c4564",
    },
    symbol: "GOGLZ",
    description:
      '$GOGLZ is a meme coin with a playful message: "The future is bright, and for your safety, goggles must stay on at all times."',
    website: "https://www.goglz.io/",
    color: "#ff9433",
  },
  {
    addresses: {
      "146": "0x05e31a691405d06708A355C029599c12d5da8b28",
    },
    symbol: "fSONIC",
    description: "$fSONIC meme coin. Joins the Race—Need for speed?",
    website: "https://fsonic.pro/",
    color: "#868686",
  },
  {
    addresses: {
      "146": "0x486B6Fa0419b33a0c7A6e4698c231D7E2f2D5299",
    },
    symbol: "MOON",
    description:
      "MoonBay is an innovative crypto project built on the Sonic Network, with a strong, engaged community at its core. The $MOON token serves as both a meme coin and the central community token within the MoonBay ecosystem. Focused on staying ahead of trends, MoonBay actively integrates cutting-edge developments in DeFi, NFTs, GameFi, and more. With its dynamic approach, MoonBay aims to provide value, entertainment, and growth opportunities for its community, making it a hub for innovation and engagement in the crypto space.",
    website: "https://www.moonbay.space/",
    color: "#7fd6c6",
  },
  {
    addresses: {
      "146": "0xddF26B42C1d903De8962d3F79a74a501420d5F19",
    },
    symbol: "EQUAL",
    description:
      "Equalizer Exchange is the fastest liquidity hub providing optimized trading and earning opportunities.",
    website: "https://equalizer.exchange/",
    color: "#19b4e3",
  },
  {
    addresses: {
      "146": "0xA04BC7140c26fc9BB1F36B1A604C7A5a88fb0E70",
    },
    symbol: "SWPx",
    description:
      "Equalizer Exchange is the fastest liquidity hub providing optimized trading and earning opportunities.",
    website: "https://swapx.fi/",
    color: "#3f6743",
  },
  {
    addresses: {
      "146": "0x6881B80ea7C858E4aEEf63893e18a8A36f3682f3",
    },
    symbol: "NAVI",
    description:
      "Effortless trading, continuous liquidity. Across Crypto, Forex, and beyond.",
    website: "https://www.navigator.exchange/",
    color: "#90fb75",
  },
  {
    addresses: {
      "146": "0x7A08Bf5304094CA4C7b4132Ef62b5EDc4a3478B7",
    },
    symbol: "ECO",
    description:
      "Harnessing the power of Sonic DeFi to reward holders and give back to the planet; community token by Blockchain Ecologist 🌱",
    website: "https://fantom.eco/",
    color: "#5c0451",
  },
  {
    addresses: {
      "146": "0x4EEC869d847A6d13b0F6D1733C5DEC0d1E741B4f",
    },
    symbol: "INDI",
    description:
      "A Sonic meme named after Michael Kong's cat. Michael is the CEO of Sonic.",
    website: "https://www.indisonic.xyz/",
    color: "#fe9a4c",
  },
  {
    addresses: {
      "146": "0x7F144F8691CbA3d2EfD8e5bcf042f9303EE31a46",
    },
    symbol: "AUR",
    description:
      "Aurum is a decentralised money market protocol where users can participate as suppliers or borrowers.",
    website: "https://aurumfi.io/",
    color: "#a7856a",
  },
  {
    addresses: {
      "146": "0xd6a69EBFa44f78cEe454A2Df2C77751A42f8f38c",
    },
    symbol: "auUSDC",
    description:
      "Yield-bearing rebase receipt token of collateral supplied to Aurum protocol.",
    website: "https://aurumfi.io/",
    color: "#19b4e3",
  },
  {
    addresses: {
      "146": "0xE51EE9868C1f0d6cd968A8B8C8376Dc2991BFE44",
    },
    symbol: "BRUSH",
    description:
      "BRUSH is the deflationary token of Estfor Kingdom and Paintswap.",
    website: "https://paintswap.io/",
    color: "#b000e9",
  },
  {
    addresses: {
      "146": "0x56192E94434c4fd3278b4Fa53039293fB00DE3DB",
    },
    symbol: "TYSG",
    description:
      "Thank You Sonic God - more than a meme. A movement - a tribute to the creator & shaper of ve(3,3) - memeFi on #Sonic.",
    website: "https://thankyousonicgod.com/",
    color: "#6b5c65",
  },
  {
    addresses: {
      "146": "0x284D81e48fBc782Aa9186a03a226690aEA5cBe0E",
    },
    symbol: "atETH",
    description:
      "atETH is a full-collateralized token pegging with ETH. It utilizes AMO (Algorithmic Market Operations) to control its pegging for the Atoll ecosystem and earn yields from the fluctuating market. (Same with other assets like atS).",
    website: "https://atoll.money/",
    color: "#e2e2e2",
  },
  {
    addresses: {
      "146": "0xf26B3Fd147619Df61D4c1D0a9F7200B31A73FAfa",
    },
    symbol: "Missor",
    description:
      "Online 12 hours a day. Still miss everything. Aped the wrong ticker, missed the real one. Two token launch, ape the wrong one. You're a $MISSOR.",
    website: "https://missor.art/",
    color: "#fb89b4",
  },
  {
    addresses: {
      "146": "0x7F883dA3B0d77978075f7C9c03E1B9F461CA1B8d",
    },
    symbol: "WOOF",
    description:
      "Muttski, a go-to companion for every trader. A memecoin powered by utility and community engagement, Muttski offers a range of practical tools to enhance your trading experience. From the user-friendly MuttskiBot simplifying token trading and tools to simplify DeFi in Muttski's DeFi Suite. With a revenue-sharing model, Muttski holders benefit by simply staying invested.",
    website: "https://www.muttski.io/",
    color: "#2c80fa",
  },
  {
    addresses: {
      "146": "0x0a54364631Ea37813a63edb3bBa1C46f8d8304B2",
    },
    symbol: "DONKS",
    description:
      "$DONKS is an 80s-styled token built on the Sonic blockchain with a mission to support real-world donkey rescue and adoption initiatives. Combining a nostalgic retro vibe with a heartfelt cause, $DONKS empowers holders to contribute to saving and adopting donkeys globally while embracing the fun and community spirit of the project.",
    website: "https://linktr.ee/SonicDonks",
    color: "#21eff0",
  },
  {
    addresses: {
      "146": "0x41211648C51AcB9A5F39A93C657e894A0bdB88e4",
    },
    symbol: "TAILS",
    description:
      "TAILS on Sonic is a memecoin hub for AI, gaming and token tooling!",
    website: "https://linktr.ee/TailsOnSonic",
    color: "#e18103",
  },
  {
    addresses: {
      "146": "0x17Af1Df44444AB9091622e4Aa66dB5BB34E51aD5",
    },
    symbol: "THC",
    description:
      "TinHatCat is THE Memecoin of Fantom $FTM, Stoners and Conspiracy Theorists around the world. Ticker is $THC",
    website: "https://www.tinhatcat.com/",
    color: "#447db7",
  },
  {
    addresses: {
      "146": "0xBC0d0650412EF353D672c0Bbd12eFFF90591B251",
    },
    symbol: "FS",
    description:
      "FantomStarter is a multi-chain decentralized Initial Dex Offering (IDO) platform that hosts presales for upcoming blockchain projects.",
    website: "https://futurestarter.xyz/projects",
    color: "#8145e8",
  },
  {
    addresses: {
      "146": "0x50Bc6e1DfF8039A4b967c1BF507ba5eA13fa18B6",
    },
    symbol: "sDOG",
    description: "LET EM HANG 🐺❄️💥",
    website: "https://www.sdog.io/",
    color: "#e0e0e0",
  },
  {
    addresses: {
      "146": "0xb1e25689D55734FD3ffFc939c4C3Eb52DFf8A794",
    },
    symbol: "OS",
    description:
      "Hypersonic liquid staking. Permissionless Money Lego. Ideal for stacking yield. Rebasing token.",
    website: "https://www.originprotocol.com/",
    color: "#1a82ff",
  },
  {
    addresses: {
      "146": "0x3333b97138D4b086720b5aE8A7844b1345a33333",
    },
    symbol: "SHADOW",
    description:
      "A Sonic-native concentrated liquidity exchange. The ultimate trading hub on Sonic.",
    website: "https://www.shadow.so/",
    color: "#fe9f1c",
  },
  {
    addresses: {
      "146": "0x9A08cD5691E009cC72E2A4d8e7F2e6EE14E96d6d",
    },
    symbol: "sGEM1",
    description: "Our Sonic GEM wrapper for Season 1.",
    website: "https://stability.farm",
    color: "#e20000",
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

/**
 * Function to get token data from token list
 *
 * @example
 *
 * ```
 * getTokenData("0x2791bca1f2de4661ed88a30c99a7a9449aa84174")
 * ```
 *
 * @param address - Token address
 *
 * @returns {Object} Token Information
 * @property {`0x${string}`} address - Token contract address
 * @property {number} chainId - ID of the blockchain network (e.g., 137 for Polygon)
 * @property {number} decimals - Number of decimals the token uses
 * @property {string} name - Full name of the token (e.g., "Dai Stablecoin").
 * @property {string} symbol - Token ticker symbol (e.g., "DAI").
 * @property {string} logoURI - URL of the token's logo image.
 * @property {string[]} tags - Array of tags related to the token (e.g., ["stablecoin", "DeFi"]).
 *
 **/
export const getTokenData = (address: `0x${string}`): TokenData | undefined => {
  for (const token of tokenlist.tokens) {
    if (token.address.toLowerCase() === address.toLowerCase()) {
      return {
        address: token.address.toLowerCase() as `0x${string}`,
        chainId: token.chainId,
        decimals: token.decimals,
        name: token.name,
        symbol: token.symbol,
        logoURI: token.logoURI,
        tags: token?.tags,
      };
    }
  }
  return undefined;
};
