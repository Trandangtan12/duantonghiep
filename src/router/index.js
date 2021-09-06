import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePages from "../pages/homepages";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
             <HomePages/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
