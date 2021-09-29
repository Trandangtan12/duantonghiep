import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePickerForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} />
    )
}

export default DatePickerForm
