import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { UserApi } from "../../../service/userService";
import TabList from "./tabList";

const Ticket = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const { pathname } = useLocation()
  const { user } = UserApi.isAuthenticated()
  useEffect(() => {
    user && setIsLogged(true)
  }, [pathname, isLogged])
  const history = useHistory()
  return (
    <div className="tw-w-3/4 tw-mx-auto tw-my-4 tw-mb-3">
      {isLogged ? <div className="tw-flex ">
        <div className="tw-w-[15rem] tw-h-[15rem] tw-bg-white tw-rounded-lg tw-mr-5 tw-sticky tw-top-2">
          <div className="tw-border-b tw-border-gray-200 tw-py-3 tw-px-3">
            <p className="tw-uppercase tw-font-bold ">Thông tin tài khoản</p>
          </div>
          <div className="tw-flex tw-justify-between tw-text-sm tw-py-2 tw-p-3">
            <p>Tên</p>
            <p className="tw-w-28">{user.name}</p>

          </div>
          <div className="tw-flex tw-justify-between tw-text-sm tw-py-2 tw-p-3">
            <p>Email</p>
            <p className="tw-w-28">{user.email}</p>
          </div>
          <div className="tw-flex tw-justify-between tw-text-sm tw-py-2 tw-p-3">
            <p>Số điện thoại</p>
            <p className="tw-w-28">{user.phone_number}</p>
          </div>
        </div>
        <div className="tw-flex-grow"> <TabList {...props}/></div>
      </div> : <div> Hãy <Link to="/signin" className="tw-text-green-600">Đăng nhập</Link> để đặt vé!</div>}
    </div>
  );
};

export default Ticket;
