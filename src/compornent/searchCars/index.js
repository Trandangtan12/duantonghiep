import React, { useEffect, useState } from "react";
import DatePickerForm from "../datePicker";
import { Tab } from "@headlessui/react";
import SelectForm from "../selectForm";
import { actionGetBuses , actionSearchBuses } from "../../redux/actions/buses";
import { useDispatch, useSelector } from "react-redux";
import { getAllProvince } from "../../redux/actions/province";
import { BusesService } from "../../service/productService";
import { useHistory } from "react-router";

const SearchCars = () => {
  const [startPoint, setstartPoint] = useState();
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
  const handleChangeEndPoint = (original) => {
    setEndPoint(original.value);
  };
  const handleSearch = async () =>{
   dispatch(actionSearchBuses(startPoint , endPoint))
   history.push('/products')
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
              <DatePickerForm />
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
