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
const DatePickerForm = ({onChange , minDate , startDate}) => {
    return (
        <DatePicker className="tw-w-full tw-py-2 tw-border-b-2 tw-border-gray-100 tw-text-black tw-font-bold" dateFormat="yyyy-MM-dd H:mm" selected={startDate} showTimeSelect onChange={onChange}   minDate={startDate}/>
    )
}

export default DatePickerForm;
