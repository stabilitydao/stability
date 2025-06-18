// Types of ApiService v4.7.6 from 14.06.2025

//#region ===== Main reply            | GET /                                    =====

export interface ApiMainReply {
  title: string;
  time: number;
  total: Total;
  network: StabilityNetwork;
  platforms: Platforms;
  vaults: Vaults;
  metaVaults: MetaVaults;
  underlyings: Underlyings;
  assetPrices: AssetPrices;
  leaderboards: Leaderboards;
  prices: Prices;
  rewards: Rewards;
  error?: string;
}

export interface Total {
  tvl: number;
  usersEarned: number;
  activeVaults: number;
  farms: number;
  vaultForBuilding: number;
  chainTvl: { [chainId: string]: number };
}

export interface StabilityNetwork {
  status: string;
  nodes: { [machineId: string]: NodeState };
}

export type NodeState = {
  hostname: string | 'private';
  seedNode: boolean;
  lifetime: number;
  about: string;
  lastSeen?: number;
  services: ServiceState[];
};

export type ServiceState = {
  name: string;
  id?: string;
  status?: string;
  stat?: any;
};

export type Underlyings = {
  [chainId: number]: {
    [addr: string]: Underlying;
  };
};

export type Underlying = {
  address: string;
  name?: string;
  apr: {
    daily?: number;
    weekly?: number;
    monthly?: number;
    allTime?: number;
    status?: string;
  };
  provider?: string;
};

export type Vaults = {
  [chainId: number]: {
    [addrLowerCase: string]: Vault;
  };
};

export type MetaVaults = {
  [chainId: number]: {
    [addrLowerCase: string]: MetaVault;
  };
};

export type Vault = {
  address: string;
  name: string;
  symbol: string;
  strategyId: string;
  strategyShortId: string;
  sharePrice: string;
  tvl: string;
  isLeverageStrategy: boolean;
  strategy?: `0x${string}`;
  underlying?: `0x${string}`;
  underlyingSymbol?: string;
  underlyingDecimals?: number;
  lastHardWork?: number;
  status?: string;
  strategySpecific?: string;
  strategyDescription?: string;
  strategyVersion?: string;
  vaultType?: string;
  version?: string;
  assets?: `0x${string}`[];
  assetsAmounts?: string[];
  assetsPricesOnCreation?: string[];
  sharePriceLast?: string;
  assetsPricesLast?: string[];
  income?: {
    aprLatest: string;
    apr24h: string;
    aprWeek: string;
    // aprLifetime: string;
  };
  vsHold?: {
    aprLatest: string;
    aprAssetsLatest: string[];
    apr24h: string;
    aprAssets24h: string[];
    aprWeek: string;
    aprAssetsWeek: string[];
    aprLifetime: string;
    aprAssetsLifetime: string[];
    lifetime: string;
    lifetimeAssets: string[];
  };
  created?: number;
  hardWorkOnDeposit?: boolean;
  gasReserve?: string;
  vaultManagerId?: number;
  pool?: {
    address: string;
    ammName?: string;
    ammAlgoName?: string;
    tvl?: number;
    amountToken0?: number;
    amountToken1?: number;
    fee?: number;
    tick?: number;
    ampFactor?: string;
  };
  alm?: {
    protocol: string;
    tvl: number;
    amountToken0: number;
    amountToken1: number;
    positions: {
      tvl: number;
      amountToken0: number;
      amountToken1: number;
      lowerTick: number;
      upperTick: number;
      inRange: boolean;
    }[];
  };
  almRebalanceRawData?: string[][];
  almFee?: {
    income: number;
    deposit: number;
    withdraw: number;
    rebalance: number;
  };
  leverageLending?: {
    ltv: number;
    maxLtv: number;
    leverage: number;
    supplyApr: number;
    borrowApr: number;
    targetLeveragePercent: number;
  };
  risk?: Risk;
};

export type MetaVault = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  sharePrice?: string;
  tvl: string;
  APR?: string;
  merklAPR?: string;
  assets: `0x${string}`[];
  vaults: `0x${string}`[];
  deposited?: string;
};

export type Risk = {
  symbol: string;
  isRektStrategy?: string;
  factors: string[];
};

export type AssetPrices = {
  [chainId: number]: {
    [addr: string]: AssetPriceUsd;
  };
};

export type Prices = {
  [symbol: string]: {
    price: string;
    priceChange: number;
  };
};

export type AssetPriceUsd = {
  price: string;
  trusted: boolean;
};

export type Platforms = { [chainId: number]: Platform };

export type Platform = {
  versions: {
    platform: string;
    vaultType: { [id: string]: string };
    strategy: { [id: string]: string };
  };
  bcAssets: string[];
  buildingPayPerVaultToken: string;
  buildingPermitToken: string;
};

export type Leaderboards = { [contestId: string]: User[] };

export type User = {
  address: `0x${string}`;
  deposit: number;
  earned: number;
  xp?: number;
  points?: number;
  name?: string;
  img?: string;
  metaVaults?: {[metaVaultAddr:string]: {
    deposit: number;
    earned: number;
  }; };
};

export type Rewards = {
  gemsAprMultiplier: number;
  metaVaultAprMultiplier: {[metaVaultAddressLc: `0x${string}`]: number},
};

//#endregion

//#region ===== Sync                  | POST /                                   =====

export interface ApiPostBody {
  type: InteractionType;
  machineId: string;
  accessCode: string;
  time: {
    main: number;
    factory: number;
    contests: number;
  };
  state: NodeState;
  data?: PlatformDataPartial;
}

