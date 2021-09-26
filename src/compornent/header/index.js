import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINK_LIST } from "../../config";
const Header = () => {
    const handleShowMenu = () =>{
        console.log("show");
    }
  return (
    <header className="bg-gray-100 tw-font-sans tw-leading-normal tw-tracking-normal">
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
            <a
              className="tw-text-gray-900 tw-text-base tw-no-underline hover:tw-no-underline tw-font-extrabold tw-text-xl"
              href="#"
            >
              nha xe sixleaf
            </a>
          </div>
          <div className="tw-block lg:tw-hidden tw-pr-4">
            <button
              id="nav-toggle"
              className="tw-flex tw-items-center tw-px-3 tw-py-2 tw-border tw-rounded tw-text-gray-500 tw-border-gray-600 hover:tw-text-gray-900 hover:tw-border-green-500 tw-appearance-none focus:tw-outline-none"
              onClick={()=>{handleShowMenu()}}
            >
              <svg
                className="tw-fill-current tw-h-3 tw-w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="tw-w-full tw-flex-grow lg:tw-flex lg:tw-items-center lg:tw-w-auto tw-hidden lg:tw-block tw-mt-2 lg:tw-mt-0 tw-bg-gray-100 md:tw-bg-transparent tw-z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:tw-flex tw-justify-end tw-flex-1 tw-items-center">
              {NAV_LINK_LIST.map((item) => (
                <li className="tw-mr-3">
                  <Link
                    to={item.link}
                    className="tw-inline-block tw-py-2 tw-px-4 tw-text-gray-900 tw-font-bold tw-no-underline"
                    href="#"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
