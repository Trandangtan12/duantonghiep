import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINK_LIST } from "../../config";

const NavMobile = ({ isOpen }) => {
  return (
    <div
      className={`transition duration-150 ease-in-out ${
        isOpen ? "tw-block" : "tw-hidden"
      } tw-fixed tw-bg-black tw-w-[60%] tw-opacity-80 tw-h-full tw-top-[90px] lg:tw-hidden tw-z-[1]`}
    >
      <ul>
        {NAV_LINK_LIST.map((item) => (
          <li className="tw-text-white">
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMobile;
