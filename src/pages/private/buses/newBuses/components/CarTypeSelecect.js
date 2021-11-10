import React from "react";
import SelectForm from "../../../../../compornent/selectForm";

const CarTypeSelecect = ({title , options , placeholder , handleChange , errors , fieldName }) => {
  return (
    <div>
      <label
        className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
        htmlfor="grid-password"
      >
        {title}
      </label>
      <SelectForm options={options} placeholder={placeholder} onChange={handleChange} errors={errors}  fieldName={fieldName}/>
    </div>
  );
};

export default CarTypeSelecect;
