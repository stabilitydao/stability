import {ChainName} from "./chains";

export interface YieldContest {
  // name of the contest
  name: string,
  // start timestamp
  start: number,
  // end timestamp
  end: number,
  minEarn: number,
  // contest rewards
  rewards: Reward[],
  // integration of quest platform campaign
  integration?: {
    // Intract campaign id
    intract?: string,
  },
  // XP multiplier
  xpMultiplier?: number,
  // image file in stabilitydao/.github/contests
  img?: string,
  // hidden service contest for devs
  hidden?: boolean,
}

export interface Reward {
  type: RewardType,
  // number of winners
  winners: number,
  // reward per winner
  winnerReward: number,
  // contract of reward
  contract?: {
    chain: ChainName,
    address: `0x${string}`,
    tokenIds?: number[],
  },
}

export enum RewardType {
  // Any transferable ERC-20 token
  // Intract: ERC20 Tokens (USDT, etc claimed on intract) + Custom FTs (claimed on our side)
  ERC20 = 'ERC20 Token',
  // any our (Vault Manager, Strategy Logic) or external (deployed on quest platform, etc) NFTs
  NFT = 'NFTs',
  // official points
  POINTS = 'Points',
}

export const contests: { [contestId: string]: YieldContest } = {
  "d1": {
    // 10 Oct 2024 - 16 Oct 2024
    name: 'Dev pre contest 1',
    start: 1728518400, // Thu Oct 10 2024 00:00:00 GMT+0000
    end: 1729123199, // Wed Oct 16 2024 23:59:59 GMT+0000
    minEarn: 0.01,
    rewards: [], // no rewards
    hidden: true,
  },
  "d2": {
    // 17 Oct 2024 - 23 Oct 2024
    name: 'Dev pre contest 2',
    start: 1729123200, // Thu Oct 17 2024 00:00:00 GMT+0000
    end: 1729727999, // Wed Oct 23 2024 23:59:59 GMT+0000
    minEarn: 0.1,
    rewards: [], // no rewards
    hidden: true,
  },
  "y1": {
    // 24 Oct 2024 - 06 Nov 2024
    name: "Yield Contest #1",
    start: 1729728000, // Thu, 24 Oct 2024 00:00:00 GMT
    end: 1730937599,   // Wed, 06 Nov 2024 23:59:59 GMT
    minEarn: 0.1,
    rewards:
      [
        {
          type: RewardType.POINTS,
          winners: 50,
          winnerReward: 120,
        },
      ],
  },
  "y2": {
    // 07 Nov 2024 - 20 Nov 2024
    name: "Yield Contest #2",
    start: 1730937600, // Thu, 07 Nov 2024 00:00:00 GMT
    end: 1732147199,   // Wed, 20 Nov 2024 23:59:59 GMT
    minEarn: 1,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 130,
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
    ],
  },
  "y3": {
    // 21 Nov 2024 - 04 Dec 2024
    name: "Yield Contest #3",
    start: 1732147200, // Thu, 21 Nov 2024 00:00:00 GMT
    end: 1733356799,   // Wed, 04 Dec 2024 23:59:59 GMT
    minEarn: 1,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 100,
        winnerReward: 100,
      },
      // 500 USDT
      {
        type: RewardType.ERC20,
        winners: 50,
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
          ]
        },
      },
    ],
  },
}
