export const getReserveTokensAddressesABI = [
  {
    inputs: [{ internalType: "address", name: "asset", type: "address" }],
    name: "getReserveTokensAddresses",
    outputs: [
      { internalType: "address", name: "aTokenAddress", type: "address" },
      {
        internalType: "address",
        name: "stableDebtTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "variableDebtTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const getAllReservesTokensABI = [
  {
    inputs: [],
    name: "getAllReservesTokens",
    outputs: [
      {
        components: [
          { internalType: "string", name: "symbol", type: "string" },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
        ],
        internalType: "struct IPoolDataProvider.TokenData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const eModeAbi = [
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
    ],
    name: "getEModes",
    outputs: [
      {
        components: [
          { internalType: "uint8", name: "id", type: "uint8" },
          {
            components: [
              { internalType: "uint16", name: "ltv", type: "uint16" },
              {
                internalType: "uint16",
                name: "liquidationThreshold",
                type: "uint16",
              },
              {
                internalType: "uint16",
                name: "liquidationBonus",
                type: "uint16",
              },
              {
                internalType: "uint128",
                name: "collateralBitmap",
                type: "uint128",
              },
              { internalType: "string", name: "label", type: "string" },
              {
                internalType: "uint128",
                name: "borrowableBitmap",
                type: "uint128",
              },
              {
                internalType: "uint128",
                name: "ltvzeroBitmap",
                type: "uint128",
              },
            ],
            internalType: "struct DataTypes.EModeCategory",
            name: "eMode",
            type: "tuple",
          },
        ],
        internalType: "struct IUiPoolDataProviderV3.Emode[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const getSourceOfAssetABI = [
  {
    inputs: [{ internalType: "address", name: "asset", type: "address" }],
    name: "getSourceOfAsset",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];

export const getReserveConfigurationABI = [
  {
    inputs: [{ internalType: "address", name: "asset", type: "address" }],
    name: "getReserveConfigurationData",
    outputs: [
      { internalType: "uint256", name: "decimals", type: "uint256" },
      { internalType: "uint256", name: "ltv", type: "uint256" },
      {
        internalType: "uint256",
        name: "liquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationBonus",
        type: "uint256",
      },
      { internalType: "uint256", name: "reserveFactor", type: "uint256" },
      {
        internalType: "bool",
        name: "usageAsCollateralEnabled",
        type: "bool",
      },
      { internalType: "bool", name: "borrowingEnabled", type: "bool" },
      {
        internalType: "bool",
        name: "stableBorrowRateEnabled",
        type: "bool",
      },
      { internalType: "bool", name: "isActive", type: "bool" },
      { internalType: "bool", name: "isFrozen", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const reserveTreasuryAddressABI = [
  {
    inputs: [],
    name: "RESERVE_TREASURY_ADDRESS",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];