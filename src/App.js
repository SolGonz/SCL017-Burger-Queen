import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from "./components/Home/Home";
import {Menu} from "./components/MenuView/MenuView"



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/menu">
          <Menu></Menu>
        </Route>
        <Route path="/" exact>
          <Home></Home>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
