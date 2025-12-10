export const almFactories: {
  [chainId: string]: {
    [almId: string]: {
      [dexId: string]: `0x${string}`;
    };
  };
} = {
  "137": {
    ichi: {
      retro: "0xb2f44D8545315cDd0bAaB4AC7233218b932a5dA7",
      quickswapV3: "0x11700544C577Cb543a498B27B4F0f7018BDb6E8a",
    },
    defiEdge: {
      quickswapV3: "0x730d158D29165C55aBF368e9608Af160DD21Bd80",
    },
  },
};

export const layerZeroV2: {
  [chainId: string]: {
    endpoint: `0x${string}`;
    endpointId: number;
  };
} = {
  "146": {
    endpoint: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B",
    endpointId: 30332,
  },
  "9745": {
    endpoint: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B",
    endpointId: 30383,
  },
  "43114": {
    endpoint: "0x1a44076050125825900e736c501f859c50fE728c",
    endpointId: 30106,
  },
};
