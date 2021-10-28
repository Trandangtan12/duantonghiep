import React from "react";

const Input = ({ type, onChange, className, id, register, fieldName }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        onChange={onChange}
        className={
          "tw-border-[1px] tw-border-gray-500 tw-px-3 tw-py-3 placeholder-blueGray-300 text-blueGray-600 tw-bg-white tw-rounded tw-text-sm tw-shadow focus:tw-outline-none focus:tw-ring tw-w-full tw-ease-linear tw-transition-all tw-duration-150"
        }
        {...register(fieldName)}
      />
    </div>
  );
};

export default Input;
