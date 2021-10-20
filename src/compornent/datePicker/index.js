import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
const PickerStyle = styled.div`
  .react-datepicker__day--selected{
    background-color: #000;
  }
`;
const DatePickerForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <PickerStyle>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          console.log(date);
        }}
      />
    </PickerStyle>
  );
};

export default DatePickerForm;
