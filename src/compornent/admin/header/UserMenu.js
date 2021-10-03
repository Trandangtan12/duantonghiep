import { faUser } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react'
const UserMenu = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
    <Menu as="div" className="tw-relative tw-inline-block tw-text-left">
      <div>
        <Menu.Button className="tw-inline-flex tw-justify-center tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-shadow-lg tw-px-4 tw-py-2 tw-bg-white tw-text-sm tw-font-medium tw-text-gray-700">
        <FontAwesomeIcon icon={faUser} size="lg" className={'tw-text-green-500 tw-mr-4'}/>
        <p>ADMIN</p>
        </Menu.Button>
      </div>
      <Transition
        enter="tw-transition tw-ease-out tw-duration-100"
        enterFrom="tw-transform tw-opacity-0 tw-scale-95"
        enterTo="tw-transform tw-opacity-100 tw-scale-100"
        leave="tw-transition tw-ease-in tw-duration-75"
        leaveFrom="tw-transform tw-opacity-100 tw-scale-100"
        leaveTo="tw-transform tw-opacity-0 tw-scale-95"
      >
        <Menu.Items className="tw-origin-top-right tw-absolute tw-right-0 tw-mt-2 tw-w-56 tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
          <div className="tw-py-1">
            <ul>
              <li className="tw-p-2 hover:tw-bg-gray-200">TAI KHOAN</li>
            </ul>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </>
  )
}

export default UserMenu;