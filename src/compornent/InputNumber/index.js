import React from "react";
import styled from "styled-components";

export const InputNumberStyle = styled.div`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

const InputNumber = ({ register, fieldName, className }) => {
  return (
    <InputNumberStyle>
      <input
        className="tw-w-full tw-text-lg tw-py-2 tw-border-b tw-border-gray-300 focus:tw-outline-none focus:tw-border-green-600"
        type="number"
        placeholder="0869840500"
      />
    </InputNumberStyle>
  );
};

export default InputNumber;
