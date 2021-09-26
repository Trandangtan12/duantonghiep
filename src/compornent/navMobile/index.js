import React from "react";

const NavMobile = ({ isOpen }) => {
  return (
    <div
      className={`transition duration-150 ease-in-out ${
        isOpen ? "tw-block" : "tw-hidden"
      } tw-fixed tw-bg-black tw-w-[60%] tw-opacity-80 tw-h-full tw-top-0 lg:tw-hidden tw-rounded-md `}
    >

        
    </div>
  );
};

export default NavMobile;
