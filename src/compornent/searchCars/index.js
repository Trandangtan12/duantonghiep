import React, { useEffect } from 'react'
import DatePickerForm from "../datePicker";
import { Tab } from '@headlessui/react'
import SelectForm from '../selectForm';
import { actionGetBuses } from "../../redux/actions/buses";
import { getAllProvince } from "../../redux/actions/province";
import { useDispatch, useSelector } from "react-redux";

const SearchCars = () => {
    const dispatch = useDispatch();
    const { province } = useSelector(state => state.province)
    const { availableBuses } = useSelector(state => state.buses)
    const provinceFilter = province.map((city) => {
      return {
        value: city.code,
        label: city.name
      }
    })
    useEffect(() => {
      dispatch(getAllProvince());
      dispatch(actionGetBuses())
    }, []);
    return (
        <div className="tw-bg-white tw-w-full tw-p-5 tw-h-[20rem] tw-rounded-lg tw-shadow-lg tw-mr-5">
       
         
              <div className="formTiket tw-relative">
                <div className="formTrip tw-flex tw-flex-col">
                  <div className="tw-flex tw-flex-col ">
                    <div className="tw-w-full tw-py-2">
                      <p className="tw-mb-1 tw-text-gray-400">Điểm đi </p>
                      <SelectForm placeholder="Chọn địa điểm" className="tw-text-black tw-font-bold" options={provinceFilter} /></div>
                    <div className="tw-w-full tw-py-2">
                      <p className="tw-mb-2 tw-text-gray-400">Điểm đến </p>
                      <SelectForm placeholder="Chọn địa điểm" className="tw-text-black tw-font-bold" options={provinceFilter} /></div>
                    <div className="tw-w-full">
                      Chọn ngày đi
                      <DatePickerForm />
                      </div>
                  </div>
                  <div className="tw-flex tw-flex-col tw-justify-center tw-ml-2 tw-items-center tw-h-16 tw-bg-red-800 
        tw-text-white tw-text-xl tw-w-40 tw-font-bold tw-shadow-lg tw-absolute tw-translate-x-[-50%] 
        tw-translate-y-[-50%] tw-bottom-[-8rem] tw-left-[50%] tw-rounded-full">
                    SEARCH
                  </div>
                </div>
              </div>
      </div>
    )
}

export default SearchCars
