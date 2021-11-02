import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NAV_LINK_LIST_MY_TICKET } from "../../../config";
import TabList from "./tabList";

const Ticket = () => {
  return (
    <div className="tw-w-3/4 tw-mx-auto tw-mt-2 tw-mb-3">
      <div className="tw-flex ">
      <div className="tw-w-[10rem]">
      <ul>
      {NAV_LINK_LIST_MY_TICKET.map(elt =>(
          <li className="tw-cursor-pointer tw-mb-2"><FontAwesomeIcon icon={elt.icon} /> {elt.label}</li>
      ))}
      </ul>
      </div>
      <div className="tw-flex-grow"> <TabList /></div>
      </div>
    </div>
  );
};

export default Ticket;
