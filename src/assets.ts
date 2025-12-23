import { tokenlist } from "./index";

export type Asset = {
  addresses: { [chainId: string]: `0x${string}` | `0x${string}`[] };
  symbol: string;
  description: string;
  website: string;
  color: string;
  mintApp?: string;
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
      "9745": "0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb",
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
      "9745": "0x9895D81bB462A195b4922ED7De0e3ACD007c32CB",
    },
    symbol: "WETH",
    description: "WETH is an ERC-20 token that represents 1 Ether (ETH)",
    website: "https://ethereum.org",
    color: "#6372a2",
  },
  {
    addresses: {
      "1": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      "10": "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
      "56": "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
      "137": "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
      "146": "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
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
      "146": "0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1",
    },
    symbol: "wOS",
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
  {
    addresses: {
      "146": "0x78a76316F66224CBaCA6e70acB24D5ee5b2Bd2c7",
    },
    symbol: "STBL",
    description: "AI-driven Asset Manager",
    website: "https://stability.farm",
    color: "#5b32f1",
  },
  {
    addresses: {
      "146": "0xEdF8b632b537d5993Adb5e2E15882CD791c284cB",
    },
    symbol: "fBOMB",
    description:
      "fBOMB is a deflationary multi-chain token backed by MCLB Treasury.",
    website: "https://mclb.org/fBomb",
    color: "#0063fa",
  },
  {
    addresses: {
      "146": "0xf26Ff70573ddc8a90Bd7865AF8d7d70B8Ff019bC",
    },
    symbol: "EGGS",
    description:
      "Eggs Finance is a DeFi protocol on the Sonic blockchain that utilizes $S and $EGGS to create a stable and potentially increasing value mechanism.",
    website: "https://eggs.finance/",
    color: "#fc9c04",
  },
  {
    addresses: {
      "146": "0x80Eede496655FB9047dd39d9f418d5483ED600df",
    },
    symbol: "frxUSD",
    description:
      "Frax USD (frxUSD) is a fiat-redeemable, fully-collateralized stablecoin issued by the Frax Finance Protocol.",
    website: "https://frax.com/",
    color: "#0c0a0a",
  },
  {
    addresses: {
      "146": "0x5Bff88cA1442c2496f7E475E9e7786383Bc070c0",
    },
    symbol: "sfrxUSD",
    description:
      "Staked Frax USD (sfrxUSD) is the yielding stablecoin implemented as an ERC4626 token.",
    website: "https://frax.com/",
    color: "#0c0a0a",
  },
  {
    addresses: {
      "146": "0x9fb76f7ce5FCeAA2C42887ff441D46095E494206",
    },
    symbol: "wstkscUSD",
    description:
      "Wrapped staked scalable yield bearing meta-stablecoin on Sonic",
    website: "https://rings.money/",
    color: "#8484db",
  },
  {
    addresses: {
      "146": "0xE8a41c62BB4d5863C6eadC96792cFE90A1f37C47",
    },
    symbol: "wstkscETH",
    description:
      "Wrapped staked scalable yield bearing meta-stablecoin on Sonic",
    website: "https://rings.money/",
    color: "#8484db",
  },
  {
    addresses: {
      "146": "0xfA85Fe5A8F5560e9039C04f2b0a90dE1415aBD70",
    },
    symbol: "wanS",
    description:
      "Angles protocol is part of a transformative DeFi ecosystem designed to enhance economic opportunities on the Sonic Network.",
    website: "http://angles.fi/",
    color: "#eb563a",
  },
  {
    addresses: {
      "146": "0x930441Aa7Ab17654dF5663781CA0C02CC17e6643",
    },
    symbol: "PT-aSonUSDC-14AUG2025",
    description: "Pendle principal token for Aave USDC aToken",
    website: "https://app.pendle.finance",
    color: "#3b9eef",
  },
  {
    addresses: {
      "146": "0x420df605D062F8611EFb3F203BF258159b8FfFdE",
    },
    symbol: "PT-stS-29MAY2025",
    description: "Pendle principal token for stS",
    website: "https://app.pendle.finance",
    color: "#ec4e41",
  },
  {
    addresses: {
      "146": "0xBe27993204Ec64238F71A527B4c4D5F4949034C3",
    },
    symbol: "PT-wstkscUSD-29MAY2025",
    description: "Pendle principal token for wstkscUSD",
    website: "https://app.pendle.finance",
    color: "#026dd5",
  },
  {
    addresses: {
      "146": "0xa2161E75EDf50d70544e6588788A5732A3105c00",
    },
    symbol: "PT-wstkscETH-29MAY2025",
    description: "Pendle principal token for wstkscETH",
    website: "https://app.pendle.finance",
    color: "#1187ff",
  },
  {
    addresses: {
      "146": "0x46eb02b9F47634c4fab3110CC7ADc1C6311DfAC1",
    },
    symbol: "PT-wOS-29MAY2025",
    description: "Pendle principal token for wOS",
    website: "https://app.pendle.finance",
    color: "#1a82ff",
  },
  {
    addresses: {
      "146": "0x322e1d5384aa4ED66AeCa770B95686271de61dc3",
    },
    symbol: "bUSDC.e-20",
    description: "Silo Finance Borrowable USDC.e Deposit, SiloId: 20",
    website: "https://v2.silo.finance/",
    color: "#2775ca",
  },
  {
    addresses: {
      "146": "0xBb30e76d9Bb2CC9631F7fC5Eb8e87B5Aff32bFbd",
    },
    symbol: "scBTC",
    description: "Sonic BTC",
    website: "https://rings.money/",
    color: "#9974e0",
  },
  {
    addresses: {
      "146": "0x05F0c7Ca7B90e3786603108D42cA8DFd28d72075",
    },
    symbol: "GEMSx",
    description: "SwapX GEMS",
    website: "https://swapx.fi/",
    color: "#46ff68",
  },
  {
    addresses: {
      "146": "0xddddd1b4a383dcB89938bC8b8964Cad3C632Fad0",
    },
    symbol: "MYRD",
    description: "Myrd Token",
    website: "https://sacra.game/",
    color: "#223f92",
  },
  {
    addresses: {
      "146": "0x578Ee1ca3a8E1b54554Da1Bf7C583506C4CD11c6",
    },
    symbol: "aSonUSDC",
    description: "Aave supplied USDC",
    website: "https://aave.com/",
    color: "#154080",
  },
  {
    addresses: {
      "146": "0x77d8F09053c28FaF1E00Df6511b23125d438616f",
    },
    symbol: "PT-Silo-20-USDC.e-17JUL2025",
    description: "Pendle principal token for Silo V2 market 20",
    website: "https://app.pendle.finance",
    color: "#1a82ff",
  },
  {
    addresses: {
      "146": "0x9731842eD581816913933c01De142C7EE412A8c8",
    },
    symbol: "PT-Silo-46-scUSD-14AUG2025",
    description: "Pendle principal token for Silo V2 market 46",
    website: "https://app.pendle.finance",
    color: "#1a82ff",
  },
  {
    addresses: {
      "146": "0x871A101Dcf22fE4fE37be7B654098c801CBA1c88",
    },
    symbol: "beS",
    description:
      "Beefy is a Decentralized, Multichain Yield Optimizer that allows its users to earn compound interest on their crypto holdings. Beefy earns you the highest APYs with safety and efficiency in mind.",
    website: "https://beefy.com/",
    color: "#171928",
  },
  {
    addresses: {
      "146": "0x1111111199558661Bf7Ff27b4F1623dC6b91Aa3e",
    },
    symbol: "metaUSD",
    description: "Stability MetaVault",
    website: "https://stability.farm/",
    color: "#4112e0",
  },
  {
    addresses: {
      "146": "0x4444444420D9De54d69b3997b7D6A31d2BF63F32",
    },
    symbol: "metaS",
    description: "Stability MetaVault",
    website: "https://stability.farm/",
    color: "#4112e0",
  },
  {
    addresses: {
      "146": "0x22222222780038f8817b3dE825a070225e6d9874",
      "43114": "0x22226a3c59c52f6768cd44b97B88167217c12222",
    },
    symbol: "metaUSDC",
    description: "Stability MetaVault",
    website: "https://stability.farm/",
    color: "#4112e0",
  },
  {
    addresses: {
      "146": "0x33333333C480194b5B651987b7D00B20dDCbd287",
    },
    symbol: "metascUSD",
    description: "Stability MetaVault",
    website: "https://stability.farm/",
    color: "#4112e0",
  },
  {
    addresses: {
      "146": "0x555555554776B14B30597d1032E48f9e16db22A4",
    },
    symbol: "metawS",
    description: "Stability MetaVault",
    website: "https://stability.farm/",
    color: "#4112e0",
  },
  {
    addresses: {
      "146": "0xAaAaaAAac311D0572Bffb4772fe985A750E88805",
    },
    symbol: "wmetaUSD",
    description: "Stability Wrapped MetaVault",
    website: "https://stability.farm/",
    mintApp:
      "/metavaults/metavault/146/0x1111111199558661bf7ff27b4f1623dc6b91aa3e",
    color: "#3fc00d",
  },
  {
    addresses: {
      "146": "0xbbbbbbBBbd0aE69510cE374A86749f8276647B19",
    },
    symbol: "wmetaS",
    description: "Stability Wrapped MetaVault",
    website: "https://stability.farm/",
    mintApp:
      "/metavaults/metavault/146/0x4444444420d9de54d69b3997b7d6a31d2bf63f32",
    color: "#3fc00d",
  },
  {
    addresses: {
      "146": "0xEEEEEEE6d95E55A468D32FeB5d6648754d10A967",
      "43114": "0xcCCCaBc3370633AD166669b27A71eB3aE4bFCcCc",
    },
    symbol: "wUSDC",
    description: "Stability Wrapped MetaVault",
    website: "https://stability.farm/",
    color: "#3fc00d",
  },
  {
    addresses: {
      "146": "0xccccCCcca9FC69a2b32408730011EdB3205A93A1",
    },
    symbol: "wscUSD",
    description: "Stability Wrapped MetaVault",
    website: "https://stability.farm/",
    color: "#3fc00d",
  },
  {
    addresses: {
      "146": "0xffFFFFFf2fcBeFAe12F1372C56edC769BD411685",
    },
    symbol: "wwS",
    description: "Stability Wrapped MetaVault",
    website: "https://stability.farm/",
    color: "#3fc00d",
  },
  {
    addresses: {
      "146": "0x451812019238785086cfac408d8a64f06898f6f5",
    },
    symbol: "sbUSD",
    description: "Staked bUSD",
    website: "https://brunch.finance/",
    mintApp: "https://brunch.finance/mint?tab=mint",
    color: "#FA7273",
  },
  {
    addresses: {
      "146": "0x6047828dc181963ba44974801ff68e538da5eaf9",
    },
    symbol: "USDT",
    description: "Tether USD",
    website: "https://stability.farm/",
    color: "#009393",
  },
  {
    addresses: {
      "146": "0xd2901d474b351bc6ee7b119f9c920863b0f781b2",
    },
    symbol: "YT-scUSD",
    description: "SJ Yield Token scUSD",
    website: "https://stability.farm/",
    color: "#A16CE2",
  },
  {
    addresses: {
      "146": "0x6202b9f02e30e5e1c62cc01e4305450e5d83b926",
    },
    symbol: "xUSD",
    description: "Staked Stream USD",
    website: "https://stability.farm/",
    color: "#2775CA",
  },
  {
    addresses: {
      "43114": "0x00000000eFE302BEAA2b3e6e1b18d08D69a9012a",
    },
    symbol: "AUSD",
    description: "AUSD: The Digital Dollar",
    website: "https://www.agora.finance/",
    color: "#f1d3aa",
  },
  {
    addresses: {
      "146": "0xc7990369DA608C2F4903715E3bD22f2970536C29",
    },
    symbol: "smsUSD",
    description:
      "Staked msUSD harnesses institutional-grade volatility arbitrage strategies to create a delta neutral yield bearing stablecoin.",
    website: "https://mainstreet.finance/",
    color: "#06a94e",
  },
  {
    addresses: {
      "146": "0x5EE17fD12eDE62B508F9615DB384ce7B834bA657",
    },
    symbol: "PT-smsUSD-30OCT2025",
    description:
      "PT Staked msUSD 30OCT2025. msUSD harnesses institutional-grade volatility arbitrage strategies to create a delta neutral yield bearing stablecoin.",
    website: "https://mainstreet.finance/",
    color: "#066731",
  },
  {
    addresses: {
      "9745": "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
    },
    symbol: "USDe",
    description:
      "Digital Dollars for the \n" +
      "Internet Economy. The Holy Grail: Internet Money. Unparalleled Transparency.",
    website: "https://ethena.fi/",
    color: "#4f4f4f",
  },
  {
    addresses: {
      "9745": "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
    },
    symbol: "sUSDe",
    description: "Staked USDe.",
    website: "https://ethena.fi/",
    color: "#a8a8a8",
  },
  {
    addresses: {
      "9745": "0x6100E367285b01F48D07953803A2d8dCA5D19873",
    },
    symbol: "WXPL",
    description: "Wrapped native XPL coin",
    website: "https://www.plasma.to/",
    color: "#41a11c",
  },
  {
    addresses: {
      "9745": "0xA3D68b74bF0528fdD07263c60d6488749044914b",
    },
    symbol: "weETH",
    description:
      "ether.fi: Truly decentralized staking. Keep your keys. Build the network.",
    website: "https://www.ether.fi/",
    color: "#6a60e1",
  },
  {
    addresses: {
      "146": "0x000078392f3cF4262500FFeB7d803F90477ECC11",
    },
    symbol: "RECmetaUSD",
    description: "Accident 1 recovery token",
    website: "https://stability.farm/",
    color: "#ff0000",
  },
  {
    addresses: {
      "146": "0x00001b2c60cD041a478521008CE6efeC475bb9Aa",
    },
    symbol: "RECwmetaUSD",
    description: "Accident 1 recovery token",
    website: "https://stability.farm/",
    color: "#ff0000",
  },
  {
    addresses: {
      "146": "0x0000a59C549b4250a2931ac6054e1426a87DA0EE",
    },
    symbol: "RECwmetaUSDC",
    description: "Accident 1 recovery token",
    website: "https://stability.farm/",
    color: "#ff0000",
  },
  {
    addresses: {
      "146": "0x0000c3b22bbD290588361E4B5C424F3AB0d0a3cc",
    },
    symbol: "RECwmetascUSD",
    description: "Accident 1 recovery token",
    website: "https://stability.farm/",
    color: "#ff0000",
  },
  {
    addresses: {
      "146": "0x000006539BA0B4f5452186Af40aAB959bDEa4344",
    },
    symbol: "RECmetaS",
    description: "Accident 1 recovery token",
    website: "https://stability.farm/",
    color: "#ff0000",
  },
  {
    addresses: {
      "146": "0x0000Dd8cEa00EA3336f5849590d69bbfc93A85bb",
    },
    symbol: "RECwmetaS",
    description: "Accident 1 recovery token",
    website: "https://stability.farm/",
    color: "#ff0000",
  },
  {
    addresses: {
      "9745": "0x1111836D0Ff66770F9d9a22FDB7e1f0349501111",
    },
    symbol: "metaUSDT",
    description: "Stability MetaVault",
    website: "https://stability.farm/",
    color: "#3d19b6",
  },
  {
    addresses: {
      "9745": "0xaAAaBE1F93b9470C56f17d9Ef4E3fF13bCf9AAAA",
    },
    symbol: "wmetaUSDT",
    description: "Stability Wrapped MetaVault",
    website: "https://stability.farm/",
    color: "#3fc00d",
  },
  {
    addresses: {
      "146": "0x77773Cb473aD1bfE991bA299a127F64b45C17777",
    },
    symbol: "STBL_DAO",
    description: "Stability DAO power token",
    website: "https://stability.farm/",
    color: "#6600ff",
  },
  {
    addresses: {
      "1": "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
    },
    symbol: "wstETH",
    description: "wstETH is a wrapped version of stETH.",
    website: "https://lido.fi",
    color: "#00a3ff",
  },
  {
    addresses: {
      "1": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    },
    symbol: "LINK",
    description: "ChainLink Token",
    website: "https://chain.link/",
    color: "#2a5ada",
  },
  {
    addresses: {
      "1": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    },
    symbol: "AAVE",
    description: "Aave Token",
    website: "https://aave.com/",
    color: "#b6509e",
  },
  {
    addresses: {
      "1": "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
    },
    symbol: "cbETH",
    description:
      "Coinbase Wrapped Staked ETH (cbETH) is a utility token that represents ETH staked through Coinbase.",
    website: "https://www.coinbase.com/cbeth",
    color: "#2151f5",
  },
  {
    addresses: {
      "1": "0xae78736Cd615f374D3085123A210448E74Fc6393",
    },
    symbol: "rETH",
    description: "Rocket Pool ETH",
    website: "https://rocketpool.net/",
    color: "#fda86a",
  },
  {
    addresses: {
      "1": "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
    },
    symbol: "LUSD",
    description: "LUSD Stablecoin",
    website: "https://www.liquity.org/",
    color: "#745ddf",
  },
  {
    addresses: {
      "1": "0xD533a949740bb3306d119CC777fa900bA034cd52",
    },
    symbol: "CRV",
    description: "Curve DAO Token",
    website: "https://curve.fi/",
    color: "#40649f",
  },
  {
    addresses: {
      "1": "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    },
    symbol: "MKR",
    description: "Maker",
    website: "https://makerdao.com/",
    color: "#1aab9b",
  },
  {
    addresses: {
      "1": "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    },
    symbol: "SNX",
    description: "Synthetix Network Token",
    website: "https://synthetix.io/",
    color: "#00d1ff",
  },
  {
    addresses: {
      "1": "0xba100000625a3754423978a60c9317c58a424e3D",
    },
    symbol: "BAL",
    description: "Balancer",
    website: "https://balancer.fi/",
    color: "#1e1e1e",
  },
  {
    addresses: {
      "1": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    },
    symbol: "UNI",
    description: "Uniswap",
    website: "https://uniswap.org/",
    color: "#ff007a",
  },
  {
    addresses: {
      "1": "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
    },
    symbol: "LDO",
    description: "Lido DAO Token",
    website: "https://lido.fi/",
    color: "#00a3ff",
  },
  {
    addresses: {
      "1": "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
    },
    symbol: "ENS",
    description: "Ethereum Name Service",
    website: "https://ens.domains/",
    color: "#5298ff",
  },
  {
    addresses: {
      "1": "0x111111111117dC0aa78b770fA6A738034120C302",
    },
    symbol: "1INCH",
    description: "1INCH Token",
    website: "https://1inch.io/",
    color: "#94a6c3",
  },
  {
    addresses: {
      "1": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
    },
    symbol: "FRAX",
    description: "Frax",
    website: "https://frax.finance/",
    color: "#000000",
  },
  {
    addresses: {
      "1": "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f",
    },
    symbol: "GHO",
    description: "Gho Token",
    website: "https://aave.com/",
    color: "#b6509e",
  },
  {
    addresses: {
      "1": "0xD33526068D116cE69F19A9ee46F0bd304F21A51f",
    },
    symbol: "RPL",
    description: "Rocket Pool Protocol",
    website: "https://rocketpool.net/",
    color: "#fda86a",
  },
  {
    addresses: {
      "1": "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
    },
    symbol: "sDAI",
    description: "Savings Dai",
    website: "https://makerdao.com/",
    color: "#f3ba42",
  },
  {
    addresses: {
      "1": "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
    },
    symbol: "STG",
    description: "StargateToken",
    website: "https://stargate.finance/",
    color: "#000000",
  },
  {
    addresses: {
      "1": "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
    },
    symbol: "KNC",
    description: "Kyber Network Crystal v2",
    website: "https://kyber.network/",
    color: "#31cb9e",
  },
  {
    addresses: {
      "1": "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
    },
    symbol: "FXS",
    description: "Frax Share",
    website: "https://frax.finance/",
    color: "#000000",
  },
  {
    addresses: {
      "1": "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
    },
    symbol: "crvUSD",
    description:
      "crvUSD is a collateralized-debt-position (CDP) stablecoin pegged to the US Dollar",
    website: "https://crvusd.curve.fi/",
    color: "#397949",
  },
  {
    addresses: {
      "1": "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8",
    },
    symbol: "PYUSD",
    description: "PayPal USD",
    website: "https://www.paypal.com/pyusd",
    color: "#0070ba",
  },
  {
    addresses: {
      "1": "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
    },
    symbol: "weETH",
    description: "Wrapped eETH",
    website: "https://www.ether.fi/",
    color: "#6a60e1",
  },
  {
    addresses: {
      "1": "0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38",
    },
    symbol: "osETH",
    description: "Staked ETH",
    website: "https://www.stakewise.io/",
    color: "#6b46c1",
  },
  {
    addresses: {
      "1": "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
    },
    symbol: "USDe",
    description: "USDe",
    website: "https://ethena.fi/",
    color: "#4f4f4f",
  },
  {
    addresses: {
      "1": "0xA35b1B31Ce002FBF2058D22F30f95D405200A15b",
    },
    symbol: "ETHx",
    description: "ETHx",
    website: "https://www.staderlabs.com/",
    color: "#72a8ff",
  },
  {
    addresses: {
      "1": "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
    },
    symbol: "sUSDe",
    description: "Staked USDe",
    website: "https://ethena.fi/",
    color: "#a8a8a8",
  },
  {
    addresses: {
      "1": "0x18084fbA666a33d37592fA2633fD49a74DD93a88",
    },
    symbol: "tBTC",
    description: "tBTC v2",
    website: "https://threshold.network/",
    color: "#000000",
  },
  {
    addresses: {
      "1": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
    },
    symbol: "cbBTC",
    description: "Coinbase Wrapped BTC",
    website: "https://www.coinbase.com/",
    color: "#0052ff",
  },
  {
    addresses: {
      "1": "0xdC035D45d973E3EC169d2276DDab16f1e407384F",
    },
    symbol: "USDS",
    description: "USDS Stablecoin",
    website: "https://makerdao.com/",
    color: "#f3ba42",
  },
  {
    addresses: {
      "1": "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
    },
    symbol: "rsETH",
    description: "rsETH",
    website: "https://www.kelpdao.xyz/",
    color: "#96f6c8",
  },
  {
    addresses: {
      "1": "0x8236a87084f8B84306f72007F36F2618A5634494",
    },
    symbol: "LBTC",
    description: "Lombard Staked Bitcoin",
    website: "https://lombard.finance/",
    color: "#ff6b35",
  },
  {
    addresses: {
      "1": "0x657e8C867D8B37dCC18fA4Caead9C45EB088C642",
    },
    symbol: "eBTC",
    description: "ether.fi BTC",
    website: "https://www.ether.fi/",
    color: "#6a60e1",
  },
  {
    addresses: {
      "1": "0x8292Bb45bf1Ee4d140127049757C2E0fF06317eD",
    },
    symbol: "RLUSD",
    description: "RLUSD",
    website: "https://ripple.com/",
    color: "#23292f",
  },
  {
    addresses: {
      "1": "0x50D2C7992b802Eef16c04FeADAB310f31866a545",
    },
    symbol: "PT-eUSDE-29MAY2025",
    description: "PT Ethereal eUSDE 29MAY2025",
    website: "https://www.pendle.finance/",
    color: "#91d8f7",
  },
  {
    addresses: {
      "1": "0x3b3fB9C57858EF816833dC91565EFcd85D96f634",
    },
    symbol: "PT-sUSDE-31JUL2025",
    description: "PT Ethena sUSDE 31JUL2025",
    website: "https://www.pendle.finance/",
    color: "#91d8f7",
  },
  {
    addresses: {
      "1": "0xC139190F447e929f090Edeb554D95AbB8b18aC1C",
    },
    symbol: "USDtb",
    description: "USDtb",
    website: "https://www.ethena.fi/",
    color: "#4f4f4f",
  },
  {
    addresses: {
      "1": "0x917459337CaAC939D41d7493B3999f571D20D667",
    },
    symbol: "PT-USDe-31JUL2025",
    description: "PT Ethena USDe 31JUL2025",
    website: "https://www.pendle.finance/",
    color: "#91d8f7",
  },
  {
    addresses: {
      "1": "0x14Bdc3A3AE09f5518b923b69489CBcAfB238e617",
    },
    symbol: "PT-eUSDE-14AUG2025",
    description: "PT Ethereal eUSDE 14AUG2025",
    website: "https://www.pendle.finance/",
    color: "#91d8f7",
  },
  {
    addresses: {
      "1": "0x90D2af7d622ca3141efA4d8f1F24d86E5974Cc8F",
    },
    symbol: "eUSDe",
    description: "Ethereal Pre-deposit Vault",
    website: "https://www.ethereal.finance/",
    color: "#8b5cf6",
  },
  {
    addresses: {
      "1": "0xC96dE26018A54D51c097160568752c4E3BD6C364",
    },
    symbol: "FBTC",
    description: "Fire Bitcoin",
    website: "https://www.fbtc.com/",
    color: "#ff6b35",
  },
  {
    addresses: {
      "1": "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c",
    },
    symbol: "EURC",
    description: "Euro Coin",
    website: "https://www.circle.com/",
    color: "#3b87df",
  },
  {
    addresses: {
      "1": "0x9F56094C450763769BA0EA9Fe2876070c0fD5F77",
    },
    symbol: "PT-sUSDE-25SEP2025",
    description: "PT Ethena sUSDE 25SEP2025",
    website: "https://www.pendle.finance/",
    color: "#91d8f7",
  },
  {
    addresses: {
      "1": "0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a",
    },
    symbol: "PT-USDe-25SEP2025",
    description: "PT Ethena USDe 25SEP2025",
    website: "https://www.pendle.finance/",
    color: "#91d8f7",
  },
  {
    addresses: {
      "1": "0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8",
    },
    symbol: "tETH",
    description: "Treehouse ETH",
    website: "https://www.treehouse.finance/",
    color: "#22c55e",
  },
  {
    addresses: {
      "1": "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
    },
    symbol: "ezETH",
    description: "Renzo Restaked ETH",
    website: "https://www.renzoprotocol.com/",
    color: "#84cc16",
  },
  {
    addresses: {
      "1": "0x68749665FF8D2d112Fa859AA293F07A622782F38",
    },
    symbol: "XAUt",
    description: "Tether Gold",
    website: "https://gold.tether.to/",
    color: "#d4af37",
  },
  {
    addresses: {
      "1": "0xe6A934089BBEe34F832060CE98848359883749B3",
    },
    symbol: "PT-sUSDE-27NOV2025",
    description: "PT Ethena sUSDE 27NOV2025",
    website: "https://www.pendle.finance/",
    color: "#91d8f7",
  },
  {
    addresses: {
      "1": "0x62C6E813b9589C3631Ba0Cdb013acdB8544038B7",
    },
    symbol: "PT-USDe-27NOV2025",
    description: "PT Ethena USDe 27NOV2025",
    website: "https://www.pendle.finance/",
    color: "#91d8f7",
  },
  {
    addresses: {
      "1": "0x1F84a51296691320478c98b8d77f2Bbd17D34350",
    },
    symbol: "PT-USDe-5FEB2026",
    description: "PT Ethena USDe 5FEB2026",
    website: "https://www.pendle.finance/",
    color: "#91d8f7",
  },
  {
    addresses: {
      "1": "0xE8483517077afa11A9B07f849cee2552f040d7b2",
    },
    symbol: "PT-sUSDE-5FEB2026",
    description: "PT Ethena sUSDE 5FEB2026",
    website: "https://www.pendle.finance/",
    color: "#91d8f7",
  },
  {
    addresses: {
      "43114": "0x9eE1963f05553eF838604Dd39403be21ceF26AA4",
    },
    symbol: "sUSDp",
    website: "https://parallel.best/",
    color: "#bc43c0ff",
    description: "Staked USDp",
  },
];

export const sonicWhitelistedAssets: {
  [addrLc: `0x${string}`]: number;
} = {
  // scUSD, stkscUSD: 6x (Boosted)
  ["0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE".toLowerCase()]: 6,
  // USDC.e: 5x (Boosted)
  ["0x29219dd400f2Bf60E5a23d13Be72B486D4038894".toLowerCase()]: 5,
  // scETH, stkscETH: 4x (Boosted)
  ["0x3bcE5CB273F0F148010BbEa2470e7b5df84C7812".toLowerCase()]: 4,
  // s, wS, stS, OS, wOS: 4x (Boosted)
  ["0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38".toLowerCase()]: 4,
  ["0xE5DA20F15420aD15DE0fa650600aFc998bbE3955".toLowerCase()]: 4,
  ["0xb1e25689D55734FD3ffFc939c4C3Eb52DFf8A794".toLowerCase()]: 4,
  ["0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38".toLowerCase()]: 4,
  ["0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1".toLowerCase()]: 4,
  // ONE, WETH: 2x (Boosted)
  ["0x50c42dEAcD8Fc9773493ED674b675bE577f2634b".toLowerCase()]: 2,
  // SolvBTC and SolvBTC.BBN: 2x (Boosted)
};

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
