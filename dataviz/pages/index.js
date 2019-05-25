import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Fonts from "./components/fonts";
import Chart from "./components/chart";
import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import sets from "../../out/output.json";

const Header = styled(AppBar)({
  marginBottom: "3vh"
});

class App extends React.Component {
  state = {
    drugs: []
  };

  prepareDrugs = () => {
    const data = [].concat(...sets);

    const drugs = [
      data.filter(x => x.name === "Doliprane"),
      data.filter(x => x.name === "Fervex"),
      data.filter(x => x.name === "Herbal Tea"),
      data.filter(x => x.name === "Magic Pill"),
      data.filter(x => x.name === "Dafalgan")
    ];
    this.setState({ drugs: drugs.filter(elem => elem.length > 0) });
  }

  componentDidMount() {
    Fonts();
    this.prepareDrugs();
  }

  render() {
    const { drugs } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Header position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Inato Labs - Results
            </Typography>
          </Toolbar>
        </Header>
        {drugs.map((data, idx) => (
          <Container key={idx} maxWidth="sm">
            <Typography variant="h6" color="inherit">
              🧪 {data[0].name}
            </Typography>
            <Chart data={data} />
          </Container>
        ))}
      </ThemeProvider>
    );
  }
}

export default App;
