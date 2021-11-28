import React, { useState } from 'react'

const InputNumber = ({
    lable,
    onChange,
    id,
    register,
    fieldName,
    placeholder,
    errors,
    required,
    defaultValues
}) => {
    const [valueConvert, setValueConvert] = useState('');
    return (
        <div>
        <label
          className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
          htmlfor="grid-password"
        >
          {lable}
        </label>
        <input
          type={'number'}
          id={id}
          onChange={(e)=> {
              const initialValues = e.target.value 
              setValueConvert(initialValues.toLocaleString().split(/(?=(?:\d{3})+$)/).join(","))
              console.log(initialValues.toLocaleString().split(/(?=(?:\d{3})+$)/).join(","))
          }}
        //   defaultValue={defaultValues}
        //   placeholder={placeholder}
          value={valueConvert}
          className={`tw-border-[0.5px] tw-border-gray-300 tw-px-3 tw-py-3 placeholder-blueGray-300 text-blueGray-600 tw-bg-white tw-rounded tw-text-sm tw-shadow focus:tw-outline-none focus:tw-border-green-600 focus:tw-border-[1px] tw-w-full tw-ease-linear tw-transition-all tw-duration-15 tw-outline-none `}
        //   {...register(fieldName, { required: required })}
        />
        {/* <span className="tw-text-red-600">
          {errors !== undefined && errors[fieldName] && errors[fieldName].message}
        </span> */}
      </div>
    )
}

export default InputNumber
