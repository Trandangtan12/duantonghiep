import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePickerForm from "../../../compornent/datePicker";
import SelectForm from "../../../compornent/selectForm";
import { getAllProvince } from "../../../redux/actions/province";

const HomePages = () => {
  const dispatch = useDispatch();
  const {province} = useSelector(state => state.province)
  const provinceFilter = province.map((city)=>{
    return {
      value : city.code,
      label : city.name
    }
  })
  useEffect(() => {
    dispatch(getAllProvince());
  }, []);
  return (
  <div className="tw-h-60">
    <div className="tw-w-full lg:tw-w-3/4 tw-mx-auto ">
     <DatePickerForm/>
     <SelectForm options={provinceFilter}/>
    </div>
    </div>
  )
};

export default HomePages;
