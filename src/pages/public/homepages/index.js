import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePickerForm from "../../../compornent/datePicker";
import SelectForm from "../../../compornent/selectForm";
import { actionGetBuses } from "../../../redux/actions/buses";
import { getAllProvince } from "../../../redux/actions/province";

const HomePages = () => {
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
    <section className="homePage tw-relative tw-flex tw-flex-col tw-w-full">
      <div className="homePageBg tw-hidden xl:tw-block tw-absolute tw-top-[-37rem] tw-left-[-10rem] tw-bg-green-600 
    tw-w-[69rem] tw-h-[60rem] tw-z-20 tw-rounded-[50%]"> </div>
      <div className="homePageBgLight tw-hidden xl:tw-block tw-absolute tw-top-[-37rem] tw-left-[-11.5rem] tw-bg-green-300 
    tw-w-[72rem] tw-h-[60.3rem] tw-rounded-[50%]"> </div>
      <section className="tw-w-3/4 tw-mx-auto tw-mt-5">
        <div className="formTiket tw-relative tw-z-30">
          
          <div className="formTrip tw-flex tw-items-center">
            <div className="tw-flex tw-flex-grow tw tw-items-center tw-h-20 tw-bg-white tw-rounded-lg tw-shadow-lg">
            <div className="tw-w-full"><SelectForm placeholder="Đi"  options={provinceFilter} /></div>
            <div className="tw-w-full"><SelectForm placeholder="Đến" options={provinceFilter} /></div>
            <div><DatePickerForm /></div>
            </div>
            <div className="tw-flex tw-flex-col tw-justify-center tw-ml-2 tw-items-center tw-h-16 tw-bg-red-800 
            tw-text-white tw-text-xl tw-w-40 tw-font-bold tw-rounded-lg tw-shadow-lg">
            SEARCH
            </div>
          </div>
        </div>
      </section>

    </section>
  )
};

export default HomePages;
