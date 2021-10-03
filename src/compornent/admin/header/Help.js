import React, { useEffect, useRef, useState } from 'react';

const Help = () => {

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
        <span className="tw-sr-only">Need help?</span>
        <svg className="tw-w-4 tw-h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="tw-fill-current tw-text-gray-500" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
        </svg>
      </button>
    </div>
  )
}

export default Help;