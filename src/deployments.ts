export type Deployment = {
  core: {
    platform: `0x${string}`;
    factory: `0x${string}`;
    priceReader: `0x${string}`;
    swapper: `0x${string}`;
    hardWorker: `0x${string}`;
    vaultManager: `0x${string}`;
    strategyLogic: `0x${string}`;
    zap: `0x${string}`;
    metaVaultFactory?: `0x${string}`;
    vaultPriceOracle?: `0x${string}`;
  };
  markets?: {
    poolDataProvider: `0x${string}`;
    poolAddresses: {
      [market: string]: `0x${string}`;
    };
  };
  periphery: {
    frontend: `0x${string}`;
    rebalanceHelper?: `0x${string}`;
  };
  tokenomics: {
    merkleDistributor?: `0x${string}`;
    gem1?: `0x${string}`;
    xSTBL?: `0x${string}`;
    xStaking?: `0x${string}`;
    revenueRouter?: `0x${string}`;
    recovery?: `0x${string}`;
  };
  subgraph: string;
  ammAdapters?: { [id: string]: `0x${string}` };
  metaVaults?: {
    address: `0x${string}`;
    symbol: string;
    wrapper: `0x${string}`;
    primary?: boolean;
    type: string;
  }[];
};

export const deployments: { [chainId: string]: Deployment } = {
  "137": {
    core: {
      platform: "0xb2a0737ef27b5Cc474D24c779af612159b1c3e60",
      factory: "0xa14EaAE76890595B3C7ea308dAEBB93863480EAD",
      priceReader: "0xcCef9C4459d73F9A997ff50AC34364555A3274Aa",
      swapper: "0xD84E894A6646C7407b8CD1273Ea1EFc53A423762",
      hardWorker: "0x6DBFfd2846d4a556349a3bc53297700d89a94034",
      vaultManager: "0x6008b366058B42792A2497972A3312274DC5e1A8",
      strategyLogic: "0xD16b60E39284190D9201f0eaD42c4674C310e905",
      zap: "0xEA3fABD8cC14705d7E66D1833a547D31882aEA9b",
    },
    periphery: {
      frontend: "0xa9f5593e6a809a24fb41d1d854a577a8bf507e28",
    },
    tokenomics: {},
    subgraph:
      "https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/7WgM7jRzoW7yiJCE8DMEwCxtN3KLisYrVVShuAL2Kz4N",
  },
  "146": {
    core: {
      platform: "0x4Aca671A420eEB58ecafE83700686a2AD06b20D8",
      factory: "0xc184a3ecca684f2621c903a7943d85fa42f56671",
      priceReader: "0x422025182dd83a610bfa8b20550dcccdf94dc549",
      swapper: "0xe52fcf607a8328106723804de1ef65da512771be",
      hardWorker: "0x635b1f7dd7d0172533ba9fe5cfe2d83d9848f701",
      vaultManager: "0x589a504f2ee9d054b483c700fa814863d639381e",
      strategyLogic: "0xe0e71b484bb20e37d18ab51fb60c32dec778478a",
      zap: "0x029dfd1a79e0ad9305d773fb8f3c01d8ef9b913d",
      metaVaultFactory: "0xa190302880acF9deCC4447363640f589000EF601",
    },
    periphery: {
      frontend: "0x15487495cce9210795f9C2E0e1A7238E336dFc32",
      rebalanceHelper: "0x659119200de09F266f3256A70986713Ca1ee04D8",
    },
    markets: {
      poolDataProvider: "0xAC2b7EADb55858700B8567aB5Ca7863101508304",
      poolAddresses: {
        Main: "0x24835e3Da1B402f8037e3ce6dE4a701677fa1b54",
        Brunch: "0xC0512947845cCe3a32e58Efc3B4526Dd1D11F6af",
        "Stable Jack": "0x3E3aAB589Ba86fB8f40CEB69332bb44E9B1411D4",
        Stream: "0xCc31959682Ad726A9bcde9bbD41c89f36c03E743",
        "Brunch gen2": "0x6D8Aa37DfAa98d2a14da39cfeD36975F97fc3f85",
        "wmetaUSD gen2": "0x909ba6aC1A9D34fE97Cb459C2CA9b6Ff986676F7",
      },
    },
    tokenomics: {
      merkleDistributor: "0x0391aBDCFaB86947d93f9dd032955733B639416b",
      gem1: "0x9A08cD5691E009cC72E2A4d8e7F2e6EE14E96d6d",
      xSTBL: "0x902215dd96a291b256a3aef6c4dee62d2a9b80cb",
      xStaking: "0x17a7cf838a7c91de47552a9f65822b547f9a6997",
      revenueRouter: "0x23b8cc22c4c82545f4b451b11e2f17747a730810",
      recovery: "0x940535bcbdee9ccf04a3b5696b018f9e6bdfc926",
    },
    subgraph:
      "https://api.goldsky.com/api/public/project_cm2v16o5ct0ql01vr3m5o0vt2/subgraphs/stability-sonic/0.0.55/gn",
    ammAdapters: {
      Solidly: "0xe3374041f173ffcb0026a82c6eef94409f713cf9",
      AlgebraV4: "0xcb2dfcaec4F1a4c61c5D09100482109574E6b8C7",
      UniswapV3: "0xAf95468B1a624605bbFb862B0FB6e9C73Ad847b8",
      ERC4626: "0xB7192f4b8f741E21b9022D2F8Fd19Ca8c94E7774",
      BalancerV3Stable: "0xcd85425fF6C07cF09Ca6Ac8F683E8164F27C143c",
      BalancerWeighted: "0x7D6641cf68E5169c11d91266D3E410130dE70B9E",
      Pendle: "0x9fcE12c813fC2280A800e8683b918de121B2437B",
    },
    metaVaults: [
      {
        address: "0x1111111199558661Bf7Ff27b4F1623dC6b91Aa3e",
        symbol: "metaUSD",
        type: "MetaVault",
        wrapper: "0xAaAaaAAac311D0572Bffb4772fe985A750E88805",
        primary: true,
      },
      {
        address: "0x4444444420D9De54d69b3997b7D6A31d2BF63F32",
        symbol: "metaS",
        type: "MetaVault",
        wrapper: "0xbbbbbbBBbd0aE69510cE374A86749f8276647B19",
      },
      {
        address: "0x22222222780038f8817b3dE825a070225e6d9874",
        symbol: "metaUSDC",
        type: "MultiVault",
        wrapper: "0xEEEEEEE6d95E55A468D32FeB5d6648754d10A967",
      },
      {
        address: "0x33333333C480194b5B651987b7D00B20dDCbd287",
        symbol: "metascUSD",
        type: "MultiVault",
        wrapper: "0xccccCCcca9FC69a2b32408730011EdB3205A93A1",
      },
      {
        address: "0x555555554776B14B30597d1032E48f9e16db22A4",
        symbol: "metawS",
        type: "MultiVault",
        wrapper: "0xffFFFFFf2fcBeFAe12F1372C56edC769BD411685",
      },
    ],
  },
  "8453": {
    core: {
      platform: "0x7eAeE5CfF17F7765d89F4A46b484256929C62312",
      factory: "0xe01E62dAe952501e884624423132e50E7B77Ba3c",
      priceReader: "0x41408b3e0f279634E3cd59E2D76EF6b149d6D418",
      swapper: "0x67e983b3B9f55A1eaA259D58E425e418f3900872",
      hardWorker: "0x2FfeB278BB1Fb9f3B48619AbaBe955526942ac8c",
      vaultManager: "0x2ba8C6A519CEDB6d1C35cEb14E8642625E91F77C",
      strategyLogic: "0xbe491A023eA61B4b027ed0f2f2400748113797b1",
      zap: "0x00700766b0cA613D719A01eea6234eeE77592e15",
    },
    periphery: {
      frontend: "0x995c3bdee2830c7f96d4caa0c36f7b7b8ec60127",
    },
    tokenomics: {},
    subgraph:
      "https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/FRK5vEJXX9w5Pt3nqeqGRX5s7k29AWCb7aXTfDwT6S8j",
  },
  "111188": {
    core: {
      platform: "0xB7838d447deece2a9A5794De0f342B47d0c1B9DC",
      factory: "0x47331996c42DEF8BD9808888bEeeC945b3424D25",
      priceReader: "0x6C07D2f01F7640Cb24048a54A85aDeCae12c2408",
      swapper: "0xba2C4A1FD42118b48f68305Ba14977FCf82f6C20",
      hardWorker: "0x7512d16f913472642A4DBAB40ECfE13080DA0DEa",
      vaultManager: "0x7146efaab12A083b9826c66162062c21eC70fe3c",
      strategyLogic: "0x8f59BB791Da8fb1E2FedbDeAc576F0f622479059",
      zap: "0x240d026C11A97591118A534133fEeFEd59B90fc5",
    },
    periphery: {
      frontend: "0xfd1361E0565b01B85d3c1511FEf7545D6A84d93a",
    },
    tokenomics: {},
    subgraph:
      "https://api.goldsky.com/api/public/project_cm2v16o5ct0ql01vr3m5o0vt2/subgraphs/stability-subgraph/0.0.13/gn",
  },
  "43114": {
    core: {
      platform: "0x72b931a12aacda6729b4f8f76454855cb5195941",
      factory: "0xe9d2fcad6b691a1642587a2b61886a173632ed00",
      metaVaultFactory: "0x2fa6cc5e1dc2f6dd8806a3969f2e7fcbf5f75e89",
      hardWorker: "0x78e6ff0546106a6ed20085ff6d75df800b8a1cf1",
      swapper: "0x16549a43c566cdc648a9aaea6bed1d860b7b586a",
      priceReader: "0x0a4e9791802180dca35772448264c5bdf957fd13",
      strategyLogic: "0xc1a02058f23f23eccf68c304afb2cf7cba70f79a",
      vaultManager: "0x9d718c2a305caf6ffbd96aaadc3808fc488417c1",
      zap: "0x42f1eabb3d1a99e2db3372815de9c3c5be9f853f",
      vaultPriceOracle: "0xa73edff514c66f1a6b443014204dbe92c3ef5671",
    },
    periphery: {
      frontend: "0x7D41c82384019cc7014d338E18d9D6a33dDEA5BA",
    },
    subgraph:
      "https://api.goldsky.com/api/public/project_cm2v16o5ct0ql01vr3m5o0vt2/subgraphs/stability-avalanche/0.0.57/gn",
    tokenomics: {},
    ammAdapters: {
      AlgebraV4: "0x80de8bcd77d880a9c819d80e86a069f63b5c3af2",
      UniswapV3: "0x348a11e8562f356aabc54edb72017a00120f8ff4",
    },
    metaVaults: [
      {
        address: "0x22226a3c59c52f6768cd44b97B88167217c12222",
        symbol: "metaUSDC",
        type: "MultiVault",
        wrapper: "0xcCCCaBc3370633AD166669b27A71eB3aE4bFCcCc",
      },
    ],
  },
};
