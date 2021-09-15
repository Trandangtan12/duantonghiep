import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePages from "../pages/homepages";
import Contracts from  "../pages/contracts"
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
             <HomePages/>
        </Route>
          <Route path="/contract">
              <Contracts></Contracts>
          </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
