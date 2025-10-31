export interface ILendingMarket {
  id: string;
  chainId: string;
  engine: LendingEngine;
  pool: `0x${string}`;
  protocolDataProvider: `0x${string}`;
  // AaveProtocolDataProvider: getAllReservesTokens, getAllATokens
  reserves: IReserve[];
  deployed: string;
  deprecated?: boolean;
}

export const enum LendingEngine {
  AAVE_3_0_2 = "Aave 3.0.2",
  AAVE_3_0_2_CUSTOM = "Aave 3.0.2 custom",
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
    id: "Main",
    chainId: "146",
    engine: LendingEngine.AAVE_3_0_2_CUSTOM,
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
  },
  {
    id: "Brunch gen2",
    chainId: "146",
    engine: LendingEngine.AAVE_3_0_2,
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
    deprecated: true,
  },
  {
    id: "wmetaUSD gen2",
    chainId: "146",
    engine: LendingEngine.AAVE_3_0_2,
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
  },
  {
    id: "STBL",
    chainId: "146",
    engine: LendingEngine.AAVE_3_0_2,
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
  },
];
