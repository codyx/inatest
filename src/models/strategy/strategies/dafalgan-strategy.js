import Strategy from "../strategy";
import NormalDrugStrategy from "./normal-drug-strategy";

export default class DafalganStrategy extends Strategy {
  constructor(drug) {
    super();
    this.drug = drug;
  }

  /**
   * RulesInterface applies rules of this strategy
   * and can modify the underlying drug's attributes.
   */
  RulesInterface() {
    this.drug.expiresIn = this.drug.expiresIn - 1;

    this.degradePwr =
      NormalDrugStrategy.getDegradePower(this.drug.expiresIn) * 2;
    const sub = this.drug.benefit - this.degradePwr;
    this.drug.benefit = Math.sign(sub) !== -1 ? sub : 0;
  }
}
