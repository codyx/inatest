import Drug from "../../../src/models/drug";
import Pharmacy from "../../../src/models/pharmacy";

export default ({ name, expiresIn, benefit }) =>
  new Pharmacy([new Drug(name, expiresIn, benefit)]);
