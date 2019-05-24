import Strategy from "../strategy";

export default class HerbalTeaStrategy extends Strategy {
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
    this.updateIncreasePower();

    this.drug.expiresIn = this.drug.expiresIn - 1;

    const add = this.drug.benefit + this.increasePwr;
    this.drug.benefit = add <= this.maxBenefit ? add : 50;
  }

  updateIncreasePower() {
    if (this.drug.expiresIn <= 0) this.increasePwr = 2;
  }
}
