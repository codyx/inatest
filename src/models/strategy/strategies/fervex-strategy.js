import Strategy from "../strategy";

export default class FervexStrategy extends Strategy {
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
      potentialNewBenefit <= FervexStrategy.maxBenefit
        ? potentialNewBenefit
        : FervexStrategy.maxBenefit;

    if (this.drug.expiresIn < 0) this.drug.benefit = 0;
  }

  updateIncreasePower() {
    if (this.drug.expiresIn <= 10 && this.drug.expiresIn > 5)
      this.increasePwr = 2;
    else if (this.drug.expiresIn <= 5) this.increasePwr = 3;
  }
}

FervexStrategy.maxBenefit = 50;
