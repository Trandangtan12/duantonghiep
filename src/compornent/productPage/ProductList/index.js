import React, { useState } from 'react'
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from 'mobile-device-detect';
import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';

const ProductList = (props) => {
  const { products, productFilter } = props
  return (
    <>
    {isMobile ? <MobileComponent productFilter={productFilter}/> : <DesktopComponent productFilter={productFilter}/>}
    </>
  )
  
}

export default ProductList
