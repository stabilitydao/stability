export type ApiMainReply = {
  title: string;
  about: string;
  status: string;
  services: string[];
  vaults: Vaults;
  underlyings: Underlyings;
  assetPrices: AssetPrices;
  error?: string;
};

export type ApiAggSwapData = {
  router: string;
  src: string;
  dst: string;
  amountIn: string;
  amountOut: string;
  txData: string;
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
  lastHardWork?: number;
  status?: string;
  strategySpecific?: string;
  strategyDescription?: string;
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
