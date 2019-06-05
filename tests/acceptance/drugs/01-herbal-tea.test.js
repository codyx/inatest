import makePharma from "./make-pharmacy";

const name = "Herbal Tea";

describe("Herbal Tea rules effects over time", () => {
  it("should increase in Benefit the older it gets", () => {
    expect(
      makePharma({ name, expiresIn: 11, benefit: 5 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: 10, benefit: 6 });
  });

  it("should never set the Benefit to more than 50", () => {
    expect(
      makePharma({ name, expiresIn: 11, benefit: 50 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: 10, benefit: 50 });
  });
});
