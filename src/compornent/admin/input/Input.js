import React from "react";

const Input = ({
  lable,
  type,
  onChange,
  className,
  id,
  register,
  fieldName,
  placeholder
}) => {
  return (
    <div>
      <label
        className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
        htmlfor="grid-password"
      >
        {lable}
      </label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        className={
          "tw-border-[1px] tw-border-gray-500 tw-px-3 tw-py-3 placeholder-blueGray-300 text-blueGray-600 tw-bg-white tw-rounded tw-text-sm tw-shadow focus:tw-outline-none focus:tw-ring tw-w-full tw-ease-linear tw-transition-all tw-duration-150"
        }
        {...register(fieldName)}
      />
    </div>
  );
};

export default Input;
