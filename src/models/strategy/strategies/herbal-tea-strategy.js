import Strategy from "../strategy";

export default class HerbalTeaStrategy extends Strategy {
  constructor(drug) {
    super();
    this.drug = drug;
    this.increasePwr = 1;
  }

  /**
   * RulesInterface applies rules of this strategy
   * and can modify the underlying drug's attributes.
   */
  RulesInterface() {
    this.drug.expiresIn = this.drug.expiresIn - 1;

    this.updateIncreasePower();

    const potentialNewBenefit = this.drug.benefit + this.increasePwr;
    this.drug.benefit =
      potentialNewBenefit <= HerbalTeaStrategy.maxBenefit
        ? potentialNewBenefit
        : 50;
  }

  updateIncreasePower() {
    if (this.drug.expiresIn < 0) this.increasePwr = 2;
  }
}

HerbalTeaStrategy.maxBenefit = 50;
