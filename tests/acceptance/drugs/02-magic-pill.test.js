import makePharma from "./make-pharmacy";

const name = "Magic Pill";

describe("Magic Pill rules effects over time", () => {
  it("should never expire nor decrease in Benefit", () => {
    expect(
      makePharma({ name, expiresIn: 15, benefit: 40 }).updateBenefitValue()[0]
    ).toEqual({ name, expiresIn: 15, benefit: 40 });
  });
});
