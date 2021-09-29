import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from '../asset/images/loading.gif'
const Routes = () => {
  const PrivateRouterAdmin = lazy(()=>lazy("../auth/privateRouterAdmin"))
  const LayoutAdmin = lazy(() => import('../layout/layoutAdmin'))
  const LayoutWebsite = lazy(()=> import("../layout/layoutWebsite"))
  const HomePages = lazy(() => import("../pages/public/homepages"));
  const Footer = lazy(() => import("../compornent/footer"));
  const Header = lazy(() => import("../compornent/header"));
  const DashBoard = lazy(()=>import("../pages/private/dashboard"))
  const Contracts = lazy(()=> import("../pages/public/contacts"))
  return (
    <Router>
      <Suspense fallback={<div><img src={Loading} alt="loading" className="tw-fixed tw-top-0"/></div>}>
        <Switch>
          <Route exact path="/admin/:path?">
            <LayoutAdmin>
              <Route path="/admin/" component={DashBoard} />
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
