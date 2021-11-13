import React from 'react'
import Select from 'react-select'
const SelectForm = ({options , placeholder , className , onChange , errors , fieldName}) => {
    return (
        <Select options={options} placeholder={placeholder} onChange={onChange} className={`${className} tw-border-[1px] tw-rounded-md tw-border-green-600` }/>
    )
}

export default SelectForm
