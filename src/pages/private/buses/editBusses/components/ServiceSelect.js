import React from "react";
import Select from "react-select";
const ServiceSelect = ({
  options,
  handleChange,
  values,
  title,
  placeholder,
  errors,
  fieldName,
}) => {
  return (
    <div>
      <label
        className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
        htmlfor="grid-password"
      >
        {title}
      </label>
      <Select
        closeMenuOnSelect={false}
        isMulti={true}
        onChange={handleChange}
        value={values}
        options={options}
        placeholder={placeholder}
        className="tw-border-[0.5] tw-rounded-md tw-border-gray-300"
        errors={errors}
        fieldName={fieldName}
      />
    </div>
  );
};

export default ServiceSelect;
