import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_LINK_LIST_ADMIN } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SidebarAdmin({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split("/")[1];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

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
        ref={sidebar}
        className={`tw-absolute tw-z-40 tw-left-0 tw-top-0 lg:tw-static lg:tw-left-auto lg:tw-top-auto lg:tw-translate-x-0 tw-transform tw-h-screen tw-overflow-y-scroll lg:tw-overflow-y-auto no-scrollbar tw-w-64 tw-flex-shrink-0 tw-bg-gray-800 tw-p-4 tw-transition-transform tw-duration-200 tw-ease-in-out ${
          sidebarOpen ? "tw-translate-x-0" : "tw--translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="tw-flex tw-justify-between tw-mb-10 tw-pr-3 sm:tw-px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:tw-hidden tw-text-gray-500 hover:tw-text-gray-400"
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
          <NavLink exact to="/" className="tw-block">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient
                  x1="28.538%"
                  y1="20.229%"
                  x2="100%"
                  y2="108.156%"
                  id="logo-a"
                >
                  <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="88.638%"
                  y1="29.267%"
                  x2="22.42%"
                  y2="100%"
                  id="logo-b"
                >
                  <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path
                d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                fill="#4F46E5"
              />
              <path
                d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                fill="url(#logo-a)"
              />
              <path
                d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                fill="url(#logo-b)"
              />
            </svg>
          </NavLink>
        </div>

        {/* Links */}
        <div>
          <h3 className="tw-text-xs tw-uppercase tw-text-gray-500 tw-font-semibold tw-pl-3">
            Pages
          </h3>
          <ul className="tw-mt-3">
            {/* Dashboard */}
            {NAV_LINK_LIST_ADMIN.map(({ label, href, icon }) => (
              <li
                className={`px-3 tw-py-2 tw-rounded-sm tw-mb-0.5 last:tw-mb-0`}
                key={label}
              >
                <NavLink
                  exact
                  to={href}
                  className={`block tw-text-gray-200 hover:tw-text-white tw-transition tw-duration-150 ${
                    page === "" && "hover:tw-text-gray-200"
                  }`}
                  activeClassName="text-gray-800 dark:text-gray-100"
                >
                  <div>
                    <FontAwesomeIcon icon={icon} />
                    <span className="tw-text-sm tw-font-medium tw-ml-2">{label}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidebarAdmin;
