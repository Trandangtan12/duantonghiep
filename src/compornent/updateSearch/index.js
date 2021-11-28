import React, { useState, useEffect } from "react";
import SelectFormProduct from "../selectForm/selectFormProduct";
import { actionGetBuses, actionSearchBuses, ACTION_SEARCH_BUSES } from "../../redux/actions/buses";
import { useDispatch, useSelector } from "react-redux";
import { getAllProvince } from "../../redux/actions/province";
import { useHistory, useParams } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import alertify from "alertifyjs";
import moment from "moment";
import { BusesService } from "../../service/productService";

const UpdateSearch = () => {
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.province);
  const provinceFilter = city.map((city) => {
    return {
      value: city.code,
      label: city.name,
    };
  });

  const history = useHistory()
  const { start, end, date } = useParams();
  const [valueStart, setValueStart] = useState([])
  const [valueEnd, setValueEnd] = useState([])

  const TODAY = new Date()
  const [startDate, setStartDate] = useState(new Date(date));
  const [startPoint, setstartPoint] = useState(start);
  const [endPoint, setEndPoint] = useState(end);
  const handleChangeStartPoint = (original) => {
    setstartPoint(original.value);
  };
  const handleChangeStartTime = (date) => {
    setStartDate(date);
  };
  const handleChangeEndPoint = (original) => {
    setEndPoint(original.value);
  };
  const handleSearch = async () => {

    const date_active = moment(startDate).utc(true).format("YYYY-MM-DD")
    if (startPoint == null || endPoint == null) {
      alertify.alert('Vui lòng chọn địa điểm').set({ title: "Thông báo" })
        .set("movable", false)
        .set("ok", "Alright!")
        .set("notifier", "position", "top-right");
      return
    } else {
      dispatch(actionSearchBuses(startPoint, endPoint, date_active))
      history.push(`/product/start=${startPoint}/and/end=${endPoint}/and/date=${date_active}`)
    }
  }

  useEffect(() => {
    const provinceFilterStart = provinceFilter
    .filter((item) => item.value == start)
    .map((item) => item.label);
    
  const provinceFilterEnd = provinceFilter
    .filter((item) => item.value == end)
    .map((item) => item.label);
    
    setValueStart(provinceFilterStart)
    setValueEnd(provinceFilterEnd)
    console.log(provinceFilterStart);
    dispatch(getAllProvince());
    dispatch(actionGetBuses());
  }, []);
  return (
    <div className="tw-bg-green-500">
      <div className="formTrip tw-relative tw-z-20 tw-flex tw-items-center tw-w-3/4 tw-mx-auto">
        <div className="tw-flex tw-flex-grow tw tw-items-center tw-h-20 ">
          <div className="tw-w-full tw-mr-2">
            <p className="tw-text-white">Điểm đi</p>
            <SelectFormProduct
             
              className="tw-text-black tw-cursor-text"
              options={provinceFilter}
              onChange={handleChangeStartPoint}
            // fieldName="startPointId"
            />
          </div>
          <div className="tw-w-full tw-mr-2">
            <p className="tw-text-white">Điếm đến</p>
            <SelectFormProduct
              // placeholder={provinceFilterEnd}
              className="tw-text-black tw-cursor-text"
              options={provinceFilter}
              onChange={handleChangeEndPoint}
              // fieldName="startPointId"
              defaultValues={valueEnd[0]}
            />
          </div>
          <div>
            <p className="tw-text-white ">Ngày đi</p>
            <DatePicker className="tw-p-2 tw-rounded-lg tw-bg-green-700 tw-text-white" selected={startDate}
              onChange={handleChangeStartTime} dateFormat="dd/MM/yyyy" minDate={TODAY} />
          </div>
        </div>
        <button onClick={() => handleSearch()}
          className="tw-flex tw-flex-col tw-justify-center tw-ml-2 tw-items-center tw-h-12 tw-text-red-800 
       tw-bg-white tw-text-xl tw-px-4 tw-font-bold tw-rounded-lg tw-shadow-lg tw-mt-4"
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default UpdateSearch;
