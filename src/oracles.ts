export type AssetOracle = {
  address: `0x${string}`;
  adapter: string;
  provider: string;
  url?: string;
};

export const assetOracles: {
  [chainId: string]: { [assetAddress: `0x${string}`]: AssetOracle };
} = {
  "137": {
    // USDC.e
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
      address: "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7",
      adapter: "ChainlinkAdapter",
      provider: "Chainlink",
      url: "https://data.chain.link/feeds/polygon/mainnet/usdc-usd",
    },
    // USDT
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
      address: "0x0A6513e40db6EB1b165753AD52E80663aeA50545",
      adapter: "ChainlinkAdapter",
      provider: "Chainlink",
      url: "https://data.chain.link/feeds/polygon/mainnet/usdt-usd",
    },
    // DAI
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
      address: "0x4746DeC9e833A82EC7C2C1356372CcF2cfcD2F3D",
      adapter: "ChainlinkAdapter",
      provider: "Chainlink",
      url: "https://data.chain.link/feeds/polygon/mainnet/dai-usd",
    },
  },
  "146": {
    // USDC.e
    "0x29219dd400f2Bf60E5a23d13Be72B486D4038894": {
      address: "0xD3C586Eec1C6C3eC41D276a23944dea080eDCf7f",
      adapter: "Api3Adapter",
      provider: "API3",
      url: "https://market.api3.org/sonic/usdc-usd",
    },
    // scUSD
    "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE": {
      address: "0xC55C8c98Bd7359C587Cd9a5D999ab4720608F18C",
      adapter: "ChainlinkAdapter",
      provider: "Pyth",
      url: "https://www.pyth.network/price-feeds/crypto-scusd-usd?range=LIVE&cluster=pythtest-crosschain",
    },
  },
  "8453": {
    // USDC
    "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913": {
      address: "0x7e860098F58bBFC8648a4311b374B1D669a2bc6B",
      adapter: "ChainlinkAdapter",
      provider: "Chainlink",
      url: "https://data.chain.link/feeds/base/base/usdc-usd",
    },
    // WETH
    "0x4200000000000000000000000000000000000006": {
      address: "0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70",
      adapter: "ChainlinkAdapter",
      provider: "Chainlink",
      url: "https://data.chain.link/feeds/base/base/eth-usd",
    },
    // cbETH
    "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22": {
      address: "0xd7818272B9e248357d13057AAb0B417aF31E817d",
      adapter: "ChainlinkAdapter",
      provider: "Chainlink",
      url: "https://data.chain.link/feeds/base/base/cbeth-usd",
    },
  },
  "111188": {
    // WREETH-USDC
    "0x90c6E93849E06EC7478ba24522329d14A5954Df4": {
      address: "0xA2c62937987815A9Bb9d3b2F4580e629F9FA3Bc8",
      adapter: "DiaAdapter",
      provider: "Dia",
    },
  },
};

export const vaultOracles: {
  [chainId: string]: { [vaultAddress: `0x${string}`]: `0x${string}` };
} = {
  "146": {
    // U-scU-ISF-U
    "0xb773B791F3baDB3b28BC7A2da18E2a012b9116c2":
      "0x34f8918e117c28842f044e5fe262b9dbc12825a1",
    // U-scU-ISF-s
    "0x8C64D2a1960C7B4b22Dbb367D2D212A21E75b942":
      "0x92c3786c70f03a80779de82027764daadff2187d",
    // U-scU-SF
    "0xDe708055728F53d557608b13691dAeE5a921B5AF":
      "0x5210006411DDc8336Bb9D1850E98aAebcbedCA8c",
  },
};
