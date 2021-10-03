import React, { useEffect, useRef, useState } from 'react';

// import UserAvatar from '../../images/user-avatar-32.png';

const UserMenu = () => {

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
    <div className="tw-relative tw-inline-flex">
      <button
        ref={trigger}
        className="tw-inline-flex tw-justify-center tw-items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img className="tw-w-8 tw-h-8 tw-rounded-full" src={''} width="32" height="32" alt="User" />
        <div className="tw-flex tw-items-center tw-truncate">
          <span className="tw-truncate tw-ml-2 tw-text-sm tw-font-medium group-hover:tw-text-gray-800">ADMIN TICKET APP</span>
          <svg className="tw-w-3 tw-h-3 tw-flex-shrink-0 tw-ml-1 tw-fill-current tw-text-gray-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>
      
    </div>
  )
}

export default UserMenu;