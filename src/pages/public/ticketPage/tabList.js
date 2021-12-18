import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {actionGetTicket} from '../../../redux/actions/buses'
import {UserApi} from '../../../service/userService'
import { isMobile } from 'mobile-device-detect';
import TabListMobileComponent from "./TabListMobileComponent";
import TabListDesktopComponent from "./TabListDesktopComponent";
const TabList = () => {
  const {availableOrder} = useSelector(state => state.buses)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionGetTicket())
  }, []);
  const {user} = UserApi.isAuthenticated()
  const listWaiting = availableOrder.filter(item => item.user_id == user.id && item.status == "WAITING_ACTIVE");
  const listActived = availableOrder.filter(item => item.user_id == user.id && item.status == "ACTIVED");
  const listRejected = availableOrder.filter(item => item.user_id == user.id && item.status == "REJECTED");
  const listDeposit = availableOrder.filter(item => item.user_id == user.id && item.status == "DEPOSIT");
  const listDone = availableOrder.filter(item => item.user_id == user.id && item.status == "DONE");
  return (
    <div className="tw-w-full sm:tw-px-0 tw-bg-white tw-rounded-lg">
          {isMobile ? <TabListMobileComponent 
          listWaiting={listWaiting}
          listActived={listActived}
          listRejected={listRejected}
          listDeposit={listDeposit}
          listDone={listDone}
          /> : 
          <TabListDesktopComponent 
          listWaiting={listWaiting}
          listActived={listActived}
          listRejected={listRejected}
          listDeposit={listDeposit}
          listDone={listDone}
          />}
    </div>
  );
}
export default TabList
