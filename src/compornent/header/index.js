import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINK_LIST } from "../../config";
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
    <header className="tw-box-border tw-font-sans tw-leading-normal tw-tracking-norma">
      <nav id="header" className="tw-block tw-w-full lg:tw-w-11/12 tw-mx-auto tw-z-10 tw-top-0">
        <div
          id="progress"
          className="tw-h-1 tw-z-20 tw-top-0"
          style={{
            background:
              "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)",
          }}
        />
        <div className="tw-w-full tw-mx-auto tw-flex tw-items-center tw-justify-between lg:tw-justify-start tw-mt-0 tw-py-3">
          <div className="tw-w-[8rem]">
            <a
              className="tw-text-gray-900 tw-no-underline hover:tw-no-underline tw-font-extrabold tw-text-xl"
              href="#"
            >
              <img className="tw-w-[7rem]" src="data:image/png;base64,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" alt="" />
            </a>
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
            className="tw-hidden lg:tw-block tw-mt-2 lg:tw-mt-0 tw-bg-gray-100 md:tw-bg-transparent tw-z-20"
            id="nav-content"
          >
            <ul className="list-reset tw-flex">
              {NAV_LINK_LIST.map((item) => (
                <li className="tw-mr-3 ">
                  <Link
                    to={item.link}
                    className="tw-inline-block tw-border tw-border-[#777777] tw-rounded-full tw-py-2 tw-px-4 tw-font-bold tw-no-underline tw-text-[#777777]"
                    href="#"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="tw-flex tw-justify-end">
            login
          </div>
          <NavMobile isOpen={navMobileStatus} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
