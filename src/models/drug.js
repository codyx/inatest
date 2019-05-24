export default class Drug {
  /**
   *
   * @param {string} name denotes the drug name.
   * @param {number} expiresIn denotes how powerful the drug is.
   * @param {number} benefit denotes the number of days we have until the item expires.
   */
  constructor(name, expiresIn, benefit) {
    // Proposal: normalize parameters values (e.g. a benefit of 51 becomes a benefit of 50)
    // to fully take in charge the rule "[...] Benefit of an item is never more than 50...".

    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}
