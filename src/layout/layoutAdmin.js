import React, { useState } from "react";
import HeaderAdmin from "../compornent/admin/Header";
import SidebarAdmin from "../compornent/admin/Sidebar";
const LayoutAdmin = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="tw-flex tw-h-screen tw-overflow-hidden">

      {/* Sidebar */}
      <SidebarAdmin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="tw-relative tw-flex tw-flex-col tw-flex-1 tw-overflow-y-auto tw-overflow-x-hidden">
        {/*  Site header */}
        <HeaderAdmin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="tw-container tw-p-4">
         {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
