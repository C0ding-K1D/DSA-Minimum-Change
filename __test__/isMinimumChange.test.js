const minimumChange = require("../minimumCoins");

describe("minimumChange", () => {
  it("should return the minimum change you cant complete", () => {
    const coins = [5, 7, 1, 1, 2, 3, 22];

    expect(minimumChange(coins)).toBe(20);
  });

  it("should return the minimum change you cant complete", () => {
    const coins = [1, 1, 1, 1, 1];

    expect(minimumChange(coins)).toBe(6);
  });

  it("should return the minimum change you cant complete", () => {
    const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];

    expect(minimumChange(coins)).toBe(55);
  });

  it("should return the minimum change you cant complete", () => {
    const coins = [6, 4, 5, 1, 1, 8, 9];

    expect(minimumChange(coins)).toBe(3);
  });

  it("should return the minimum change you cant complete", () => {
    const coins = [];

    expect(minimumChange(coins)).toBe(1);
  });
});
