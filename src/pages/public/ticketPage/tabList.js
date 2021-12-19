import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { actionGetTicket } from '../../../redux/actions/buses'
import { UserApi } from '../../../service/userService'
import { isMobile } from 'mobile-device-detect';
import TabListMobileComponent from "./TabListMobileComponent";
import TabListDesktopComponent from "./TabListDesktopComponent";
import { BusesService } from "../../../service/productService";
const TabList = () => {
  const { availableOrder } = useSelector(state => state.buses)
  const dispatch = useDispatch()
  const { user } = UserApi.isAuthenticated()
  const listWaiting = availableOrder.filter(item => item.user_id == user.id && item.status == "WAITING_ACTIVE");
  const listActived = availableOrder.filter(item => item.user_id == user.id && item.status == "ACTIVED");
  const listRejected = availableOrder.filter(item => item.user_id == user.id && item.status == "REJECTED");
  const listDeposit = availableOrder.filter(item => item.user_id == user.id && item.status == "DEPOSIT");
  const listDone = availableOrder.filter(item => item.user_id == user.id && item.status == "DONE");
  const listUnconfimed = availableOrder.filter(item => item.user_id == user.id && item.status == "UNCONFIMRED");
  const reloadActiveAPI = () => {
    setDispatchAcitive((pre) => ++pre);
  };
  const [dispatchDependency, setDispatchAcitive] = useState(0);
  const dependencies = [
    listUnconfimed.length,
    dispatchDependency,
  ];
  const cancelTicket = async (id) => {
    try {
      await BusesService.rejectTicket(id)
      reloadActiveAPI()
      localStorage.removeItem("ticketLocal")
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    dispatch(actionGetTicket())
  }, [...dependencies]);

  return (
    <div className="tw-w-full sm:tw-px-0 tw-bg-white tw-rounded-lg">
      {isMobile ? <TabListMobileComponent
        listWaiting={listWaiting}
        listActived={listActived}
        listRejected={listRejected}
        listDeposit={listDeposit}
        listDone={listDone}
        listUnconfimed={listUnconfimed}
      /> :
        <TabListDesktopComponent
          listWaiting={listWaiting}
          listActived={listActived}
          listRejected={listRejected}
          listDeposit={listDeposit}
          listDone={listDone}
          listUnconfimed={listUnconfimed}
          cancelTicket={cancelTicket}
        />}
    </div>
  );
}
export default TabList
