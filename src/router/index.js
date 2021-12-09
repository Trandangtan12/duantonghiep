import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router, Redirect, Route,
  Switch
} from "react-router-dom";
import loading from '../asset/images/loading-1.gif';
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
  const TicketSearch = lazy(() => import("../pages/public/ticketPage/ticketSearch"))
  const Service = lazy(() => import("../pages/private/service"))
  const BusesType = lazy(() => import("../pages/private/vehicleType"))
  const CretaeService = lazy(() => import("../pages/private/service/CreateSevice"))
  const EditService = lazy(() => import("../pages/private/service/EditService/EditService"))
  const CretaeVehicel = lazy(() => import("../pages/private/vehicleType/CreateVehicel/CreateVehicel"))
  const EditeVehicel = lazy(() => import("../pages/private/vehicleType/EditVehicel/EditVehical"))
  const Profile = lazy(() => import("../pages/private/profile"))
  const Account = lazy(() => import("../pages/private/account"))
  const SuccessPayment = lazy(() => import("../pages/public/paymentProgress/Success"))
  const FailPayment = lazy(() => import("../pages/public/paymentProgress/Fail"))
  const CreateTicket = lazy(() => import("../pages/private/order/create"))
  const Permission = lazy(() => import("../pages/private/account/permission/index"))
  const CreatePermission = lazy(() => import("../pages/private/account/createPermission"))
  const News = lazy(() => import("../pages/private/news"))
  const NewsCreate = lazy(() => import("../pages/private/news/create/index"))
  const EditNews = lazy(() => import("../pages/private/news/edit/index"))
  const EditTicket = lazy(() => import("../pages/private/order/edit/index"))

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRouterAdmin path="/admin/:path?">
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
                <Route exact  path="/admin/order/create" component={CreateTicket} />
                <Route exact  path="/admin/order/edit/:id" component={EditTicket} />
                <Route exact path="/admin/service" component={Service} />
                <Route exact  path="/admin/service/create" component={CretaeService}/>
                <Route exact  path="/admin/service/edit/:id" component={EditService}/>
                <Route exact path="/admin/vehicel-type" component={BusesType} />
                <Route exact  path="/admin/vehicel-type/create" component={CretaeVehicel}/>
                <Route exact  path="/admin/vehicel-type/edit/:id" component={EditeVehicel}/>
                <Route exact  path="/admin/account" component={Account}/>
                <Route exact  path="/admin/account/permission/create" component={CreatePermission}/>
                <Route exact  path="/admin/account/permission/:id" component={Permission}/>
                <Route exact  path="/admin/news" component={News}/>
                <Route exact  path="/admin/news/edit/:id" component={EditNews}/>
                <Route exact  path="/admin/news/create" component={NewsCreate}/>
                <Route exact  path="/admin/profile" component={Profile}/>
                <Route exact path="*" component={PageNotFound} />
              </Switch>
            </LayoutAdmin>
          </PrivateRouterAdmin>
          <Route>
            <div className="tw-flex tw-flex-col tw-h-screen">
              <Header />
              
              <div className="tw-flex tw-flex-grow">
                <LayoutWebsite>
                  <Switch>
                    <Route exact path="/" component={HomePages} />
                    <Route exact path="/contact" component={Contracts} />
                    <Route path="/product/start=:start/and/end=:end/and/date=:date" component={Products}/>
                    <Route exact path="/productdetail/:id" component={ProductDetail} />
                    <Route exact path="/payment/success" component={SuccessPayment} />
                    <Route exact path="/payment/fail" component={FailPayment} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <PrivateRouterPublic exact path="/user/dashbroad">
                      <UserDashBoard/>
                    </PrivateRouterPublic>
                    <Route exact path="/ticket" component={Ticket} />
                    <Route exact path="/ticket/search" component={TicketSearch} />
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
