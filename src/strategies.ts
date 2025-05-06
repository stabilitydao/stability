import { DeFiProtocol, integrations } from "./integrations";
import { ChainName } from "./chains";

export type Strategy = {
  id: string;
  shortId: StrategyShortId;
  state: StrategyState;
  contractGithubId: number | "is-being-created";
  color: string;
  bgColor: string;
  baseStrategies: BaseStrategy[];
  protocols: `${string}:${string}`[]; //<orgranizationSlug>:<protocolSlug>
  sourceCode?: string;
  ammAdapter?: string;
  description?: string;
};

export const enum StrategyShortId {
  QSMF = "QSMF",
  DQMF = "DQMF",
  IQMF = "IQMF",
  GQMF = "GQMF",
  IRMF = "IRMF",
  GRMF = "GRMF",
  CF = "CF",
  CCF = "CCF",
  Y = "Y",
  SQMF = "SQMF",
  RSBMF = "RSBMF",
  DRBMF = "DRBMF",
  IRBMF = "IRBMF",
  GAF = "GAF",
  AS1BLS = "AS1BLS",
  GUMF = "GUMF",
  CUMF = "CUMF",
  CBMF = "CBMF",
  ABMF = "ABMF",
  BSMF = "BSMF",
  TPF = "TPF",
  IPF = "IPF",
  SL = "SL",
  SS = "SS",
  PF = "PF",
  IPLF = "IPLF",
  IRF = "IRF",
  SiF = "SiF",
  BSF = "BSF",
  BWF = "BWF",
  EF = "EF",
  ISF = "ISF",
  SF = "SF",
  IEF = "IEF",
  GEF = "GEF",
  ASF = "ASF",
  Si = "Si",
  SiL = "SiL",
  SiAL = "SiAL",
  M = "M",
  MMF = "MMF",
  VMF = "VMF",
  AMF = "AMF",
  ShF = "ShF",
  EMF = "EMF",
  A = "A",
}

export enum StrategyState {
  CANCELLED = "CANCELLED",
  PROPOSAL = "PROPOSAL",
  POSSIBLE = "POSSIBLE",
  BLOCKED = "BLOCKED",
  AWAITING = "AWAITING",
  DEVELOPMENT = "DEVELOPMENT",
  DEPLOYMENT = "DEPLOYMENT",
  LIVE = "LIVE",
}

export enum BaseStrategy {
  FARMING = "Farming",
  LP = "LP",
  MERKL = "Merkl",
  ERC4626 = "ERC4626",
  LEVERAGED_LENDING = "Leveraged Lending",
  ALM = "ALM",
}

export const strategyStateDescription: { [state in StrategyState]: string } = {
  [StrategyState.CANCELLED]: "Development cancelled",
  [StrategyState.PROPOSAL]:
    "The strategy described in free form is proposed for development",
  [StrategyState.POSSIBLE]:
    "Proposed strategy can be deployed at supported network",
  [StrategyState.BLOCKED]: "Development blocked by not solved BLOCKER issue",
  [StrategyState.AWAITING]:
    "The task of developing a strategy is formulated, the base contracts are indicated and the logic is described. We are waiting for the implementer to appear.",
  [StrategyState.DEVELOPMENT]: "The strategy is under development",
  [StrategyState.DEPLOYMENT]:
    "The strategy has been developed. Awaiting deployment.",
  [StrategyState.LIVE]: "Vault and strategy are deployed and working",
};

export const baseStrategyContracts: { [baseStrategy in BaseStrategy]: string } =
  {
    [BaseStrategy.LP]: "LPStrategyBase",
    [BaseStrategy.FARMING]: "FarmingStrategyBase",
    [BaseStrategy.MERKL]: "MerklStrategyBase",
    [BaseStrategy.ERC4626]: "ERC4626StrategyBase",
    [BaseStrategy.LEVERAGED_LENDING]: "LeveragedLendingStrategyBase",
    [BaseStrategy.ALM]: "ALMStrategyBase",
  };

