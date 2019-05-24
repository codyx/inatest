import Drug from "../../../src/models/drug";
import Pharmacy from "../../../src/models/pharmacy";

describe("Dafalgan drug rules over time", () => {
  it("should degrade in Benefit twice as fast as normal drugs", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
  });
});
