import React, { useEffect } from 'react'
import Select from 'react-select'
import { selectErrorStyles, selectNormalStyles } from './utillity'
const SelectForm = ({options , placeholder , className , onChange , errors , fieldName , required = false , defaultValues ,  isMulti }) => {
    return (
        <>
         <Select isMulti={isMulti} options={options} placeholder={placeholder} onChange={onChange} value={defaultValues}  className={`${className} tw-border-[1px] tw-rounded-[6px] tw-border-none focus:tw-border-green-600 active::tw-border-green-600  focus:tw-ring-0` } rules={{ required: required }} styles={errors !== undefined ? errors[fieldName] ? selectErrorStyles : selectNormalStyles : ""}/>
         <span className="tw-text-red-500">
            {
                errors[fieldName] ? errors[fieldName].message : null
            }
         </span>
        </>
    )
}

export default SelectForm
