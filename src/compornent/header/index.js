
import React, { useEffect, useState } from "react";
import { isMobile } from 'mobile-device-detect';
import MobileComponent from "./MobileComponent"
import DesktopComponent from "./DesktopComponent"
const Header = () => {
  return (
   <>
   {isMobile ? <MobileComponent/> : <DesktopComponent/>}
   </>
  );
};

export default Header;
