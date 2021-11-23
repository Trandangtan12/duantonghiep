import moment from "moment";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
const PickerStyle = styled.div`
  .react-datepicker__day--selected{
    background-color: #000;
  }
`;
const DatePickerForm = ({onChange , minDate , startDate , showTime = true}) => {
    return (
        <DatePicker className="tw-w-full tw-py-2 tw-border-[1px] tw-border-gray-300 tw-font-bold tw-h-[47px] tw-pl-[10px] tw-rounded-md focus:tw-border-[0.5] focus:tw-border-green-600" dateFormat="yyyy-MM-dd H:mm" selected={startDate} showTimeSelect={showTime} onChange={onChange}   minDate={minDate}/>
    )
}

export default DatePickerForm;
