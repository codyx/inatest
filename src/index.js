import dotenv from "dotenv";
dotenv.config();

import logger from "./services/logger";
import Pharmacy from "./models/pharmacy";
import runTrial from "./run-trial";
import dose from "../doses/original";

try {
  const trial = new Pharmacy(dose);

  const shouldPrettify =
    "PRETTIFY" in process.env && process.env.PRETTIFY === "true";
  logger.debug(`using prettify: ${shouldPrettify}`);

  const trialDuration =
    "TRIAL_DURATION" in process.env ? process.env.TRIAL_DURATION : 30;

  runTrial(trial, shouldPrettify ? 4 : 0, trialDuration);
} catch (err) {
  logger.error(`exception thrown: ${err} (${err.stack})`, err, err.stack);
}
