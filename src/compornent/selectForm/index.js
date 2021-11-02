import React from 'react'
import Select from 'react-select'
const SelectForm = ({options , placeholder , className , onChange}) => {
    return (
        <Select options={options} placeholder={placeholder} onChange={onChange} className={className}/>
    )
}

export default SelectForm
