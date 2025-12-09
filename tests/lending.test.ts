import { ILendingMarket, lendingMarkets } from "../src";
import { assets } from "../src/assets";
import * as tokenList from "../src/stability.tokenlist.json";

describe("testing lending", () => {
  test("constants", () => {
    const mainMarket: ILendingMarket = lendingMarkets[0];
    expect(mainMarket.id).toEqual("Core Instance");
  });
});

describe("testing market reserves exist in assets lists", () => {
  const visibleMarkets = lendingMarkets.filter((market) => market.show);

  for (const market of visibleMarkets) {
    for (const reserve of market.reserves) {
      const existsInTokenList = checkAssetInTokenList(reserve.asset);
      const existsInAssets = checkAssetInAssetsList(
        reserve.asset,
        market.chainId,
      );
      expect(existsInTokenList).toBeTruthy();
      expect(existsInAssets).toBeTruthy();
    }
  }
});

function checkAssetInTokenList(assetAddress: `0x${string}`) {
  const existsInTokenList = !!tokenList.tokens.find(
    (token) => token.address.toLowerCase() === assetAddress.toLowerCase(),
  );

  return existsInTokenList;
}

function checkAssetInAssetsList(assetAddress: `0x${string}`, chainId: string) {
  const existsInAssets = !!assets.find((asset) => {
    if (!asset.addresses[chainId]) {
      return false;
    }
    const assets = [asset.addresses[chainId]]
      ?.flat()
      ?.map((address) => address.toLowerCase());

    return assets.length && assets?.includes(assetAddress.toLowerCase());
  });

  return existsInAssets;
}
