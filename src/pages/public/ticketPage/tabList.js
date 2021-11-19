import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import {useSelector, useDispatch} from 'react-redux'
import {actionGetTicket} from '../../../redux/actions/buses'
import {UserApi} from '../../../service/userService'
const TabList = () => {
  const {availableOrder} = useSelector(state => state.buses)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionGetTicket())
  }, []);
  // console.log(availableOrder);
  const {user} = UserApi.isAuthenticated()
  console.log(user.id);
  const listWaiting = availableOrder.filter(item => item.user_id == user.id && item.status == "WAITING_ACTIVE");
  const listActived = availableOrder.filter(item => item.user_id == user.id && item.status == "ACTIVED");
  const listRejected = availableOrder.filter(item => item.user_id == user.id && item.status == "REJECTED")
  return (
    <div className="tw-w-full sm:tw-px-0 tw-bg-white tw-rounded-lg">
      <Tab.Group>
        <Tab.List className="tw-px-2 tw-border-b-2 tw-border-gray-100">
            <Tab className={({ selected }) =>
            selected ? 'tw-mr-14 tw-py-4 tw-border-b-2 tw-border-black' : 'tw-mr-14 tw-py-4 tw-bg-white tw-text-black'
          }>
             Chuyến sắp đi
            </Tab>
            <Tab className={({ selected }) =>
            selected ? 'tw-mr-14 tw-py-4 tw-border-b-2 tw-border-black ' : 'tw-mr-14 tw-py-4 tw-bg-white tw-text-black'
          }>
             Chuyến đã đi
            </Tab>
            <Tab className={({ selected }) =>
            selected ? 'tw-mr-14 tw-py-4 tw-border-b-2 tw-border-black' : 'tw-mr-14 tw-py-4 tw-bg-white tw-text-black'
          }>
              Chuyến đã hủy
            </Tab>
        </Tab.List>
        <Tab.Panels className="tw-p-4">
            <Tab.Panel>
              {listWaiting.map(items => <div className="tw-mb-3">
              <div className="tw-font-bold tw-pb-3">{items.buses.date_active}</div>
              <div className="tw-flex tw-justify-between tw-border tw-border-black tw-rounded-lg tw-p-4">
                <div className="col">
                  <p className="tw-text-3xl tw-font-black tw-pb-2">{items.buses.start_time}</p>
                  <p className="tw-text-sm">{items.buses.name}</p>
                  <p className="tw-text-sm">Số lượng: {items.quantity} vé</p>
                  <p className="tw-text-sm">Giá: {new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(items.totalPrice)}</p>
                </div>
                <div className="col">
                  <p className="tw-bg-yellow-400 tw-text-black tw-p-1">Chưa thanh toán</p>
                </div>
              </div>
              </div>
              )}
            </Tab.Panel>
            <Tab.Panel>
            {listActived.map(items => <div className="tw-mb-3">
              <div className="tw-font-bold tw-pb-3">{items.buses.date_active}</div>
              <div className="tw-flex tw-justify-between tw-border tw-border-black tw-rounded-lg tw-p-4">
                <div className="col">
                  <p className="tw-text-3xl tw-font-black tw-pb-2">{items.buses.start_time}</p>
                  <p className="tw-text-sm">{items.buses.name}</p>
                  <p className="tw-text-sm">Số lượng: {items.quantity} vé</p>
                  <p className="tw-text-sm">Giá: {new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(items.totalPrice)}</p>
                </div>
                <div className="col">
                  <p className="tw-bg-green-600 tw-text-white tw-p-1">Đã thanh toán</p>
                </div>
              </div>
              </div>
              )}
            </Tab.Panel>
            <Tab.Panel>
            {listRejected.map(items => <div className="tw-mb-3">
              <div className="tw-font-bold tw-pb-3">{items.buses.date_active}</div>
              <div className="tw-flex tw-justify-between tw-border tw-border-black tw-rounded-lg tw-p-4">
                <div className="col">
                  <p className="tw-text-3xl tw-font-black tw-pb-2">{items.buses.start_time}</p>
                  <p className="tw-text-sm">{items.buses.name}</p>
                  <p className="tw-text-sm">Số lượng: {items.quantity} vé</p>
                  <p className="tw-text-sm">Giá: {new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(items.totalPrice)}</p>
                </div>
                <div className="col">
                  <p className="tw-bg-red-600 tw-text-white tw-p-1">Đã hủy</p>
                </div>
              </div>
              </div>
              )}
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
export default TabList
