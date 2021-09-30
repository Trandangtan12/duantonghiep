import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINK_LIST } from "../../config";
import logo from "../../asset/images/logo.png";
import Icon from "../Icon";
import NavMobile from "../navMobile";
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
    <header className="tw-bg-green-500 tw-font-sans tw-leading-normal tw-tracking-norma">
      <nav id="header" className="tw-block tw-w-full tw-z-10 tw-top-0">
        <div
          id="progress"
          className="tw-h-1 tw-z-20 tw-top-0"
          style={{
            background:
              "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)",
          }}
        />
        <div className="tw-w-full tw-mx-auto tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-mt-0 tw-py-3">
          <div className="tw-pl-4">
            <Link
              to="/"
              className="tw-text-gray-900 tw-no-underline hover:tw-no-underline tw-font-extrabold tw-text-xl"
            >
              <img src={logo} alt="" className="tw-w-[150px] tw-p-2" />
            </Link>
          </div>
          <div className="tw-block lg:tw-hidden tw-pr-4">
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
          </div>
          <div
            className="tw-w-full tw-flex-grow lg/:tw-flex lg:tw-items-center lg:tw-w-auto tw-hidden lg:tw-block tw-mt-2 lg:tw-mt-0 tw-bg-gray-100 md:tw-bg-transparent tw-z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:tw-flex tw-justify-end tw-flex-1 tw-items-center">
              {NAV_LINK_LIST.map((item) => (
                <li className="tw-mr-3 ">
                  <Link
                    to={item.href}
                    className="tw-inline-block tw-py-2 tw-px-4 tw-font-bold tw-no-underline tw-text-white"
                    href="#"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <NavMobile isOpen={navMobileStatus} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
