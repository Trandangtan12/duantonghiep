import React from 'react'
import Select from 'react-select'
const SelectForm = ({options , placeholder , className , onChange , errors , fieldName , required = false , register , defaultValues}) => {
    return (
        <>
         <Select options={options} placeholder={placeholder} onChange={onChange} value={defaultValues} className={`${className} tw-border-[1px] tw-rounded-[6px] tw-border-green-600` } rules={{ required: required }}/>
        </>
    )
}

export default SelectForm
