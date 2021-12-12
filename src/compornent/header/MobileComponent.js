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
            <div id="nav-content" className="tw-w-full">
              <ul className="list-reset tw-flex tw-justify-center">
                {NAV_LINK_LIST.map((item) => (
                  <li className="tw-m-1 ">
                    <Link
                      to={item.link}
                      className="tw-flex tw-flex-col tw-justify-center tw-py-2 tw-px-1 tw-no-underline 
                     tw-text-[#777777] tw-transition tw-duration-500 tw-ease-in-out hover:tw-bg-green-100"
                    >
                      <div className="tw-text-center">
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="tw-text-green-600 tw-text-xl"
                        />
                      </div>
                      <div className="tw-text-xs tw-font-bold">
                        {item.label}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* </div> */}
          </nav>

            <nav className="tw-fixed tw-bottom-0 tw-block tw-z-1 tw-w-full tw-opacity-[0.8] tw-bg-black">
                <ul className="tw-flex tw-justify-around tw-content-end tw-px-2 tw-py-4">
                    {MENU_BOTTOM_LIST.map((item) => (
                        <Link to={item.link}>
                        <li className="tw-flex tw-flex-col tw-justify-center">
                            
                            <span className="tw-text-white tw-text-center">
                                <FontAwesomeIcon icon={item.icon} />
                            </span>
                            <span className="tw-text-white tw-text-xs">{item.label}</span>
                        </li>
                        </Link>

                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default MobileComponent
