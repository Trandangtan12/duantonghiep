import React from 'react'
import Select from 'react-select'
import { selectErrorStyles, selectNormalStyles } from './utillity'
const SelectForm = ({options , placeholder , className , onChange , errors , fieldName}) => {
    return (
        <Select options={options} placeholder={placeholder} onChange={onChange} className={className}/>
    )
}

export default SelectForm
