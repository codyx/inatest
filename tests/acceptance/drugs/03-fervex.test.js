import Drug from "../../../src/models/drug";
import Pharmacy from "../../../src/models/pharmacy";

describe("Fervex rules effects over time", () => {
  it("should increase in Benefit as its expiration date approaches", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 15, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 14, 41)]);
  });

  it("should never set the Benefit to more than 50", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 15, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 14, 50)]);
  });

  it("should increase Benefit by 2 when there are 10 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 42)]);
  });

  it("should increase Benefit by 3 when there are 5 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 43)]);
  });

  it("should make Benefit drop to 0 after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
});
