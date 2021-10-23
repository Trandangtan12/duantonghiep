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
        <div className="tw-bg-white tw-w-full tw-p-5 tw-h-[22rem] tw-rounded-lg tw-shadow-lg tw-mr-5">
        <Tab.Group>
          <Tab.List className="tw-flex tw-items-center">
            <Tab className={({ selected }) =>
              selected ? 'tw-text-green-500 tw-font-semibold tw-text-xl tw-mr-7 tw-mb-2 tw-border-b-3 tw-border-green-500 ' : 'tw-text-black tw-font-semibold tw-text-xl tw-mr-7 tw-mb-2'
            }><label for="OneWay">Vé một chiều</label> </Tab>
            <Tab className={({ selected }) =>
              selected ? 'tw-text-green-500 tw-font-semibold tw-text-xl tw-mr-7 tw-mb-2 tw-border-b-3 tw-border-green-500' : 'tw-text-black tw-font-semibold tw-text-xl tw-mr-7 tw-mb-2'
            }><label for="RoundTrip">Vé khứ hồi</label></Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="formTiket tw-relative">
                <div className="formTrip tw-flex tw-flex-col">
                  <div className="tw-flex tw-flex-col ">
                    <div className="tw-w-full tw-py-2">
                      <p className="tw-mb-1">Điểm đi: </p>
                      <SelectForm placeholder="Chọn địa điểm" options={provinceFilter} /></div>
                    <div className="tw-w-full tw-py-2">
                      <p className="tw-mb-1">Điểm đến: </p>
                      <SelectForm placeholder="Chọn địa điểm" options={provinceFilter} /></div>
                    <div className="tw-w-1/2"><DatePickerForm /></div>
                  </div>
                  <div className="tw-flex tw-flex-col tw-justify-center tw-ml-2 tw-items-center tw-h-16 tw-bg-red-800 
        tw-text-white tw-text-xl tw-w-40 tw-font-bold tw-shadow-lg tw-absolute tw-translate-x-[-50%] 
        tw-translate-y-[-50%] tw-bottom-[-11rem] tw-left-[50%] tw-rounded-full">
                    SEARCH
                  </div>
                </div>
              </div></Tab.Panel>
            <Tab.Panel>  <div className="formTiket tw-relative">
                <div className="formTrip tw-flex tw-flex-col">
                  <div className="tw-flex tw-flex-col ">
                    <div className="tw-w-full tw-py-2">
                      <p className="tw-mb-1">Điểm đi: </p>
                      <SelectForm placeholder="Chọn địa điểm" options={provinceFilter} /></div>
                    <div className="tw-w-full tw-py-2">
                      <p className="tw-mb-1">Điểm đến: </p>
                      <SelectForm placeholder="Chọn địa điểm" options={provinceFilter} /></div>
                    <div className="tw-w-1/2"><DatePickerForm /></div>
                    <div className="tw-w-1/2"><DatePickerForm /></div>
                  </div>
                  <div className="tw-flex tw-flex-col tw-justify-center tw-ml-2 tw-items-center tw-h-16 tw-bg-red-800 
        tw-text-white tw-text-xl tw-w-40 tw-font-bold tw-shadow-lg tw-absolute tw-translate-x-[-50%] 
        tw-translate-y-[-50%] tw-bottom-[-9rem] tw-left-[50%] tw-rounded-full">
                    SEARCH
                  </div>
                </div>
              </div></Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    )
}

export default SearchCars
