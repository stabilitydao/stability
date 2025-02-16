import { StrategyShortId } from "./strategies";
import { getTokenData } from "./assets";

export type IlDetails = {
  rate: number;
  title: string;
  desc: string;
  color: string;
};

export const IL /*: {[ilId: string]: IlDetails}*/ = {
  ALM_FILLUP_AGGRESSIVE: {
    rate: 10,
    title: "Very high",
    desc: "This preset of an ALM provides liquidity in the very narrow range, and very often re-balancing it by Fill-Up algo. Every re-balancing results in a loss. The higher the volatility of the pair, the more re-balancing and the greater the loss.",
    color: "#ff0000",
  },
  ALM_FILLUP_NARROW: {
    rate: 8,
    title: "High",
    desc: "This preset of an ALM provides liquidity in the narrow range, and often re-balancing it by Fill-Up algo. Every re-balancing results in a loss. The higher the volatility of the pair, the more re-balancing and the greater the loss.",
    color: "#f55e11",
  },
  ALM_VOLATILE_HIGH: {
    rate: 7,
    title: "HIGH",
    desc: "Significant impermanent loss was noted during re-balancing with this ALM in volatile pools.",
    color: "#f55e11",
  },
  ALM_FILLUP_WIDE: {
    rate: 5,
    title: "Medium",
    desc: "This preset of an ALM provides liquidity in the wide range, re-balancing the position infrequently. Every re-balancing results in a loss. The higher the volatility of the pair, the more re-balancing and the greater the loss.",
    color: "#F5DA5B",
  },
  ALM_STABLE_DEPEG_MEDIUM: {
    rate: 5,
    title: "Medium",
    desc: "We catch significant IL in stablecoin pairs with this strategy when depeg become..",
    color: "#F5DA5B",
  },
  ALM_SINGLE_SIDED: {
    rate: 4,
    title: "Medium",
    desc: "The strategy of the underlying ALM provides liquidity in the very wide range, not often re-balancing the position.",
    color: "#F5DA5B",
  },
  ALM_STRETCHED: {
    rate: 3,
    title: "Low",
    desc: "We expect low impermanent loss for such stretched range.",
    color: "#D7F55B",
  },
  CLASSIC_vAMM: {
    rate: 3,
    title: "Low",
    desc: "Low impermanent loss is expected for UniswapV2-like and similar not CL AMMs.",
    color: "#D7F55B",
  },
  ALM_PEGGED: {
    rate: 3,
    title: "Low",
    desc: "The strategy of the underlying liquidity provider developed for pegged assets.",
    color: "#D7F55B",
  },
  ALM_STABLE_EXPAND: {
    rate: 1,
    title: "Zero exp",
    desc: "The strategy of the underlying liquidity provider can re-balance the position by expanding it, but this happens extremely rarely, only at times of high volatility of the assets in the pool.",
    color: "#7af996",
  },
  CL_STABLE_FIXED: {
    rate: 1,
    title: "Zero exp",
    desc: "Liquidity in the form of stablecoins is provided in a fixed range, there are no re-balances, so there are no impermanent losses.",
    color: "#7af996",
  },
  STABLE_SWAP: {
    rate: 1,
    title: "Zero exp",
    desc: "If asset prices in the stable pool are kept pegged, there are no impermanent losses.",
    color: "#7af996",
  },
  LENDING: {
    rate: 0,
    title: "None",
    desc: "Providing assets to the lending protocol does not incur impermanent losses.",
    color: "#4aff71",
  },
};

export const getIL = (
  strategyShortId: StrategyShortId,
  specific: string,
  assets: `0x${string}`[],
): IlDetails | undefined => {
  if (
    [
      StrategyShortId.SiF,
      StrategyShortId.Y,
      StrategyShortId.SL,
      StrategyShortId.SiL,
      StrategyShortId.CF,
    ].includes(strategyShortId)
  ) {
    return IL.LENDING;
  }

  if (
    [
      StrategyShortId.IQMF,
      StrategyShortId.IRMF,
      StrategyShortId.IRBMF,
      StrategyShortId.IPF,
      StrategyShortId.IRF,
      StrategyShortId.ISF,
      StrategyShortId.IEF,
    ].includes(strategyShortId)
  ) {
    return IL.ALM_SINGLE_SIDED;
  }

  if (
    [
      StrategyShortId.GQMF,
      StrategyShortId.GUMF,
      StrategyShortId.GRMF,
      StrategyShortId.GEF,
    ].includes(strategyShortId)
  ) {
    if (specific.toLowerCase() === "narrow") {
      return IL.ALM_FILLUP_NARROW;
    }
    if (specific.toLowerCase() === "wide") {
      return IL.ALM_FILLUP_WIDE;
    }
    if (specific.toLowerCase() === "stable") {
      return IL.ALM_STABLE_EXPAND;
    }
    if (specific.toLowerCase() === "pegged") {
      return IL.ALM_PEGGED;
    }
  }

  if ([StrategyShortId.BSF, StrategyShortId.CCF].includes(strategyShortId)) {
    return IL.STABLE_SWAP;
  }

  if (strategyShortId == StrategyShortId.QSMF) {
    return IL.CL_STABLE_FIXED;
  }

  if (strategyShortId == StrategyShortId.TPF) {
    let onlyStables = true;
    for (const asset of assets) {
      const tokenData = getTokenData(asset);
      if (!tokenData || !tokenData.tags?.includes("stablecoin")) {
        onlyStables = false;
      }
    }
    return onlyStables ? IL.ALM_STABLE_DEPEG_MEDIUM : IL.ALM_VOLATILE_HIGH;
  }

  if ([StrategyShortId.SF, StrategyShortId.EF].includes(strategyShortId)) {
    return specific.toLowerCase() == "slp" ? IL.STABLE_SWAP : IL.CLASSIC_vAMM;
  }

  if (strategyShortId == StrategyShortId.BWF) {
    return IL.CLASSIC_vAMM;
  }

  if (strategyShortId == StrategyShortId.ASF) {
    if (specific.toLowerCase().match(/aggressive$/)) {
      return IL.ALM_FILLUP_AGGRESSIVE;
    }
    if (specific.toLowerCase().match(/narrow$/)) {
      return IL.ALM_FILLUP_NARROW;
    }
    if (specific.toLowerCase().match(/stretched$/)) {
      return IL.ALM_STRETCHED;
    }
  }

  if (strategyShortId == StrategyShortId.DQMF) {
    return IL.ALM_VOLATILE_HIGH;
  }

  return undefined;
};
