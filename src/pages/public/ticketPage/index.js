import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { UserApi } from "../../../service/userService";
import TabList from "./tabList";

const Ticket = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const { pathname } = useLocation()
  const { user } = UserApi.isAuthenticated()
  useEffect(() => {
    user && setIsLogged(true)
  }, [pathname, isLogged])
  const history = useHistory()
  return (
    <div className="tw-w-3/4 tw-mx-auto tw-my-4 tw-mb-3">
      {isLogged ? <div className="tw-flex ">
       
        <div className="tw-flex-grow"> <TabList {...props}/></div>
      </div> : <div> Hãy <Link to="/signin" className="tw-text-green-600">Đăng nhập</Link> để đặt vé!</div>}
    </div>
  );
};

export default Ticket;
