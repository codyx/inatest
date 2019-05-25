import fs from "fs";
import path from "path";
import rp from "request-promise";
import logger from "../../src/services/logger";
import Drug from "../../src/models/drug";
import Pharmacy from "../../src/models/pharmacy";
import runTrial from "../../src/run-trial";

const oracleURL =
  "https://raw.githubusercontent.com/inato/take-home-test/master/output.txt";

describe("Check diff with original output", () => {
  it("should have the same file content", () => {
    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 5, 40),
      new Drug("Magic Pill", 15, 40)
    ];

    const trial = new Pharmacy(drugs);
    runTrial(trial, 0, 30); // Will write to "out/output.txt".

    const fileContent = fs.readFileSync(path.resolve("out/output.txt"), "utf8");
    return rp(oracleURL)
      .then(oracleResult => expect(fileContent).toBe(oracleResult))
      .catch(err => logger.error(err));
  });
});
