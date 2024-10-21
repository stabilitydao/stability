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
}

export enum StrategyState {
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
}

export const strategyStateDescription: { [state in StrategyState]: string } = {
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
    [BaseStrategy.LEVERAGED_LENDING]: "LeveragedLending",
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
    ammAdapter: "Algebra",
  },
  [StrategyShortId.GAF]: {
    id: "Gyroscope Aura Farm",
    shortId: StrategyShortId.GAF,
    state: StrategyState.DEVELOPMENT,
    contractGithubId: 121,
    color: "#f2fea6",
    bgColor: "#2e005f",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    ammAdapter: "Gyroscope",
  },
  [StrategyShortId.RSBMF]: {
    id: "Retro Static Boosted Merkl Farm",
    shortId: StrategyShortId.RSBMF,
    state: StrategyState.BLOCKED,
    contractGithubId: 122,
    color: "#ff0000",
    bgColor: "#420060",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    ammAdapter: "UniswapV3",
  },
  [StrategyShortId.DRBMF]: {
    id: "DefiEdge Retro Boosted Merkl Farm",
    shortId: StrategyShortId.DRBMF,
    state: StrategyState.BLOCKED,
    contractGithubId: 98,
    color: "#ff0000",
    bgColor: "#420060",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    ammAdapter: "UniswapV3",
  },
  [StrategyShortId.IRBMF]: {
    id: "Ichi Retro Boosted Merkl Farm",
    shortId: StrategyShortId.IRBMF,
    state: StrategyState.AWAITING,
    contractGithubId: 91,
    color: "#e1d1ff",
    bgColor: "#420060",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
    ammAdapter: "UniswapV3",
  },
  [StrategyShortId.AS1BLS]: {
    id: "Aave Stader 1inch Balancer",
    shortId: StrategyShortId.AS1BLS,
    state: StrategyState.AWAITING,
    contractGithubId: 127,
    color: "#07a658",
    bgColor: "#1a024d",
    baseStrategies: [BaseStrategy.LEVERAGED_LENDING],
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
  },
  [StrategyShortId.CUMF]: {
    id: "Charm UniswapV3 Merkl Farm",
    shortId: StrategyShortId.CUMF,
    state: StrategyState.AWAITING,
    contractGithubId: 144,
    color: "#ff2299",
    bgColor: "#000000",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
  },
  [StrategyShortId.CBMF]: {
    id: "Charm BaseSwap Merkl Farm",
    shortId: StrategyShortId.CBMF,
    state: StrategyState.AWAITING,
    contractGithubId: 148,
    color: "#2238ff",
    bgColor: "#000000",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
  },
  [StrategyShortId.ABMF]: {
    id: "A51 BaseSwap Merkl Farm",
    shortId: StrategyShortId.ABMF,
    state: StrategyState.DEVELOPMENT,
    contractGithubId: 147,
    color: "#e74c3c",
    bgColor: "#000000",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
  },
  [StrategyShortId.BSMF]: {
    id: "Beefy Sushi Merkl Farm",
    shortId: StrategyShortId.BSMF,
    state: StrategyState.AWAITING,
    contractGithubId: 166,
    color: "#ffffff",
    bgColor: "#21243a",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.MERKL, BaseStrategy.FARMING],
  },
  [StrategyShortId.TPF]: {
    id: "Trident Pearl Farm",
    shortId: StrategyShortId.TPF,
    state: StrategyState.DEVELOPMENT,
    contractGithubId: 172,
    color: "#ffe300",
    bgColor: "#004e67",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    description: "Earn Pearl LP rewards by Trident ALM",
  },
  [StrategyShortId.IPF]: {
    id: "Ichi Pearl Farm",
    shortId: StrategyShortId.IPF,
    state: StrategyState.AWAITING,
    contractGithubId: 174,
    color: "#599bff",
    bgColor: "#004e67",
    ammAdapter: "UniswapV3",
    baseStrategies: [BaseStrategy.LP, BaseStrategy.FARMING],
    description: "Earn Pearl LP rewards by Ichi",
  },
  [StrategyShortId.SL]: {
    id: "Stack Leverage",
    shortId: StrategyShortId.SL,
    state: StrategyState.AWAITING,
    contractGithubId: 175,
    color: "#ffbc0f",
    bgColor: "#000000",
    baseStrategies: [BaseStrategy.LEVERAGED_LENDING],
    description:
      "Manage leveraged Stack CDP position with yield-bearing collateral asset. Use Swapper.",
  },
  [StrategyShortId.SS]: {
    id: "Stack Staking",
    shortId: StrategyShortId.SS,
    state: StrategyState.AWAITING,
    contractGithubId: 176,
    color: "#ffbc0f",
    bgColor: "#d60d1d",
    baseStrategies: [],
    description: "Stake $MORE on Stack",
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
  for (const orgSlug of Object.keys(integrations)) {
    const org = integrations[orgSlug];
    for (const protocolSlug of Object.keys(org.protocols)) {
      const protocol = org.protocols[protocolSlug];
      if (protocol.strategies?.includes(shortId)) {
        protocol.organization = orgSlug;
        r.push(protocol);
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
