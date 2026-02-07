import { ILendingMarket, lendingMarkets } from "../src";
import { tokenlist, assets } from "@stabilitydao/host";
import { getLendingMarketsForAsset } from "../src/lending";

describe("testing lending", () => {
  test("constants", () => {
    const mainMarket: ILendingMarket = lendingMarkets[0];
    expect(mainMarket.id).toEqual("Core Instance");
  });
  test("getLendingMarketsForAsset", () => {
    const mainMarket = getLendingMarketsForAsset(
      1,
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    )[0];
    expect(mainMarket?.id).toEqual("Core Instance");
  });
});

describe("testing market reserves exist in assets lists", () => {
  test("market reserves", () => {
    for (const market of lendingMarkets) {
      for (const reserve of market.reserves) {
        const existsInTokenList = checkAssetInTokenList(reserve.asset);
        const existsInAssets = checkAssetInAssetsList(
          reserve.asset,
          market.chainId,
        );
        if (!existsInTokenList) {
          console.log(
            `[${market.chainId}] ${reserve.asset} does not exist in tokenlist`,
          );
        }
        expect(existsInTokenList).toBeTruthy();
        expect(existsInAssets).toBeTruthy();
      }
    }
  });
});

function checkAssetInTokenList(assetAddress: `0x${string}`) {
  const existsInTokenList = !!tokenlist.tokens.find(
    (token) => token.address.toLowerCase() === assetAddress.toLowerCase(),
  );

  return existsInTokenList;
}

function checkAssetInAssetsList(assetAddress: `0x${string}`, chainId: string) {
  const existsInAssets = !!assets.find((asset) => {
    if (!asset.addresses[chainId]) {
      return false;
    }
    const assetAddresses = [asset.addresses[chainId]]
      ?.flat()
      ?.map((address) => address.toLowerCase());

    return (
      assetAddresses.length &&
      assetAddresses?.includes(assetAddress.toLowerCase())
    );
  });

  return existsInAssets;
}
