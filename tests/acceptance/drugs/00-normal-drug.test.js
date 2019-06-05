import makePharma from "./make-pharmacy";

const name = "test";

describe("Default drug rules over time", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(
      makePharma({ name, expiresIn: 2, benefit: 3 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: 1, benefit: 2 });
  });

  it("should make the benefit degrade twice as fast when the expiration date has passed", () => {
    expect(
      makePharma({ name, expiresIn: 0, benefit: 3 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: -1, benefit: 1 });
  });

  it("should never make the Benefit of an item negative.", () => {
    expect(
      makePharma({ name, expiresIn: 2, benefit: 0 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: 1, benefit: 0 });
  });
});
