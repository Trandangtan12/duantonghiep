import {
  faSuitcase,
  faUser
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { MENU_BOTTOM_LIST, NAV_LINK_LIST } from "../../config";
import UserMenuClient from "./UserMenuClient";

const MobileComponent = () => {
  return (
    <header
      className="header tw-relative tw-box-border tw-font-sans 
      tw-z-30 tw-leading-normal tw-rounded-none tw-bg-white
      tw-shadow-md tw-tracking-norma"
    >
      <div className="tw-bg-green-100">
        <div className="tw-w-11/12 tw-mx-auto tw-block tw-py-2">
          <div className="tw-flex tw-justify-between tw-items-center">
            <div>
              <Link
                className="tw-text-gray-900 tw-no-underline hover:tw-no-underline tw-font-extrabold tw-text-xl"
                to="/"
              >
                <span className="tw-text-red-700">SIX</span>
                <span className="tw-text-green-600">LEAF</span>
              </Link>
            </div>

            <UserMenuClient />
          </div>
        </div>
      </div>
      <nav id="header" className="tw-sticky tw-top-0">
        <div id="nav-content" className="tw-w-full tw-py-2 tw-text-center">
          <h1 className="tw-uppercase tw-text-sm tw-font-bold tw-text-red-600">Liên hệ hotline: 19001910</h1> 
        </div>
        {/* </div> */}
      </nav>


    </header>
  )
}

export default MobileComponent
