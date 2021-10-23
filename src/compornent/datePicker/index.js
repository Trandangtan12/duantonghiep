import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePickerForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker className="tw-w-full tw-py-2 tw-border-b-2 tw-border-gray-100 tw-text-black tw-font-bold" selected={startDate} onChange={(date)=>{
            console.log(date)
        }}/>
    )
}

export default DatePickerForm
