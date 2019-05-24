import Strategy from "../strategy";

export default class NormalDrugStrategy extends Strategy {
  constructor(drug) {
    super();
    this.drug = drug;
    this.degradePwr = 1;
  }

  /**
   * getDefaultDegradePower returns this strategy's
   * default degradation power.
   * @returns {number} degradePower
   */
  static getDefaultDegradePower() {
    return 1;
  }

  /**
   * RulesInterface applies rules of this strategy
   * and can modify the underlying drug's attributes.
   */
  RulesInterface() {
    this.updateDegradePower();
    this.drug.expiresIn = this.drug.expiresIn - 1;

    const sub = this.drug.benefit - this.degradePwr;
    this.drug.benefit = Math.sign(sub) !== -1 ? sub : 0;
  }

  updateDegradePower() {
    if (this.drug.expiresIn <= 0) this.degradePwr = 2;
  }
}
