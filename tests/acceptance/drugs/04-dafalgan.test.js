import makePharma from "./make-pharmacy";

const name = "Dafalgan";

describe("Dafalgan drug rules over time", () => {
  it("should degrade in Benefit twice as fast as normal drugs", () => {
    expect(
      makePharma({ name, expiresIn: 2, benefit: 3 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: 1, benefit: 1 });
  });

  it("should degrade in Benefit twice as fast as normal drugs even when expired", () => {
    expect(
      makePharma({ name, expiresIn: 0, benefit: 4 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: -1, benefit: 0 });
  });
});
