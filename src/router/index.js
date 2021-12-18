import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import loading from "../asset/images/loading-1.gif";
import PrivateRouterAdmin from "../auth/privateRouterAdmin";
import { UserApi } from "../service/userService";
import PrivateRouterPublic from "../auth/privateRouterPublic";
const Loading = () => {
  return (
    <div className="tw-flex tw-h-screen tw-justify-center tw-items-center">
      <div className="tw-text-center">
        <img src={loading} alt="" />
      </div>
    </div>
  );
};
const Routes = () => {
  const { user } = UserApi.isAuthenticated();
  const userKey = () => {
    if (user === undefined) {
      return undefined;
    } else {
      if (user.hasOwnProperty("roles") === false) {
        return undefined;
      } else {
        const userRole = user.roles.every(
          (item) => item.id === 1
        );
        return userRole;
      }
    }
  };
  const isUserStaff = () => {
    if (user === undefined) {
      return undefined;
    } else {
      if (user.hasOwnProperty("roles") === false) {
        return undefined;
      } else {
        const userRole = user.roles.every(
          (item) => item.id === 2
        );
        return userRole;
      }
    }
  };
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
  const TicketSearch = lazy(() => import("../pages/public/searchTicket"))
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
  const Evaluate = lazy(() => import("../pages/private/evaluate"))
  const NewPage = lazy(() => import("../pages/public/newPages"))
  const NewDetailPage = lazy(() => import("../pages/public/newsDetailPage"))
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRouterAdmin path="/admin/:path?">
            <LayoutAdmin>
              <Switch>
                {user?.id === 3 ? (
                  <Route exact path="/admin">
                    <Redirect to="/admin/order" />
                  </Route>
                ) : (
                  <Route exact path="/admin">
                    <Redirect to="/admin/dashboard" />
                  </Route>
                )}

                <Route
                  exact
                  path="/admin/dashboard"
                  render={() => {
                    return user && user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <Dashboard />
                    );
                  }}
                />
                <Route exact path="/admin/buses"  render={() => {
                    return user && user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <Buses />
                    );
                  }} />
                <Route exact path="/admin/buses/create"  render={() => {
                    return user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <NewBuses />
                    );
                  }}  />
                <Route
                  exact
                  path="/admin/buses/edit/:id"
                  component={EditBusses}
                />
                <Route exact path="/admin/analytics"  render={() => {
                    return user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <Analytics />
                    );
                  }} />
                <Route exact path="/admin/order" component={Order} />
                <Route
                  exact
                  path="/admin/order/create"
                  component={CreateTicket}
                />
                <Route
                  exact
                  path="/admin/order/edit/:id"
                  component={EditTicket}
                />
                <Route exact path="/admin/service"    render={() => {
                    return user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <Service />
                    );
                  }} />
                <Route
                  exact
                  path="/admin/service/create"
                  render={() => {
                    return user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <CretaeService />
                    );
                  }}
                />
                <Route
                  exact
                  path="/admin/service/edit/:id"
                  render={() => {
                    return user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <EditService />
                    );
                  }}
                />
                <Route exact path="/admin/vehicel-type"
                 render={() => {
                    return user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <BusesType />
                    );
                  }}
               />
                <Route
                  exact
                  path="/admin/vehicel-type/create"
                  render={() => {
                    return  user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <CretaeVehicel />
                    );
                  }}
                />
                <Route
                  exact
                  path="/admin/vehicel-type/edit/:id"
                  render={() => {
                    return user && user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <EditeVehicel />
                    );
                  }}
                />
                <Route exact path="/admin/account"  render={() => {
                    return  userKey() ? (
                      <Account/>
                    ) : user?.id === 3 ?  <Redirect to="/admin/order" /> : isUserStaff() ?   <Redirect to="/admin/dashboard" /> : (
                      <Redirect to="/admin/order" />
                    );
                  }}  />
                <Route
                  exact
                  path="/admin/account/permission/create"
                  render={() => {
                    return  user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <CreatePermission />
                    );
                  }}
                />
                <Route
                  exact
                  path="/admin/account/permission/:id"
                  render={() => {
                    return user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <Permission />
                    );
                  }}
                />
                <Route exact path="/admin/news"  render={() => {
                    return  user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <News />
                    );
                  }}  />
                <Route exact path="/admin/news/edit/:id" 
                 render={() => {
                    return user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <EditNews />
                    );
                  }} />
                <Route exact path="/admin/news/create"   render={() => {
                    return  user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <NewsCreate />
                    );
                  }} />
                <Route exact path="/admin/profile" component={Profile} />
                <Route exact path="/admin/evaluate"    render={() => {
                    return  user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <Evaluate />
                    );
                  }} />
                <Route exact path="/admin/news/create"   render={() => {
                    return  user?.id === 3 ? (
                      <Redirect to="/admin/order" />
                    ) : (
                      <Evaluate />
                    );
                  }} />
                <Route exact path="*" component={PageNotFound} />
              </Switch>
            </LayoutAdmin>
          </PrivateRouterAdmin>
          <Route>
            
                <LayoutWebsite>
                  <Switch>
                    <Route exact path="/" component={HomePages} />
                    <Route exact path="/contact" component={Contracts} />
                    <Route path="/product/start=:start/and/end=:end" component={Products}/>
                    <Route exact path="/productdetail/:id" component={ProductDetail} />
                    <Route exact path="/payment/success" component={SuccessPayment} />
                    <Route exact path="/payment/fail" component={FailPayment} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <PrivateRouterPublic exact path="/user/dashbroad">
                      <UserDashBoard/>
                    </PrivateRouterPublic>
                    <Route exact path="/page/news" component={NewPage} />
                    <Route exact path="/page/newdetail/:id" component={NewDetailPage} />
                    <Route exact path="/ticket" component={Ticket} />
                    <Route exact path="/ticket/search" component={TicketSearch} />
                    <Route exact path="*" component={PageNotFound} />
                  </Switch>
                </LayoutWebsite>
              
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
