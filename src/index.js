import dotenv from "dotenv";
dotenv.config();

import logger from "./services/logger";
import Drug from "./models/drug";
import Pharmacy from "./models/pharmacy";
import runTrial from "./run-trial";

try {
  const drugs = [
    new Drug("Doliprane", 20, 30),
    new Drug("Herbal Tea", 10, 5),
    new Drug("Fervex", 5, 40),
    new Drug("Magic Pill", 15, 40)
  ];
  const trial = new Pharmacy(drugs);

  const shouldPrettify =
    "PRETTIFY" in process.env && process.env.PRETTIFY === "true";
  logger.debug(`using prettify: ${shouldPrettify}`);

  const trialDuration =
    "TRIAL_DURATION" in process.env ? process.env.TRIAL_DURATION : 30;

  runTrial(trial, shouldPrettify ? 4 : 0, trialDuration);
} catch (err) {
  logger.error(`exception thrown: ${err} (${err.stack})`, err, err.stack);
}
