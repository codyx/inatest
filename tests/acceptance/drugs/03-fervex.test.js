import makePharma from "./make-pharmacy";

const name = "Fervex";

describe("Fervex rules effects over time", () => {
  it("should increase in Benefit as its expiration date approaches", () => {
    expect(
      makePharma({ name, expiresIn: 15, benefit: 40 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: 14, benefit: 41 });
  });

  it("should never set the Benefit to more than 50", () => {
    expect(
      makePharma({ name, expiresIn: 15, benefit: 50 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: 14, benefit: 50 });
  });

  it("should increase Benefit by 2 when there are 10 days or less", () => {
    expect(
      makePharma({ name, expiresIn: 10, benefit: 40 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: 9, benefit: 42 });
  });

  it("should increase Benefit by 3 when there are 5 days or less", () => {
    expect(
      makePharma({ name, expiresIn: 5, benefit: 40 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: 4, benefit: 43 });
  });

  it("should make Benefit drop to 0 after the expiration date", () => {
    expect(
      makePharma({ name, expiresIn: 0, benefit: 40 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: -1, benefit: 0 });
  });
});