export const strategies: { [shortId in StrategyShortId]: Strategy } = {
  [StrategyShortId.QSMF]: {
    id: "QuickSwap Static Merkl Farm",
    shortId: StrategyShortId.QSMF,
    state: StrategyState.LIVE,
    contractGithubId: 101,
    color: "#558ac5",
    bgColor: "#000000",
    sourceCode: "QuickSwapStaticMerklFarmStrategy.sol",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`quickswap:quickswapV3`, "angle:merkl"],
    ammAdapter: "Algebra",
  },
  [StrategyShortId.DQMF]: {
    id: "DefiEdge QuickSwap Merkl Farm",
    shortId: StrategyShortId.DQMF,
    state: StrategyState.LIVE,
    contractGithubId: 80,
    color: "#a5c2ff",
    bgColor: "#000000",
    sourceCode: "DefiEdgeQuickSwapMerklFarmStrategy.sol",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`defiEdge:defiEdge`, `quickswap:quickswapV3`, "angle:merkl"],
    ammAdapter: "Algebra",
  },
  [StrategyShortId.IQMF]: {
    id: "Ichi QuickSwap Merkl Farm",
    shortId: StrategyShortId.IQMF,
    state: StrategyState.LIVE,
    contractGithubId: 81,
    color: "#965fff",
    bgColor: "#000000",
    sourceCode: "IchiQuickSwapMerklFarmStrategy.sol",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`ichi:ichi`, `quickswap:quickswapV3`, "angle:merkl"],
    ammAdapter: "Algebra",
  },
  [StrategyShortId.GQMF]: {
    id: "Gamma QuickSwap Merkl Farm",
    shortId: StrategyShortId.GQMF,
    state: StrategyState.LIVE,
    contractGithubId: 90,
    color: "#de43ff",
    bgColor: "#140414",
    sourceCode: "GammaQuickSwapMerklFarmStrategy.sol",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`gamma:gamma`, `quickswap:quickswapV3`, "angle:merkl"],
    ammAdapter: "Algebra",
  },
  [StrategyShortId.IRMF]: {
    id: "Ichi Retro Merkl Farm",
    shortId: StrategyShortId.IRMF,
    state: StrategyState.LIVE,
    contractGithubId: 95,
    color: "#28fffb",
    bgColor: "#000000",
    sourceCode: "IchiRetroMerklFarmStrategy.sol",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`ichi:ichi`, `retro:retro`, "angle:merkl"],
    ammAdapter: "UniswapV3",
  },
  [StrategyShortId.GRMF]: {
    id: "Gamma Retro Merkl Farm",
    shortId: StrategyShortId.GRMF,
    state: StrategyState.LIVE,
    contractGithubId: 99,
    color: "#ff0000",
    bgColor: "#000000",
    sourceCode: "GammaRetroMerklFarmStrategy.sol",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`gamma:gamma`, `retro:retro`, "angle:merkl"],
    ammAdapter: "UniswapV3",
  },
  [StrategyShortId.CF]: {
    id: "Compound Farm",
    shortId: StrategyShortId.CF,
    state: StrategyState.LIVE,
    contractGithubId: 79,
    color: "#00d395",
    sourceCode: "CompoundFarmStrategy.sol",
    baseStrategies: [BaseStrategy.FARMING],
    protocols: [`compound:compoundV3`],
    bgColor: "#000000",
  },
  [StrategyShortId.CCF]: {
    id: "Curve Convex Farm",
    shortId: StrategyShortId.CCF,
    state: StrategyState.LIVE,
    contractGithubId: 110,
    color: "#dddddd",
    bgColor: "#000000",
    sourceCode: "CurveConvexFarmStrategy.sol",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: [`curve:stableSwapNg`, `convex:convex`],
    ammAdapter: "Curve",
  },
  [StrategyShortId.Y]: {
    id: "Yearn",
    shortId: StrategyShortId.Y,
    state: StrategyState.LIVE,
    contractGithubId: 114,
    color: "#dc568a",
    bgColor: "#000000",
    sourceCode: "YearnStrategy.sol",
    baseStrategies: [BaseStrategy.ERC4626],
    protocols: [`yearn:yearnV3`],
  },
  [StrategyShortId.SQMF]: {
    id: "Steer QuickSwap Merkl Farm",
    shortId: StrategyShortId.SQMF,
    state: StrategyState.DEPLOYMENT,
    contractGithubId: 85,
    color: "#8587ff",
    bgColor: "#000000",
    sourceCode: "SteerQuickSwapMerklFarmStrategy.sol",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`steer:steer`, `quickswap:quickswapV3`, "angle:merkl"],
    ammAdapter: "Algebra",
  },
  [StrategyShortId.GAF]: {
    id: "Gyroscope Aura Farm",
    shortId: StrategyShortId.GAF,
    state: StrategyState.CANCELLED,
    contractGithubId: 121,
    color: "#f2fea6",
    bgColor: "#2e005f",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: [`gyroscope:eclp`, `aura:aura`],
    ammAdapter: "Gyroscope",
  },
  [StrategyShortId.RSBMF]: {
    id: "Retro Static Boosted Merkl Farm",
    shortId: StrategyShortId.RSBMF,
    state: StrategyState.CANCELLED,
    contractGithubId: 122,
    color: "#ff0000",
    bgColor: "#420060",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`retro:retro`, "angle:merkl"],
    ammAdapter: "UniswapV3",
  },
  [StrategyShortId.DRBMF]: {
    id: "DefiEdge Retro Boosted Merkl Farm",
    shortId: StrategyShortId.DRBMF,
    state: StrategyState.CANCELLED,
    contractGithubId: 98,
    color: "#ff0000",
    bgColor: "#420060",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`defiEdge:defiEdge`, `retro:retro`, "angle:merkl"],
    ammAdapter: "UniswapV3",
  },
  [StrategyShortId.IRBMF]: {
    id: "Ichi Retro Boosted Merkl Farm",
    shortId: StrategyShortId.IRBMF,
    state: StrategyState.CANCELLED,
    contractGithubId: 91,
    color: "#e1d1ff",
    bgColor: "#420060",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`ichi:ichi`, `retro:retro`, "angle:merkl"],
    ammAdapter: "UniswapV3",
  },
  [StrategyShortId.AS1BLS]: {
    id: "Aave Stader 1inch Balancer",
    shortId: StrategyShortId.AS1BLS,
    state: StrategyState.CANCELLED,
    contractGithubId: 127,
    color: "#07a658",
    bgColor: "#1a024d",
    baseStrategies: [BaseStrategy.LEVERAGED_LENDING],
    protocols: [`aave:aaveV3`, `stader:stader`, "oneInch:oneInch"],
  },
  [StrategyShortId.GUMF]: {
    id: "Gamma UniswapV3 Merkl Farm",
    shortId: StrategyShortId.GUMF,
    state: StrategyState.LIVE,
    contractGithubId: 145,
    color: "#ff0000",
    bgColor: "#000000",
    ammAdapter: "UniswapV3",
    sourceCode: "GammaUniswapV3MerklFarmStrategy.sol",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`gamma:gamma`, `uniswap:uniswapV3`, "angle:merkl"],
  },
  [StrategyShortId.CUMF]: {
    id: "Charm UniswapV3 Merkl Farm",
    shortId: StrategyShortId.CUMF,
    state: StrategyState.CANCELLED,
    contractGithubId: 144,
    color: "#ff2299",
    bgColor: "#000000",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`charm:alphaVaults`, `uniswap:uniswapV3`, "angle:merkl"],
  },
  [StrategyShortId.CBMF]: {
    id: "Charm BaseSwap Merkl Farm",
    shortId: StrategyShortId.CBMF,
    state: StrategyState.CANCELLED,
    contractGithubId: 148,
    color: "#2238ff",
    bgColor: "#000000",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`charm:alphaVaults`, `baseswap:baseswap`, "angle:merkl"],
  },
  [StrategyShortId.ABMF]: {
    id: "A51 BaseSwap Merkl Farm",
    shortId: StrategyShortId.ABMF,
    state: StrategyState.CANCELLED,
    contractGithubId: 147,
    color: "#e74c3c",
    bgColor: "#000000",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`a51:a51`, `baseswap:baseswap`, "angle:merkl"],
  },
  [StrategyShortId.BSMF]: {
    id: "Beefy Sushi Merkl Farm",
    shortId: StrategyShortId.BSMF,
    state: StrategyState.CANCELLED,
    contractGithubId: 166,
    color: "#ffffff",
    bgColor: "#21243a",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    protocols: [`beefy:clm`, `sushi:v3Amm`, "angle:merkl"],
  },
  [StrategyShortId.TPF]: {
    id: "Trident Pearl Farm",
    shortId: StrategyShortId.TPF,
    state: StrategyState.LIVE,
    contractGithubId: 172,
    color: "#ffe300",
    bgColor: "#004e67",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: [`pearl:trident`, `pearl:pearlV2`],
    description: "Earn Pearl LP rewards by Trident ALM",
  },
  [StrategyShortId.IPF]: {
    id: "Ichi Pearl Farm",
    shortId: StrategyShortId.IPF,
    state: StrategyState.CANCELLED,
    contractGithubId: 174,
    color: "#599bff",
    bgColor: "#004e67",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: [`ichi:ichi`, `pearl:pearlV2`],
    description: "Earn Pearl LP rewards by Ichi",
  },
  [StrategyShortId.SL]: {
    id: "Stack Leverage",
    shortId: StrategyShortId.SL,
    state: StrategyState.CANCELLED,
    contractGithubId: 175,
    color: "#ffbc0f",
    bgColor: "#000000",
    baseStrategies: [BaseStrategy.LEVERAGED_LENDING],
    protocols: [`pearl:stack`],
    description:
      "Manage leveraged Stack CDP position with yield-bearing collateral asset..",
  },
  [StrategyShortId.SS]: {
    id: "Stack Staking",
    shortId: StrategyShortId.SS,
    state: StrategyState.CANCELLED,
    contractGithubId: 176,
    color: "#ffbc0f",
    bgColor: "#d60d1d",
    baseStrategies: [],
    protocols: [`pearl:stack`],
    description: "Stake $MORE on Stack",
  },
  [StrategyShortId.PF]: {
    id: "Pearl Farm",
    shortId: StrategyShortId.PF,
    state: StrategyState.CANCELLED,
    contractGithubId: 180,
    color: "#274BC4",
    bgColor: "#0e1c48",
    ammAdapter: "Solidly",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: [`pearl:pearlV2`],
    description: "Earn Pearl LP rewards on stable and volatile AMMs",
  },
  [StrategyShortId.IPLF]: {
    id: "Impermax Pearl Leverage Farm",
    shortId: StrategyShortId.IPLF,
    state: StrategyState.CANCELLED,
    contractGithubId: 181,
    color: "#19A29B",
    bgColor: "#000000",
    ammAdapter: "Solidly",
    baseStrategies: [
      BaseStrategy.LEVERAGED_LENDING,
      BaseStrategy.LP,
      BaseStrategy.FARMING,
    ],
    protocols: [`impermax:impermax`, `pearl:pearlV2`],
    description: "Earn IBEX by leveraged lending position of Pearl LP",
  },
  [StrategyShortId.IRF]: {
    id: "Ichi Ramses Farm",
    shortId: StrategyShortId.IRF,
    state: StrategyState.CANCELLED,
    contractGithubId: 187,
    color: "#9d9d9d",
    bgColor: "#000000",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: ["ichi:ichi", "ramses:ramses"],
    description: "Earn Ramses LP rewards by Ichi",
  },
  [StrategyShortId.SiF]: {
    id: "Silo Farm",
    shortId: StrategyShortId.SiF,
    state: StrategyState.LIVE,
    contractGithubId: 193,
    color: "#9d9d9d",
    bgColor: "#000000",
    baseStrategies: [BaseStrategy.FARMING],
    protocols: ["silo:siloV2"],
    description: "Lend asset on Silo V2 and earn incentives",
  },
  [StrategyShortId.BSF]: {
    id: "Beets Stable Farm",
    shortId: StrategyShortId.BSF,
    state: StrategyState.LIVE,
    contractGithubId: 195,
    color: "#ff0000",
    bgColor: "#001700",
    ammAdapter: "BalancerComposableStable",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: ["beethovenx:beethovenx"],
    description: "Earn Beets stable pool LP fees and gauge rewards",
  },
  [StrategyShortId.BWF]: {
    id: "Beets Weighted Farm",
    shortId: StrategyShortId.BWF,
    state: StrategyState.LIVE,
    contractGithubId: 196,
    color: "#ff0000",
    bgColor: "#000033",
    ammAdapter: "BalancerWeighted",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: ["beethovenx:beethovenx"],
    description: "Earn Beethoven X weighted pool LP fees and gauge rewards",
  },
  [StrategyShortId.EF]: {
    id: "Equalizer Farm",
    shortId: StrategyShortId.EF,
    state: StrategyState.LIVE,
    contractGithubId: 199,
    color: "#20c9e7",
    bgColor: "#000000",
    ammAdapter: "Solidly",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: ["equalizer:equalizer"],
    description: "Earn Equalizer gauge rewards by classic LPs",
  },
  [StrategyShortId.ISF]: {
    id: "Ichi SwapX Farm",
    shortId: StrategyShortId.ISF,
    state: StrategyState.LIVE,
    contractGithubId: 201,
    color: "#257bff",
    bgColor: "#061606",
    ammAdapter: "AlgebraV4",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: ["ichi:ichi", "swapx:swapx"],
    description: "Earn SwapX farm rewards by Ichi ALM",
  },
  [StrategyShortId.SF]: {
    id: "SwapX Farm",
    shortId: StrategyShortId.SF,
    state: StrategyState.LIVE,
    contractGithubId: 202,
    color: "#7dff7e",
    bgColor: "#000000",
    ammAdapter: "Solidly",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: ["swapx:swapx"],
    description: "Earn SwapX farm rewards by classic LPs",
  },
  [StrategyShortId.IEF]: {
    id: "Ichi Equalizer Farm",
    shortId: StrategyShortId.IEF,
    state: StrategyState.DEPLOYMENT,
    contractGithubId: 206,
    color: "#257bff",
    bgColor: "#061416",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: ["ichi:ichi", "equalizer:equalizer"],
    description: "Earn Equalizer farm rewards by Ichi ALM",
  },
  [StrategyShortId.GEF]: {
    id: "Gamma Equalizer Farm",
    shortId: StrategyShortId.GEF,
    state: StrategyState.DEPLOYMENT,
    contractGithubId: 207,
    color: "#ff0000",
    bgColor: "#061416",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: ["gamma:gamma", "equalizer:equalizer"],
    description: "Earn Equalizer farm rewards by Gamma ALM",
  },
  [StrategyShortId.ASF]: {
    id: "ALM Shadow Farm",
    shortId: StrategyShortId.ASF,
    state: StrategyState.LIVE,
    contractGithubId: 213,
    color: "#411fa8",
    bgColor: "#000000",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.ALM, BaseStrategy.FARMING],
    protocols: ["shadow:shadow"],
    description: "Earn Shadow gauge rewards by Stability ALM",
  },
  [StrategyShortId.Si]: {
    id: "Silo",
    shortId: StrategyShortId.Si,
    state: StrategyState.LIVE,
    contractGithubId: 218,
    color: "#e7e7e7",
    bgColor: "#000000",
    baseStrategies: [],
    protocols: ["silo:siloV2"],
    description: "Lend asset on Silo V2",
  },
  [StrategyShortId.SiL]: {
    id: "Silo Leverage",
    shortId: StrategyShortId.SiL,
    state: StrategyState.LIVE,
    contractGithubId: 222,
    color: "#ff0000",
    bgColor: "#190031",
    baseStrategies: [BaseStrategy.LEVERAGED_LENDING],
    protocols: ["silo:siloV2"],
    description: "Leverage lending on Silo V2",
  },
  [StrategyShortId.SiAL]: {
    id: "Silo Advanced Leverage",
    shortId: StrategyShortId.SiAL,
    state: StrategyState.LIVE,
    contractGithubId: 229,
    color: "#ff00ea",
    bgColor: "#190031",
    baseStrategies: [BaseStrategy.LEVERAGED_LENDING],
    protocols: ["silo:siloV2"],
    description: "Advanced leverage lending on Silo V2",
  },
  [StrategyShortId.M]: {
    id: "Mach",
    shortId: StrategyShortId.M,
    state: StrategyState.AWAITING,
    contractGithubId: 239,
    color: "#e38039",
    bgColor: "#000000",
    baseStrategies: [],
    protocols: ["mach:mach"],
    description: "Lend asset on Mach",
  },
  [StrategyShortId.MMF]: {
    id: "Mach Merkl Farm",
    shortId: StrategyShortId.MMF,
    state: StrategyState.CANCELLED,
    contractGithubId: 240,
    color: "#e38039",
    bgColor: "#212121",
    baseStrategies: [BaseStrategy.FARMING, BaseStrategy.MERKL],
    protocols: ["mach:mach", "angle:merkl"],
    description: "Lend asset on Mach and earn Merkl rewards",
  },
  [StrategyShortId.VMF]: {
    id: "Vicuna Merkl Farm",
    shortId: StrategyShortId.VMF,
    state: StrategyState.CANCELLED,
    contractGithubId: 241,
    color: "#e7c397",
    bgColor: "#212121",
    baseStrategies: [BaseStrategy.FARMING, BaseStrategy.MERKL],
    protocols: ["vicuna:vicuna", "angle:merkl"],
    description: "Lend asset on Vicuna and earn Merkl rewards",
  },
  [StrategyShortId.AMF]: {
    id: "Aave Merit Farm",
    shortId: StrategyShortId.AMF,
    state: StrategyState.AWAITING,
    contractGithubId: 242,
    color: "#ffffff",
    bgColor: "#2d1d39",
    baseStrategies: [BaseStrategy.FARMING],
    protocols: ["aave:aaveV3"],
    description: "Lend asset on Aave V3 and earn Merit rewards",
  },
  [StrategyShortId.ShF]: {
    id: "Shadow Farm",
    shortId: StrategyShortId.ShF,
    state: StrategyState.AWAITING,
    contractGithubId: 250,
    color: "#f1a441",
    bgColor: "#000000",
    ammAdapter: "Solidly",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    protocols: ["shadow:shadow"],
    description: "Earn Shadow farm rewards by classic LPs",
  },
  [StrategyShortId.EMF]: {
    id: "Euler Merkl Farm",
    shortId: StrategyShortId.EMF,
    state: StrategyState.AWAITING,
    contractGithubId: 251,
    color: "#186d66",
    bgColor: "#000000",
    baseStrategies: [BaseStrategy.FARMING, BaseStrategy.MERKL],
    protocols: ["euler:eulerV2", "angle:merkl"],
    description: "Lend asset on Euler and earn Merkl rewards",
  },
  [StrategyShortId.A]: {
    id: "Aave",
    shortId: StrategyShortId.A,
    state: StrategyState.AWAITING,
    contractGithubId: 252,
    color: "#e7c397",
    bgColor: "#000000",
    baseStrategies: [],
    protocols: ["aave:aaveV3"],
    description: "Lend asset on Aave V3 based lending markets",
  },
};

