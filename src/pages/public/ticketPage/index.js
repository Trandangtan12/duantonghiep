import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { NAV_LINK_LIST_MY_TICKET } from "../../../config";
import { UserApi } from "../../../service/userService";
import TabList from "./tabList";

const Ticket = () => {
  const [isLogged, setIsLogged] = useState(false);
    const {pathname} = useLocation()
    const {user} = UserApi.isAuthenticated()
    useEffect(() => {
      user && setIsLogged(true)
    }, [pathname, isLogged])
    const history = useHistory()
  return (
    <div className="tw-w-3/4 tw-mx-auto tw-mt-2 tw-mb-3">
      {isLogged ? <div className="tw-flex ">
      <div className="tw-w-[10rem]">
      <ul>
      {NAV_LINK_LIST_MY_TICKET.map(elt =>(
          <li className="tw-cursor-pointer tw-mb-2"><FontAwesomeIcon icon={elt.icon} /> {elt.label}</li>
      ))}
      </ul>
      </div>
       <div className="tw-flex-grow"> <TabList /></div>
      </div> : <div> Hãy <Link to="/signin" className="tw-text-green-600">Đăng nhập</Link> để đặt vé!</div> }
    </div>
  );
};

export default Ticket;
