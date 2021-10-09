import {
  faCar,
  faDotCircle,
  faTruckLoading,
  faWheelchair,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
const Loading = () => {
  return (
    <div className="tw-flex tw-h-screen tw-justify-center tw-items-center">
      <div className="tw-animate-spin tw-text-5xl tw-text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="none"
          viewBox="0 0 64 64"
        >
          <path
            fill="#666"
            d="M55.09 31.76v-2.87a1 1 0 00-1-1h-11.7a1 1 0 00-1 .86l-18.88-.2a1 1 0 00-.93-.66H9.91a1 1 0 00-.85.51H9a.89.89 0 000 .92v2.38a1 1 0 00.06 2c10.19 0 18.49 9.4 18.49 21a1.007 1.007 0 102-.26h4.84a1.007 1.007 0 102 .26c0-11.55 8.3-21 18.49-21a.999.999 0 00.21-1.94z"
          ></path>
          <path
            fill="#999"
            d="M32 3A29 29 0 003 32c1.59 38.47 56.41 38.46 58 0A29 29 0 0032 3zm0 50.92A22 22 0 0110.08 32c1.21-29.07 42.64-29.07 43.84 0A22 22 0 0132 53.92z"
          ></path>
          <path
            fill="#1A1A1A"
            d="M43 26.65a3.689 3.689 0 00-3.27-2H24.28a3.72 3.72 0 00-3.1 5.77l7.72 11.7a3.72 3.72 0 006.2 0l7.72-11.66a3.72 3.72 0 00.18-3.81z"
          ></path>
        </svg>
      </div>
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
  const LoginAdmin = lazy(() => import("../pages/private/login"));

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
                    <Route exact path="/ticket-admin" component={LoginAdmin} />
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
