import React from "react";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="tw-grid tw-grid-cols-[20%,80%]">
      <div>navbar</div>
      <div>{children}</div>
    </div>
  );
};

export default LayoutAdmin;
