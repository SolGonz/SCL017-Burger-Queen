import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { Bakery } from "./components/BakeryMenu/Bakery";
import Home from "./components/Home/Home";
import { HotDrinks } from "./components/HotDrinksMenu/HotDrinks";
import { IceDrinks } from "./components/IceDrinksMenu/IceDrinks";
import { OrderList } from "./components/OrderList/OrderList";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/ice-drinks">
          <IceDrinks></IceDrinks>
        </Route>
        <Route path="/hot-drinks">
          <HotDrinks></HotDrinks>
        </Route>
        <Route path="/bakery">
          <Bakery></Bakery>
        </Route>
        <Route path="/order-list">
          <OrderList></OrderList>
        </Route>
        <Route path="/" exact>
          <Home></Home>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
