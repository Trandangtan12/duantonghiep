import React from "react";
import Notifications from "./header/Notifications";
import UserMenu from "./header/UserMenu";
import { SearchBox } from "./header/SearchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/fontawesome-free-solid";
import { UserApi } from "../../service/userService";
const HeaderAdmin = ({ sidebarOpen, setSidebarOpen }) => {
  const { user } = UserApi.isAuthenticated();
  return (
    <header className="tw-sticky tw-top-0 tw-bg-white tw-border-b  tw-border-gray-200 tw-z-30 tw-shadow-md">
      <div className="tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-flex tw-items-center tw-justify-between tw-h-16 tw--mb-px">
          {/* Header: Left side */}
          <div className="tw-flex">
            {/* Hamburger button */}
            <button
              className="tw-text-gray-500 hover:tw-text-gray-600 lg:tw-hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="tw-sr-only">Open sidebar</span>
              <svg
                className="tw-w-6 tw-h-6 tw-fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <span>
            { `Xin chào, ${user.name}`}  <FontAwesomeIcon  icon={faHandPeace} className="tw-text-green-600"/>
            </span>
          </div>

          {/* Header: Right side */}
          <div className="tw-flex tw-items-center">
          {/* <SearchBox/> */}
            {/* <Notifications/> */}
            <UserMenu/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
