import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import { PlaceToVisit } from "./components/PlaceToVisit";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./router/ScrollToTop";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <ScrollToTop />
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <PlaceToVisit />
      </div>
    </Router>
  );
}

export default App;
