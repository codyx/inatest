import Strategy from "../strategy";

export default class FervexStrategy extends Strategy {
  constructor(drug) {
    super();
    this.drug = drug;
    this.maxBenefit = 50;
    this.increasePwr = 1;
  }

  /**
   * RulesInterface applies rules of this strategy
   * and can modify the underlying drug's attributes.
   */
  RulesInterface() {
    this.drug.expiresIn = this.drug.expiresIn - 1;

    this.updateIncreasePower();

    const add = this.drug.benefit + this.increasePwr;
    this.drug.benefit = add <= this.maxBenefit ? add : 50;
    this.updateBenefit();
  }

  updateIncreasePower() {
    if (this.drug.expiresIn <= 10 && this.drug.expiresIn > 5)
      this.increasePwr *= 2;
    else if (this.drug.expiresIn <= 5) this.increasePwr *= 3;
  }

  updateBenefit() {
    if (this.drug.expiresIn < 0) this.drug.benefit = 0;
  }
}