export enum InteractionType {
  SYNC = 'SYNC',
  DATA_DELIVERY = 'DATA_DELIVERY',
}

export interface ApiPostReply {
  message: string;
  data: PlatformDataPartial | PlatformDataFull;
  tasks?: any;
}

export interface PlatformDataPartial {
  main?: ApiMainReply;
  factory?: ApiFactoryReply;
  contests?: ApiContestsReply;
}

export interface PlatformDataFull extends PlatformDataPartial {
  main: ApiMainReply;
  factory: ApiFactoryReply;
  contests: ApiContestsReply;
}

//#endregion

//#region ===== Swap by agg           | GET /swap/:chainId/:src/:dst/:amountIn   =====

export type ApiAggSwapData = {
  agg: string;
  src: string;
  dst: string;
  amountIn: string;
  aggApiReply?: {
    status: number;
    errorMessage?: string;
  };
  router?: string;
  amountOut?: string;
  txData?: string;
  route?: InchRouteItem[][][];
};

export type InchRouteItem = {
  name: string;
  part: number;
  fromTokenAddress: string;
  toTokenAddress: string;
};

//#endregion

//#region ===== Factory               | GET /factory                             =====
export interface ApiFactoryReply {
  time: number;
  hash: string;
  data: {
    [chainId: string]: {
      farms: Farm[];
      toBuild: TBuildVariant[];
    };
  };
}

export interface Farm {
  status: number;
  pool: `0x${string}`;
  strategyLogicId: string;
  rewardAssets: `0x${string}`[];
  addresses: `0x${string}`[];
  nums: string[];
  ticks: number[];
}

export type TBuildVariant = {
  vaultType: string;
  strategyId: string;
  strategyDesc: string;
  canBuild: boolean;
  initParams: TInitParams;
};

export type TInitParams = {
  initVaultAddresses: string[];
  initVaultNums: string[];
  initStrategyAddresses: string[];
  initStrategyNums: string[];
  initStrategyTicks: number[];
};

//#endregion

//#region ===== Contests              | GET /contests                            =====

export interface ApiContestsReply {
  time: number;
  hash: string;
  data: Leaderboards;
  gemsRewards: { [contestId: string]: ContestGemsRewards };
}

export interface ContestGemsRewards {
  merkleRoot: string;
  gemsWinners: {
    address: `0x${string}`;
    gems: number;
    gemsRaw: string;
  }[];
  proofs: string[][];
  merkleDistributorState?: {
    [chainId: string]: {
      totalAmount: string;
    };
  };
}

//#endregion

//#region ===== Contest               | GET /contests/:contestId                 =====

export interface ApiContestReply {
  leaderboard: User[];
  gemsRewards?: ContestGemsRewards;
}

//#endregion

//#region ===== Verify task [Intract] | POST /verify/intract/:contestId          =====

export interface ApiVerifyIntractPostRequestBody {
  address: string;
  twitter?: string;
  twitterHandle?: string;
  discord?: string;
  discordUsername?: string;
  telegram?: string;
  email?: string;
}

export interface ApiVerifyIntractReply {
  error: {
    code: number; // 0 - ok
    message: string;
  };
  data: {
    // required, whether success or error
    result: true | false; // bool, the user has done the task.
    metric: number; // earned USD
    metricDataType: 'DOUBLE';
  };
}

//#endregion

//#region ===== Rewards for user      | GET /rewards/user/:userAddress           =====

export interface UserRewards {
  gemsEarned: {
    contestId: string;
    gems: number;
    gemsRaw: string;
    proofs: string[];
  }[];
}

//#endregion

//#region ===== Silo rewards for user | GET /rewards/silo-points/:account        =====
export interface SiloRewardsReply {
  account: string;
  stabilitySiloPoints: number;
  siloPoints: number;
}

//#endregion

//#region ===== Swapper               | GET /swapper                             =====

export type Pair = {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: `0x${string}`;
  baseToken: {
    address: `0x${string}`;
    name: string;
    symbol: string;
  };
  quoteToken: {
    address: `0x${string}`;
    name: string;
    symbol: string;
  };
  priceNative: string;
  priceUsd: string;
  txns: {
    m5: {
      buys: number;
      sells: number;
    };
    h1: {
      buys: number;
      sells: number;
    };
    h6: {
      buys: number;
      sells: number;
    };
    h24: {
      buys: number;
      sells: number;
    };
  };
  volume: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
  priceChange: {
    h1: number;
    h6: number;
    h24: number;
  };
  liquidity: {
    usd: number;
    base: number;
    quote: number;
  };
  fdv: number;
  marketCap: number;
  info: {
    imageUrl: string;
    header: string;
    openGraph: string;
    websites: {
      label: string;
      url: string;
    }[];
    socials: {
      type: string;
      url: string;
    }[];
  };
};

export type Pool = {
  ammAdapter: `0x${string}`;
  id: `0x${string}`;
  tokenIn: `0x${string}`;
  tokenOut: `0x${string}`;
  pool?: `0x${string}`;
  assetAdded?: boolean;
};

export type DexScreener = {
  schemaVersion: string;
  pairs: Pair[] | null;
  pair: Pair | null;
};

export interface DexPool extends Pool {
  dexScreener: DexScreener;
}

export interface SwapperReply {
  pools: DexPool[];
  bcPools: DexPool[];
}

//#endregion