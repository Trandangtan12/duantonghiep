import { faCar } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch , Redirect } from "react-router-dom";
const Loading = () => {
  return (
    <div className="tw-fixed tw-top-2/4 tw-left-2/4">
      <FontAwesomeIcon
        icon={faCar}
        className="tw-animate-spin tw-w-[200px] tw-h-[200px]"
      />
    </div>
  );
};
const Routes = () => {
  const PrivateRouterAdmin = lazy(() => lazy("../auth/privateRouterAdmin"));
  const LayoutAdmin = lazy(() => import("../layout/layoutAdmin"));
  const LayoutWebsite = lazy(() => import("../layout/layoutWebsite"));
  const HomePages = lazy(() => import("../pages/public/homepages"));
  const Footer = lazy(() => import("../compornent/footer"));
  const Header = lazy(() => import("../compornent/header"));
  const Dashboard = lazy(() => import("../pages/private/dashboard"));
  const Contracts = lazy(() => import("../pages/public/contacts"));
  const Buses = lazy(() => import("../pages/private/buses"));
  const Analytics = lazy(() => import("../pages/private/analytics"));
  const Order = lazy(() => import("../pages/private/order"));

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/admin/:path?">
            <LayoutAdmin>
              <Switch>
                <Route exact path="/admin">
                  <Redirect to="/admin/dashboard" />
                </Route>
                <Route exact path="/admin/dashboard" component={Dashboard} />
                <Route exact path="/admin/buses" component={Buses} />
                <Route exact path="/admin/analytics" component={Analytics} />
                <Route exact path="/admin/order" component={Order} />
              </Switch>
            </LayoutAdmin>
          </Route>
          <Route>
            <div className="tw-flex tw-flex-col tw-h-screen">
              <Header />
              <div className="tw-flex tw-flex-grow">
                <LayoutWebsite>
                  <Switch>
                    <Route exact path="/" component={HomePages} />
                    <Route exact path="/contact" component={Contracts} />
                  </Switch>
                </LayoutWebsite>
              </div>
              <Footer />
            </div>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
