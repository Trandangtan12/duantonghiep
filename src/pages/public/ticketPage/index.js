import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { UserApi } from "../../../service/userService";
import { isMobile } from 'mobile-device-detect';
import MobileComponent from "./MobileComponent"
import DesktopComponent from "./DesktopComponent"

const Ticket = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const { pathname } = useLocation()
  const { user } = UserApi.isAuthenticated()
  useEffect(() => {
    user && setIsLogged(true)
  }, [pathname, isLogged])
  return (
    <>
    {isMobile ? <MobileComponent 
    isLogged={isLogged}
    /> : <DesktopComponent 
    isLogged={isLogged}
    />}
      
    </>
  );
};

export default Ticket;
