import {
  faCar,
  faDotCircle,
  faTruckLoading,
  faWheelchair,
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { lazy, Suspense } from "react";
import loading from '../asset/images/loading.gif';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRouterAdmin from "../auth/privateRouterAdmin";
import PrivateRouterPublic from "../auth/privateRouterPublic";
const Loading = () => {
  return (
    <div className="tw-flex tw-h-screen tw-justify-center tw-items-center">
      <div className="tw-text-center">
        <img src={loading} alt=""/>
      </div>
    </div>
  );
};
const Routes = () => {
  // const PrivateRouterAdmin = lazy(() => lazy("../auth/privateRouterAdmin"));
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
  const NewBuses = lazy(() => import("../pages/private/buses/newBuses"));
  const Products = lazy(() => import("../pages/public/products"))
  const ProductDetail = lazy(() => import("../pages/public/productDetail"))
  const SignIn = lazy(() => import("../pages/public/User/signin"))
  const SignUp = lazy(() => import("../pages/public/User/signup"))
  const UserDashBoard = lazy(()=> import("../pages/public/User/UserDashboard"))
  const EditBusses = lazy(() => import("../pages/private/buses/editBusses"))
  const PageNotFound = lazy(() => import("../pages/PageNotFound"))
  const Ticket = lazy(() => import("../pages/public/ticketPage"))
  const Service = lazy(() => import("../pages/private/service"))
  const BusesType = lazy(() => import("../pages/private/vehicleType"))
  const CretaeService = lazy(() => import("../pages/private/service/CreateSevice"))
  const EditService = lazy(() => import("../pages/private/service/EditService/EditService"))
  const CretaeVehicel = lazy(() => import("../pages/private/vehicleType/CreateVehicel/CreateVehicel"))
  const EditeVehicel = lazy(() => import("../pages/private/vehicleType/EditVehicel/EditVehical"))
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/admin/:path?">
            <LayoutAdmin>
              <Switch>
                <Route exact path="/admin">
                  <Redirect to="/admin/dashboard" />
                </Route>
                <Route exact  path="/admin/dashboard" component={Dashboard} />
                <Route exact  path="/admin/buses" component={Buses} />
                <Route exact  path="/admin/buses/create" component={NewBuses}/>
                <Route exact  path="/admin/buses/edit/:id" component={EditBusses}/>
                <Route exact  path="/admin/analytics" component={Analytics} />
                <Route exact  path="/admin/order" component={Order} />
                <Route exact path="/admin/service" component={Service} />
                <Route exact  path="/admin/service/create" component={CretaeService}/>
                <Route exact  path="/admin/service/edit/:id" component={EditService}/>
                <Route exact path="/admin/vehicel-type" component={BusesType} />
                <Route exact  path="/admin/vehicel-type/create" component={CretaeVehicel}/>
                <Route exact  path="/admin/vehicel-type/edit/:id" component={EditeVehicel}/>
                <Route exact path="*" component={PageNotFound} />
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
                    <Route exact path="/products" component={Products}/>
                    <Route exact path="/product/:id" component={ProductDetail} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <PrivateRouterPublic exact path="/user/dashboard">
                      <UserDashBoard/>
                    </PrivateRouterPublic>
                    <Route exact path="/ticket" component={Ticket} />
                    <Route exact path="*" component={PageNotFound} />
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
