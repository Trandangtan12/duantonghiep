import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaymentNotSuccess from '../../../asset/images/declined.png';
import User from '../../../asset/images/group.png';
import Money from '../../../asset/images/money.png';
import Succes from '../../../asset/images/payment.png';
import Ticket from '../../../asset/images/tickets.png';
import Buses from '../../../asset/images/tour-bus.png';
import { numberWithCommas } from "../../../config";
import {
  actionGetAllBusesTypes,
  actionGetBuses,
  actionGetService,
  actionGetTicket
} from "../../../redux/actions/buses";
import BarChart from '../../../compornent/admin/chart/BarChart'
import { actionGetAllUsers } from "../../../redux/actions/user";
const DashBoard = () => {
  const { avaibleUsers } = useSelector((state) => state.auth);
  const { availableOrder } = useSelector((state) => state.buses);
  const { availableBuses } = useSelector((state) => state.buses);
  const reducer = (previousValue, currentValue) =>
    previousValue + currentValue.totalPrice;
  const totalPrice = availableOrder.reduce(reducer, 0);
  const filterTicketPaymentSuccess = availableOrder.filter((_elt) => {
    return _elt.status === "ACTIVED";
  });
  const filterTicketRejected = availableOrder.filter((_elt) => {
    return _elt.status === "REJECTED";
  });
  const filterTicketWaiting = availableOrder.filter((_elt) => {
    return _elt.status === "WAITING_ACTIVE";
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionGetBuses());
    dispatch(actionGetService());
    dispatch(actionGetAllBusesTypes());
    dispatch(actionGetTicket());
    dispatch(actionGetAllUsers());
  }, []);
  return (
    <div>
      <div className="tw-flex tw-flex-wrap tw-justify-start">
        <div className="tw-w-full md:tw-w-1/2 xl:tw-w-1/3 tw-p-3">
          {/*Metric Card*/}
          <div className="tw-bg-green-600 tw-border tw-border-gray-800 tw-rounded-lg tw-shadow tw-p-2">
            <div className="tw-flex tw-flex-row tw-items-center">
              <div className="tw-flex-shrink tw-pr-4">
                <div className="tw-rounded-lg tw-p-3 tw-bg-white">
                  <img src={Money} width="50" />
                </div>
              </div>
              <div className="tw-flex-1 tw-text-right md:tw-text-center">
                <h5 className="tw-font-bold tw-uppercase tw-text-white">
                  Tổng số tiền đã giao dich
                </h5>
                <h3 className="tw-font-bold tw-text-3xl tw-text-white">
                  {numberWithCommas(totalPrice)} Vnđ
                  <span className="tw-text-green-500">
                    <i className="fas fa-caret-up" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
        <div className="tw-w-full md:tw-w-1/2 xl:tw-w-1/3 tw-p-3">
          {/*Metric Card*/}
          <div className="tw-bg-green-600 tw-border tw-border-gray-800 tw-rounded-lg tw-shadow tw-p-2">
            <div className="tw-flex tw-flex-row tw-items-center">
              <div className="tw-flex-shrink tw-pr-4">
                <div className="tw-rounded-lg tw-p-3 tw-bg-white">
                <img src={User} width="50" />
                </div>
              </div>
              <div className="tw-flex-1 tw-text-right md:tw-text-center">
                <h5 className="tw-font-bold tw-uppercase tw-text-white">
                  Tổng số tài khoản
                </h5>
                <h3 className="tw-font-bold tw-text-3xl tw-text-white">
                  {avaibleUsers.length} Tài khoản
                  <span className="tw-text-pink-500">
                    <i className="fas fa-exchange-alt" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
        <div className="tw-w-full md:tw-w-1/2 xl:tw-w-1/3 tw-p-3">
          {/*Metric Card*/}
          <div className="tw-bg-green-600 tw-border tw-border-gray-800 tw-rounded-lg tw-shadow tw-p-2">
            <div className="tw-flex tw-flex-row tw-items-center">
              <div className="tw-flex-shrink tw-pr-4">
                <div className="tw-rounded-lg tw-p-3 tw-bg-white">
                <img src={Buses} width="50"/>
                </div>
              </div>
              <div className="tw-flex-1 tw-text-right md:tw-text-center">
                <h5 className="tw-font-bold tw-uppercase tw-text-white">
                  Tổng số chuyến xe
                </h5>
                <h3 className="tw-font-bold tw-text-3xl tw-text-white">
                  {availableBuses.length} Chuyến
                  <span className="tw-text-yellow-600">
                    <i className="fas fa-caret-up" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
        <div className="tw-w-full md:tw-w-1/2 xl:tw-w-1/3 tw-p-3">
          {/*Metric Card*/}
          <div className="tw-bg-green-600 tw-border tw-border-gray-800 tw-rounded-lg tw-shadow tw-p-2">
            <div className="tw-flex tw-flex-row tw-items-center">
              <div className="tw-flex-shrink tw-pr-4">
                <div className="tw-rounded-lg tw-p-3 tw-bg-white">
                  <img src={Ticket} width="50"/>
                </div>
              </div>
              <div className="tw-flex-1 tw-text-right md:tw-text-center">
                <h5 className="tw-font-bold tw-uppercase tw-text-white">
                  Tổng số vé
                </h5>
                <h3 className="tw-font-bold tw-text-3xl tw-text-white">
                  {availableOrder.length} Vé
                </h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
        <div className="tw-w-full md:tw-w-1/2 xl:tw-w-1/3 tw-p-3">
          {/*Metric Card*/}
          <div className="tw-bg-green-600 tw-border tw-border-gray-800 tw-rounded-lg tw-shadow tw-p-2">
            <div className="tw-flex tw-flex-row tw-items-center">
              <div className="tw-flex-shrink tw-pr-4">
                <div className="tw-rounded-lg tw-p-3 tw-bg-white">
                <img src={Succes} width="50"/>
                </div>
              </div>
              <div className="tw-flex-1 tw-text-right md:tw-text-center">
                <h5 className="tw-font-bold tw-uppercase tw-text-white">
                  Số vé đã thanh toán
                </h5>
                <h3 className="tw-font-bold tw-text-3xl tw-text-white">
                  {filterTicketPaymentSuccess.length} Vé
                </h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div><div className="tw-w-full md:tw-w-1/2 xl:tw-w-1/3 tw-p-3">
          {/*Metric Card*/}
          <div className="tw-bg-green-600 tw-border tw-border-gray-800 tw-rounded-lg tw-shadow tw-p-2">
            <div className="tw-flex tw-flex-row tw-items-center">
              <div className="tw-flex-shrink tw-pr-4">
                <div className="tw-rounded-lg tw-p-3 tw-bg-white">
                <img src={PaymentNotSuccess} width="50"/>
                </div>
              </div>
              <div className="tw-flex-1 tw-text-right md:tw-text-center">
                <h5 className="tw-font-bold tw-uppercase tw-text-white">
                  Số vé chưa thanh toán
                </h5>
                <h3 className="tw-font-bold tw-text-3xl tw-text-white">
                  {filterTicketWaiting.length} Vé
                </h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
      </div>
      <BarChart />
    </div>
  );
};

export default DashBoard;
