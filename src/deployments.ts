export type CoreContracts = {
  platform: `0x${string}`,
  factory: `0x${string}`,
  priceReader: `0x${string}`,
  swapper: `0x${string}`,
  hardWorker: `0x${string}`,
  vaultManager: `0x${string}`,
  strategyLogic: `0x${string}`,
  zap: `0x${string}`,
}

export const deployments: {[chainId:string]:CoreContracts} = {
  "137": {
    platform: "0xb2a0737ef27b5Cc474D24c779af612159b1c3e60",
    factory: "0xa14EaAE76890595B3C7ea308dAEBB93863480EAD",
    priceReader: "0xcCef9C4459d73F9A997ff50AC34364555A3274Aa",
    swapper: "0xD84E894A6646C7407b8CD1273Ea1EFc53A423762",
    hardWorker: "0x6DBFfd2846d4a556349a3bc53297700d89a94034",
    vaultManager: "0x6008b366058B42792A2497972A3312274DC5e1A8",
    strategyLogic: "0xD16b60E39284190D9201f0eaD42c4674C310e905",
    zap: "0xEA3fABD8cC14705d7E66D1833a547D31882aEA9b",
  },
}
