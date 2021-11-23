import React, { useEffect } from "react";
import SelectForm from "../selectForm";
import { actionGetBuses } from "../../redux/actions/buses";
import { useDispatch, useSelector } from "react-redux";
import { getAllProvince } from "../../redux/actions/province";
import { useParams } from "react-router";
import DatePicker from "react-datepicker";
import SelectFormHome from "../selectForm/selectFormHome";

const UpdateSearch = () => {
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.province);
  const provinceFilter = city.map((city) => {
    return {
      value: city.code,
      label: city.name,
    };
  });

  useEffect(() => {
    dispatch(getAllProvince());
    dispatch(actionGetBuses());
  }, []);
  const { start, end, date } = useParams();
  const provinceFilterStart = provinceFilter
    .filter((item) => item.value == start)
    .map((item) => item.label);
  const provinceFilterEnd = provinceFilter
    .filter((item) => item.value == end)
    .map((item) => item.label);
  const provinceFilterDate = provinceFilter
    .filter((item) => item.value == date)
    .map((item) => item.label);
  return (
    <div className="tw-bg-green-500">
      <div className="formTrip tw-relative tw-z-20 tw-flex tw-items-center tw-w-3/4 tw-mx-auto">
        <div className="tw-flex tw-flex-grow tw tw-items-center tw-h-20 ">
          <div className="tw-w-full tw-mr-2">
            <p className="tw-text-white">Điểm đi</p>
            <SelectFormHome
              placeholder="Chọn địa điểm"
              className="tw-text-black tw-font-bold tw-cursor-text"
              options={provinceFilter}
            //   onChange={handleChangeStartPoint}
              fieldName="startPointId"
            />
          </div>
          <div className="tw-w-full tw-mr-2">
            <p className="tw-text-white">Điếm đến</p>
            <SelectFormHome
              placeholder="Chọn địa điểm"
              className="tw-text-black tw-font-bold tw-cursor-text"
              options={provinceFilter}
            //   onChange={handleChangeStartPoint}
              fieldName="startPointId"
            />
          </div>
          <div>
            <p className="tw-text-white ">Ngày đi</p>
            <DatePicker
              className="tw-p-2 tw-rounded-lg tw-bg-green-700 tw-text-white"
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>
        <button
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
