import { ChainName } from "./chains";

export interface YieldContest {
  // name of the contest
  name: string;
  // start timestamp
  start: number;
  // end timestamp
  end: number;
  // minimal USD income to pass contest
  minEarn: number | "TBA";
  // contest rewards
  rewards: Reward[] | "TBA";
  // integration of quest platform campaign
  integration?: {
    // Intract campaign id
    intract?: string;
  };
  // XP multiplier
  xpMultiplier?: number;
  // image file in stabilitydao/.github/covers
  img?: string;
  // hidden service contest for devs
  hidden?: boolean;
}

export interface Reward {
  type: RewardType;
  // number of winners
  winners: number;
  // reward per winner
  winnerReward: number;
  // contract of reward
  contract?: {
    chain: ChainName;
    address: `0x${string}`;
    tokenIds?: number[];
  };
}

export enum RewardType {
  // Any transferable ERC-20 token
  // Intract: ERC20 Tokens (USDT, etc claimed on intract) + Custom FTs (claimed on our side)
  ERC20 = "ERC20 Token",
  // any our (Vault Manager, Strategy Logic) or external (deployed on quest platform, etc) NFTs
  NFT = "NFTs",
  // official points
  POINTS = "Points",
}

export const contests: { [contestId: string]: YieldContest } = {
  d1: {
    // 10 Oct 2024 - 23 Oct 2024
    name: "Pre-launch contest",
    start: 1728518400, // Thu Oct 10 2024 00:00:00 GMT+0000
    end: 1729727999, // Wed Oct 23 2024 23:59:59 GMT+0000
    minEarn: 0.1,
    rewards: [], // no rewards
    hidden: true,
  },
  y1: {
    // 24 Oct 2024 - 06 Nov 2024
    name: "Yield Contest #1",
    start: 1729728000, // Thu, 24 Oct 2024 00:00:00 GMT
    end: 1730937599, // Wed, 06 Nov 2024 23:59:59 GMT
    minEarn: 0.1,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 120,
      },
    ],
    img: "y1.jpg",
    integration: {
      intract: "671516efc0c9e039a625fc93",
    },
    xpMultiplier: 5,
  },
  y2: {
    // 07 Nov 2024 - 20 Nov 2024
    name: "Yield Contest #2",
    start: 1730937600, // Thu, 07 Nov 2024 00:00:00 GMT
    end: 1732147199, // Wed, 20 Nov 2024 23:59:59 GMT
    minEarn: 0.2,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 130,
      },
      // 100 USDT
      {
        type: RewardType.ERC20,
        winners: 10,
        winnerReward: 10,
        contract: {
          chain: ChainName.POLYGON,
          address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        },
      },
    ],
  },
  y3: {
    // 21 Nov 2024 - 04 Dec 2024
    name: "Yield Contest #3",
    start: 1732147200, // Thu, 21 Nov 2024 00:00:00 GMT
    end: 1733356799, // Wed, 04 Dec 2024 23:59:59 GMT
    minEarn: 1,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 100,
        winnerReward: 200,
      },
      // 200 USDT
      {
        type: RewardType.ERC20,
        winners: 20,
        winnerReward: 10,
        contract: {
          chain: ChainName.POLYGON,
          address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        },
      },
      // VaultManager
      {
        type: RewardType.NFT,
        winners: 3,
        winnerReward: 1,
        contract: {
          chain: ChainName.POLYGON,
          address: "0x6008b366058B42792A2497972A3312274DC5e1A8",
          tokenIds: [
            30, // C-DAI-Y
            28, // C-USDC-Y
            21, // C-E-U-IQMF
          ],
        },
      },
    ],
  },
  y4: {
    // 05 Dec 2024 - 18 Dec 2024
    name: "Yield Contest #4",
    start: 1733356800, // Thu, 05 Dec 2024 00:00:00 GMT
    end: 1734566399, // Wed, 18 Dec 2024 23:59:59 GMT
    minEarn: 1,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 100,
        winnerReward: 200,
      },
      // 200 USDT
      {
        type: RewardType.ERC20,
        winners: 20,
        winnerReward: 10,
        contract: {
          chain: ChainName.POLYGON,
          address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        },
      },
      // StrategyLogic
      {
        type: RewardType.NFT,
        winners: 3,
        winnerReward: 1,
        contract: {
          chain: ChainName.POLYGON,
          address: "0xD16b60E39284190D9201f0eaD42c4674C310e905",
          tokenIds: [
            10, // Yearn
            7, // QuickSwap Static Merkl Farm
            4, // Ichi QuickSwap Merkl Farm
          ],
        },
      },
    ],
  },
  y5: {
    // 19 Dec 2024 - 01 Jan 2025
    name: "Yield Contest #5",
    start: 1734566400, // Thu, 19 Dec 2024 00:00:00 GMT
    end: 1735775999, // Wed, 01 Jan 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y6: {
    // 02 Jan 2025 - 15 Jan 2025
    name: "Yield Contest #6",
    start: 1735776000, // Thu, 02 Jan 2025 00:00:00 GMT
    end: 1736985599, // Wed, 15 Jan 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y7: {
    // 16 Jan 2025 - 29 Jan 2025
    name: "Yield Contest #7",
    start: 1736985600, // Thu, 16 Jan 2025 00:00:00 GMT
    end: 1738195199, // Wed, 29 Jan 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y8: {
    // 30 Jan 2025 - 12 Feb 2025
    name: "Yield Contest #8",
    start: 1738195200, // Thu, 30 Jan 2025 00:00:00 GMT
    end: 1739404799, // Wed, 12 Feb 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y9: {
    // 13 Feb 2025 - 26 Feb 2025
    name: "Yield Contest #9",
    start: 1739404800, // Thu, 13 Feb 2025 00:00:00 GMT
    end: 1740614399, // Wed, 26 Feb 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y10: {
    // 27 Feb 2025 - 12 Mar 2025
    name: "Yield Contest #10",
    start: 1740614400, // Thu, 27 Feb 2025 00:00:00 GMT
    end: 1741823999, // Wed, 12 Mar 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
};
