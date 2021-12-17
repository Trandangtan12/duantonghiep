import React, { useEffect, useRef, useState } from "react";
import { faBell } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import { getToken, onMessageListener } from "../../../firebase";
const Notifications = () => {
  const [isTokenFound, setTokenFound] = useState(false);
  getToken(setTokenFound);
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));
  console.log(notification);
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
            <div className="tw-py-1">
              {isTokenFound && <h1> {notification.title} </h1>}
              {!isTokenFound && <h1> {notification.body} </h1>}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Notifications;
