import React from 'react'
import { isMobile } from 'mobile-device-detect';
import MobileComponent from './MobileComponent'
import DesktopComponent from "./DesktopComponent"

const LayoutWebsite = ({children}) => {
    return (
      <>
      {isMobile ? <MobileComponent children={children}/> : <DesktopComponent children={children}/>}
      </>
    )
}

export default LayoutWebsite
