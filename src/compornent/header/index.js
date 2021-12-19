
import React, { useEffect, useState } from "react";
import { isMobile } from 'mobile-device-detect';
import MobileComponent from "./MobileComponent"
import DesktopComponent from "./DesktopComponent"
import { useDispatch, useSelector } from "react-redux";
import { UserApi } from "../../service/userService";
import { actionGetTicket } from "../../redux/actions/buses";
const Header = () => {
  const dispatch = useDispatch()
  const { availableOrder } = useSelector(state => state.buses);
  const { user } = UserApi.isAuthenticated()
  const listUnconfimed = availableOrder.filter(item => item.user_id == user.id && item.status == "UNCONFIMRED");
  useEffect(() => {
    dispatch(actionGetTicket())
  }, [])
  return (
    <>
      {isMobile ? <MobileComponent /> : <DesktopComponent listUnconfimed={listUnconfimed}/>}
    </>
  );
};

export default Header;
