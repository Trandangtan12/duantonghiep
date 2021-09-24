import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePages from "../pages/homepages";
import Contracts from "../pages/contacts";
import Products from "../pages/products";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePages />
        </Route>
        <Route path="/contact">
          <Contracts></Contracts>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
