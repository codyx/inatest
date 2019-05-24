export default class Pharmacy {
  /**
   *
   * @param {Drug[]} drugs collection of drugs.
   */
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
   * updateBenefitValue modifies the drugs attributes benefit and expiresIn
   * according to their own specfic underyling rules effects (depending on their name, which is actually their type) over time.
   * When used on a trial test, a call to this function simulates the effects of one elapsed day.
   */
  updateBenefitValue() {
    return this.drugs;
  }
}
