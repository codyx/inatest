import Drug from "../../../src/models/drug";
import Pharmacy from "../../../src/models/pharmacy";

describe("Herbal Tea rules effects over time", () => {
  it("should increase in Benefit the older it gets", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 11, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 10, 6)]);
  });

  it("should never set the Benefit to more than 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 11, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 10, 50)]);
  });

  // TODO: check me.
  it("ISSUE: should not happen", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 42)]);
  });
});
