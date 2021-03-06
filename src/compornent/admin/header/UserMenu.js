import { faSignOutAlt, faUser } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { useHistory } from 'react-router';
const UserMenu = () => {
  const account = localStorage.getItem('user') !== undefined ?  JSON.parse(localStorage.getItem('user')) : null
  const history = useHistory()
  const handleLogOut = () =>{
    localStorage.removeItem('user')
    localStorage.removeItem('ticketLocal')
    history.push("/signin")
  }
  return (
    <>
    <Menu as="div" className="tw-relative tw-inline-block tw-text-left">
      <div>
        <Menu.Button className="tw-inline-flex tw-justify-center tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-white tw-text-sm tw-font-medium tw-text-green-700">
        <FontAwesomeIcon icon={faUser} size="lg" color="" className={'tw-text-green-600 tw-mr-4'}/>
        <p>{localStorage.getItem('user') !== undefined ? account?.user?.name : ''}</p>
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
         <Menu.Items className="tw-absolute tw-right-0 tw-w-56 tw-mt-2 tw-origin-top-right tw-bg-white tw-divide-y tw-divide-gray-100 tw-rounded-md tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
            <div className="tw-px-1 tw-py-1 ">
              <Menu.Item onClick={()=>{history.push("/admin/profile")}}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'tw-bg-green-600 tw-text-white' : 'tw-text-gray-900'
                    } group tw-flex tw-rounded-md tw-items-center tw-w-full tw-px-2 tw-py-2 tw-text-sm`}
                  >
                  <FontAwesomeIcon icon={faUser} className='tw-text-green-600 tw-mr-2' />
                  Th??ng tin t??i kho???n                   
                  </button>
                )}
              </Menu.Item>
              {/* <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'tw-bg-green-600 tw-text-white' : 'tw-text-gray-900'
                    } group tw-flex tw-rounded-md tw-items-center tw-w-full tw-px-2 tw-py-2 tw-text-sm`}
                  >
                  ?????i m???t kh???u                 
                  </button>
                )}
              </Menu.Item> */}
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'tw-bg-green-600 tw-text-white' : 'tw-text-gray-900'
                    } group tw-flex tw-rounded-md tw-items-center tw-w-full tw-px-2 tw-py-2 tw-text-sm`}
                    onClick={() => handleLogOut()}
                  >
                      <FontAwesomeIcon icon={faSignOutAlt} className='tw-text-green-600 tw-mr-2' />
                  ????ng xu???t             
                  </button>
                )}
              </Menu.Item>
             
            </div>
          </Menu.Items>
      </Transition>
    </Menu>
    </>
  )
}

export default UserMenu;