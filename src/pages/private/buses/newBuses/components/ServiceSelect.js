import React from "react";
import Select from "react-select";
import SelectForm from "../../../../../compornent/selectForm";
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
      <SelectForm
        closeMenuOnSelect={false}
        isMulti={true}
        onChange={handleChange}
        value={values}
        options={options}
        placeholder={placeholder}
        className="tw-border-[1px] tw-rounded-md tw-border-green-600"
        errors={errors}
        fieldName={fieldName}
      />
    </div>
  );
};

export default ServiceSelect;
