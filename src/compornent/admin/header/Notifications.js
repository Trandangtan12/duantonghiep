import React, { useEffect, useRef, useState } from "react";
import { faBell, faTicketAlt } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import { getToken, onMessageListener } from "../../../firebase";
import { NotificationService } from "../../../service/notification";
import { Link } from "react-router-dom";
import { IsoStringConvert } from "../../../config";
const Notifications = () => {
  const [availableNotification, setAvailableNotification] = useState([]);
  const [dispatchDependency, setDispatchAcitive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const dependencies = [availableNotification.length, dispatchDependency];
  useEffect(() => {
    const getNotification = async () => {
      const res = await NotificationService.getAllNotification();
      if (res.status === 200) {
        setAvailableNotification(res.data || []);
      }
    };
    getNotification();
  }, [...dependencies]);
  const reloadActiveAPI = () => {
    setDispatchAcitive((pre) => ++pre);
  };
  return (
    <>
      <Menu
        as="div"
        className="tw-relative tw-inline-block tw-text-left tw-mr-7 tw-ml-7 "
        onClick={() => {
          reloadActiveAPI();
          setIsOpen(!isOpen);
        }}
      >
        <div>
          <Menu.Button
            className="tw-inline-flex tw-justify-center tw-rounded-md  tw-align-middle tw-relative"
            onClick={() => {
              reloadActiveAPI();
              setIsOpen(!isOpen);
            }}
          >
            <span className="tw-absolute tw-text-sm tw-bg-red-600 tw-rounded-[50%] tw-text-white tw-h-[20px] tw-w-[20px] tw-mt-[-10px]">
              {availableNotification.length}
            </span>
            <FontAwesomeIcon
              icon={faBell}
              size="lg"
              className={"tw-text-green-600 tw-mr-5"}
              onClick={() => {
                reloadActiveAPI();
                setIsOpen(!isOpen);
              }}
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
            <Menu.Items className="tw-origin-top-right tw-absolute tw-right-0 tw-mt-2 tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none tw-min-h-[200px] tw-max-h-[500px] tw-w-[400px] tw-overflow-auto">
              <h3 className="tw-bg-green-600 tw-text-lg tw-text-center tw-uppercase tw-text-white tw-pt-3 tw-pb-3">
                Thông báo
              </h3>
              {availableNotification.length !== 0 ? (
                availableNotification.map((_elt, index) => (
                  <Link to={"/admin/order"} onclick={() => {
                     setIsOpen(!isOpen)
                  }}>
                    <div
                      key={index}
                      className="tw-px-3 tw-mt-2 tw-bg-gray-30 hover:tw-bg-green-600 hover:tw-text-white tw-cursor-pointer tw-border-grey-200 tw-border-b-2 "
                    >
                      <FontAwesomeIcon
                        icon={faTicketAlt}
                        className="tw-text-green-600 "
                      />
                      <span className="tw-ml-2 ">
                        Bạn có môt vé mới {_elt.data.ticket_code} từ khách hàng{" "}
                        {_elt.data.customer_name}
                      </span>
                      <p className="tw-text-right tw-text-[0.8rem] tw-text-gray-400">
                        {
                          IsoStringConvert(_elt?.created_at)
                        }
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <span className="tw-text-center">Bạn không có thông báo</span>
              )}
            </Menu.Items>
          </Transition>
      
      </Menu>
    </>
  );
};

export default Notifications;
