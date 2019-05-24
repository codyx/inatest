import dotenv from "dotenv";
dotenv.config();
import fs from "fs";

import logger from "./services/logger";
import Drug from "./models/drug";
import Pharmacy from "./models/pharmacy";

function runTrial(trial, indent = 0) {
  const jsonLog = [];

  for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
    const drugsOfCurDay = trial.updateBenefitValue();
    jsonLog.push(JSON.stringify(drugsOfCurDay, null, indent));
  }

  const ext = indent > 0 ? "json" : "txt"; // json ext. to enable code highlighting in major IDEs.
  fs.writeFile(`out/output.${ext}`, jsonLog, err =>
    err ? logger.error(err) : logger.info("success")
  );
}

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

  runTrial(trial, shouldPrettify ? 4 : 0);
} catch (err) {
  logger.error(`exception thrown: ${err} (${err.stack})`, err, err.stack);
}
