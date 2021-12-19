import React, { useEffect, useRef, useState } from "react";
import { faBell } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import { getToken, onMessageListener } from "../../../firebase";
import { NotificationService } from "../../../service/notification";
import { Link } from "react-router-dom";
const Notifications = () => {
  const [availableNotification, setAvailableNotification] = useState([])
  useEffect(() => {
   const getNotification = async () =>{
     const res = await NotificationService.getAllNotification()
     if (res.status === 200) {
       setAvailableNotification(res.data || [])
     }
   }
   getNotification()
  }, [])
  return (
    <>
      <Menu
        as="div"
        className="tw-relative tw-inline-block tw-text-left tw-mr-7 tw-ml-7"
      >
        <div>
          <Menu.Button className="tw-inline-flex tw-justify-center tw-rounded-md  tw-align-middle tw-relative">
            <FontAwesomeIcon
              icon={faBell}
              size="lg"
              className={"tw-text-green-600 tw-mr-5"}
            />
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
          <Menu.Items className="tw-origin-top-right tw-absolute tw-right-0 tw-mt-2 tw-w-56 tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none tw-min-h-[200px]">
          {
            availableNotification.map((_elt,index) =>(
              <Link to={"/admin/order"}>
              <div key={index} className="tw-px-3 tw-mt-2 tw-bg-gray-100 hover:tw-bg-green-600 hover:tw-text-white tw-cursor-pointer tw-border-light-blue-100 tw-bottom-1 tw-max-h-[100px] tw-overflow-auto">
            Bạn có môt vé mới {_elt.data.ticket_code} từ khách hàng {_elt.customer_name}
              </div>
              </Link>
            ))
          }
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Notifications;
