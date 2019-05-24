import Strategy from "../strategy";

export default class MagicPillStrategy extends Strategy {
  constructor(drug) {
    super();
    this.drug = drug;
  }

  /**
   * RulesInterface applies rules of this strategy
   * and can modify the underlying drug's attributes.
   */
  RulesInterface() {
    // Well, "Less is more" I guess.
  }
}
