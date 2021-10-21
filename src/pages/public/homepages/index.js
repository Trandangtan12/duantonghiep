import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePickerForm from "../../../compornent/datePicker";
import SelectForm from "../../../compornent/selectForm";
import { actionGetBuses } from "../../../redux/actions/buses";
import { getAllProvince } from "../../../redux/actions/province";
import { Tab } from '@headlessui/react'

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
      <section className="tw-w-3/4 tw-mx-auto tw-mt-5 tw-z-20">
        <h1 className="tw-text-white tw-font-bold tw-text-xl tw-mb-3">Đặt vé xe</h1>
        <div className="tw-flex">
          <div className="tw-bg-white tw-w-full tw-p-5 tw-h-[18rem] tw-rounded-lg tw-shadow-lg tw-mr-5">
            <Tab.Group>
              <Tab.List>
                <Tab className={({ selected }) =>
                  selected ? 'tw-text-green-500' : 'tw-text-black'
                }> <input type="radio" name="ticked" value="oneway" id="OneWay" /> <label for="OneWay">Vé một chiều</label> </Tab>
                <Tab className={({ selected }) =>
                  selected ? 'tw-text-green-500' : 'tw-text-black'
                }><input type="radio" name="ticked" value="Vé khứ hồi" id="RoundTrip" /> <label for="RoundTrip">Vé một chiều</label></Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="formTiket tw-relative">
                    <div className="formTrip tw-flex tw-flex-col">
                      <div className="tw-flex tw-flex-col ">
                        <div className="tw-w-full tw-py-2"><SelectForm placeholder="Chọn địa điểm" options={provinceFilter} /></div>
                        <div className="tw-w-full tw-py-2"><SelectForm placeholder="Chọn địa điểm" options={provinceFilter} /></div>
                        <div className="tw-w-1/2"><DatePickerForm /></div>
                      </div>
                      <div className="tw-flex tw-flex-col tw-justify-center tw-ml-2 tw-items-center tw-h-16 tw-bg-red-800 
            tw-text-white tw-text-xl tw-w-40 tw-font-bold tw-shadow-lg tw-absolute tw-translate-x-[-50%] 
            tw-translate-y-[-50%] tw-bottom-[-11rem] tw-left-[50%] tw-rounded-full">
                        SEARCH
                      </div>
                    </div>
                  </div></Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className="tw-w-full tw-bg-white tw-rounded-lg tw-shadow-lg">
            <h2>Phòng tránh covid 2019</h2>
            <div>The Last React Carousel You'll Ever Need!
              This library is the port of jQuery slick library.</div>
          </div>
        </div>

      </section>

    </section>
  )
};

export default HomePages;
