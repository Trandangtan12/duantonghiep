import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaymentNotSuccess from "../../../asset/images/declined.png";
import User from "../../../asset/images/group.png";
import Money from "../../../asset/images/newspaper.png";
import Succes from "../../../asset/images/payment.png";
import Ticket from "../../../asset/images/tickets.png";
import Buses from "../../../asset/images/tour-bus.png";
import SelectForm from "../../../compornent/selectForm";
import { numberWithCommas } from "../../../config";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {
  actionGetAllBusesTypes,
  actionGetBuses,
  actionGetService,
  actionGetTicket,
} from "../../../redux/actions/buses";
import BarChart from "../../../compornent/admin/chart/BarChart";
import { actionGetAllUsers } from "../../../redux/actions/user";
import { statisticalService } from "../../../service/statistical";
import { THIRTYDAY } from "./utility";
import moment from "moment";
import { actionGetNews } from "../../../redux/actions/news";
const DashBoard = () => {
  const [staticsticalData, setStaticsticalData] = useState([]);
  const [labelsData, setLabelsData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [dateDefault, setDateDefault] = useState({
    label: "30 ngày",
    value: "30ngay",
  });
  const [endDate, setEndDate] = useState(new Date());
  const { avaibleUsers } = useSelector((state) => state.auth);
  const { availableOrder } = useSelector((state) => state.buses);
  const { availableBuses } = useSelector((state) => state.buses);
  const { news } = useSelector((state) => state.news);
  console.log(news);
  const [typeStatistical, setTypeStatistical] = useState(false)
  const handleChangeStartDateExport = (date) => {
    setStartDate(date);
  };
  const handleChangeEndDateExport = (date) => {
    setEndDate(date);
  };
  const dateSelect = [
    {
      label: "Hôm nay",
      value: "homnay",
    },
    {
      label: "7 ngày",
      value: "7ngay",
    },
    {
      label: "30 ngày",
      value: "30ngay",
    },
    {
      label: "Tháng này",
      value: "thangnay",
    },
    {
      label: "Tháng trước",
      value: "thangtruoc",
    },
    {
      label: "360 ngày",
      value: "",
    },
  ];
  const reducer = (previousValue, currentValue) =>
    previousValue + currentValue.totalPrice;
  const totalPrice = availableOrder.reduce(reducer, 0);
  const filterTicketPaymentSuccess = availableOrder.filter((_elt) => {
    return _elt.status === "ACTIVED";
  });
  const handleChangeDate = async (original) => {
    setDateDefault(original);
    if (original.value === "homnay") {
      const TODAY = moment().format("YYYY-MM-DD")
      console.log(TODAY);
      const res = await statisticalService.getDataByAboutDate(TODAY,TODAY)
      if (res.status === 200) {
        const quantityData = res.data.map((_elt) => {
          return _elt.qty_ticket;
        });
        const labelsDate = res.data.map((_elt) => {
          return _elt.ticket_date;
        });
        setLabelsData(labelsDate);
        setStaticsticalData(quantityData);
      }
      return
    }
    if (original.value === THIRTYDAY) {
      const res = await statisticalService.getDataBy30Day();
      if (res.status === 200) {
        const quantityData = res.data.map((_elt) => {
          return _elt.qty_ticket;
        });
        const labelsDate = res.data.map((_elt) => {
          return _elt.ticket_date;
        });
        setLabelsData(labelsDate);
        setStaticsticalData(quantityData);
      }
      return
    } else {
      const res = await statisticalService.getDataByAboutDay(original.value);
      if (res.status === 200) {
        const quantityData = res.data.map((_elt) => {
          return _elt.qty_ticket;
        });
        const labelsDate = res.data.map((_elt) => {
          return _elt.ticket_date;
        });
        setLabelsData(labelsDate);
        setStaticsticalData(quantityData);
      }
    }
  };
  const handleStatisticalByAboutDate = async () =>{
    const startCovert = moment(startDate).format("YYYY-MM-DD")
    const endtCovert = moment(endDate).format("YYYY-MM-DD")

  const res = await statisticalService.getDataByAboutDate(startCovert,endtCovert)
  if (res.status === 200) {
    const quantityData = res.data.map((_elt) => {
      return _elt.qty_ticket;
    });
    const labelsDate = res.data.map((_elt) => {
      return _elt.ticket_date;
    });
    setLabelsData(labelsDate);
    setStaticsticalData(quantityData);
  }
  }
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
    dispatch(actionGetNews());
    const getStatistical = async () => {
      const res = await statisticalService.getDataBy30Day();
      if (res.status === 200) {
        const quantityData = res.data.map((_elt) => {
          return _elt.qty_ticket;
        });
        const labelsDate = res.data.map((_elt) => {
          return _elt.ticket_date;
        });
        const priceTotal = res.data.map((_elt) => {
          return _elt.total_price;
        });
        setLabelsData(labelsDate);
        setStaticsticalData(quantityData);
        setPriceData(priceTotal);
      }
    };
    getStatistical();
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
                  Tổng số bài viết
                </h5>
                <h3 className="tw-font-bold tw-text-3xl tw-text-white">
                  {news.length} Bài viết
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
                  <img src={Buses} width="50" />
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
                  <img src={Ticket} width="50" />
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
                  <img src={Succes} width="50" />
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
        </div>
        <div className="tw-w-full md:tw-w-1/2 xl:tw-w-1/3 tw-p-3">
          {/*Metric Card*/}
          <div className="tw-bg-green-600 tw-border tw-border-gray-800 tw-rounded-lg tw-shadow tw-p-2">
            <div className="tw-flex tw-flex-row tw-items-center">
              <div className="tw-flex-shrink tw-pr-4">
                <div className="tw-rounded-lg tw-p-3 tw-bg-white">
                  <img src={PaymentNotSuccess} width="50" />
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

      {
        typeStatistical === false ?  <div className="tw-flex tw-flex-wrap">
        <div className="tw-w-full lg:tw-w-12/12 tw-px-4">
          <div className="tw-relative tw-w-full tw-mb-3">
            <label
              className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
              htmlfor="grid-password"
            >
              Thời gian thống kê
            </label>
            <SelectForm
              defaultValues={dateDefault}
              options={dateSelect}
              placeholder={"Chọn thời gian"}
              onChange={(original) => handleChangeDate(original)}
              // errors={errors}
              // fieldName={pointDistrictId}
            />
          </div>
        </div>
        <div className="tw-w-full lg:tw-w-6/12 tw-px-4 tw-mb-3">
          <div className="tw-relative tw-w-full tw-mb-3">
          
          </div>
        </div>
      </div> :
      <div className="tw-flex tw-flex-wrap">
        <div className="tw-w-full lg:tw-w-4/12 tw-px-4">
          <div className="tw-relative tw-w-full tw-mb-3">
            <label
              className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
              htmlfor="grid-password"
            >
              Từ ngày
            </label>
            <DatePicker
              className="tw-w-full tw-py-2 tw-border-[1px] tw-border-gray-300 tw-font-bold tw-h-[47px] tw-pl-[10px] tw-rounded-md focus:tw-border-[0.5] focus:tw-border-green-600"
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              onChange={(date) => handleChangeStartDateExport(date)}
            />
          </div>
        </div>
        <div className="tw-w-full lg:tw-w-4/12 tw-px-4 tw-mb-3">
          <div className="tw-relative tw-w-full tw-mb-3">
          <label
              className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
              htmlfor="grid-password"
            >
              Đến ngày
            </label>
          <DatePicker
              className="tw-w-full tw-py-2 tw-border-[1px] tw-border-gray-300 tw-font-bold tw-h-[47px] tw-pl-[10px] tw-rounded-md focus:tw-border-[0.5] focus:tw-border-green-600"
              dateFormat="yyyy-MM-dd"
              selected={endDate}
              minDate={startDate}
              onChange={(date) => handleChangeEndDateExport(date)}
            />
          </div>
        </div>
        <div className="tw-w-full lg:tw-w-4/12 tw-px-4 tw-mb-3">
          <div className="tw-relative tw-w-full tw-mb-3">
          <button className="tw-w-[300px] tw-bg-green-600 tw-p-2 tw-mt-7 tw-rounded-lg active:tw-bg-gray-500 tw-text-white" onClick={() => handleStatisticalByAboutDate()}>Thống kê</button>
          </div>
        </div>
      </div>
      }
      <div className="tw-relative tw-w-full tw-mb-3 tw-flex tw-justify-end">
           <button className="tw-w-[300px] tw-bg-green-600 tw-p-2 tw-rounded-lg active:tw-bg-gray-500 tw-text-white" onClick={() => setTypeStatistical(!typeStatistical)}>{!typeStatistical ? "Thống kê theo khoảng ngày" : "Thống kê theo khoảng"}</button>
          </div>

      <BarChart
        dataDefault={staticsticalData}
        dataPirce={priceData}
        labels={labelsData}
      />
    </div>
  );
};

export default DashBoard;
