import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Fonts from "./components/fonts";
import Chart from "./components/chart";
import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
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
    if (Array.isArray(sets) && sets.length > 0) {
      const data = [].concat(...sets);
      const names = sets[0].map(set => set.name);
      const drugs = [...names.map(name => data.filter(x => x.name === name))];

      this.setState({ drugs: drugs.filter(elem => elem.length > 0) });
    }
  };

  componentDidMount() {
    Fonts();
    window.setTimeout(this.prepareDrugs, 1000);
  }

  render() {
    const { drugs } = this.state;
    return drugs.length ? (
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
    ) : (
      <Container maxWidth="sm">
        <CircularProgress size={300} />
        <Typography variant="h6" color="inherit">
          Preparing results. Please wait...
        </Typography>
      </Container>
    );
  }
}

export default App;
