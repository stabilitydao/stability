// Types of ApiService v3.1.0 from 01.10.2024

//#region ===== Main reply  | GET /                                    =====

export interface ApiMainReply {
  title: string;
  time: number;
  total: Total;
  network: StabilityNetwork;
  platforms: Platforms;
  vaults: Vaults;
  underlyings: Underlyings;
  assetPrices: AssetPrices;
  leaderboard: User[];
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
    monthly?: number;
    allTime?: number;
    status?: string;
  };
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

export type User = {
  address: `0x${string}`;
  deposit: number;
  earned: number;
};

//#endregion

//#region ===== Sync        | POST /                                   =====

export interface ApiPostBody {
  type: InteractionType;
  machineId: string;
  accessCode: string;
  time: number;
  state: NodeState;
  data?: any;
}

export enum InteractionType {
  SYNC = 'SYNC',
  DATA_DELIVERY = 'DATA_DELIVERY',
}

export interface  ApiPostReply {
  message: string;
  apiReply?: ApiMainReply,
  tasks?: any;
}

//#endregion

//#region ===== Swap by agg | GET /swap/:chainId/:src/:dst/:amountIn   =====

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

//#region ===== Factory     | GET /factory                             =====
export interface ApiFactoryReply {
  [chainId: string]: {
    farms: Farm[];
    toBuild: TBuildVariant[];
  }
}

export interface Farm {
  status: bigint;
  pool: `0x${string}`;
  strategyLogicId: string;
  rewardAssets: `0x${string}`[];
  addresses: `0x${string}`[];
  nums: bigint[];
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
  initVaultNums: bigint[];
  initStrategyAddresses: string[];
  initStrategyNums: bigint[];
  initStrategyTicks: number[];
}

//#endregion
