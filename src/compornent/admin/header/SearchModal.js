import React, { useEffect, useRef, useState } from 'react';

const SearchModal = () => {

  const [searchOpen, setSearchOpen] = useState(false);
  
  const trigger = useRef(null);
  const searchContent = useRef(null);
  const searchInput = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!searchOpen || searchContent.current.contains(target) || trigger.current.contains(target)) return;
      setSearchOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!searchOpen || keyCode !== 27) return;
      setSearchOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div>
      {/* Button */}
      <button
        ref={trigger}
        className={`w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-bg-gray-100 hover:tw-bg-gray-200 tw-transition tw-duration-150 tw-rounded-full tw-ml-3 ${searchOpen && 'tw-bg-gray-200'}`}
        onClick={() => { setSearchOpen(!searchOpen); setImmediate(() => searchInput.current.focus()); }}
        aria-controls="search-modal"
      >
        <span className="tw-sr-only">Search</span>
        <svg className="tw-w-4 tw-h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="tw-fill-current tw-text-gray-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
          <path className="tw-fill-current tw-text-gray-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
        </svg>
      </button>
      {/* Modal backdrop */}
      {/* Modal dialog */}
    </div>
  )
}

export default SearchModal;