import React from 'react'
import Select from 'react-select'
const SelectForm = ({options , placeholder , className , onChange , errors , fieldName , required = false , register , defaultValues}) => {
    return (
        <>
         <Select options={options} placeholder={placeholder} onChange={onChange} value={defaultValues} className={`${className} tw-border-[1px] tw-rounded-md tw-border-green-600` } rules={{ required: required }}/>
         {/* <span>
             {
                errors[fieldName] && errors[fieldName] !== undefined ? (
                    <span className="tw-text-red-500">
                        Vui lòng không để trống
                    </span>
                ): null
             } 
         </span> */}
        </>
       
    )
}

export default SelectForm
