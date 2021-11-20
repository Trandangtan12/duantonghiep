import React from 'react'
import Select from 'react-select'
import { selectErrorStyles, selectNormalStyles } from './utillity'
const SelectForm = ({options , placeholder , className , onChange , errors , fieldName , required = false , register , defaultValues}) => {
    return (
        <>
         <Select options={options} placeholder={placeholder} onChange={onChange} value={defaultValues} className={`${className} tw-border-[1px] tw-rounded-[6px] tw-border-gray-500 focus:tw-border-green-600 focus:tw-ring-0` } rules={{ required: required }}/>
        </>
    )
}

export default SelectForm
