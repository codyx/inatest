import Drug from "../src/models/drug";
import originalDose from "./original";

export default [...originalDose, new Drug("Dafalgan", 18, 21)];
