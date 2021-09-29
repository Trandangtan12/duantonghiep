import React from "react";
import HeaderAdmin from "../compornent/admin/header";
import NavbarAdmin from "../compornent/admin/navbar";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="tw-grid tw-grid-cols-[20%,80%]">
      <div>
        <NavbarAdmin/>
      </div>
      <div>
      <HeaderAdmin/>
      {children}</div>
    </div>
  );
};

export default LayoutAdmin;
