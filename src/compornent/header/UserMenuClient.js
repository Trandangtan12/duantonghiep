import { faUser } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react'
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserApi } from "../../service/userService";
const UserMenuClient = () => {
    const [isLogged, setIsLogged] = useState(false);
    const {pathname} = useLocation()
    const {user} = UserApi.isAuthenticated()
    useEffect(() => {
      UserApi.isAuthenticated() && setIsLogged(true)
    }, [pathname, isLogged])
    const history = useHistory()
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
    <Menu as="div" className="tw-relative tw-inline-block tw-text-left ">
      <div>
        <Menu.Button className="tw-inline-flex tw-justify-center tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-shadow-sm tw-px-4 tw-py-2 tw-bg-white tw-text-sm tw-font-medium tw-text-green-700">
        <FontAwesomeIcon icon={faUser} size="lg" color="" className={'tw-text-green-600 tw-mr-4'}/>
        <p>Tài Khoản</p>
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
         <Menu.Items className="tw-absolute  tw-right-0 tw-w-56 tw-mt-2 tw-origin-top-right tw-bg-white tw-divide-y tw-divide-gray-100 tw-rounded-md tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
            <div className="tw-px-1 tw-py-1 ">
            {
              isLogged ?  <Menu.Item>
                {({ active }) => (
                    <Link to="/admin">
                  <button
                    className={`${
                      active ? 'tw-bg-green-600 tw-text-white' : 'tw-text-gray-900'
                    } group tw-flex tw-rounded-md tw-items-center tw-w-full tw-px-2 tw-py-2 tw-text-sm`}
                  >
                  Quản trị                
                  </button>
                  </Link>
                )}
              </Menu.Item> : null
            }
              {!isLogged && (
                  <>
                   <Menu.Item>
                   {({ active }) => (
                       <Link to="/signin">
                     <button
                       className={`${
                         active ? 'tw-bg-green-600 tw-text-white' : 'tw-text-gray-900'
                       } group tw-flex tw-rounded-md tw-items-center tw-w-full tw-px-2 tw-py-2 tw-text-sm`}
                     >
                     Đăng Nhập            
                     </button>
                     </Link>
                   )}
                 </Menu.Item>
                 <Menu.Item>
                 {({ active }) => (
                     <Link to="/signup">
                   <button
                     className={`${
                       active ? 'tw-bg-green-600 tw-text-white' : 'tw-text-gray-900'
                     } group tw-flex tw-rounded-md tw-items-center tw-w-full tw-px-2 tw-py-2 tw-text-sm`}
                   >
                   Đăng Ký            
                   </button>
                   </Link>
                 )}
               </Menu.Item>
               </>
              )}
              {isLogged && (
                <>
                 <Menu.Item>
                 {({ active }) => (
                   <button
                     className={`${
                       active ? 'tw-bg-green-600 tw-text-white' : 'tw-text-gray-900'
                     } group tw-flex tw-rounded-md tw-items-center tw-w-full tw-px-2 tw-py-2 tw-text-sm`}
                   >
                   Đổi mật khẩu                 
                   </button>
                 )}
               </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <Link to="/signin" onClick={()=> UserApi.signout(() => {setIsLogged(false); history.push("/")})}>
                  <button
                    className={`${
                      active ? 'tw-bg-green-600 tw-text-white' : 'tw-text-gray-900'
                    } group tw-flex tw-rounded-md tw-items-center tw-w-full tw-px-2 tw-py-2 tw-text-sm`}
                  >
                  Đăng xuất             
                  </button>
                  </Link>
                )}
              </Menu.Item>
              </>
              )}
              
             
            </div>
          </Menu.Items>
      </Transition>
    </Menu>
    </>
  )
}

export default UserMenuClient;