export const getMerklStrategies = (): string[] => {
  const strategyShortIds = integrations.angle.protocols.merkl
    .strategies as StrategyShortId[];
  return strategyShortIds.map((shortId) => {
    const strategy = strategies[shortId] as Strategy;
    return strategy.id;
  });
};

export const getALMStrategies = (): string[] => {
  return Object.keys(strategies)
    .filter((shortId) =>
      strategies[shortId as StrategyShortId].baseStrategies.includes(
        BaseStrategy.ALM,
      ),
    )
    .map((shortId) => strategies[shortId as StrategyShortId].id);
};

export const getStrategyShortId = (
  strategyId: string,
): StrategyShortId | undefined => {
  for (const strategyShortId of Object.keys(strategies)) {
    if (strategies[strategyShortId as StrategyShortId].id === strategyId) {
      return strategyShortId as StrategyShortId;
    }
  }
  return undefined;
};

export const getStrategiesTotals = (): { [state in StrategyState]: number } => {
  const ids = Object.keys(strategies);
  return {
    [StrategyState.CANCELLED]: ids.filter(
      (strategyShortId) =>
        strategies[strategyShortId as StrategyShortId].state ==
        StrategyState.CANCELLED,
    ).length,
    [StrategyState.PROPOSAL]: ids.filter(
      (strategyShortId) =>
        strategies[strategyShortId as StrategyShortId].state ==
        StrategyState.PROPOSAL,
    ).length,
    [StrategyState.POSSIBLE]: ids.filter(
      (strategyShortId) =>
        strategies[strategyShortId as StrategyShortId].state ==
        StrategyState.POSSIBLE,
    ).length,
    [StrategyState.BLOCKED]: ids.filter(
      (strategyShortId) =>
        strategies[strategyShortId as StrategyShortId].state ==
        StrategyState.BLOCKED,
    ).length,
    [StrategyState.AWAITING]: ids.filter(
      (strategyShortId) =>
        strategies[strategyShortId as StrategyShortId].state ==
        StrategyState.AWAITING,
    ).length,
    [StrategyState.DEVELOPMENT]: ids.filter(
      (strategyShortId) =>
        strategies[strategyShortId as StrategyShortId].state ==
        StrategyState.DEVELOPMENT,
    ).length,
    [StrategyState.DEPLOYMENT]: ids.filter(
      (strategyShortId) =>
        strategies[strategyShortId as StrategyShortId].state ==
        StrategyState.DEPLOYMENT,
    ).length,
    [StrategyState.LIVE]: ids.filter(
      (strategyShortId) =>
        strategies[strategyShortId as StrategyShortId].state ==
        StrategyState.LIVE,
    ).length,
  };
};

export const getStrategyProtocols = (
  shortId: StrategyShortId,
): DeFiProtocol[] => {
  const r: DeFiProtocol[] = [];

  if (strategies[shortId]) {
    for (const protocol of strategies[shortId].protocols) {
      const orgName = protocol.split(":")[0];
      const protocolName = protocol.split(":")[1];

      if (
        integrations[orgName] &&
        integrations[orgName].protocols[protocolName]
      ) {
        const _protocol = integrations[orgName].protocols[protocolName];
        _protocol.organization = orgName;
        if (!_protocol.img) {
          _protocol.img = integrations[orgName].img;
        }
        r.push(_protocol);
      }
    }
  }

  return r;
};

export const getChainStrategies = (chainName: ChainName): Strategy[] => {
  const r: Strategy[] = [];

  for (const strategyShortId of Object.keys(strategies)) {
    let chainOk = true;
    const protocols = getStrategyProtocols(strategyShortId as StrategyShortId);
    for (const protocol of protocols) {
      if (!protocol.chains.includes(chainName)) {
        chainOk = false;
        break;
      }
    }
    if (chainOk) {
      r.push(strategies[strategyShortId as StrategyShortId]);
    }
  }

  return r;
};
