import React from 'react'

const HeaderAdmin = () => {
    return (
        <header className="tw-z-10 tw-py-4 tw-bg-white tw-shadow-md dark:tw-bg-gray-800">
  <div className="
        container
        tw-flex
        tw-items-center
        tw-justify-between
        tw-h-full
        tw-px-6
        tw-mx-auto
        tw-text-purple-600
        dark:tw-text-purple-300
      ">
    {/* Mobile hamburger */}
    <button className="
          tw-p-1
          tw-mr-5
          tw--ml-1
          tw-rounded-md
          md:tw-hidden
          focus:tw-outline-none focus:tw-shadow-outline-purple
        "  aria-label="Menu">
      <svg className="tw-w-6 tw-h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    </button>
    {/* Search input */}
    <div className="tw-flex tw-justify-center tw-flex-1 lg:tw-mr-32">
      <div className="
            tw-relative
            tw-w-full
            tw-max-w-xl
            tw-mr-6
            focus-within:tw-text-purple-500
          ">
        <div className="tw-absolute tw-inset-y-0 tw-flex tw-items-center tw-pl-2">
          <svg className="tw-w-4 tw-h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        <input className="
              tw-w-full
              tw-pl-8
              tw-pr-2
              tw-text-sm tw-text-gray-700
              tw-placeholder-gray-600
              tw-bg-gray-100
              tw-border-0
              tw-rounded-md
              dark:tw-placeholder-gray-500
              dark:focus:tw-shadow-outline-gray
              dark:focus:tw-placeholder-gray-600
              dark:tw-bg-gray-700
              dark:tw-text-gray-200
              focus:tw-placeholder-gray-500
              focus:tw-bg-white
              focus:tw-border-purple-300
              focus:tw-outline-none
              focus:tw-shadow-outline-purple
              tw-form-input
            " type="text" placeholder="Search for projects" aria-label="Search" />
      </div>
    </div>
    <ul className="tw-flex tw-items-center tw-flex-shrink-0 tw-space-x-6">
      {/* Theme toggler */}
      <li className="tw-flex">
        <button className="
              tw-rounded-md
              focus:tw-outline-none focus:tw-shadow-outline-purple
            "  aria-label="Toggle color mode">
          <template x-if="!dark" />
          <template x-if="dark" />
        </button>
      </li>
      {/* Notifications menu */}
      <li className="tw-relative">
        <button className="
              tw-relative
              tw-align-middle
              tw-rounded-md
              focus:tw-outline-none focus:tw-shadow-outline-purple
            "  aria-label="Notifications" aria-haspopup="true">
          <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          {/* Notification badge */}
          <span aria-hidden="true" className="
                tw-absolute
                tw-top-0
                tw-right-0
                tw-inline-block
                tw-w-3
                tw-h-3
                tw-transform
                tw-translate-x-1
                tw--translate-y-1
                tw-bg-red-600
                tw-border-2 tw-border-white
                tw-rounded-full
                dark:tw-border-gray-800
              " />
        </button>
        <template x-if="isNotificationsMenuOpen" />
      </li>
      {/* Profile menu */}
      <li className="tw-relative">
        <button className="
              tw-align-middle
              tw-rounded-full
              focus:tw-shadow-outline-purple focus:tw-outline-none
            "  aria-label="Account" aria-haspopup="true">
          <img className="tw-object-cover tw-w-8 tw-h-8 tw-rounded-full" src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82" alt="" aria-hidden="true" />
        </button>
        <template x-if="isProfileMenuOpen" />
      </li>
    </ul>
  </div>
</header>

    )
}

export default HeaderAdmin
