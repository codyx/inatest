import fs from "fs";
import logger from "./services/logger";
import Pharmacy from "./models/pharmacy";

/**
 * runTrial will simulate the given trial for trialDaysDuration days
 * and log a result file in the "out" directory.
 * @param {Pharmacy} trial trial to run.
 * @param {number} indent indentation used when prettifying.
 * @param {number} trialDaysDuration trial duration in days.
 */
export default function runTrial(trial, indent = 0, trialDaysDuration = 30) {
  if (!(trial instanceof Pharmacy)) throw new Error("invalid trial type");
  trialDaysDuration = normalizeTrialDaysDuration(trialDaysDuration);

  const jsonLog = [];

  for (let elapsedDays = 0; elapsedDays < trialDaysDuration; elapsedDays++) {
    const drugsOfCurDay = trial.updateBenefitValue();
    jsonLog.push(JSON.stringify(drugsOfCurDay, null, indent));
  }

  const ext = indent > 0 ? "json" : "txt"; // json ext. to enable code highlighting in major IDEs.
  fs.writeFileSync(`out/output.${ext}`, jsonLog, err =>
    err ? logger.error(err) : logger.info("success")
  );
}

const MAX_TRIAL_DURATION = 365 * 30; // 30 years should be enough...

const normalizeTrialDaysDuration = duration => {
  if (isNaN((duration = parseInt(duration, 10))))
    throw new Error("invalid TrialDaysDuration type");

  duration = Math.abs(duration);
  if (duration > MAX_TRIAL_DURATION) {
    logger.info(`max trial duration exceeded. Using ${MAX_TRIAL_DURATION}d`);
    return MAX_TRIAL_DURATION;
  }
  return duration;
};
