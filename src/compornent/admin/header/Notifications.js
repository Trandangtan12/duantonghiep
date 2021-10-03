import React, { useEffect, useRef, useState } from 'react';

const Notifications = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="tw-relative tw-inline-flex tw-ml-3">
      <button
        ref={trigger}
        className={`w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-bg-gray-100 hover:tw-bg-gray-200 tw-transition tw-duration-150 tw-rounded-full ${dropdownOpen && 'tw-bg-gray-200'}`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="tw-sr-only">Notifications</span>
        <svg className="tw-w-4 tw-h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="tw-fill-current tw-text-gray-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
          <path className="tw-fill-current tw-text-gray-400" d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z" />
        </svg>
        <div className="tw-absolute tw-top-0 tw-right-0 tw-w-2.5 tw-h-2.5 tw-bg-red-500 tw-border-2 tw-border-white tw-rounded-full"></div>
      </button>
    </div>
  )
}

export default Notifications;