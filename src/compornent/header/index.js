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
const Header = () => {
  const [navMobileStatus, setNavMobileStatus] = useState(false);
  
  const handleShowMenu = () => {
    if (navMobileStatus) {
      setNavMobileStatus(false);
    } else {
      setNavMobileStatus(true);
    }
  };
  return (
    <header
      className="header tw-relative tw-box-border tw-font-sans 
    tw-z-20 tw-leading-normal tw-rounded-2xl md:tw-rounded-none tw-bg-white
    tw-shadow-md tw-tracking-norma"
    >
      <div className="tw-bg-green-100">
        <div className="tw-w-11/12 tw-mx-auto tw-block xl:tw-hidden tw-py-2">
          <div class="tw-flex tw-justify-between tw-items-center">
            <div>
              <a
                className="tw-text-gray-900 tw-no-underline hover:tw-no-underline tw-font-extrabold tw-text-xl"
                href="#"
              >
                <span className="tw-text-red-700">SIX</span>
                <span className="tw-text-green-600">LEAF</span>
              </a>
            </div>
            <div className="tw-hidden md:tw-block tw-w-64">
              <div className="tw-flex tw-items-center tw-justify-end md:tw-justify-between">
                <div className="tw-text-[#777777] tw-font-bold ">
                  <FontAwesomeIcon icon={faSuitcase} /> Vé của bạn
                </div>
                {/* {!isLogged && (
                  <Link
                  to="/signin"
                  className="tw-inline-block tw-border-0 md:tw-border tw-border-[#777777] tw-rounded-full tw-py-2 tw-px-1   
                    md:tw-px-4 tw-font-bold  tw-no-underline tw-text-xs 
                    md:tw-text-base tw-text-[#777777] hover:tw-bg-green-200 tw-transition tw-duration-500 tw-ease-in-out"
                >
                  <FontAwesomeIcon icon={faUser} /> Đăng nhập
                </Link>
                )}
                {isLogged && (
                  <Link
                  to="/signin"
                  onClick={()=> UserApi.signout(() => {setIsLogged(false); history.push("/")})}
                  className="tw-inline-block tw-border-0 md:tw-border tw-border-[#777777] tw-rounded-full tw-py-2 tw-px-1   
                    md:tw-px-4 tw-font-bold  tw-no-underline tw-text-xs 
                    md:tw-text-base tw-text-[#777777] hover:tw-bg-green-200 tw-transition tw-duration-500 tw-ease-in-out"
                >
                  <FontAwesomeIcon icon={faUser} /> Đăng xuất
                </Link>
                )} */}

                <UserMenuClient/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-flex tw-justify-center lg:tw-justify-between tw-items-center tw-w-full lg:tw-w-11/12 tw-mx-auto">
        <div className="tw-flex tw-flex-col xl:tw-flex-row tw-items-center tw-mt-0 tw-py-0 md:tw-py-3">
          <div className="tw-w-[9rem] tw-hidden xl:tw-block">
            <Link
              to="/"
              className="tw-text-gray-900 tw-no-underline hover:tw-no-underline tw-font-extrabold tw-text-xl"
            >
              <span className="tw-text-red-700">SIX</span>
              <span className="tw-text-green-600">LEAF</span>
            </Link>
          </div>

          <nav id="header">
            {/* <div
          id="progress"
          className="tw-h-1 tw-z-20 tw-top-0"
          style={{
            background:
              "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)",
          }}
        /> */}
            {/* <div className=""> */}
            {/* <div className="tw-block lg:tw-hidden tw-pr-4">
            <button
              id="nav-toggle"
              className="tw-flex tw-items-center tw-px-3 tw-py-2 tw-border tw-rounded tw-text-gray-500 tw-border-gray-600 hover:tw-text-gray-900 hover:tw-border-green-500 tw-appearance-none focus:tw-outline-none"
              onClick={() => {
                handleShowMenu();
              }}
            >
              {navMobileStatus ? (
                <Icon.Close width="10px" />
              ) : (
                <Icon.Menu width="10px" />
              )}
            </button>
          </div> */}
            <div id="nav-content" className="tw-w-full">
              <ul className="list-reset tw-flex tw-justify-between">
                {NAV_LINK_LIST.map((item) => (
                  <li className="tw-m-1 ">
                    <Link
                      to={item.link}
                      className="tw-flex tw-flex-col lg:tw-flex-row tw-alignt-center tw-border-0 
                    lg:tw-border-2 tw-border-gray-300 tw-rounded-full tw-py-2 tw-px-1 md:tw-px-4 tw-no-underline 
                     tw-text-[#777777] tw-transition tw-duration-500 tw-ease-in-out lg:hover:tw-bg-green-100"
                    >
                      <div className="tw-text-center lg:tw-mr-2">
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="tw-text-green-600 tw-text-xl"
                        />
                      </div>
                      <div className="tw-text-[10px] tw-font-bold md:tw-text-base">
                        {item.label}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <NavMobile isOpen={navMobileStatus} />
            {/* </div> */}
          </nav>
        </div>
        <div className="tw-hidden xl:tw-block tw-w-64">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className="tw-text-[#777777] tw-font-bold ">
              <Link to="/ticket">
                <FontAwesomeIcon icon={faSuitcase} /> Vé của bạn
              </Link>
            </div>
            {/* {!isLogged && (
                  <Link
                  to="/signin"
                  className="tw-inline-block tw-border-0 md:tw-border tw-border-[#777777] tw-rounded-full tw-py-2 tw-px-1   
                    md:tw-px-4 tw-font-bold  tw-no-underline tw-text-xs 
                    md:tw-text-base tw-text-[#777777] hover:tw-bg-green-200 tw-transition tw-duration-500 tw-ease-in-out"
                >
                  <FontAwesomeIcon icon={faUser} /> Đăng nhập
                </Link>
                )}
                {isLogged && (
                  <Link
                  to="/signin"
                  onClick={()=> UserApi.signout(() => {setIsLogged(false); history.push("/")})}
                  className="tw-inline-block tw-border-0 md:tw-border tw-border-[#777777] tw-rounded-full tw-py-2 tw-px-1   
                    md:tw-px-4 tw-font-bold  tw-no-underline tw-text-xs 
                    md:tw-text-base tw-text-[#777777] hover:tw-bg-green-200 tw-transition tw-duration-500 tw-ease-in-out"
                >
                  <FontAwesomeIcon icon={faUser} /> Đăng xuất
                </Link>
                )} */}
                <UserMenuClient/>
          </div>
        </div>
      </div>
      <nav className="tw-fixed tw-bottom-0 tw-block md:tw-hidden tw-z-1 tw-w-full tw-opacity-[0.8] tw-bg-black">
        <ul className="tw-flex tw-justify-around tw-content-end tw-px-2 tw-py-4">
          {MENU_BOTTOM_LIST.map((item) => (
            <li className="tw-flex tw-flex-col tw-justify-center">
              <span className="tw-text-white tw-text-center">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <span className="tw-text-white tw-text-xs">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
