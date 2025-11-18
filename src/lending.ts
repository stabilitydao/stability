export interface ILendingMarket {
  id: string;
  chainId: string;
  engine: LendingEngine;
  operator: LendingOperator;
  pool: `0x${string}`;
  protocolDataProvider: `0x${string}`;
  // AaveProtocolDataProvider: getAllReservesTokens, getAllATokens
  reserves: IReserve[];
  deployed: string;
  show: boolean;
  stableCoinIsolatedMarket?: boolean;
  deprecated?: boolean;
}

export const enum LendingEngine {
  AAVE_3_0_2 = "Aave v3.0.2",
  AAVE_3_0_2_CUSTOM = "Aave v3.0.2 custom",
  AAVE_3_5 = "Aave v3.5",
}

export const enum LendingOperator {
  STABILITY = "Stability",
  AAVE = "Aave",
}

export interface IReserve {
  asset: `0x${string}`;
  aToken: `0x${string}`;
  aTokenSymbol: string;
  oracle: `0x${string}`;
  oracleName: string;
  treasury: `0x${string}`;
  isBorrowable: boolean;
}

export const lendingMarkets: ILendingMarket[] = [
  {
    id: "Core Instance",
    chainId: "1",
    engine: LendingEngine.AAVE_3_5,
    operator: LendingOperator.AAVE,
    pool: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
    protocolDataProvider: "0x0a16f2FCC0D44FaE41cc54e079281D84A363bECD",
    reserves: [
      {
        // WETH
        asset: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        aToken: "0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8",
        aTokenSymbol: "aEthWETH",
        oracle: "0x5424384B256154046E9667dDFaaa5e550145215e",
        oracleName: "Chainlink",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
      },
      {
        // USDT
        asset: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        aToken: "0x23878914EFE38d27C4D67Ab83ed1b93A74D4086a",
        aTokenSymbol: "aEthUSDT",
        oracle: "0x260326c220E469358846b187eE53328303Efe19C",
        oracleName: "Chainlink",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
      },
      {
        // weETH
        asset: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
        aToken: "0xBdfa7b7893081B35Fb54027489e2Bc7A38275129",
        aTokenSymbol: "aEthweETH",
        oracle: "0x87625393534d5C102cADB66D37201dF24cc26d4C",
        oracleName: "Chainlink",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
      },
      {
        // wstETH
        asset: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
        aToken: "0x0B925eD163218f6662a35e0f0371Ac234f9E9371",
        aTokenSymbol: "aEthwstETH",
        oracle: "0xe1D97bF61901B075E9626c8A2340a7De385861Ef",
        oracleName: "Chainlink",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
      },
      {
        // USDC
        asset: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        aToken: "0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c",
        aTokenSymbol: "aEthUSDC",
        oracle: "0x3f73F03aa83B2A48ed27E964eD0fDb590332095B",
        oracleName: "Chainlink",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
      },
      {
        // WBTC
        asset: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        aToken: "0x5Ee5bf7ae06D1Be5997A1A72006FE6C607eC6DE8",
        aTokenSymbol: "aEthWBTC",
        oracle: "0xDaa4B74C6bAc4e25188e64ebc68DB5050b690cAc",
        oracleName: "Chainlink",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
      },
      // todo add other assets by `yarn update-lending`
    ],
    deployed: "Dec 29, 2022",
    show: false,
  },
  {
    id: "Vicuna",
    chainId: "146",
    engine: LendingEngine.AAVE_3_0_2_CUSTOM,
    operator: LendingOperator.STABILITY,
    pool: "0xaa1C02a83362BcE106dFf6eB65282fE8B97A1665",
    protocolDataProvider: "0xc67850eCd0EC9dB4c0fD65C1Ad43a53025e6d54D",
    reserves: [
      {
        // wS
        asset: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
        aToken: "0x9E581fC9181f99c3c4DAB344B91C55DaEb9413fe",
        aTokenSymbol: "vSonicWS",
        oracle: "0x9C720921F4d84230A5f9F369EdeA3d0a9141600F",
        oracleName: "API3 OEV",
        // AToken https://sonicscan.org/address/0x9E581fC9181f99c3c4DAB344B91C55DaEb9413fe#readProxyContract
        // RESERVE_TREASURY_ADDRESS
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
      },
      {
        // USDC
        asset: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
        aToken: "0xF224CB039F2B5909197c019b1972E62d7fdCdA0f",
        aTokenSymbol: "vSonicUSDC.E",
        oracle: "0x3d4c5A1805bf9B95399a69264565B493834F0048",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
      },
      {
        // scUSD
        asset: "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
        aToken: "0xF9f65F8c6566d71C5966a0a1852cEd1Eb978bafb",
        aTokenSymbol: "vSonicSCUSD",
        oracle: "0x3d4c5A1805bf9B95399a69264565B493834F0048",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
      },
      {
        // stS
        asset: "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955",
        aToken: "0x4C8D17317884B53bEfE5abeF884818b2fbe0A2dD",
        aTokenSymbol: "vSonicstS",
        oracle: "0x8634DC1C5435F63906BAd5883B28b95f96714493",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
      },
      {
        // WETH
        asset: "0x50c42dEAcD8Fc9773493ED674b675bE577f2634b",
        aToken: "0xA1241Ce1fBB74Ff37D5c73dcB84326766C3852C0",
        aTokenSymbol: "vSonicWETH",
        oracle: "0xAfea5fA66c1A32cF51401E761E7CAd88fDd69318",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
      },
      {
        // wOS
        asset: "0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1",
        aToken: "0x9BF96Dee5b4161c5cA3DDDf2D19cc677B6832644",
        aTokenSymbol: "vSonicwOS",
        oracle: "0x691acC2F7b17897677C86F7085f62de025F4E8D8",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
      },
      {
        // USDT
        asset: "0x6047828dc181963ba44974801FF68e538dA5eaF9",
        aToken: "0xb401dc6D04fd6D3993345dE2858065ddC9a36b79",
        aTokenSymbol: "vSonicUSDT.E",
        oracle: "0xe9A35b3A71033497983f98df49Cd61c9665cdCF4",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
      },
    ],
    deployed: "Feb 6, 2025",
    show: true,
  },
  {
    id: "Brunch gen2",
    chainId: "146",
    engine: LendingEngine.AAVE_3_0_2,
    operator: LendingOperator.STABILITY,
    pool: "0x6D8Aa37DfAa98d2a14da39cfeD36975F97fc3f85",
    protocolDataProvider: "0xb102Cc0cb1357C339D1eFd611De4feE2e0E82448",
    reserves: [
      {
        // Staked bUSD
        asset: "0x451812019238785086CFAC408D8A64f06898f6f5",
        aToken: "0xeB9bB589C12A0433B274760E657D549a6973C787",
        aTokenSymbol: "asiStaked bUSD",
        oracle: "0xD58e2B148B59E81f51aD66E26df944df05247B14",
        oracleName: "Brunch StakedERC20PriceOracle",
        treasury: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
        isBorrowable: false,
      },
      {
        // USDC
        asset: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
        aToken: "0x958d930E61bdaebbBc0270D88FdBAEE9A13Dc6fd",
        aTokenSymbol: "asiUSDC",
        oracle: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
        oracleName: "ChainLink",
        treasury: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
        isBorrowable: true,
      },
    ],
    deployed: "Sep 5, 2025",
    show: true,
    deprecated: true,
  },
  {
    id: "wmetaUSD gen2",
    chainId: "146",
    engine: LendingEngine.AAVE_3_0_2,
    operator: LendingOperator.STABILITY,
    pool: "0x909ba6aC1A9D34fE97Cb459C2CA9b6Ff986676F7",
    protocolDataProvider: "0x253A04ca6efef2e25f801153852B02bF74E1f749",
    reserves: [
      {
        // wmetaUSD
        asset: "0xAaAaaAAac311D0572Bffb4772fe985A750E88805",
        aToken: "0xFC4A805Db8Dc217c468155cc5814070A15af8dc4",
        aTokenSymbol: "asiwmetaUSD",
        oracle: "0x440A6bf579069Fa4e7C3C9fe634B34D2C78C584c",
        oracleName: "Stability WrappedMetaVaultOracle",
        treasury: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
        isBorrowable: false,
      },
      {
        // USDC
        asset: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
        aToken: "0xb90a84F285aE8D3c0ceD37deD6Fc0f943f7279b7",
        aTokenSymbol: "asiUSDC",
        oracle: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
        oracleName: "ChainLink",
        treasury: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
        isBorrowable: true,
      },
    ],
    deployed: "Sep 19, 2025",
    show: true,
    stableCoinIsolatedMarket: true,
  },
  {
    id: "STBL",
    chainId: "146",
    engine: LendingEngine.AAVE_3_0_2,
    operator: LendingOperator.STABILITY,
    pool: "0xb0A06303085aB2F73212C8846CA5388Da5697c31",
    protocolDataProvider: "0xB263ecA021e1D265D7e68842bc57e656cb88FE03",
    reserves: [
      {
        // STBL
        asset: "0x78a76316F66224CBaCA6e70acB24D5ee5b2Bd2c7",
        aToken: "0x00886bC6a12d8D5ad0ef51e041a8AB37A0E59251",
        aTokenSymbol: "asiSTBL",
        oracle: "0x3c45Fdad0519Bce8D011552F8B11dD5Fa651200C",
        oracleName: "Stability",
        treasury: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
        isBorrowable: false,
      },
      {
        // USDC
        asset: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
        aToken: "0x46b2E96725F03873Cb586a7f84c22545F2835F31",
        aTokenSymbol: "asiUSDC",
        oracle: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
        oracleName: "ChainLink",
        treasury: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
        isBorrowable: true,
      },
    ],
    deployed: "Oct 31, 2025",
    show: true,
  },
];
