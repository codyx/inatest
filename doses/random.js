import Drug from "../src/models/drug";

const drugNames = [
  "Doliprane",
  "Herbal Tea",
  "Fervex",
  "Magic Pill",
  "Dafalgan"
];

const dose = [];

const rand = max => Math.floor(Math.random() * max);

const newRandomDrug = () => {
  const name = drugNames[rand(drugNames.length)];
  const expiresIn = rand(50);
  const benefit = rand(50);

  return !dose.find(d => d.name === name)
    ? new Drug(name, expiresIn, benefit)
    : newRandomDrug();
};

for (let i = 0; dose.length < 5; ++i) {
  dose.push(newRandomDrug());
}

export default dose;
