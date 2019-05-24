import Drug from "../../../src/models/drug";
import Pharmacy from "../../../src/models/pharmacy";

describe("Magic Pill rules effects over time", () => {
  it("should never expire nor decrease in Benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 15, 40)]);
  });
});
