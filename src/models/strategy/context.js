import MagicPillStrategy from "./strategies/magic-pill-strategy";
import NormalDrugStrategy from "./strategies/normal-drug-strategy";
import Drug from "../drug";
import HerbalTeaStrategy from "./strategies/herbal-tea-strategy";
import FervexStrategy from "./strategies/fervex-strategy";
import DafalganStrategy from "./strategies/dafalgan-strategy";

export default class StrategyContext {
  /**
   *
   * @param {Drug} drug Drug corresponding to its underlying strategy.
   */
  constructor(drug) {
    if (!(drug instanceof Drug)) throw new Error("invalid drug type");

    let stratType = this.getStratType(drug.name);

    if (!stratType) stratType = NormalDrugStrategy;
    this.strategy = new stratType(drug);
  }

  /**
   *
   * getStratType returns the related Class type of a given
   * drug, if existing.
   * @param {string} drugName candidate drug name to look for.
   * @returns {any|null} drugType class type for drugName, or null.
   */
  getStratType(drugName) {
    const strats = {
      Dafalgan: DafalganStrategy,
      Fervex: FervexStrategy,
      "Herbal Tea": HerbalTeaStrategy,
      "Magic Pill": MagicPillStrategy
    };
    const stratName = Object.keys(strats).find(
      stratName => stratName === drugName
    );
    return stratName ? strats[stratName] : null;
  }

  /**
   * ContextInterface runs this class
   * underlying strategy.
   */
  ContextInterface() {
    this.strategy.RulesInterface();
  }
}
