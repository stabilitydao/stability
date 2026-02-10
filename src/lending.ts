export interface ILendingMarket {
  id: string;
  chainId: string;
  engine: LendingEngine;
  operator: LendingOperator;
  pool: `0x${string}`;
  protocolDataProvider: `0x${string}`;
  // AaveProtocolDataProvider: getAllReservesTokens, getAllATokens
  reserves: IReserve[];
  uiPoolDataProvider: `0x${string}`;
  deployed: string;
  show: boolean;
  stableCoinIsolatedMarket?: boolean;
  deprecated?: boolean;
  eModes?: {
    id: number;
    label: string;
    collateral: `0x${string}`[];
    borrowable: `0x${string}`[];
    ltv: number;
    lt: number;
  }[];
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
  ltv?: number;
  lt?: number;
}

/*
 Aave deployments: https://aave.com/docs/resources/addresses
*/

export const lendingMarkets: ILendingMarket[] = [
  {
    id: "Core Instance",
    chainId: "1",
    engine: LendingEngine.AAVE_3_5,
    operator: LendingOperator.AAVE,
    pool: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
    protocolDataProvider: "0x0a16f2FCC0D44FaE41cc54e079281D84A363bECD",
    uiPoolDataProvider: "0x3f78bbd206e4d3c504eb854232eda7e47e9fd8fc",
    reserves: [
      // aEthWETH
      {
        asset: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        aToken: "0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8",
        aTokenSymbol: "aEthWETH",
        oracle: "0x5424384B256154046E9667dDFaaa5e550145215e",
        oracleName: "Chainlink",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 95,
        ltv: 93,
      },
      // aEthwstETH
      {
        asset: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
        aToken: "0x0B925eD163218f6662a35e0f0371Ac234f9E9371",
        aTokenSymbol: "aEthwstETH",
        oracle: "0xe1D97bF61901B075E9626c8A2340a7De385861Ef",
        oracleName: "Chainlink",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 95,
        ltv: 93,
      },
      // aEthWBTC
      {
        asset: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        aToken: "0x5Ee5bf7ae06D1Be5997A1A72006FE6C607eC6DE8",
        aTokenSymbol: "aEthWBTC",
        oracle: "0xDaa4B74C6bAc4e25188e64ebc68DB5050b690cAc",
        oracleName: "Chainlink",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 78,
        ltv: 73,
      },
      // aEthUSDC
      {
        asset: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        aToken: "0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c",
        aTokenSymbol: "aEthUSDC",
        oracle: "0x3f73F03aa83B2A48ed27E964eD0fDb590332095B",
        oracleName: "Chainlink",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 78,
        ltv: 75,
      },
      // DAI
      {
        asset: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        aToken: "0x018008bfb33d285247A21d44E50697654f754e63",
        aTokenSymbol: "DAI",
        oracle: "0x5c66322CA59bB61e867B28195576DbD8dA4b08dE",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 77,
        ltv: 0,
      },
      // LINK
      {
        asset: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
        aToken: "0x5E8C8A7243651DB1384C0dDfDbE39761E8e7E51a",
        aTokenSymbol: "LINK",
        oracle: "0xC7e9b623ed51F033b32AE7f1282b1AD62C28C183",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 71,
        ltv: 66,
      },
      // AAVE
      {
        asset: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
        aToken: "0xA700b4eB416Be35b2911fd5Dee80678ff64fF6C9",
        aTokenSymbol: "AAVE",
        oracle: "0xF02C1e2A3B77c1cacC72f72B44f7d0a4c62e4a85",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 76,
        ltv: 69,
      },
      // cbETH
      {
        asset: "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
        aToken: "0x977b6fc5dE62598B08C85AC8Cf2b745874E8b78c",
        aTokenSymbol: "cbETH",
        oracle: "0x889399C34461b25d70d43931e6cE9E40280E617B",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 95,
        ltv: 93,
      },
      // aEthUSDT
      {
        asset: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        aToken: "0x23878914EFE38d27C4D67Ab83ed1b93A74D4086a",
        aTokenSymbol: "aEthUSDT",
        oracle: "0x260326c220E469358846b187eE53328303Efe19C",
        oracleName: "Chainlink",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 78,
        ltv: 75,
      },
      // rETH
      {
        asset: "0xae78736Cd615f374D3085123A210448E74Fc6393",
        aToken: "0xCc9EE9483f662091a1de4795249E24aC0aC2630f",
        aTokenSymbol: "rETH",
        oracle: "0x6929706c42d637DF5Ebf7F0BcfF2aF47F84Ea69D",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 95,
        ltv: 93,
      },
      // LUSD
      {
        asset: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
        aToken: "0x3Fe6a295459FAe07DF8A0ceCC36F37160FE86AA9",
        aTokenSymbol: "LUSD",
        oracle: "0xEbb721daf3DA9f1b3dcEc590cDf648137172d7CB",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 77,
        ltv: 0,
      },
      // CRV
      {
        asset: "0xD533a949740bb3306d119CC777fa900bA034cd52",
        aToken: "0x7B95Ec873268a6BFC6427e7a28e396Db9D0ebc65",
        aTokenSymbol: "CRV",
        oracle: "0xCd627aA160A6fA45Eb793D19Ef54f5062F20f33f",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 41,
        ltv: 0,
      },
      // MKR
      {
        asset: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
        aToken: "0x8A458A9dc9048e005d22849F470891b840296619",
        aTokenSymbol: "MKR",
        oracle: "0xec1D1B3b0443256cc3860e24a46F108e699484Aa",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 70,
        ltv: 0,
      },
      // SNX
      {
        asset: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
        aToken: "0xC7B4c17861357B8ABB91F25581E7263E08DCB59c",
        aTokenSymbol: "SNX",
        oracle: "0xDC3EA94CD0AC27d9A86C180091e7f78C683d3699",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 65,
        ltv: 0,
      },
      // BAL
      {
        asset: "0xba100000625a3754423978a60c9317c58a424e3D",
        aToken: "0x2516E7B3F76294e03C42AA4c5b5b4DCE9C436fB8",
        aTokenSymbol: "BAL",
        oracle: "0xdF2917806E30300537aEB49A7663062F4d1F2b5F",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 59,
        ltv: 0,
      },
      // UNI
      {
        asset: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        aToken: "0xF6D2224916DDFbbab6e6bd0D1B7034f4Ae0CaB18",
        aTokenSymbol: "UNI",
        oracle: "0x553303d460EE0afB37EdFf9bE42922D8FF63220e",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 74,
        ltv: 0,
      },
      // LDO
      {
        asset: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
        aToken: "0x9A44fd41566876A39655f74971a3A6eA0a17a454",
        aTokenSymbol: "LDO",
        oracle: "0xb01e6C9af83879B8e06a092f0DD94309c0D497E4",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 50,
        ltv: 0,
      },
      // ENS
      {
        asset: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
        aToken: "0x545bD6c032eFdde65A377A6719DEF2796C8E0f2e",
        aTokenSymbol: "ENS",
        oracle: "0x5C00128d4d1c2F4f652C267d7bcdD7aC99C16E16",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 49,
        ltv: 0,
      },
      // 1INCH
      {
        asset: "0x111111111117dC0aa78b770fA6A738034120C302",
        aToken: "0x71Aef7b30728b9BB371578f36c5A1f1502a5723e",
        aTokenSymbol: "1INCH",
        oracle: "0xc929ad75B72593967DE83E7F7Cda0493458261D9",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 67,
        ltv: 0,
      },
      // FRAX
      {
        asset: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
        aToken: "0xd4e245848d6E1220DBE62e155d89fa327E43CB06",
        aTokenSymbol: "FRAX",
        oracle: "0xeF50f8DC65402c3019586bc8725fCD0b99B8AAd7",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 72,
        ltv: 0,
      },
      // GHO
      {
        asset: "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f",
        aToken: "0x00907f9921424583e7ffBfEdf84F92B7B2Be4977",
        aTokenSymbol: "GHO",
        oracle: "0xD110cac5d8682A3b045D5524a9903E031d70FCCd",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 0,
        ltv: 0,
      },
      // RPL
      {
        asset: "0xD33526068D116cE69F19A9ee46F0bd304F21A51f",
        aToken: "0xB76CF92076adBF1D9C39294FA8e7A67579FDe357",
        aTokenSymbol: "RPL",
        oracle: "0x4E155eD98aFE9034b7A5962f6C84c86d869daA9d",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 0,
        ltv: 0,
      },
      // sDAI
      {
        asset: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
        aToken: "0x4C612E3B15b96Ff9A6faED838F8d07d479a8dD4c",
        aTokenSymbol: "sDAI",
        oracle: "0xf83B85205241c3BCCA0a09D32FaE65c16e0CF236",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 78,
        ltv: 75,
      },
      // STG
      {
        asset: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
        aToken: "0x1bA9843bD4327c6c77011406dE5fA8749F7E3479",
        aTokenSymbol: "STG",
        oracle: "0x7A9f34a0Aa917D438e9b6E630067062B7F8f6f3d",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 37,
        ltv: 0,
      },
      // KNC
      {
        asset: "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
        aToken: "0x5b502e3796385E1e9755d7043B9C945C3aCCeC9C",
        aTokenSymbol: "KNC",
        oracle: "0xf8fF43E991A81e6eC886a3D281A2C6cC19aE70Fc",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 37,
        ltv: 0,
      },
      // FXS
      {
        asset: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
        aToken: "0x82F9c5ad306BBa1AD0De49bB5FA6F01bf61085ef",
        aTokenSymbol: "FXS",
        oracle: "0x6Ebc52C8C1089be9eB3945C4350B68B8E4C2233f",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 42,
        ltv: 0,
      },
      // crvUSD
      {
        asset: "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
        aToken: "0xb82fa9f31612989525992FCfBB09AB22Eff5c85A",
        aTokenSymbol: "crvUSD",
        oracle: "0x9Dc30dc58c72f5B669aEa01d02A2e4da194eE893",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 0,
        ltv: 0,
      },
      // PYUSD
      {
        asset: "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8",
        aToken: "0x0C0d01AbF3e6aDfcA0989eBbA9d6e85dD58EaB1E",
        aTokenSymbol: "PYUSD",
        oracle: "0x36964C0579D02E0a5AaAb89E24Cf8d7CDF3549EE",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 78,
        ltv: 75,
      },
      // aEthweETH
      {
        asset: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
        aToken: "0xBdfa7b7893081B35Fb54027489e2Bc7A38275129",
        aTokenSymbol: "aEthweETH",
        oracle: "0x87625393534d5C102cADB66D37201dF24cc26d4C",
        oracleName: "Chainlink",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 95,
        ltv: 93,
      },
      // osETH
      {
        asset: "0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38",
        aToken: "0x927709711794F3De5DdBF1D176bEE2D55Ba13c21",
        aTokenSymbol: "osETH",
        oracle: "0x2b86D519eF34f8Adfc9349CDeA17c09Aa9dB60E2",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 95,
        ltv: 93,
      },
      // USDe
      {
        asset: "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
        aToken: "0x4F5923Fc5FD4a93352581b38B7cD26943012DECF",
        aTokenSymbol: "USDe",
        oracle: "0xC26D4a1c46d884cfF6dE9800B6aE7A8Cf48B4Ff8",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 92,
        ltv: 90,
      },
      // ETHx
      {
        asset: "0xA35b1B31Ce002FBF2058D22F30f95D405200A15b",
        aToken: "0x1c0E06a0b1A4c160c17545FF2A951bfcA57C0002",
        aTokenSymbol: "ETHx",
        oracle: "0xd7b163B671f8cE9379DF8Ff7F75fA72Ccec1841c",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 95,
        ltv: 93,
      },
      // sUSDe
      {
        asset: "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
        aToken: "0x4579a27aF00A62C0EB156349f31B345c08386419",
        aTokenSymbol: "sUSDe",
        oracle: "0x42bc86f2f08419280a99d8fbEa4672e7c30a86ec",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 92,
        ltv: 90,
      },
      // tBTC
      {
        asset: "0x18084fbA666a33d37592fA2633fD49a74DD93a88",
        aToken: "0x10Ac93971cdb1F5c778144084242374473c350Da",
        aTokenSymbol: "tBTC",
        oracle: "0xb41E773f507F7a7EA890b1afB7d2b660c30C8B0A",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 78,
        ltv: 73,
      },
      // cbBTC
      {
        asset: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
        aToken: "0x5c647cE0Ae10658ec44FA4E11A51c96e94efd1Dd",
        aTokenSymbol: "cbBTC",
        oracle: "0xb41E773f507F7a7EA890b1afB7d2b660c30C8B0A",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 78,
        ltv: 73,
      },
      // USDS
      {
        asset: "0xdC035D45d973E3EC169d2276DDab16f1e407384F",
        aToken: "0x32a6268f9Ba3642Dda7892aDd74f1D34469A4259",
        aTokenSymbol: "USDS",
        oracle: "0x94C7FD62fd0506e71d8142E9D36687fC72A86B02",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 78,
        ltv: 0,
      },
      // rsETH
      {
        asset: "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
        aToken: "0x2D62109243b87C4bA3EE7bA1D91B0dD0A074d7b1",
        aTokenSymbol: "rsETH",
        oracle: "0x7292C95A5f6A501a9c4B34f6393e221F2A0139c3",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 95,
        ltv: 93,
      },
      // LBTC
      {
        asset: "0x8236a87084f8B84306f72007F36F2618A5634494",
        aToken: "0x65906988ADEe75306021C417a1A3458040239602",
        aTokenSymbol: "LBTC",
        oracle: "0xf8c04B50499872A5B5137219DEc0F791f7f620D0",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 86,
        ltv: 84,
      },
      // eBTC
      {
        asset: "0x657e8C867D8B37dCC18fA4Caead9C45EB088C642",
        aToken: "0x5fefd7069a7D91d01f269DADE14526CCF3487810",
        aTokenSymbol: "eBTC",
        oracle: "0x03bB418e89B75407585f8198178f253DA3216218",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 85,
        ltv: 83,
      },
      // RLUSD
      {
        asset: "0x8292Bb45bf1Ee4d140127049757C2E0fF06317eD",
        aToken: "0xFa82580c16A31D0c1bC632A36F82e83EfEF3Eec0",
        aTokenSymbol: "RLUSD",
        oracle: "0xf0eaC18E908B34770FDEe46d069c846bDa866759",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 0,
        ltv: 0,
      },
      // PT-eUSDE-29MAY2025
      {
        asset: "0x50D2C7992b802Eef16c04FeADAB310f31866a545",
        aToken: "0x4B0821e768Ed9039a70eD1E80E15E76a5bE5Df5F",
        aTokenSymbol: "PT-eUSDE-29MAY2025",
        oracle: "0x5292AB3292D076271f853Ed8e05e61cc02F0A2C6",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 93,
        ltv: 91,
      },
      // PT-sUSDE-31JUL2025
      {
        asset: "0x3b3fB9C57858EF816833dC91565EFcd85D96f634",
        aToken: "0xDE6eF6CB4aBd3A473ffC2942eEf5D84536F8E864",
        aTokenSymbol: "PT-sUSDE-31JUL2025",
        oracle: "0x759B9B72700A129CD7AD8e53F9c99cb48Fd57105",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 92,
        ltv: 90,
      },
      // USDtb
      {
        asset: "0xC139190F447e929f090Edeb554D95AbB8b18aC1C",
        aToken: "0xEc4ef66D4fCeEba34aBB4dE69dB391Bc5476ccc8",
        aTokenSymbol: "USDtb",
        oracle: "0x2FA6A78E3d617c1013a22938411602dc9Da98dBa",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 0,
        ltv: 0,
      },
      // PT-USDe-31JUL2025
      {
        asset: "0x917459337CaAC939D41d7493B3999f571D20D667",
        aToken: "0x312ffC57778CEfa11989733e6E08143E7E229c1c",
        aTokenSymbol: "PT-USDe-31JUL2025",
        oracle: "0x6b99e86B48Fee533B7Bee602e7959f024051Eca0",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 93,
        ltv: 91,
      },
      // PT-eUSDE-14AUG2025
      {
        asset: "0x14Bdc3A3AE09f5518b923b69489CBcAfB238e617",
        aToken: "0x2eDff5AF94334fBd7C38ae318edf1c40e072b73B",
        aTokenSymbol: "PT-eUSDE-14AUG2025",
        oracle: "0x03f9bA9A897241985c1f12bCe97fAC1B0bd4a7A7",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 93,
        ltv: 91,
      },
      // eUSDe
      {
        asset: "0x90D2af7d622ca3141efA4d8f1F24d86E5974Cc8F",
        aToken: "0x5F9190496e0DFC831C3bd307978de4a245E2F5cD",
        aTokenSymbol: "eUSDe",
        oracle: "0xc7Ad695ac0ae38Ae308640897E51468977A862a2",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 93,
        ltv: 91,
      },
      // FBTC
      {
        asset: "0xC96dE26018A54D51c097160568752c4E3BD6C364",
        aToken: "0xcCA43ceF272c30415866914351fdfc3E881bb7c2",
        aTokenSymbol: "FBTC",
        oracle: "0xb41E773f507F7a7EA890b1afB7d2b660c30C8B0A",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 86,
        ltv: 84,
      },
      // EURC
      {
        asset: "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c",
        aToken: "0xAA6e91C82942aeAE040303Bf96c15a6dBcB82CA0",
        aTokenSymbol: "EURC",
        oracle: "0xa6aB031A4d189B24628EC9Eb155F0a0f1A0E55a3",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 78,
        ltv: 75,
      },
      // PT-sUSDE-25SEP2025
      {
        asset: "0x9F56094C450763769BA0EA9Fe2876070c0fD5F77",
        aToken: "0x5f4a0873a3A02f7C0CB0e13a1d4362a1AD90e751",
        aTokenSymbol: "PT-sUSDE-25SEP2025",
        oracle: "0x7585693910f39df4959912B27D09EAEef06C1a93",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 92,
        ltv: 90,
      },
      // PT-USDe-25SEP2025
      {
        asset: "0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a",
        aToken: "0x38A5357Ce55c81add62aBc84Fb32981e2626ADEf",
        aTokenSymbol: "PT-USDe-25SEP2025",
        oracle: "0x8B17C02d22EE7D6B8D6829ceB710A458de41E84a",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 93,
        ltv: 91,
      },
      // tETH
      {
        asset: "0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8",
        aToken: "0x481a2acf3A72ffDc602A9541896Ca1DB87f86cf7",
        aTokenSymbol: "tETH",
        oracle: "0x85968026294b8f8Fb86d6bF3Cda079f9376aD05A",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 75,
        ltv: 72,
      },
      // ezETH
      {
        asset: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
        aToken: "0x4E2a4d9B3DF7Aae73b418Bd39F3af9e148E3F479",
        aTokenSymbol: "ezETH",
        oracle: "0xF3d49021fF3bbBFDfC1992A4b09E5D1d141D044C",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 95,
        ltv: 93,
      },
      // XAUt
      {
        asset: "0x68749665FF8D2d112Fa859AA293F07A622782F38",
        aToken: "0x8A2b6f94Ff3A89a03E8c02Ee92b55aF90c9454A2",
        aTokenSymbol: "XAUt",
        oracle: "0x214eD9Da11D2fbe465a6fc601a91E62EbEc1a0D6",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 75,
        ltv: 70,
      },
      // PT-sUSDE-27NOV2025
      {
        asset: "0xe6A934089BBEe34F832060CE98848359883749B3",
        aToken: "0x285866acB0d60105B4Ed350a463361c2d9afA0E2",
        aTokenSymbol: "PT-sUSDE-27NOV2025",
        oracle: "0x8B8B73598a2c4b1de6d3b075618434CfC4826632",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 92,
        ltv: 90,
      },
      // PT-USDe-27NOV2025
      {
        asset: "0x62C6E813b9589C3631Ba0Cdb013acdB8544038B7",
        aToken: "0x38C503a438185cDE29b5cF4dC1442FD6F074F1cc",
        aTokenSymbol: "PT-USDe-27NOV2025",
        oracle: "0x6A196A7B498C4EFBFEfB55364106EC80CceF0C3F",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 93,
        ltv: 91,
      },
      // PT-USDe-5FEB2026
      {
        asset: "0x1F84a51296691320478c98b8d77f2Bbd17D34350",
        aToken: "0xE728577e9a1Fe7032bc309B4541F58f45443866e",
        aTokenSymbol: "PT-USDe-5FEB2026",
        oracle: "0xc35D319FA5FEc2BBE0eB4d0a826465b60f821F81",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 93,
        ltv: 91,
      },
      // PT-sUSDE-5FEB2026
      {
        asset: "0xE8483517077afa11A9B07f849cee2552f040d7b2",
        aToken: "0xbe54767735fB7Acca2aa7E2d209a6f705073536D",
        aTokenSymbol: "PT-sUSDE-5FEB2026",
        oracle: "0x4e89f87F24C13819bBDDb56f99b38746C91677D8",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 92,
        ltv: 90,
      },
      // mUSD
      {
        asset: "0xacA92E438df0B2401fF60dA7E4337B687a2435DA",
        aToken: "0xAa0200d169fF3ba9385c12E073c5d1d30434AE7b",
        aTokenSymbol: "mUSD",
        oracle: "0x8adb5187695F773513dEC4b569d21db0341931dA",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 0,
        ltv: 0,
      },
      // syrupUSDT
      {
        asset: "0x356B8d89c1e1239Cbbb9dE4815c39A1474d5BA7D",
        aToken: "0x24Ab03a9a5Bc2C49E5523e8d915A3536ac38B91D",
        aTokenSymbol: "syrupUSDT",
        oracle: "0x982aC260B5a4e5bCAb6A437e79168390cFbDe70D",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 92,
        ltv: 90,
      },
      // USDG
      {
        asset: "0xe343167631d89B6Ffc58B88d6b7fB0228795491D",
        aToken: "0x7c0477d085ECb607CF8429f3eC91Ae5E1e460F4F",
        aTokenSymbol: "USDG",
        oracle: "0xF29b1e3b68Fd59DD0a413811fD5d0AbaE653216d",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: true,
        lt: 0,
        ltv: 0,
      },
      // PT-USDe-7MAY2026
      {
        asset: "0xAeBf0Bb9f57E89260d57f31AF34eB58657d96Ce0",
        aToken: "0xE036478Da9A7ed89b56FE39A06e1FC1a4b38D4Ea",
        aTokenSymbol: "PT-USDe-7MAY2026",
        oracle: "0x0a72df02CE3E4185b6CEDf561f0AE651E9BeE235",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 90.2,
        ltv: 88.2,
      },
      // PT-sUSDE-7MAY2026
      {
        asset: "0x3de0ff76E8b528C092d47b9DaC775931cef80F49",
        aToken: "0x81b76ff3FeD28BA0B4a5D4c76Bd5C13Bd0641d86",
        aTokenSymbol: "PT-sUSDE-7MAY2026",
        oracle: "0xa0dc0249c32fa79e8B9b17c735908a60b1141B40",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 89.4,
        ltv: 87.4,
      },
      // PT-srUSDe-2APR2026
      {
        asset: "0x9Bf45ab47747F4B4dD09B3C2c73953484b4eB375",
        aToken: "0x1241ec22C9BdF16BA1Eb636F2a8de7e28A4343Cf",
        aTokenSymbol: "PT-srUSDe-2APR2026",
        oracle: "0xB539C6C0fc36ff1572B13ACec343B854937db576",
        oracleName: "Unknown",
        treasury: "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c",
        isBorrowable: false,
        lt: 92,
        ltv: 90,
      },
    ],
    deployed: "Dec 29, 2022",
    show: true,
    eModes: [
      // ETH correlated
      {
        id: 1,
        label: "ETH correlated",
        collateral: [
          "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
          "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
          "0xae78736Cd615f374D3085123A210448E74Fc6393",
          "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
          "0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38",
          "0xA35b1B31Ce002FBF2058D22F30f95D405200A15b",
        ],
        borrowable: ["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"],
        ltv: 93,
        lt: 95,
      },
      // sUSDe Stablecoins
      {
        id: 2,
        label: "sUSDe Stablecoins",
        collateral: [
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        ],
        ltv: 90,
        lt: 92,
      },
      // rsETH__ETH_wstETH_ETHx
      {
        id: 3,
        label: "rsETH__ETH_wstETH_ETHx",
        collateral: ["0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7"],
        borrowable: [
          "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
          "0xA35b1B31Ce002FBF2058D22F30f95D405200A15b",
        ],
        ltv: 93,
        lt: 95,
      },
      // LBTC_WBTC
      {
        id: 4,
        label: "LBTC_WBTC",
        collateral: ["0x8236a87084f8B84306f72007F36F2618A5634494"],
        borrowable: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
        ltv: 84,
        lt: 86,
      },
      // LBTC_cbBTC
      {
        id: 5,
        label: "LBTC_cbBTC",
        collateral: ["0x8236a87084f8B84306f72007F36F2618A5634494"],
        borrowable: ["0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf"],
        ltv: 84,
        lt: 86,
      },
      // LBTC_tBTC
      {
        id: 6,
        label: "LBTC_tBTC",
        collateral: ["0x8236a87084f8B84306f72007F36F2618A5634494"],
        borrowable: ["0x18084fbA666a33d37592fA2633fD49a74DD93a88"],
        ltv: 84,
        lt: 86,
      },
      // eBTC/WBTC
      {
        id: 7,
        label: "eBTC/WBTC",
        collateral: ["0x657e8C867D8B37dCC18fA4Caead9C45EB088C642"],
        borrowable: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
        ltv: 83,
        lt: 85,
      },
      // PT-sUSDe Stablecoins Jul 2025
      {
        id: 8,
        label: "PT-sUSDe Stablecoins Jul 2025",
        collateral: [
          "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
          "0x3b3fB9C57858EF816833dC91565EFcd85D96f634",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        ],
        ltv: 90,
        lt: 92,
      },
      // PT-eUSDe Stablecoins May 2025
      {
        id: 9,
        label: "PT-eUSDe Stablecoins May 2025",
        collateral: [
          "0x50D2C7992b802Eef16c04FeADAB310f31866a545",
          "0x90D2af7d622ca3141efA4d8f1F24d86E5974Cc8F",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        ],
        ltv: 91,
        lt: 93,
      },
      // PT-USDe Stablecoins July 2025
      {
        id: 10,
        label: "PT-USDe Stablecoins July 2025",
        collateral: [
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0x917459337CaAC939D41d7493B3999f571D20D667",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        ],
        ltv: 91,
        lt: 93,
      },
      // USDe Stablecoin
      {
        id: 11,
        label: "USDe Stablecoin",
        collateral: ["0x4c9EDD5852cd905f086C759E8383e09bff1E68B3"],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        ],
        ltv: 90,
        lt: 93,
      },
      // PT-USDe USDe July 2025
      {
        id: 12,
        label: "PT-USDe USDe July 2025",
        collateral: [
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0x917459337CaAC939D41d7493B3999f571D20D667",
        ],
        borrowable: ["0x4c9EDD5852cd905f086C759E8383e09bff1E68B3"],
        ltv: 94,
        lt: 96,
      },
      // PT-eUSDe Stablecoins August 2025
      {
        id: 13,
        label: "PT-eUSDe Stablecoins August 2025",
        collateral: [
          "0x14Bdc3A3AE09f5518b923b69489CBcAfB238e617",
          "0x90D2af7d622ca3141efA4d8f1F24d86E5974Cc8F",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        ],
        ltv: 91,
        lt: 93,
      },
      // PT-eUSDe USDe August 2025
      {
        id: 14,
        label: "PT-eUSDe USDe August 2025",
        collateral: [
          "0x14Bdc3A3AE09f5518b923b69489CBcAfB238e617",
          "0x90D2af7d622ca3141efA4d8f1F24d86E5974Cc8F",
        ],
        borrowable: ["0x4c9EDD5852cd905f086C759E8383e09bff1E68B3"],
        ltv: 94,
        lt: 96,
      },
      // eUSDe_Stablecoin
      {
        id: 15,
        label: "eUSDe_Stablecoin",
        collateral: ["0x90D2af7d622ca3141efA4d8f1F24d86E5974Cc8F"],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        ],
        ltv: 90,
        lt: 93,
      },
      // FBTC/WBTC
      {
        id: 16,
        label: "FBTC/WBTC",
        collateral: ["0xC96dE26018A54D51c097160568752c4E3BD6C364"],
        borrowable: ["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"],
        ltv: 84,
        lt: 86,
      },
      // PT-sUSDe Stablecoins September 2025
      {
        id: 17,
        label: "PT-sUSDe Stablecoins September 2025",
        collateral: [
          "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
          "0x3b3fB9C57858EF816833dC91565EFcd85D96f634",
          "0x9F56094C450763769BA0EA9Fe2876070c0fD5F77",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0xC139190F447e929f090Edeb554D95AbB8b18aC1C",
        ],
        ltv: 90,
        lt: 92,
      },
      // PT-sUSDe USDe September 2025
      {
        id: 18,
        label: "PT-sUSDe USDe September 2025",
        collateral: ["0x9F56094C450763769BA0EA9Fe2876070c0fD5F77"],
        borrowable: ["0x4c9EDD5852cd905f086C759E8383e09bff1E68B3"],
        ltv: 92,
        lt: 94,
      },
      // PT-USDe Stablecoins September 2025
      {
        id: 19,
        label: "PT-USDe Stablecoins September 2025",
        collateral: [
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0x917459337CaAC939D41d7493B3999f571D20D667",
          "0x14Bdc3A3AE09f5518b923b69489CBcAfB238e617",
          "0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
        ],
        ltv: 91,
        lt: 93,
      },
      // PT-USDe USDe September 2025
      {
        id: 20,
        label: "PT-USDe USDe September 2025",
        collateral: [
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0x917459337CaAC939D41d7493B3999f571D20D667",
          "0x14Bdc3A3AE09f5518b923b69489CBcAfB238e617",
          "0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a",
        ],
        borrowable: ["0x4c9EDD5852cd905f086C759E8383e09bff1E68B3"],
        ltv: 94,
        lt: 96,
      },
      // tETH/Stablecoins
      {
        id: 21,
        label: "tETH/Stablecoins",
        collateral: ["0xD11c452fc99cF405034ee446803b6F6c1F6d5ED8"],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        ],
        ltv: 72,
        lt: 75,
      },
      // ezETH/wstETH
      {
        id: 22,
        label: "ezETH/wstETH",
        collateral: ["0xbf5495Efe5DB9ce00f80364C8B423567e58d2110"],
        borrowable: ["0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0"],
        ltv: 93,
        lt: 95,
      },
      // ezETH/Stablecoins
      {
        id: 23,
        label: "ezETH/Stablecoins",
        collateral: ["0xbf5495Efe5DB9ce00f80364C8B423567e58d2110"],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        ],
        ltv: 75,
        lt: 78,
      },
      // PT-sUSDe Stablecoins Nov 2025
      {
        id: 24,
        label: "PT-sUSDe Stablecoins Nov 2025",
        collateral: [
          "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
          "0x9F56094C450763769BA0EA9Fe2876070c0fD5F77",
          "0xe6A934089BBEe34F832060CE98848359883749B3",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0xC139190F447e929f090Edeb554D95AbB8b18aC1C",
        ],
        ltv: 90,
        lt: 92,
      },
      // PT-sUSDe USDe Nov 2025
      {
        id: 25,
        label: "PT-sUSDe USDe Nov 2025",
        collateral: [
          "0x9F56094C450763769BA0EA9Fe2876070c0fD5F77",
          "0xe6A934089BBEe34F832060CE98848359883749B3",
        ],
        borrowable: ["0x4c9EDD5852cd905f086C759E8383e09bff1E68B3"],
        ltv: 92,
        lt: 94,
      },
      // weETH/wstETH ETH Correlated
      {
        id: 26,
        label: "weETH/wstETH ETH Correlated",
        collateral: ["0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee"],
        borrowable: [
          "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
          "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
        ],
        ltv: 93,
        lt: 95,
      },
      // PT-USDe Stablecoins Nov 2025
      {
        id: 27,
        label: "PT-USDe Stablecoins Nov 2025",
        collateral: [
          "0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a",
          "0x62C6E813b9589C3631Ba0Cdb013acdB8544038B7",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0xC139190F447e929f090Edeb554D95AbB8b18aC1C",
        ],
        ltv: 91,
        lt: 93,
      },
      // PT-USDe USDe Nov 2025
      {
        id: 28,
        label: "PT-USDe USDe Nov 2025",
        collateral: [
          "0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a",
          "0x62C6E813b9589C3631Ba0Cdb013acdB8544038B7",
        ],
        borrowable: ["0x4c9EDD5852cd905f086C759E8383e09bff1E68B3"],
        ltv: 94,
        lt: 96,
      },
      // PTUSDe5FEB/Stablecoins
      {
        id: 29,
        label: "PTUSDe5FEB/Stablecoins",
        collateral: [
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0x62C6E813b9589C3631Ba0Cdb013acdB8544038B7",
          "0x1F84a51296691320478c98b8d77f2Bbd17D34350",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0xC139190F447e929f090Edeb554D95AbB8b18aC1C",
        ],
        ltv: 91,
        lt: 93,
      },
      // PTUSDe5FEB/USDe
      {
        id: 30,
        label: "PTUSDe5FEB/USDe",
        collateral: [
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0x62C6E813b9589C3631Ba0Cdb013acdB8544038B7",
          "0x1F84a51296691320478c98b8d77f2Bbd17D34350",
        ],
        borrowable: ["0x4c9EDD5852cd905f086C759E8383e09bff1E68B3"],
        ltv: 94,
        lt: 96,
      },
      // PTsUSDe5FEB/Stablecoins
      {
        id: 31,
        label: "PTsUSDe5FEB/Stablecoins",
        collateral: [
          "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
          "0xe6A934089BBEe34F832060CE98848359883749B3",
          "0xE8483517077afa11A9B07f849cee2552f040d7b2",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0xC139190F447e929f090Edeb554D95AbB8b18aC1C",
        ],
        ltv: 90,
        lt: 92,
      },
      // PTsUSDe5FEB/USDe
      {
        id: 32,
        label: "PTsUSDe5FEB/USDe",
        collateral: [
          "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
          "0xe6A934089BBEe34F832060CE98848359883749B3",
          "0xE8483517077afa11A9B07f849cee2552f040d7b2",
        ],
        borrowable: ["0x4c9EDD5852cd905f086C759E8383e09bff1E68B3"],
        ltv: 92,
        lt: 94,
      },
      // syrupUSDT Stablecoins
      {
        id: 33,
        label: "syrupUSDT Stablecoins",
        collateral: ["0x356B8d89c1e1239Cbbb9dE4815c39A1474d5BA7D"],
        borrowable: [
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f",
        ],
        ltv: 90,
        lt: 92,
      },
      // PT_USDe_7MAY2026__Stablecoins
      {
        id: 34,
        label: "PT_USDe_7MAY2026__Stablecoins",
        collateral: [
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0x1F84a51296691320478c98b8d77f2Bbd17D34350",
          "0xAeBf0Bb9f57E89260d57f31AF34eB58657d96Ce0",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0xC139190F447e929f090Edeb554D95AbB8b18aC1C",
        ],
        ltv: 88.2,
        lt: 90.2,
      },
      // PT_USDe_7MAY2026__USDe
      {
        id: 35,
        label: "PT_USDe_7MAY2026__USDe",
        collateral: [
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0x1F84a51296691320478c98b8d77f2Bbd17D34350",
          "0xAeBf0Bb9f57E89260d57f31AF34eB58657d96Ce0",
        ],
        borrowable: ["0x4c9EDD5852cd905f086C759E8383e09bff1E68B3"],
        ltv: 89.1,
        lt: 91.1,
      },
      // PT_sUSDe_7MAY2026__Stablecoins
      {
        id: 36,
        label: "PT_sUSDe_7MAY2026__Stablecoins",
        collateral: [
          "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
          "0xE8483517077afa11A9B07f849cee2552f040d7b2",
          "0x3de0ff76E8b528C092d47b9DaC775931cef80F49",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
          "0xC139190F447e929f090Edeb554D95AbB8b18aC1C",
        ],
        ltv: 87.4,
        lt: 89.4,
      },
      // PT_sUSDe_7MAY2026__USDe
      {
        id: 37,
        label: "PT_sUSDe_7MAY2026__USDe",
        collateral: [
          "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
          "0xE8483517077afa11A9B07f849cee2552f040d7b2",
          "0x3de0ff76E8b528C092d47b9DaC775931cef80F49",
        ],
        borrowable: ["0x4c9EDD5852cd905f086C759E8383e09bff1E68B3"],
        ltv: 88.2,
        lt: 90.2,
      },
      // PT_srUSDe_1APR2026_sUSDe__USDT_USDe_USDC
      {
        id: 38,
        label: "PT_srUSDe_1APR2026_sUSDe__USDT_USDe_USDC",
        collateral: [
          "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
          "0x9Bf45ab47747F4B4dD09B3C2c73953484b4eB375",
        ],
        borrowable: [
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
        ],
        ltv: 90,
        lt: 92,
      },
      // PT_srUSDe_1APR2026_sUSDe__USDe
      {
        id: 39,
        label: "PT_srUSDe_1APR2026_sUSDe__USDe",
        collateral: [
          "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",
          "0x9Bf45ab47747F4B4dD09B3C2c73953484b4eB375",
        ],
        borrowable: ["0x4c9EDD5852cd905f086C759E8383e09bff1E68B3"],
        ltv: 91.7,
        lt: 93.7,
      },
    ],
  },
  {
    id: "Vicuna",
    chainId: "146",
    engine: LendingEngine.AAVE_3_0_2_CUSTOM,
    operator: LendingOperator.STABILITY,
    pool: "0xaa1C02a83362BcE106dFf6eB65282fE8B97A1665",
    protocolDataProvider: "0xc67850eCd0EC9dB4c0fD65C1Ad43a53025e6d54D",
    uiPoolDataProvider: "0xAC2b7EADb55858700B8567aB5Ca7863101508304",
    reserves: [
      // vSonicWS
      {
        asset: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
        aToken: "0x9E581fC9181f99c3c4DAB344B91C55DaEb9413fe",
        aTokenSymbol: "vSonicWS",
        oracle: "0x9C720921F4d84230A5f9F369EdeA3d0a9141600F",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
        lt: 78,
        ltv: 75,
      },
      // vSonicSCUSD
      {
        asset: "0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE",
        aToken: "0xF9f65F8c6566d71C5966a0a1852cEd1Eb978bafb",
        aTokenSymbol: "vSonicSCUSD",
        oracle: "0x3d4c5A1805bf9B95399a69264565B493834F0048",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
        lt: 84,
        ltv: 80,
      },
      // vSonicUSDC.E
      {
        asset: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
        aToken: "0xF224CB039F2B5909197c019b1972E62d7fdCdA0f",
        aTokenSymbol: "vSonicUSDC.E",
        oracle: "0x3d4c5A1805bf9B95399a69264565B493834F0048",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
        lt: 84,
        ltv: 80,
      },
      // vSonicWETH
      {
        asset: "0x50c42dEAcD8Fc9773493ED674b675bE577f2634b",
        aToken: "0xA1241Ce1fBB74Ff37D5c73dcB84326766C3852C0",
        aTokenSymbol: "vSonicWETH",
        oracle: "0xAfea5fA66c1A32cF51401E761E7CAd88fDd69318",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
        lt: 84,
        ltv: 80,
      },
      // vSonicUSDT.E
      {
        asset: "0x6047828dc181963ba44974801FF68e538dA5eaF9",
        aToken: "0xb401dc6D04fd6D3993345dE2858065ddC9a36b79",
        aTokenSymbol: "vSonicUSDT.E",
        oracle: "0xe9A35b3A71033497983f98df49Cd61c9665cdCF4",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
        lt: 84,
        ltv: 80,
      },
      // vSonicwOS
      {
        asset: "0x9F0dF7799f6FDAd409300080cfF680f5A23df4b1",
        aToken: "0x9BF96Dee5b4161c5cA3DDDf2D19cc677B6832644",
        aTokenSymbol: "vSonicwOS",
        oracle: "0x691acC2F7b17897677C86F7085f62de025F4E8D8",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
        lt: 78,
        ltv: 75,
      },
      // vSonicstS
      {
        asset: "0xE5DA20F15420aD15DE0fa650600aFc998bbE3955",
        aToken: "0x4C8D17317884B53bEfE5abeF884818b2fbe0A2dD",
        aTokenSymbol: "vSonicstS",
        oracle: "0x8634DC1C5435F63906BAd5883B28b95f96714493",
        oracleName: "API3 OEV",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
        lt: 78,
        ltv: 75,
      },
      // scETH
      {
        asset: "0x3bcE5CB273F0F148010BbEa2470e7b5df84C7812",
        aToken: "0x085A6F625DCf7a8fa63111eE26b0F4D874F5CfD6",
        aTokenSymbol: "scETH",
        oracle: "0x0000000000000000000000000000000000000000",
        oracleName: "Unknown",
        treasury: "0xad1bB693975C16eC2cEEF65edD540BC735F8608B",
        isBorrowable: true,
        lt: 78,
        ltv: 75,
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
    uiPoolDataProvider: "0xAC2b7EADb55858700B8567aB5Ca7863101508304",
    pool: "0x6D8Aa37DfAa98d2a14da39cfeD36975F97fc3f85",
    protocolDataProvider: "0xb102Cc0cb1357C339D1eFd611De4feE2e0E82448",
    reserves: [
      // Staked bUSD
      {
        asset: "0x451812019238785086CFAC408D8A64f06898f6f5",
        aToken: "0xeB9bB589C12A0433B274760E657D549a6973C787",
        aTokenSymbol: "asiStaked bUSD",
        oracle: "0xD58e2B148B59E81f51aD66E26df944df05247B14",
        oracleName: "Brunch StakedERC20PriceOracle",
        treasury: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
        isBorrowable: false,
        lt: 95,
        ltv: 93,
      },
      // USDC
      {
        asset: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
        aToken: "0x958d930E61bdaebbBc0270D88FdBAEE9A13Dc6fd",
        aTokenSymbol: "asiUSDC",
        oracle: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
        oracleName: "ChainLink",
        treasury: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
        isBorrowable: true,
        lt: 0,
        ltv: 0,
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
    uiPoolDataProvider: "0xAC2b7EADb55858700B8567aB5Ca7863101508304",
    operator: LendingOperator.STABILITY,
    pool: "0x909ba6aC1A9D34fE97Cb459C2CA9b6Ff986676F7",
    protocolDataProvider: "0x253A04ca6efef2e25f801153852B02bF74E1f749",
    reserves: [
      // wmetaUSD
      {
        asset: "0xAaAaaAAac311D0572Bffb4772fe985A750E88805",
        aToken: "0xFC4A805Db8Dc217c468155cc5814070A15af8dc4",
        aTokenSymbol: "asiwmetaUSD",
        oracle: "0x440A6bf579069Fa4e7C3C9fe634B34D2C78C584c",
        oracleName: "Stability WrappedMetaVaultOracle",
        treasury: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
        isBorrowable: false,
        lt: 97.5,
        ltv: 95,
      },
      // USDC
      {
        asset: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
        aToken: "0xb90a84F285aE8D3c0ceD37deD6Fc0f943f7279b7",
        aTokenSymbol: "asiUSDC",
        oracle: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
        oracleName: "ChainLink",
        treasury: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
        isBorrowable: true,
        lt: 0,
        ltv: 0,
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
    uiPoolDataProvider: "0xAC2b7EADb55858700B8567aB5Ca7863101508304",
    operator: LendingOperator.STABILITY,
    pool: "0xb0A06303085aB2F73212C8846CA5388Da5697c31",
    protocolDataProvider: "0xB263ecA021e1D265D7e68842bc57e656cb88FE03",
    reserves: [
      // STBL
      {
        asset: "0x78a76316F66224CBaCA6e70acB24D5ee5b2Bd2c7",
        aToken: "0x00886bC6a12d8D5ad0ef51e041a8AB37A0E59251",
        aTokenSymbol: "asiSTBL",
        oracle: "0x3c45Fdad0519Bce8D011552F8B11dD5Fa651200C",
        oracleName: "Stability",
        treasury: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
        isBorrowable: false,
        lt: 78,
        ltv: 40,
      },
      // USDC
      {
        asset: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
        aToken: "0x46b2E96725F03873Cb586a7f84c22545F2835F31",
        aTokenSymbol: "asiUSDC",
        oracle: "0x55bCa887199d5520B3Ce285D41e6dC10C08716C9",
        oracleName: "ChainLink",
        treasury: "0x3950b3a43fa0687561Bc5c8E32D2EE826D88a661",
        isBorrowable: true,
        lt: 0,
        ltv: 0,
      },
    ],
    deployed: "Oct 31, 2025",
    show: true,
  },
  {
    id: "Plasma Market",
    chainId: "9745",
    engine: LendingEngine.AAVE_3_5,
    operator: LendingOperator.AAVE,
    pool: "0x925a2A7214Ed92428B5b1B090F80b25700095e12",
    protocolDataProvider: "0xf2D6E38B407e31E7E7e4a16E6769728b76c7419F",
    uiPoolDataProvider: "0xc851e6147dcE6A469CC33BE3121b6B2D4CaD2763",
    reserves: [
      // USDT0
      {
        asset: "0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb",
        aToken: "0x5D72a9d9A9510Cd8cBdBA12aC62593A58930a948",
        aTokenSymbol: "USDT0",
        oracle: "0xdBbB0b5DD13E7AC9C56624834ef193df87b022c3",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: true,
        lt: 78,
        ltv: 75,
      },
      // USDe
      {
        asset: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
        aToken: "0x7519403E12111ff6b710877Fcd821D0c12CAF43A",
        aTokenSymbol: "USDe",
        oracle: "0xdBbB0b5DD13E7AC9C56624834ef193df87b022c3",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: true,
        lt: 93,
        ltv: 90,
      },
      // sUSDe
      {
        asset: "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
        aToken: "0xC1A318493fF07a68fE438Cee60a7AD0d0DBa300E",
        aTokenSymbol: "sUSDe",
        oracle: "0x40eE40D7332995CACA49Db46B94237Fa64647Bd4",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: false,
        lt: 92,
        ltv: 90,
      },
      // XAUt0
      {
        asset: "0x1B64B9025EEbb9A6239575dF9Ea4b9Ac46D4d193",
        aToken: "0x5c43D6C075C7CF95fb188FB2977eeD3E3F2a92c2",
        aTokenSymbol: "XAUt0",
        oracle: "0x921371Fa4d4A30cD350D29762ccB8A5861724E29",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: false,
        lt: 75,
        ltv: 70,
      },
      // weETH
      {
        asset: "0xA3D68b74bF0528fdD07263c60d6488749044914b",
        aToken: "0xAf1a7a488c8348b41d5860C04162af7d3D38A996",
        aTokenSymbol: "weETH",
        oracle: "0xA7786e3042435f88869e5a4e384B0AD6B009800b",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: false,
        lt: 95,
        ltv: 93,
      },
      // WETH
      {
        asset: "0x9895D81bB462A195b4922ED7De0e3ACD007c32CB",
        aToken: "0xf1aB7f60128924d69f6d7dE25A20eF70bBd43d07",
        aTokenSymbol: "WETH",
        oracle: "0x43A7dd2125266c5c4c26EB86cd61241132426Fe7",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: true,
        lt: 83,
        ltv: 80.5,
      },
      // PT-USDe-15JAN2026
      {
        asset: "0x93B544c330F60A2aa05ceD87aEEffB8D38FD8c9a",
        aToken: "0xEa601A9FECF80bFC529F08A51bD8Cb0d72fc862A",
        aTokenSymbol: "PT-USDe-15JAN2026",
        oracle: "0x30cb6ff8649Cc02cEa91971D4730EebeD5A8D2F1",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: false,
        lt: 93,
        ltv: 91,
      },
      // PT-sUSDE-15JAN2026
      {
        asset: "0x02FCC4989B4C9D435b7ceD3fE1Ba4CF77BBb5Dd8",
        aToken: "0x0b9A412c94f07223752031f75a20DDe542D63d5C",
        aTokenSymbol: "PT-sUSDE-15JAN2026",
        oracle: "0x3eca1c7836eA09DB3dc85be7B5526Ce80E2609a1",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: false,
        lt: 92,
        ltv: 90,
      },
      // wstETH
      {
        asset: "0xe48D935e6C9e735463ccCf29a7F11e32bC09136E",
        aToken: "0x140Bc58975DFba4D30fE65c4F6262a6c314683cf",
        aTokenSymbol: "wstETH",
        oracle: "0xd6ff49B650550ce2452e0fCCa101Ab7CE206d851",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: true,
        lt: 96,
        ltv: 94,
      },
      // wrsETH
      {
        asset: "0xe561FE05C39075312Aa9Bc6af79DdaE981461359",
        aToken: "0x41c7aCCC0fB97470bFB48014bad52E0d99447E79",
        aTokenSymbol: "wrsETH",
        oracle: "0x3acFddf27b85B5f773B610c6F7e4420aeB1Df8dD",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: false,
        lt: 95,
        ltv: 93,
      },
      // syrupUSDT
      {
        asset: "0xC4374775489CB9C56003BF2C9b12495fC64F0771",
        aToken: "0xD4eE376C40EdC83832aAaFc18fC0272660F5e90b",
        aTokenSymbol: "syrupUSDT",
        oracle: "0x0A3F8218a98337Ef37dCAE4F8a8cfaB0711C64cF",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: false,
        lt: 92,
        ltv: 90,
      },
      // WXPL
      {
        asset: "0x6100E367285b01F48D07953803A2d8dCA5D19873",
        aToken: "0x5aA4bc74811D672DA5308019dA4779f673e60B47",
        aTokenSymbol: "WXPL",
        oracle: "0xF932477C37715aE6657Ab884414Bd9876FE3f750",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: false,
        lt: 55,
        ltv: 50,
      },
      // PT-sUSDE-9APR2026
      {
        asset: "0xab509448ad489e2E1341e25CC500f2596464Cc82",
        aToken: "0x53349cBeD7A3F851f0722Bf3Fa8f1b93fA939BeF",
        aTokenSymbol: "PT-sUSDE-9APR2026",
        oracle: "0x13f2EA8dfa948c5247826283079615Ee4d0A1AA5",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: false,
        lt: 91.6,
        ltv: 89.6,
      },
      // PT-USDe-9APR2026
      {
        asset: "0x54Dc267be2839303ff1e323584A16e86CeC4Aa44",
        aToken: "0x9326fA5a71C93D5De313c91C3b80D74d0c3a0F5A",
        aTokenSymbol: "PT-USDe-9APR2026",
        oracle: "0x37f3a8b02BAbe4dd71acb5f214F22C09AFf607f3",
        oracleName: "Unknown",
        treasury: "0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D",
        isBorrowable: false,
        lt: 92.3,
        ltv: 90.3,
      },
    ],
    deployed: "Sep-09-2025",
    show: false,
    eModes: [
      // USDe Stablecoins
      {
        id: 1,
        label: "USDe Stablecoins",
        collateral: ["0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34"],
        borrowable: ["0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb"],
        ltv: 90,
        lt: 93,
      },
      // sUSDe Stablecoins
      {
        id: 2,
        label: "sUSDe Stablecoins",
        collateral: [
          "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
          "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
        ],
        borrowable: ["0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb"],
        ltv: 90,
        lt: 92,
      },
      // weETH WETH
      {
        id: 3,
        label: "weETH WETH",
        collateral: ["0xA3D68b74bF0528fdD07263c60d6488749044914b"],
        borrowable: ["0x9895D81bB462A195b4922ED7De0e3ACD007c32CB"],
        ltv: 93,
        lt: 95,
      },
      // weETH Stablecoins
      {
        id: 4,
        label: "weETH Stablecoins",
        collateral: ["0xA3D68b74bF0528fdD07263c60d6488749044914b"],
        borrowable: ["0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb"],
        ltv: 77.5,
        lt: 80,
      },
      // PT-USDe Stablecoins Jan 2026
      {
        id: 5,
        label: "PT-USDe Stablecoins Jan 2026",
        collateral: ["0x93B544c330F60A2aa05ceD87aEEffB8D38FD8c9a"],
        borrowable: [
          "0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb",
          "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
        ],
        ltv: 91,
        lt: 93,
      },
      // PT-USDe USDe Jan 2026
      {
        id: 6,
        label: "PT-USDe USDe Jan 2026",
        collateral: ["0x93B544c330F60A2aa05ceD87aEEffB8D38FD8c9a"],
        borrowable: ["0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34"],
        ltv: 94,
        lt: 96,
      },
      // PT-sUSDe Stablecoins Jan 2026
      {
        id: 7,
        label: "PT-sUSDe Stablecoins Jan 2026",
        collateral: ["0x02FCC4989B4C9D435b7ceD3fE1Ba4CF77BBb5Dd8"],
        borrowable: [
          "0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb",
          "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
        ],
        ltv: 90,
        lt: 92,
      },
      // PT-sUSDe USDe Jan 2026
      {
        id: 8,
        label: "PT-sUSDe USDe Jan 2026",
        collateral: ["0x02FCC4989B4C9D435b7ceD3fE1Ba4CF77BBb5Dd8"],
        borrowable: ["0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34"],
        ltv: 92,
        lt: 94,
      },
      // wrsETH/WETH
      {
        id: 9,
        label: "wrsETH/WETH",
        collateral: ["0xe561FE05C39075312Aa9Bc6af79DdaE981461359"],
        borrowable: [
          "0x9895D81bB462A195b4922ED7De0e3ACD007c32CB",
          "0xe48D935e6C9e735463ccCf29a7F11e32bC09136E",
        ],
        ltv: 93,
        lt: 95,
      },
      // wstETH/WETH
      {
        id: 10,
        label: "wstETH/WETH",
        collateral: ["0xe48D935e6C9e735463ccCf29a7F11e32bC09136E"],
        borrowable: ["0x9895D81bB462A195b4922ED7De0e3ACD007c32CB"],
        ltv: 94,
        lt: 96,
      },
      // syrupUSDT/USDT0
      {
        id: 11,
        label: "syrupUSDT/USDT0",
        collateral: ["0xC4374775489CB9C56003BF2C9b12495fC64F0771"],
        borrowable: ["0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb"],
        ltv: 90,
        lt: 92,
      },
      // WXPL Stablecoins
      {
        id: 12,
        label: "WXPL Stablecoins",
        collateral: ["0x6100E367285b01F48D07953803A2d8dCA5D19873"],
        borrowable: ["0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb"],
        ltv: 50,
        lt: 55,
      },
      // PT_USDe_9APR2026__Stablecoins
      {
        id: 13,
        label: "PT_USDe_9APR2026__Stablecoins",
        collateral: [
          "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
          "0x93B544c330F60A2aa05ceD87aEEffB8D38FD8c9a",
          "0x54Dc267be2839303ff1e323584A16e86CeC4Aa44",
        ],
        borrowable: [
          "0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb",
          "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
        ],
        ltv: 90.3,
        lt: 92.3,
      },
      // PT_USDe_9APR2026__USDe
      {
        id: 14,
        label: "PT_USDe_9APR2026__USDe",
        collateral: [
          "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
          "0x93B544c330F60A2aa05ceD87aEEffB8D38FD8c9a",
          "0x54Dc267be2839303ff1e323584A16e86CeC4Aa44",
        ],
        borrowable: ["0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34"],
        ltv: 91.2,
        lt: 93.2,
      },
      // PT_sUSDe_9APR2026__Stablecoins
      {
        id: 15,
        label: "PT_sUSDe_9APR2026__Stablecoins",
        collateral: [
          "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
          "0x02FCC4989B4C9D435b7ceD3fE1Ba4CF77BBb5Dd8",
          "0xab509448ad489e2E1341e25CC500f2596464Cc82",
        ],
        borrowable: [
          "0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb",
          "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
        ],
        ltv: 89.6,
        lt: 91.6,
      },
      // PT_sUSDe_9APR2026__USDe
      {
        id: 16,
        label: "PT_sUSDe_9APR2026__USDe",
        collateral: [
          "0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2",
          "0x02FCC4989B4C9D435b7ceD3fE1Ba4CF77BBb5Dd8",
          "0xab509448ad489e2E1341e25CC500f2596464Cc82",
        ],
        borrowable: ["0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34"],
        ltv: 91.2,
        lt: 93.2,
      },
    ],
  },
];

export function getLendingMarketsForAsset(
  chainId: string | number,
  assetAddress: string,
): ILendingMarket[] {
  const r: ILendingMarket[] = [];
  for (const market of lendingMarkets) {
    if (market.chainId === chainId.toString()) {
      for (const reserve of market.reserves) {
        if (reserve.asset.toLowerCase() === assetAddress.toLowerCase()) {
          r.push(market);
        }
      }
    }
  }
  return r;
}
