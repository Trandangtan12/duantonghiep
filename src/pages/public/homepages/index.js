import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePickerForm from "../../../compornent/datePicker";
import SelectForm from "../../../compornent/selectForm";
import { actionGetBuses } from "../../../redux/actions/buses";
import { getAllProvince } from "../../../redux/actions/province";

const HomePages = () => {
  const dispatch = useDispatch();
  const {province} = useSelector(state => state.province)
  const {availableBuses} = useSelector(state => state.buses)
  const provinceFilter = province.map((city)=>{
    return {
      value : city.code,
      label : city.name
    }
  })
  useEffect(() => {
    dispatch(getAllProvince());
    dispatch(actionGetBuses())
  }, []);
  return (
    <>
     <DatePickerForm/>
     <SelectForm options={provinceFilter}/>
    </>
  )
};

export default HomePages;
