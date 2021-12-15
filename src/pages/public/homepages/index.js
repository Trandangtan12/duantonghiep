import React from "react";
import { isMobile } from 'mobile-device-detect';

import DesktopComponent from "./DesktopComponent";
import MobileComponent from "./MobileComponent";
import Footer from "../../../compornent/footer";
import Header from "../../../compornent/header";


const HomePages = () => {

  return (
    <>
     
      
          {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </>
  )
};

export default HomePages;
