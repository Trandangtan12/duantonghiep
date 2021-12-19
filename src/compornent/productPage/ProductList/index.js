import React, { useState } from 'react'
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from 'mobile-device-detect';
import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';

const ProductList = (props) => {
  const { products, productFilter, listUnconfimed } = props
  console.log(listUnconfimed.length);
  return (
    <>
    {isMobile ? <MobileComponent listUnconfimed={listUnconfimed} productFilter={productFilter}/> : 
    <DesktopComponent listUnconfimed={listUnconfimed} productFilter={productFilter}/>}
    </>
  )
  
}

export default ProductList
