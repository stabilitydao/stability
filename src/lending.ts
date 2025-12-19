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
      },
    ],
    deployed: "Dec 29, 2022",
    show: true,
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
      },
    ],
    deployed: "Oct 31, 2025",
    show: true,
  },
];
