export type Deployment = {
  core: {
    platform: `0x${string}`,
    factory: `0x${string}`,
    priceReader: `0x${string}`,
    swapper: `0x${string}`,
    hardWorker: `0x${string}`,
    vaultManager: `0x${string}`,
    strategyLogic: `0x${string}`,
    zap: `0x${string}`,
  },
  subgraph: string,
}

export const deployments: {[chainId:string]:Deployment} = {
  "137": {
    core: {
      platform: "0xb2a0737ef27b5Cc474D24c779af612159b1c3e60",
      factory: "0xa14EaAE76890595B3C7ea308dAEBB93863480EAD",
      priceReader: "0xcCef9C4459d73F9A997ff50AC34364555A3274Aa",
      swapper: "0xD84E894A6646C7407b8CD1273Ea1EFc53A423762",
      hardWorker: "0x6DBFfd2846d4a556349a3bc53297700d89a94034",
      vaultManager: "0x6008b366058B42792A2497972A3312274DC5e1A8",
      strategyLogic: "0xD16b60E39284190D9201f0eaD42c4674C310e905",
      zap: "0xEA3fABD8cC14705d7E66D1833a547D31882aEA9b",
    },
    subgraph: "https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/7WgM7jRzoW7yiJCE8DMEwCxtN3KLisYrVVShuAL2Kz4N",
  },
  "8453": {
    core: {
      platform: "0x7eAeE5CfF17F7765d89F4A46b484256929C62312",
      factory: "0xe01E62dAe952501e884624423132e50E7B77Ba3c",
      priceReader: "0x41408b3e0f279634E3cd59E2D76EF6b149d6D418",
      swapper: "0x67e983b3B9f55A1eaA259D58E425e418f3900872",
      hardWorker: "0x2FfeB278BB1Fb9f3B48619AbaBe955526942ac8c",
      vaultManager: "0x2ba8C6A519CEDB6d1C35cEb14E8642625E91F77C",
      strategyLogic: "0xbe491A023eA61B4b027ed0f2f2400748113797b1",
      zap: "0x00700766b0cA613D719A01eea6234eeE77592e15",
    },
    subgraph: "https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/8uU5LrpCLCP1P31GBCUXu8AdWKQ2aW6mKTKsr2ssUdJS",
  },
}
