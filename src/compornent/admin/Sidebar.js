import React, { useEffect, useRef } from "react";
import { Link, NavLink, useLocation , Redirect } from "react-router-dom";
import { NAV_LINK_LIST_ADMIN } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserApi } from "../../service/userService";
function SidebarAdmin({ sidebarOpen, setSidebarOpen }) {
  //check router
  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split('/')[2];
  const {user} = UserApi.isAuthenticated()
  const userKey = () => {
      if(user === undefined) {
        return undefined
      } else {
        if(user.hasOwnProperty('roles') === false) {
          return undefined
        } else {
          const userRole = user.roles.every(item => item.id === 1)
          return userRole
        }
      }
    }
  return (
    <div className="lg:tw-w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`tw-fixed tw-inset-0 tw-bg-gray-900 tw-bg-opacity-30 tw-z-40 lg:tw-hidden lg:tw-z-auto tw-transition-opacity tw-duration-200 ${
          sidebarOpen ? "tw-opacity-100" : "tw-opacity-0 tw-pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        // ref={sidebar}
        className={`tw-absolute tw-z-40 tw-left-0 tw-top-0 lg:tw-static lg:tw-left-auto lg:tw-top-auto lg:tw-translate-x-0 tw-transform tw-h-screen tw-overflow-y-scroll lg:tw-overflow-y-auto no-scrollbar tw-w-64 tw-flex-shrink-0 tw-bg-green-600 tw-p-4 tw-transition-transform tw-duration-200 tw-ease-in-out ${
          sidebarOpen ? "tw-translate-x-0" : "tw--translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="tw-flex tw-justify-between tw-mb-10 tw-pr-3 sm:tw-px-2">
          {/* Close button */}
          <button
            // ref={trigger}
            className="lg:tw-hidden tw-text-white hover:tw-text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="tw-sr-only">Close sidebar</span>
            <svg
              className="tw-w-6 tw-h-6 tw-fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="tw-w-full tw-h-[30px] tw-flex lg:tw-justify-center md:tw-justify-end sm:tw-justify-end tw-leading-[10px] ">
           <button className="tw-text-gray-800 tw-bg-white tw-p-2 lg:tw-w-full tw-rounded-lg hover:tw-bg-green-600 hover:tw-text-white hover:tw-border-2  tw-transition tw-ease-in duration-700">Website</button>
          </NavLink>
        </div>

        {/* Links */}
        <div>
          <h2 className="tw-text-xs tw-uppercase tw-text-white tw-font-semibold tw-pl-3 tw-text-center">
            Danh mục quản lý
          </h2>
          <ul className="tw-mt-3">
          <li
                className={`px-3 tw-py-2 tw-rounded-lg hover:tw-transition hover:tw-duration-2000  tw-mb-0.5 tw-font-bold hover:tw-bg-green-500
                hover:tw-rounded-lg last:tw-mb-0 ${NAV_LINK_LIST_ADMIN[0].href === page && 'tw-bg-green-600 tw-rounded-lg tw-border tw-border-white tw-ml-2'}`}
                key={NAV_LINK_LIST_ADMIN[0].label}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <NavLink
                  to={`/admin/${NAV_LINK_LIST_ADMIN[0].href}`}
                  className={`tw-block tw-text-white tw-font-extrabold tw-p-2 hover:tw-transition hover:tw-duration-500  tw-ease-in hover:tw-ml-2 hover:tw-translate-x-2 tw-transform tw-transition tw-duration-500"
                  `}
                  key={NAV_LINK_LIST_ADMIN[0].label}
                >
                  <div className="">
                    <FontAwesomeIcon icon={NAV_LINK_LIST_ADMIN[0].icon} />
                    <span className="tw-text-sm tw-font-black tw-ml-2">{NAV_LINK_LIST_ADMIN[0].label}</span>
                  </div>
                </NavLink>
              </li>
              {/* =====1===== */}
              <li
                className={`px-3 tw-py-2 tw-rounded-lg hover:tw-transition hover:tw-duration-2000  tw-mb-0.5 tw-font-bold hover:tw-bg-green-500
                hover:tw-rounded-lg last:tw-mb-0 ${NAV_LINK_LIST_ADMIN[1].href === page && 'tw-bg-green-600 tw-rounded-lg tw-border tw-border-white tw-ml-2'}`}
                key={NAV_LINK_LIST_ADMIN[1].label}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <NavLink
                  to={`/admin/${NAV_LINK_LIST_ADMIN[1].href}`}
                  className={`tw-block tw-text-white tw-font-extrabold tw-p-2 hover:tw-transition hover:tw-duration-500  tw-ease-in hover:tw-ml-2 hover:tw-translate-x-2 tw-transform tw-transition tw-duration-500"
                  `}
                  key={NAV_LINK_LIST_ADMIN[1].label}
                >
                  <div className="">
                    <FontAwesomeIcon icon={NAV_LINK_LIST_ADMIN[1].icon} />
                    <span className="tw-text-sm tw-font-black tw-ml-2">{NAV_LINK_LIST_ADMIN[1].label}</span>
                  </div>
                </NavLink>
              </li>
              {/* =====2===== */}
              <li
                className={`px-3 tw-py-2 tw-rounded-lg hover:tw-transition hover:tw-duration-2000  tw-mb-0.5 tw-font-bold hover:tw-bg-green-500
                hover:tw-rounded-lg last:tw-mb-0 ${NAV_LINK_LIST_ADMIN[2].href === page && 'tw-bg-green-600 tw-rounded-lg tw-border tw-border-white tw-ml-2'}`}
                key={NAV_LINK_LIST_ADMIN[2].label}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <NavLink
                  to={`/admin/${NAV_LINK_LIST_ADMIN[2].href}`}
                  className={`tw-block tw-text-white tw-font-extrabold tw-p-2 hover:tw-transition hover:tw-duration-500  tw-ease-in hover:tw-ml-2 hover:tw-translate-x-2 tw-transform tw-transition tw-duration-500"
                  `}
                  key={NAV_LINK_LIST_ADMIN[2].label}
                >
                  <div className="">
                    <FontAwesomeIcon icon={NAV_LINK_LIST_ADMIN[2].icon} />
                    <span className="tw-text-sm tw-font-black tw-ml-2">{NAV_LINK_LIST_ADMIN[2].label}</span>
                  </div>
                </NavLink>
              </li>
              {/* =====3====== */}
              <li
                className={`px-3 tw-py-2 tw-rounded-lg hover:tw-transition hover:tw-duration-2000  tw-mb-0.5 tw-font-bold hover:tw-bg-green-500
                hover:tw-rounded-lg last:tw-mb-0 ${NAV_LINK_LIST_ADMIN[3].href === page && 'tw-bg-green-600 tw-rounded-lg tw-border tw-border-white tw-ml-2'}`}
                key={NAV_LINK_LIST_ADMIN[3].label}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <NavLink
                  to={`/admin/${NAV_LINK_LIST_ADMIN[3].href}`}
                  className={`tw-block tw-text-white tw-font-extrabold tw-p-2 hover:tw-transition hover:tw-duration-500  tw-ease-in hover:tw-ml-2 hover:tw-translate-x-2 tw-transform tw-transition tw-duration-500"
                  `}
                  key={NAV_LINK_LIST_ADMIN[3].label}
                >
                  <div className="">
                    <FontAwesomeIcon icon={NAV_LINK_LIST_ADMIN[3].icon} />
                    <span className="tw-text-sm tw-font-black tw-ml-2">{NAV_LINK_LIST_ADMIN[3].label}</span>
                  </div>
                </NavLink>
              </li>
              {/* =====4==== */}
              <li
                className={`px-3 tw-py-2 tw-rounded-lg hover:tw-transition hover:tw-duration-2000  tw-mb-0.5 tw-font-bold hover:tw-bg-green-500
                hover:tw-rounded-lg last:tw-mb-0 ${NAV_LINK_LIST_ADMIN[4].href === page && 'tw-bg-green-600 tw-rounded-lg tw-border tw-border-white tw-ml-2'}`}
                key={NAV_LINK_LIST_ADMIN[4].label}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <NavLink
                  to={`/admin/${NAV_LINK_LIST_ADMIN[4].href}`}
                  className={`tw-block tw-text-white tw-font-extrabold tw-p-2 hover:tw-transition hover:tw-duration-500  tw-ease-in hover:tw-ml-2 hover:tw-translate-x-2 tw-transform tw-transition tw-duration-500"
                  `}
                  key={NAV_LINK_LIST_ADMIN[4].label}
                >
                  <div className="">
                    <FontAwesomeIcon icon={NAV_LINK_LIST_ADMIN[4].icon} />
                    <span className="tw-text-sm tw-font-black tw-ml-2">{NAV_LINK_LIST_ADMIN[4].label}</span>
                  </div>
                </NavLink>
              </li>
              {/* =====5===== */}
              <li
                className={`px-3 tw-py-2 tw-rounded-lg hover:tw-transition hover:tw-duration-2000  tw-mb-0.5 tw-font-bold hover:tw-bg-green-500
                hover:tw-rounded-lg last:tw-mb-0 ${NAV_LINK_LIST_ADMIN[5].href === page && 'tw-bg-green-600 tw-rounded-lg tw-border tw-border-white tw-ml-2'}`}
                key={NAV_LINK_LIST_ADMIN[5].label}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <NavLink
                  to={`/admin/${NAV_LINK_LIST_ADMIN[5].href}`}
                  className={`tw-block tw-text-white tw-font-extrabold tw-p-2 hover:tw-transition hover:tw-duration-500  tw-ease-in hover:tw-ml-2 hover:tw-translate-x-2 tw-transform tw-transition tw-duration-500"
                  `}
                  key={NAV_LINK_LIST_ADMIN[5].label}
                >
                  <div className="">
                    <FontAwesomeIcon icon={NAV_LINK_LIST_ADMIN[5].icon} />
                    <span className="tw-text-sm tw-font-black tw-ml-2">{NAV_LINK_LIST_ADMIN[5].label}</span>
                  </div>
                </NavLink>
              </li>
              {/* ======6==== */}
              {
                userKey() === true ?  <li
                className={`px-3 tw-py-2 tw-rounded-lg hover:tw-transition hover:tw-duration-2000  tw-mb-0.5 tw-font-bold hover:tw-bg-green-500
                hover:tw-rounded-lg last:tw-mb-0 ${NAV_LINK_LIST_ADMIN[6].href === page && 'tw-bg-green-600 tw-rounded-lg tw-border tw-border-white tw-ml-2'}`}
                key={NAV_LINK_LIST_ADMIN[6].label}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <NavLink
                  to={`/admin/${NAV_LINK_LIST_ADMIN[6].href}`}
                  className={`tw-block tw-text-white tw-font-extrabold tw-p-2 hover:tw-transition hover:tw-duration-500  tw-ease-in hover:tw-ml-2 hover:tw-translate-x-2 tw-transform tw-transition tw-duration-500"
                  `}
                  key={NAV_LINK_LIST_ADMIN[6].label}
                >
                  <div className="">
                    <FontAwesomeIcon icon={NAV_LINK_LIST_ADMIN[6].icon} />
                    <span className="tw-text-sm tw-font-black tw-ml-2">{NAV_LINK_LIST_ADMIN[6].label}</span>
                  </div>
                </NavLink>
              </li> : null
              }
              {/* ======7==== */}
              <li
                className={`px-3 tw-py-2 tw-rounded-lg hover:tw-transition hover:tw-duration-2000  tw-mb-0.5 tw-font-bold hover:tw-bg-green-500
                hover:tw-rounded-lg last:tw-mb-0 ${NAV_LINK_LIST_ADMIN[7].href === page && 'tw-bg-green-600 tw-rounded-lg tw-border tw-border-white tw-ml-2'}`}
                key={NAV_LINK_LIST_ADMIN[7].label}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <NavLink
                  to={`/admin/${NAV_LINK_LIST_ADMIN[7].href}`}
                  className={`tw-block tw-text-white tw-font-extrabold tw-p-2 hover:tw-transition hover:tw-duration-500  tw-ease-in hover:tw-ml-2 hover:tw-translate-x-2 tw-transform tw-transition tw-duration-500"
                  `}
                  key={NAV_LINK_LIST_ADMIN[7].label}
                >
                  <div className="">
                    <FontAwesomeIcon icon={NAV_LINK_LIST_ADMIN[7].icon} />
                    <span className="tw-text-sm tw-font-black tw-ml-2">{NAV_LINK_LIST_ADMIN[7].label}</span>
                  </div>
                </NavLink>
              </li>
            {/* Dashboard */}
            {/* {NAV_LINK_LIST_ADMIN.map(({ label, href, icon , permission_id }) => (
              <li
                className={`px-3 tw-py-2 tw-rounded-lg hover:tw-transition hover:tw-duration-2000  tw-mb-0.5 tw-font-bold hover:tw-bg-green-500
                hover:tw-rounded-lg last:tw-mb-0 ${page === href && 'tw-bg-green-600 tw-rounded-lg tw-border tw-border-white tw-ml-2'}`}
                key={label}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <NavLink
                  to={`/admin/${href}`}
                  className={`tw-block tw-text-white tw-font-extrabold tw-p-2 hover:tw-transition hover:tw-duration-500  tw-ease-in hover:tw-ml-2 hover:tw-translate-x-2 tw-transform tw-transition tw-duration-500"
                  `}
                  key={label}
                >
                  <div className="">
                    <FontAwesomeIcon icon={icon} />
                    <span className="tw-text-sm tw-font-black tw-ml-2">{label}</span>
                  </div>
                </NavLink>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidebarAdmin;
