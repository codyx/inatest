import StrategyContext from "./strategy/context";

export default class Pharmacy {
  /**
   *
   * @param {Drug[]} drugs collection of drugs.
   */
  constructor(drugs = []) {
    this.drugs = drugs;
    this.stratCtxts = [
      ...new Set(this.drugs.map(drug => new StrategyContext(drug)))
    ];
  }

  /**
   * updateBenefitValue modifies the drugs attributes benefit and expiresIn
   * according to their own specfic underyling rules effects (depending on their name, which is actually their type) over time.
   * When used on a trial test, a call to this function simulates the effects of one elapsed day.
   */
  updateBenefitValue() {
    this.drugs = this.stratCtxts.map(stratCtxt => {
      stratCtxt.ContextInterface();
      return stratCtxt.strategy.drug;
    });
    return this.drugs;
  }
}
