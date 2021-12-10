import React from 'react'
import Select from 'react-select'
import { selectErrorStyles, selectNormalStyles, selectStyled } from './utillity'
const SelectForm = ({options , placeholder , className , onChange , errors , fieldName , required = false , defaultValues ,  isMulti }) => {
    return (
        <>
         <Select  isMulti={isMulti} options={options} placeholder={placeholder} onChange={onChange} value={defaultValues}  className={`${className} tw-border-[1px] tw-rounded-[6px] tw-border-none focus:tw-border-green-600 active::tw-border-green-600  focus:tw-ring-0` } rules={{ required: required }} styles={ errors !== undefined && fieldName !== undefined  ? errors[fieldName] ? selectErrorStyles : selectNormalStyles : selectStyled}/>
         {/* <span className="tw-text-red-500">
            {
                errors[fieldName] !== undefined && fieldName !== undefined ? errors[fieldName].message : null
            }
         </span> */}
        </>
    )
}

export default SelectForm
