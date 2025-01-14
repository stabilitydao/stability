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
  // number of winners. 0 - unlimited
  winners: number;
  // reward per winner. 0 - proportional
  winnerReward: number;
  // total reward for proportional distribution
  totalReward?: number;
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
  // Sonic Gems Season 1
  GEMS1 = "Gems1",
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
    img: "y2.png",
    integration: {
      intract: "6729f7115811e83272cd3613",
    },
    xpMultiplier: 20,
  },
  y3: {
    // 21 Nov 2024 - 04 Dec 2024
    name: "Yield Contest #3",
    start: 1732147200, // Thu, 21 Nov 2024 00:00:00 GMT
    end: 1733356799, // Wed, 04 Dec 2024 23:59:59 GMT
    minEarn: 0.1,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 140,
      },
    ],
    img: "y3.png",
  },
  y4: {
    // 05 Dec 2024 - 18 Dec 2024
    name: "Yield Contest #4",
    start: 1733356800, // Thu, 05 Dec 2024 00:00:00 GMT
    end: 1734566399, // Wed, 18 Dec 2024 23:59:59 GMT
    minEarn: 0.05,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 130,
      },
    ],
  },
  y5: {
    // 19 Dec 2024 - 01 Jan 2025
    name: "Yield Contest #5",
    start: 1734566400, // Thu, 19 Dec 2024 00:00:00 GMT
    end: 1735775999, // Wed, 01 Jan 2025 23:59:59 GMT
    minEarn: 0.1,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 200,
      },
    ],
  },
  y6: {
    // 02 Jan 2025 - 15 Jan 2025
    name: "Yield Contest #6",
    start: 1735776000, // Thu, 02 Jan 2025 00:00:00 GMT
    end: 1736985599, // Wed, 15 Jan 2025 23:59:59 GMT
    minEarn: 0.1,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 200,
      },
    ],
  },
  y7: {
    // 16 Jan 2025 - 29 Jan 2025
    name: "Yield Contest #7",
    start: 1736985600, // Thu, 16 Jan 2025 00:00:00 GMT
    end: 1738195199, // Wed, 29 Jan 2025 23:59:59 GMT
    minEarn: 0.5,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 240,
      },
      {
        type: RewardType.GEMS1,
        winners: 0,
        winnerReward: 0,
        totalReward: 900000,
      },
    ],
  },
  y8: {
    // 30 Jan 2025 - 12 Feb 2025
    name: "Yield Contest #8",
    start: 1738195200, // Thu, 30 Jan 2025 00:00:00 GMT
    end: 1739404799, // Wed, 12 Feb 2025 23:59:59 GMT
    minEarn: 1,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 300,
      },
      {
        type: RewardType.GEMS1,
        winners: 0,
        winnerReward: 0,
        totalReward: 900000,
      },
    ],
  },
  y9: {
    // 13 Feb 2025 - 26 Feb 2025
    name: "Yield Contest #9",
    start: 1739404800, // Thu, 13 Feb 2025 00:00:00 GMT
    end: 1740614399, // Wed, 26 Feb 2025 23:59:59 GMT
    minEarn: 1,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 350,
      },
      {
        type: RewardType.GEMS1,
        winners: 0,
        winnerReward: 0,
        totalReward: 900000,
      },
    ],
  },
  y10: {
    // 27 Feb 2025 - 12 Mar 2025
    name: "Yield Contest #10",
    start: 1740614400, // Thu, 27 Feb 2025 00:00:00 GMT
    end: 1741823999, // Wed, 12 Mar 2025 23:59:59 GMT
    minEarn: 1,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 400,
      },
      {
        type: RewardType.GEMS1,
        winners: 0,
        winnerReward: 0,
        totalReward: 900000,
      },
    ],
  },
  y11: {
    // 13 Mar 2025 - 26 Mar 2025
    name: "Yield Contest #11",
    start: 1741824000, // Thu, 13 Mar 2025 00:00:00 GMT
    end: 1743033599, // Wed, 26 Mar 2025 23:59:59 GMT
    minEarn: 2,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 400,
      },
      {
        type: RewardType.GEMS1,
        winners: 0,
        winnerReward: 0,
        totalReward: 900000,
      },
    ],
  },
  y12: {
    // 27 Mar 2025 - 09 Apr 2025
    name: "Yield Contest #12",
    start: 1743033600, // Thu, 27 Mar 2025 00:00:00 GMT
    end: 1744243199, // Wed, 09 Apr 2025 23:59:59 GMT
    minEarn: 2,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 400,
      },
      {
        type: RewardType.GEMS1,
        winners: 0,
        winnerReward: 0,
        totalReward: 900000,
      },
    ],
  },
  y13: {
    // 10 Apr 2025 - 23 Apr 2025
    name: "Yield Contest #13",
    start: 1744243200, // Thu, 10 Apr 2025 00:00:00 GMT
    end: 1745452799, // Wed, 23 Apr 2025 23:59:59 GMT
    minEarn: 2.5,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 400,
      },
      {
        type: RewardType.GEMS1,
        winners: 0,
        winnerReward: 0,
        totalReward: 900000,
      },
    ],
  },
  y14: {
    // 24 Apr 2025 - 07 May 2025
    name: "Yield Contest #14",
    start: 1745452800, // Thu, 24 Apr 2025 00:00:00 GMT
    end: 1746662399, // Wed, 07 May 2025 23:59:59 GMT
    minEarn: 2.5,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 400,
      },
      {
        type: RewardType.GEMS1,
        winners: 0,
        winnerReward: 0,
        totalReward: 900000,
      },
    ],
  },
  y15: {
    // 08 May 2025 - 21 May 2025
    name: "Yield Contest #15",
    start: 1746662400, // Thu, 08 May 2025 00:00:00 GMT
    end: 1747871999, // Wed, 21 May 2025 23:59:59 GMT
    minEarn: 2.5,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 400,
      },
      {
        type: RewardType.GEMS1,
        winners: 0,
        winnerReward: 0,
        totalReward: 900000,
      },
    ],
  },
  y16: {
    // 22 May 2025 - 04 Jun 2025
    name: "Yield Contest #16",
    start: 1747872000, // Thu, 22 May 2025 00:00:00 GMT
    end: 1749081599, // Wed, 04 Jun 2025 23:59:59 GMT
    minEarn: 2.5,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 400,
      },
      {
        type: RewardType.GEMS1,
        winners: 0,
        winnerReward: 0,
        totalReward: 900000,
      },
    ],
  },
  y17: {
    // 05 Jun 2025 - 18 Jun 2025
    name: "Yield Contest #17",
    start: 1749081600, // Thu, 05 Jun 2025 00:00:00 GMT
    end: 1750291199, // Wed, 18 Jun 2025 23:59:59 GMT
    minEarn: 5,
    rewards: [
      {
        type: RewardType.POINTS,
        winners: 50,
        winnerReward: 400,
      },
      {
        type: RewardType.GEMS1,
        winners: 0,
        winnerReward: 0,
        totalReward: 1000000,
      },
    ],
  },
  y18: {
    // 19 Jun 2025 - 02 Jul 2025
    name: "Yield Contest #18",
    start: 1750291200, // Thu, 19 Jun 2025 00:00:00 GMT
    end: 1751500799, // Wed, 02 Jul 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y19: {
    // 03 Jul 2025 - 16 Jul 2025
    name: "Yield Contest #19",
    start: 1751500800, // Thu, 03 Jul 2025 00:00:00 GMT
    end: 1752710399, // Wed, 16 Jul 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y20: {
    // 17 Jul 2025 - 30 Jul 2025
    name: "Yield Contest #20",
    start: 1752710400, // Thu, 17 Jul 2025 00:00:00 GMT
    end: 1753919999, // Wed, 30 Jul 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y21: {
    // 31 Jul 2025 - 13 Aug 2025
    name: "Yield Contest #21",
    start: 1753920000, // Thu, 31 Jul 2025 00:00:00 GMT
    end: 1755129599, // Wed, 13 Aug 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y22: {
    // 14 Aug 2025 - 27 Aug 2025
    name: "Yield Contest #22",
    start: 1755129600, // Thu, 14 Aug 2025 00:00:00 GMT
    end: 1756339199, // Wed, 27 Aug 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y23: {
    // 28 Aug 2025 - 10 Sep 2025
    name: "Yield Contest #23",
    start: 1756339200, // Thu, 28 Aug 2025 00:00:00 GMT
    end: 1757548799, // Wed, 10 Sep 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y24: {
    // 11 Sep 2025 - 24 Sep 2025
    name: "Yield Contest #24",
    start: 1757548800, // Thu, 11 Sep 2025 00:00:00 GMT
    end: 1758758399, // Wed, 24 Sep 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y25: {
    // 25 Sep 2025 - 08 Oct 2025
    name: "Yield Contest #25",
    start: 1758758400, // Thu, 25 Sep 2025 00:00:00 GMT
    end: 1759967999, // Wed, 08 Oct 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y26: {
    // 09 Oct 2025 - 22 Oct 2025
    name: "Yield Contest #26",
    start: 1759968000, // Thu, 09 Oct 2025 00:00:00 GMT
    end: 1761177599, // Wed, 22 Oct 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y27: {
    // 23 Oct 2025 - 05 Nov 2025
    name: "Yield Contest #27",
    start: 1761177600, // Thu, 23 Oct 2025 00:00:00 GMT
    end: 1762387199, // Wed, 05 Nov 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y28: {
    // 06 Nov 2025 - 19 Nov 2025
    name: "Yield Contest #28",
    start: 1762387200, // Thu, 06 Nov 2025 00:00:00 GMT
    end: 1763596799, // Wed, 19 Nov 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y29: {
    // 20 Nov 2025 - 03 Dec 2025
    name: "Yield Contest #29",
    start: 1763596800, // Thu, 20 Nov 2025 00:00:00 GMT
    end: 1764806399, // Wed, 03 Dec 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y30: {
    // 04 Dec 2025 - 17 Dec 2025
    name: "Yield Contest #30",
    start: 1764806400, // Thu, 04 Dec 2025 00:00:00 GMT
    end: 1766015999, // Wed, 17 Dec 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
  y31: {
    // 18 Dec 2025 - 31 Dec 2025
    name: "Yield Contest #31",
    start: 1766016000, // Thu, 18 Dec 2025 00:00:00 GMT
    end: 1767225599, // Wed, 31 Dec 2025 23:59:59 GMT
    minEarn: "TBA",
    rewards: "TBA",
  },
};
