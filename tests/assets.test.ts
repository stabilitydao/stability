import { getAsset, assets } from "../src";
import { tokenlist } from "../src";

describe("testing assets", () => {
  test("getAsset", () => {
    expect(
      getAsset("137", "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619")?.symbol,
    ).toBe("WETH");
    expect(
      getAsset("555", "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619")?.symbol,
    ).toBe(undefined);
    expect(
      getAsset("8453", "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913")?.symbol,
    ).toBe("USDC");
  });
  test("check if assets addresses exist in tokenlist.json", () => {
    const _tokenlist = tokenlist.tokens;

    for (const asset of assets) {
      for (const address of Object.values(asset.addresses).flat()) {
        const matchingToken = _tokenlist.find(
          (token) => token.address.toLowerCase() === address.toLowerCase(),
        );

        expect(matchingToken).toBeDefined();
      }
    }
  });
  test("check if tokens from tokenlist exist in assets.ts", () => {
    const _tokenlist = tokenlist.tokens;

    //PROFIT and SDIV
    const addressesToSkip = [
      "0x48469a0481254d5945e7e56c1eb9861429c02f44",
      "0x9844a1c30462b55cd383a2c06f90bb4171f9d4bb",
    ];

    for (const token of _tokenlist) {
      if (addressesToSkip.includes(token.address.toLowerCase())) {
        continue;
      }

      let addressFound = false;

      for (const asset of assets) {
        for (const address of Object.values(asset.addresses).flat()) {
          if (token.address.toLowerCase() === address.toLowerCase()) {
            addressFound = true;
            break;
          }
        }

        if (addressFound) {
          break;
        }
      }

      expect(addressFound).toBe(true);
    }
  });
});
