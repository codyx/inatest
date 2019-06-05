import Strategy from "../strategy";

export default class NormalDrugStrategy extends Strategy {
  constructor(drug) {
    super();
    this.drug = drug;
    this.degradePwr = NormalDrugStrategy.defaultDegradePower;
  }

  /**
   * getDefaultDegradePower returns this strategy's
   * default degradation power.
   * @returns {number} degradePower
   */
  static getDefaultDegradePower() {
    return NormalDrugStrategy.defaultDegradePower;
  }

  static getDegradePower(expiresIn) {
    return expiresIn < 0
      ? NormalDrugStrategy.expiredDegradePwr
      : this.getDefaultDegradePower();
  }

  /**
   * RulesInterface applies rules of this strategy
   * and can modify the underlying drug's attributes.
   */
  RulesInterface() {
    this.drug.expiresIn = this.drug.expiresIn - 1;

    if (this.drug.expiresIn < 0)
      this.degradePwr = NormalDrugStrategy.expiredDegradePwr;

    const potentialNewBenefit = this.drug.benefit - this.degradePwr;
    this.drug.benefit = potentialNewBenefit >= 0 ? potentialNewBenefit : 0;
  }
}

NormalDrugStrategy.defaultDegradePower = 1;

NormalDrugStrategy.expiredDegradePwr =
  NormalDrugStrategy.defaultDegradePower * 2;
