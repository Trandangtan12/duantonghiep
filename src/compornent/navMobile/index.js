import React from "react";

const NavMobile = ({ isOpen }) => {
  return (
    <div
      className={`transition duration-150 ease-in-out ${
        isOpen ? "tw-block" : "tw-hidden"
      } tw-fixed tw-bg-black tw-w-[60%] tw-opacity-80 tw-h-full tw-top-[55px] lg:tw-hidden tw-rounded-lg tw-z-[1]`}
    >
    <span className="tw-text-white">sdjfgsdjfgd</span>
    </div>
  );
};

export default NavMobile;
