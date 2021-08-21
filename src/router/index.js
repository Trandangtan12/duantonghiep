import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
              đây là router trang chủ
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
