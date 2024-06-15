import {integrations} from "./integrations";

export type Strategy = {
  id: string
  shortId: StrategyShortId
  state: StrategyState
  contractGithubId: number
  color: string
  bgColor: string
}

export const enum StrategyShortId {
  QSMF = 'QSMF',
  DQMF = 'DQMF',
  IQMF = 'IQMF',
  GQMF = 'GQMF',
  IRMF = 'IRMF',
  GRMF = 'GRMF',
  CF = 'CF',
  CCF = 'CCF',
  Y = 'Y',
  SQMF = 'SQMF',
  RSBMF = 'RSBMF',
  DRBMF = 'DRBMF',
  IRBMF = 'IRBMF',
  GAF = 'GAF',
  AS1BLS = 'AS1BLS',
  GUMF = 'GUMF',
  CUMF = 'CUMF',
  CBMF = 'CBMF',
  ABMF = 'ABMF',
}

export enum StrategyState {
  LIVE = 'Live',
  AWAITING_DEPLOYMENT = 'Awaiting deployment',
  DEVELOPMENT = 'Development',
  PROPOSED = 'Proposed',
}

export const strategies: {[shortId in StrategyShortId]:Strategy} = {
  [StrategyShortId.QSMF]: {
    id: 'QuickSwap Static Merkl Farm',
    shortId: StrategyShortId.QSMF,
    state: StrategyState.LIVE,
    contractGithubId: 101,
    color: "#558ac5",
    bgColor: "#000000",
  },
  [StrategyShortId.DQMF]: {
    id: 'DefiEdge QuickSwap Merkl Farm',
    shortId: StrategyShortId.DQMF,
    state: StrategyState.LIVE,
    contractGithubId: 80,
    color: "#a5c2ff",
    bgColor: "#000000",
  },
  [StrategyShortId.IQMF]: {
    id: 'Ichi QuickSwap Merkl Farm',
    shortId: StrategyShortId.IQMF,
    state: StrategyState.LIVE,
    contractGithubId: 81,
    color: "#965fff",
    bgColor: "#000000",
  },
  [StrategyShortId.GQMF]: {
    id: 'Gamma QuickSwap Merkl Farm',
    shortId: StrategyShortId.GQMF,
    state: StrategyState.LIVE,
    contractGithubId: 90,
    color: "#de43ff",
    bgColor: "#140414",
  },
  [StrategyShortId.IRMF]: {
    id: 'Ichi Retro Merkl Farm',
    shortId: StrategyShortId.IRMF,
    state: StrategyState.LIVE,
    contractGithubId: 95,
    color: "#28fffb",
    bgColor: "#000000",
  },
  [StrategyShortId.GRMF]: {
    id: 'Gamma Retro Merkl Farm',
    shortId: StrategyShortId.GRMF,
    state: StrategyState.LIVE,
    contractGithubId: 99,
    color: "#ff0000",
    bgColor: "#000000",
  },
  [StrategyShortId.CF]: {
    id: 'Compound Farm',
    shortId: StrategyShortId.CF,
    state: StrategyState.LIVE,
    contractGithubId: 79,
    color: "#00d395",
    bgColor: "#000000",
  },
  [StrategyShortId.CCF]: {
    id: 'Curve Convex Farm',
    shortId: StrategyShortId.CCF,
    state: StrategyState.LIVE,
    contractGithubId: 110,
    color: "#dddddd",
    bgColor: "#000000",
  },
  [StrategyShortId.Y]: {
    id: 'Yearn',
    shortId: StrategyShortId.Y,
    state: StrategyState.LIVE,
    contractGithubId: 114,
    color: "#dc568a",
    bgColor: "#000000",
  },
  [StrategyShortId.SQMF]: {
    id: 'Steer QuickSwap Merkl Farm',
    shortId: StrategyShortId.SQMF,
    state: StrategyState.DEVELOPMENT,
    contractGithubId: 85,
    color: "#8587ff",
    bgColor: "#000000",
  },
  [StrategyShortId.GAF]: {
    id: 'Gyroscope Aura Farm',
    shortId: StrategyShortId.GAF,
    state: StrategyState.DEVELOPMENT,
    contractGithubId: 121,
    color: "#f2fea6",
    bgColor: "#2e005f",
  },
  [StrategyShortId.RSBMF]: {
    id: 'Retro Static Boosted Merkl Farm',
    shortId: StrategyShortId.RSBMF,
    state: StrategyState.PROPOSED,
    contractGithubId: 122,
    color: "#ff0000",
    bgColor: "#420060",
  },
  [StrategyShortId.DRBMF]: {
    id: 'DefiEdge Retro Boosted Merkl Farm',
    shortId: StrategyShortId.DRBMF,
    state: StrategyState.PROPOSED,
    contractGithubId: 98,
    color: "#ff0000",
    bgColor: "#420060",
  },
  [StrategyShortId.IRBMF]: {
    id: 'Ichi Retro Boosted Merkl Farm',
    shortId: StrategyShortId.IRBMF,
    state: StrategyState.PROPOSED,
    contractGithubId: 91,
    color: "#e1d1ff",
    bgColor: "#420060",
  },
  [StrategyShortId.AS1BLS]: {
    id: 'Aave Stader 1inch Balancer',
    shortId: StrategyShortId.AS1BLS,
    state: StrategyState.PROPOSED,
    contractGithubId: 127,
    color: "#07a658",
    bgColor: "#1a024d",
  },
  [StrategyShortId.GUMF]: {
    id: 'Gamma UniswapV3 Merkl Farm',
    shortId: StrategyShortId.GUMF,
    state: StrategyState.LIVE,
    contractGithubId: 145,
    color: "#ff0000",
    bgColor: "#000000",
  },
  [StrategyShortId.CUMF]: {
    id: 'Charm UniswapV3 Merkl Farm',
    shortId: StrategyShortId.CUMF,
    state: StrategyState.PROPOSED,
    contractGithubId: 144,
    color: "#ff2299",
    bgColor: "#000000",
  },
  [StrategyShortId.CBMF]: {
    id: 'Charm BaseSwap Merkl Farm',
    shortId: StrategyShortId.CBMF,
    state: StrategyState.PROPOSED,
    contractGithubId: 148,
    color: "#2238ff",
    bgColor: "#000000",
  },
  [StrategyShortId.ABMF]: {
    id: 'A51 BaseSwap Merkl Farm',
    shortId: StrategyShortId.ABMF,
    state: StrategyState.PROPOSED,
    contractGithubId: 147,
    color: "#e74c3c",
    bgColor: "#000000",
  },
};

export const getMerklStrategies = (): string[] => {
  const strategyShortIds = integrations.angle.protocols.merkl.strategies as StrategyShortId[]
  return strategyShortIds.map(shortId => {
    const strategy = strategies[shortId] as Strategy
    return strategy.id
  })
}

export const getStrategyShortId = (strategyId: string): StrategyShortId|undefined => {
  for (const strategyShortId of Object.keys(strategies)) {
    if (strategies[strategyShortId as StrategyShortId].id === strategyId) {
      return strategyShortId as StrategyShortId;
    }
  }
  return undefined
}
