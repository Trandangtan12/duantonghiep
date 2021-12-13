import React from "react";
import { isMobile } from 'mobile-device-detect';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import DesktopComponent from "./DesktopComponent";
import MobileComponent from "./MobileComponent";
import Footer from "../../../compornent/footer";
import Header from "../../../compornent/header";


const HomePages = () => {

  return (
    <>
      <MessengerCustomerChat
        pageId="104419498749033"
        appId="499856621131811"
      />
      
          {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </>
  )
};

export default HomePages;
