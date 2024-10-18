// Types of ApiService v4.0.0 from 18.10.2024

//#region ===== Main reply            | GET /                                    =====

export interface ApiMainReply {
  title: string;
  time: number;
  total: Total;
  network: StabilityNetwork;
  platforms: Platforms;
  vaults: Vaults;
  underlyings: Underlyings;
  assetPrices: AssetPrices;
  leaderboard: User[]; // deprecated since v3.3.0
  leaderboards: Leaderboards;
  error?: string;
}

export interface Total {
  tvl: number;
  usersEarned: number;
  activeVaults: number;
  farms: number;
  vaultForBuilding: number;
  chainTvl: {[chainId: string]:number};
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

export type Vault = {
  address: string;
  name: string;
  symbol: string;
  strategyId: string;
  strategyShortId: string;
  sharePrice: string;
  tvl: string;
  strategy?: `0x${string}`;
  underlying?: `0x${string}`;
  underlyingSymbol?: string;
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
  assetsPricesLast?: string[];
  apr?: {
    incomeLatest: string;
    income24h: string;
    incomeWeek: string;
    vsHoldLifetime: string;
    vsHoldAssetsLifetime: string[];
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
  risk?: Risk;
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

export type Leaderboards = { [id: string]: User[] };

export type User = {
  address: `0x${string}`;
  deposit: number;
  earned: number;
  xp?: number;
  points?: number;
  name?: string;
  img?: string;
};

//#endregion

//#region ===== Sync                  | POST /                                   =====

export interface ApiPostBody {
  type: InteractionType;
  machineId: string;
  accessCode: string;
  time: {
    main: number,
    factory: number,
    contests: number,
  },
  state: NodeState;
  data?: PlatformDataPartial;
}

export enum InteractionType {
  SYNC = 'SYNC',
  DATA_DELIVERY = 'DATA_DELIVERY',
}

export interface  ApiPostReply {
  message: string;
  data: PlatformDataPartial|PlatformDataFull,
  tasks?: any;
}

export interface PlatformDataPartial {
  main?: ApiMainReply,
  factory?: ApiFactoryReply,
  contests?: ApiContestsReply,
}

export interface PlatformDataFull extends PlatformDataPartial {
  main: ApiMainReply,
  factory: ApiFactoryReply,
  contests: ApiContestsReply,
}

//#endregion

//#region ===== Swap by agg           | GET /swap/:chainId/:src/:dst/:amountIn   =====

export type ApiAggSwapData = {
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
  time: number
  hash: string
  data: {
    [chainId: string]: {
      farms: Farm[];
      toBuild: TBuildVariant[];
    }
  }
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
}

export type TInitParams = {
  initVaultAddresses: string[];
  initVaultNums: string[];
  initStrategyAddresses: string[];
  initStrategyNums: string[];
  initStrategyTicks: number[];
}

//#endregion

//#region ===== Contests              | GET /contests                            =====

export interface ApiContestsReply {
  time: number
  hash: string
  data: Leaderboards,
}

//#endregion

//#region ===== Contest               | GET /contests/:contestId                 =====

export interface ApiContestReply {
  leaderboard: User[]
}

//#endregion

//#region ===== Verify task [Intract] | GET /verify/intract/:contestId           =====

export interface ApiVerifyIntractPostRequestBody {
  address: string,
  twitter?: string,
  twitterHandle?: string,
  discord?: string,
  discordUsername?: string,
  telegram?: string,
  email?: string,
}

export interface ApiVerifyIntractReply {
  error: {
    code: number, // 0 - ok
    message: string,
  },
  data: { // required, whether success or error
    result: true | false, // bool, the user has done the task.
    value: number, // earned USD
  },
}

//#endregion
