import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MENU_BOTTOM_LIST, NAV_LINK_LIST } from "../../config";
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
    <header className="tw-box-border tw-font-sans tw-z-10 tw-leading-normal tw-rounded-2xl md:tw-rounded-none
    tw-shadow-md tw-tracking-norma">
      <div className="tw-bg-green-100">
       <div className="tw-w-11/12 tw-mx-auto tw-block lg:tw-hidden tw-py-2">
         <div class="tw-flex tw-justify-between tw-items-center">
         <div>
        <a
          className="tw-text-gray-900 tw-no-underline hover:tw-no-underline tw-font-extrabold tw-text-xl"
          href="#"
        >
          <span className="tw-text-red-700">SIX</span><span className="tw-text-green-600">LEAF</span> 
        </a>
        </div>
        <div className="tw-hidden md:tw-block tw-w-52">
        <div className="tw-flex tw-items-center tw-justify-between">
        <div>Vé của bạn</div>
        <Link className="tw-inline-block tw-border-0 md:tw-border tw-border-[#777777] tw-rounded-full tw-py-2 tw-px-1   
                    md:tw-px-4 tw-font-bold  tw-no-underline tw-text-xs tw-bg-white
                    md:tw-text-base tw-text-[#777777] hover:tw-bg-green-100 tw-transition tw-duration-500 tw-ease-in-out">
                      Đăng nhập
        </Link>

        </div>
        
      </div>
     
     </div>
      </div>
      </div>
      <div className="tw-flex tw-justify-center md:tw-justify-between tw-items-center tw-w-11/12 tw-mx-auto">
      <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-mt-0 tw-py-0 md:tw-py-3">
      <div className="tw-w-[9rem] tw-hidden lg:tw-block">
        <a
          className="tw-text-gray-900 tw-no-underline hover:tw-no-underline tw-font-extrabold tw-text-xl"
          href="#"
        >
          <span className="tw-text-red-700">SIX</span><span className="tw-text-green-600">LEAF</span> 
        </a>
      </div>

      <nav id="header">
        {/* <div
          id="progress"
          className="tw-h-1 tw-z-20 tw-top-0"
          style={{
            background:
              "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)",
          }}
<<<<<<< HEAD
        /> */}
        <div className="">
          {/* <div className="tw-block lg:tw-hidden tw-pr-4">
=======
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
>>>>>>> frontend
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
          <div id="nav-content">
            <ul className="list-reset tw-flex tw-justify-center">
              {NAV_LINK_LIST.map((item) => (
                <li className="tw-m-1 ">
                  <Link
                    to={item.link}
                    className="tw-inline-block tw-border-0 lg:tw-border tw-border-[#777777] tw-rounded-full tw-py-2 tw-px-1   
                    md:tw-px-4 tw-font-bold  tw-no-underline tw-text-xs 
                    md:tw-text-base tw-text-[#777777] tw-transition tw-duration-500 tw-ease-in-out hover:tw-bg-green-100"
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
      </div>
      <div className="tw-hidden lg:tw-block tw-w-52">
        <div className="tw-flex tw-items-center tw-justify-between">
        <div>Vé của bạn</div>
        <Link className="tw-inline-block tw-border-0 md:tw-border tw-border-[#777777] tw-rounded-full tw-py-2 tw-px-1   
                    md:tw-px-4 tw-font-bold  tw-no-underline tw-text-xs 
                    md:tw-text-base tw-text-[#777777] hover:tw-bg-green-100 tw-transition tw-duration-500 tw-ease-in-out">
                      Đăng nhập
        </Link>

        </div>
        
      </div>
      </div>
      <nav className="tw-fixed tw-bottom-0 tw-block md:tw-hidden tw-z-1 tw-w-full tw-opacity-[0.8] tw-bg-black">
        <ul className="tw-flex tw-justify-around tw-content-end tw-px-2 tw-py-4">
          {MENU_BOTTOM_LIST.map((item) => (
            <li className="tw-text-white tw-text-xs">{item.label}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
