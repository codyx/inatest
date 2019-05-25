import React from "react";
import Chart from "./components/chart";
import Pharmacy from "../../src/models/pharmacy";
import Drug from "../../src/models/drug";
import runTrial from "../../src/run-trial";

const d = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40)
];

const trial = new Pharmacy(d);
const sets = runTrial(trial, 0, 30, false);

console.log(sets);

const data = [].concat(...sets);

const drugs = [
  data.filter(x => x.name === "Doliprane"),
  data.filter(x => x.name === "Fervex"),
  data.filter(x => x.name === "Herbal Tea"),
  data.filter(x => x.name === "Magic Pill")
];

class App extends React.Component {
  state = {
    drugs
  };

  render() {
    const { drugs } = this.state;
    return (
      <div id="container">
        {drugs.map((data, idx) => (
          <React.Fragment key={idx}>
            <h1>{data[0].name}</h1>
            <Chart data={data} />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default App;
