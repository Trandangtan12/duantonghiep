import moment from "moment";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { actionGetBuses, actionSearchBuses } from "../../redux/actions/buses";
import { getAllProvince } from "../../redux/actions/province";
import SelectForm from "../selectForm";

const SearchCars = () => {
  const TODAY = new Date()
  const [startPoint, setstartPoint] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endPoint, setEndPoint] = useState();
  const dispatch = useDispatch();
  const history = useHistory()
  const { city } = useSelector((state) => state.province);
  const provinceFilter = city.map((city) => {
    return {
      value: city.code,
      label: city.name,
    };
  });
  const handleChangeStartPoint = (original) => {
    setstartPoint(original.value);
  };
  const handleChangeStartTime = (date) => {
    setStartDate(date);
  };
  const handleChangeEndPoint = (original) => {
    setEndPoint(original.value);
  };
  const handleSearch = async () =>{
    const date_active = moment(startDate).utc(true).format("YYYY-MM-DD")
    console.log(date_active);
   dispatch(actionSearchBuses(startPoint , endPoint, date_active))
   history.push(`/product/start=${startPoint}/and/end=${endPoint}/and/date=${date_active}`)
  }
  useEffect(() => {
    dispatch(actionGetBuses());
    dispatch(getAllProvince());
  }, []);
  return (
    <div className="tw-bg-white tw-w-full tw-p-5 tw-h-[20rem] tw-rounded-lg tw-shadow-lg tw-mr-5">
      <div className="formTiket tw-relative">
        <div className="formTrip tw-flex tw-flex-col">
          <div className="tw-flex tw-flex-col ">
            <div className="tw-w-full tw-py-2">
              <p className="tw-mb-1 tw-text-gray-400">Điểm đi </p>
              <SelectForm
                placeholder="Chọn địa điểm"
                className="tw-text-black tw-font-bold"
                options={provinceFilter}
                onChange={handleChangeStartPoint}
              />
            </div>
            <div className="tw-w-full tw-py-2">
              <p className="tw-mb-2 tw-text-gray-400">Điểm đến </p>
              <SelectForm
                placeholder="Chọn địa điểm"
                className="tw-text-black tw-font-bold"
                options={provinceFilter}
                onChange={handleChangeEndPoint}
              />
            </div>
            <div className="tw-w-full">
              Chọn ngày đi
              <DatePicker className="tw-w-full tw-py-2 tw-border-[1px] tw-rounded-sm tw-border-green-600 tw-font-bold tw-h-[47px] tw-pl-[10px]" dateFormat="yyyy-MM-dd" selected={startDate} onChange={handleChangeStartTime} minDate={TODAY}/>
            </div>
          </div>
          <button
          onClick={handleSearch}
            className="tw-flex tw-flex-col tw-justify-center tw-ml-2 tw-items-center tw-h-16 tw-bg-red-800 
        tw-text-white tw-text-xl tw-w-40 tw-font-bold tw-shadow-lg tw-absolute tw-translate-x-[-50%] 
        tw-translate-y-[-50%] tw-bottom-[-8rem] tw-left-[50%] tw-rounded-full"
          >
            Tìm xe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCars;
