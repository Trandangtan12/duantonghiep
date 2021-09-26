import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRouterAdmin from "../auth/privateRouterAdmin";
import Footer from "../compornent/footer";
import Header from "../compornent/header";
import LayoutAdmin from "../layout/layoutAdmin";
import LayoutWebsite from "../layout/layoutWebsite";
import DashBoard from "../pages/private/dashboard";
import Contracts from "../pages/public/contacts";
import HomePages from "../pages/public/homepages";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/:path?">
          <LayoutAdmin>
            <Route path="/admin/">
              <DashBoard />
            </Route>
          </LayoutAdmin>
        </Route>
        <Route>
          <Header/>
          <LayoutWebsite>
            <Switch>
              <Route exact path="/">
                <HomePages></HomePages>
              </Route>
              <Route exact path="/contact">
                <Contracts />
              </Route>
            </Switch>
          </LayoutWebsite>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
