import React from 'react'
import { isMobile } from 'mobile-device-detect';
import MobileComponent from './MobileComponent'
import DesktopComponent from "./DesktopComponent"
import MessengerCustomerChat from 'react-messenger-customer-chat';

const LayoutWebsite = ({ children }) => {
  return (
    <>
      <MessengerCustomerChat
        pageId="104419498749033"
        appId="499856621131811"
      />
      {isMobile ? <MobileComponent children={children} /> : <DesktopComponent children={children} />}
    </>
  )
}

export default LayoutWebsite
