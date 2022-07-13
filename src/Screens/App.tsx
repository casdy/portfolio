import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CSSTypes from "../Types";
import About from "./About";
import Resume from "./Resume";


//const routes = [/*"About Me" ,"Contributions","Resume"*/];

const styles: CSSTypes = {
  container: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "100vh",
  },
  mainContent: {
    height: "95vh",
  },
};
const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        
        <main style={styles.mainContent}>
          <Switch>
            <Route path="/" exact>
              <About/>
              <Resume/>
            </Route>
            {/* <Route path="/contributions">
              <Contributions />
            </Route> */}
            { <Route path="/resume">
              <Resume />
            </Route> }  
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
