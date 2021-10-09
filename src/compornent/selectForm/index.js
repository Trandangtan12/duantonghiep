import React from 'react'
import Select from 'react-select'
const SelectForm = ({options , placeholder , className}) => {
    return (
        <Select options={options} placeholder={placeholder} className={className}/>
    )
}

export default SelectForm
