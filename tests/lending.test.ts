import { ILendingMarket, lendingMarkets } from "../src";

describe("testing lending", () => {
  test("constants", () => {
    const mainMarket: ILendingMarket = lendingMarkets[0];
    expect(mainMarket.id).toEqual("Main");
  });
});
