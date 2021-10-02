import React from "react";

const NavbarAdmin = () => {
  return (
    <>
      <aside className="tw-z-20 tw-hidden tw-w-64 tw-overflow-y-auto tw-bg-white dark:tw-bg-gray-800 md:tw-block tw-flex-shrink-0">
        <div className="tw-py-4 tw-text-gray-500 dark:tw-text-gray-400">
          <a
            className="tw-ml-6 tw-text-lg tw-font-bold tw-text-gray-800 dark:tw-text-gray-200"
            href="#"
          >
            Windmill
          </a>
          <ul className="tw-mt-6">
            <li className="tw-relative tw-px-6 tw-py-3">
              <span
                className="tw-absolute tw-inset-y-0 tw-left-0 tw-w-1 tw-bg-purple-600 tw-rounded-tr-lg tw-rounded-br-lg"
                aria-hidden="true"
              />
              <a
                className="tw-inline-flex tw-items-center tw-w-full tw-text-sm tw-font-semibold tw-text-gray-800 tw-transition-colors tw-duration-150 hover:tw-text-gray-800 dark:hover:tw-text-gray-200 dark:tw-text-gray-100"
                href="index.html"
              >
                <svg
                  className="tw-w-5 tw-h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="tw-ml-4">Dashboard</span>
              </a>
            </li>
          </ul>
          <ul>
            <li className="tw-relative tw-px-6 tw-py-3">
              <a
                className="tw-inline-flex tw-items-center tw-w-full tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 hover:tw-text-gray-800 dark:hover:tw-text-gray-200"
                href="forms.html"
              >
                <svg
                  className="tw-w-5 tw-h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span className="tw-ml-4">Forms</span>
              </a>
            </li>
            <li className="tw-relative tw-px-6 tw-py-3">
              <a
                className="tw-inline-flex tw-items-center tw-w-full tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 hover:tw-text-gray-800 dark:hover:tw-text-gray-200"
                href="cards.html"
              >
                <svg
                  className="tw-w-5 tw-h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="tw-ml-4">Cards</span>
              </a>
            </li>
            <li className="tw-relative tw-px-6 tw-py-3">
              <a
                className="tw-inline-flex tw-items-center tw-w-full tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 hover:tw-text-gray-800 dark:hover:tw-text-gray-200"
                href="charts.html"
              >
                <svg
                  className="tw-w-5 tw-h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
                <span className="tw-ml-4">Charts</span>
              </a>
            </li>
            <li className="tw-relative tw-px-6 tw-py-3">
              <a
                className="tw-inline-flex tw-items-center tw-w-full tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 hover:tw-text-gray-800 dark:hover:tw-text-gray-200"
                href="buttons.html"
              >
                <svg
                  className="tw-w-5 tw-h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <span className="tw-ml-4">Buttons</span>
              </a>
            </li>
            <li className="tw-relative tw-px-6 tw-py-3">
              <a
                className="tw-inline-flex tw-items-center tw-w-full tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 hover:tw-text-gray-800 dark:hover:tw-text-gray-200"
                href="modals.html"
              >
                <svg
                  className="tw-w-5 tw-h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="tw-ml-4">Modals</span>
              </a>
            </li>
            <li className="tw-relative tw-px-6 tw-py-3">
              <a
                className="tw-inline-flex tw-items-center tw-w-full tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 hover:tw-text-gray-800 dark:hover:tw-text-gray-200"
                href="tw-tables.html"
              >
                <svg
                  className="tw-w-5 tw-h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span className="tw-ml-4">Tables</span>
              </a>
            </li>
            <li className="tw-relative tw-px-6 tw-py-3">
              <button
                className="tw-inline-flex tw-items-center tw-justify-between tw-w-full tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 hover:tw-text-gray-800 dark:hover:tw-text-gray-200"
                aria-haspopup="true"
              >
                <span className="tw-inline-flex tw-items-center">
                  <svg
                    className="tw-w-5 tw-h-5"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                  <span className="tw-ml-4">Pages</span>
                </span>
                <svg
                  className="tw-w-4 tw-h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <template x-if="isPagesMenuOpen" />
            </li>
          </ul>
          <div className="tw-px-6 tw-my-6">
            <button className="tw-flex tw-items-center tw-justify-between tw-w-full tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-leading-5 tw-text-white tw-transition-colors tw-duration-150 tw-bg-purple-600 tw-border tw-border-transparent tw-rounded-lg active:tw-bg-purple-600 hover:tw-bg-purple-700 focus:tw-outline-none focus:tw-shadow-outline-purple">
              Create account
              <span className="tw-ml-2" aria-hidden="true">
                +
              </span>
            </button>
          </div>
        </div>
      </aside>
      <aside className="
    tw-fixed
    tw-inset-y-0
    tw-z-20
    tw-flex-shrink-0
    tw-w-64
    tw-mt-16
    tw-overflow-y-auto
    tw-bg-white
    dark:tw-bg-gray-800
    md:tw-hidden
  ">
  <div className="tw-py-4 tw-text-gray-500 dark:tw-text-gray-400">
    <a className="tw-ml-6 tw-text-lg tw-font-bold tw-text-gray-800 dark:tw-text-gray-200" href="#">
      Windmill
    </a>
    <ul className="tw-mt-6">
      <li className="tw-relative tw-px-6 tw-py-3">
        <span className="
            tw-absolute
            tw-inset-y-0
            tw-left-0
            tw-w-1
            tw-bg-purple-600
            tw-rounded-tr-lg tw-rounded-br-lg
          " aria-hidden="true" />
        <a className="
            tw-inline-flex
            tw-items-center
            tw-w-full
            tw-text-sm
            tw-font-semibold
            tw-text-gray-800
            tw-transition-colors
            tw-duration-150
            hover:tw-text-gray-800
            dark:hover:tw-text-gray-200 dark:tw-text-gray-100
          " href="index.html">
          <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="tw-ml-4">Dashboard</span>
        </a>
      </li>
    </ul>
    <ul>
      <li className="tw-relative tw-px-6 tw-py-3">
        <a className="
            tw-inline-flex
            tw-items-center
            tw-w-full
            tw-text-sm
            tw-font-semibold
            tw-transition-colors
            tw-duration-150
            hover:tw-text-gray-800
            dark:hover:tw-text-gray-200
          " href="forms.html">
          <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <span className="tw-ml-4">Forms</span>
        </a>
      </li>
      <li className="tw-relative tw-px-6 tw-py-3">
        <a className="
            tw-inline-flex
            tw-items-center
            tw-w-full
            tw-text-sm
            tw-font-semibold
            tw-transition-colors
            tw-duration-150
            hover:tw-text-gray-800
            dark:hover:tw-text-gray-200
          " href="cards.html">
          <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="tw-ml-4">Cards</span>
        </a>
      </li>
      <li className="tw-relative tw-px-6 tw-py-3">
        <a className="
            tw-inline-flex
            tw-items-center
            tw-w-full
            tw-text-sm
            tw-font-semibold
            tw-transition-colors
            tw-duration-150
            hover:tw-text-gray-800
            dark:hover:tw-text-gray-200
          " href="charts.html">
          <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
            <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
          <span className="tw-ml-4">Charts</span>
        </a>
      </li>
      <li className="tw-relative tw-px-6 tw-py-3">
        <a className="
            tw-inline-flex
            tw-items-center
            tw-w-full
            tw-text-sm
            tw-font-semibold
            tw-transition-colors
            tw-duration-150
            hover:tw-text-gray-800
            dark:hover:tw-text-gray-200
          " href="buttons.html">
          <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          <span className="tw-ml-4">Buttons</span>
        </a>
      </li>
      <li className="tw-relative tw-px-6 tw-py-3">
        <a className="
            tw-inline-flex
            tw-items-center
            tw-w-full
            tw-text-sm
            tw-font-semibold
            tw-transition-colors
            tw-duration-150
            hover:tw-text-gray-800
            dark:hover:tw-text-gray-200
          " href="modals.html">
          <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
            <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="tw-ml-4">Modals</span>
        </a>
      </li>
      <li className="tw-relative tw-px-6 tw-py-3">
        <a className="
            tw-inline-flex
            tw-items-center
            tw-w-full
            tw-text-sm
            tw-font-semibold
            tw-transition-colors
            tw-duration-150
            hover:tw-text-gray-800
            dark:hover:tw-text-gray-200
          " href="tw-tables.html">
          <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          <span className="tw-ml-4">Tables</span>
        </a>
      </li>
      <li className="tw-relative tw-px-6 tw-py-3">
        <button className="
            tw-inline-flex
            tw-items-center
            tw-justify-between
            tw-w-full
            tw-text-sm
            tw-font-semibold
            tw-transition-colors
            tw-duration-150
            hover:tw-text-gray-800
            dark:hover:tw-text-gray-200
          ">
          <span className="tw-inline-flex tw-items-center">
            <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
            <span className="tw-ml-4">Pages</span>
          </span>
          <svg className="tw-w-4 tw-h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <template x-if="isPagesMenuOpen" />
      </li>
    </ul>
    <div className="tw-px-6 tw-my-6">
      <button className="
          tw-flex
          tw-items-center
          tw-justify-between
          tw-px-4
          tw-py-2
          tw-text-sm
          tw-font-medium
          tw-leading-5
          tw-text-white
          tw-transition-colors
          tw-duration-150
          tw-bg-purple-600
          tw-border tw-border-transparent
          tw-rounded-lg
          active:tw-bg-purple-600
          hover:tw-bg-purple-700
          focus:tw-outline-none focus:tw-shadow-outline-purple
        ">
        Create account
        <span className="tw-ml-2" aria-hidden="true">+</span>
      </button>
    </div>
  </div>
</aside>

    </>
  );
};

export default NavbarAdmin;
