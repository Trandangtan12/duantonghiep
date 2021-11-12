import React from "react";
import Select from "react-select";
const ServiceSelect = ({ options, handleChange, values  , title , placeholder }) => {
  return (
    <div>
      <label
        className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
        htmlfor="grid-password"
      >
        {title}
      </label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        onChange={handleChange}
        value={values}
        options={options}
        placeholder={placeholder}
        className="tw-border-[1px] tw-rounded-md tw-border-green-600"
      />
    </div>
  );
};

export default ServiceSelect;
