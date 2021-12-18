import {
    faSuitcase,
    faUser
  } from "@fortawesome/fontawesome-free-solid";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { useEffect, useState } from "react";
  import { Link, useHistory, useLocation } from "react-router-dom";
  import { MENU_BOTTOM_LIST, NAV_LINK_LIST } from "../../config";
  import NavMobile from "../navMobile";
  import UserMenuClient from "./UserMenuClient";

const DesktopComponent = () => {
    return (
         <header
      className="header tw-relative tw-box-border tw-font-sans tw-z-30 tw-leading-normal tw-rounded-none tw-bg-white
                 tw-shadow-md tw-tracking-norma">
      <div className="tw-flex tw-justify-between tw-items-center tw-w-11/12 tw-mx-auto">
        <div className="tw-flex tw-flex-row tw-items-center tw-mt-0 tw-py-3">
          <div className="tw-w-[9rem] tw-block">
            <Link
              to="/"
              className="tw-text-gray-900 tw-no-underline hover:tw-no-underline tw-font-extrabold tw-text-xl"
            >
              <span className="tw-text-red-700">SIX</span>
              <span className="tw-text-green-600">LEAF</span>
            </Link>
          </div>

          <nav id="header">

            <div id="nav-content" className="tw-w-full">
              <ul className="list-reset tw-flex tw-justify-between">
                {NAV_LINK_LIST.map((item) => (
                  <li className="tw-m-1 ">
                    <Link
                      to={item.link}
                      className="tw-flex tw-flex-row tw-alignt-center tw-border-2 tw-border-gray-300 
                      tw-rounded-full tw-py-2 tw-px-4 tw-no-underline tw-font-bold
                     tw-text-[#777777] tw-transition tw-duration-500 tw-ease-in-out hover:tw-bg-green-100"
                    >
                      <div className="tw-text-center tw-mr-2">
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="tw-text-green-600 tw-text-xl"
                        />
                      </div>
                      <div className=" tw-text-base">
                        {item.label}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* </div> */}
          </nav>
        </div>
        <div className="tw-block tw-w-64">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className="tw-text-[#777777] tw-font-bold ">
              <Link to="/ticket">
                <FontAwesomeIcon icon={faSuitcase} /> Vé của tôi
              </Link>
            </div>
           
            <UserMenuClient />
          </div>
        </div>
      </div>
     
    </header>
    )
}

export default DesktopComponent
