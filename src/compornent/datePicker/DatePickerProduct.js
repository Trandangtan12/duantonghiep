import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePickerProduct = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker className="tw-p-2 tw-rounded-lg tw-bg-green-700 tw-text-white" selected={startDate} onChange={(date)=>{
        }}/>
    )
}

export default DatePickerProduct
