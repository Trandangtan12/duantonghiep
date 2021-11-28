import React, { useEffect } from 'react'
import Select from 'react-select'
// import { selectErrorStyles, selectNormalStyles } from './utillity'
const customStyles = {
   
    control: (provided) => ({
      // none of react-select's styles are passed to <Control />
    //   width: 200,
    // ...provided,
    display: "flex",
    borderRadius: "8px",
    backgroundColor: "rgba(4, 120, 87, var(--tw-bg-opacity))"
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      const color = "white"
      return { ...provided, opacity, transition, color };
    },
    valueContainer: (provided) => ({
        ...provided,
        padding: "4.3px"
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        
    }),
    indicatorContainer: (provided) => ({
        ...provided,
        color: "white"
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "white"
    }),
    indicatorSeparator: () => ({
        display: "none"
    }),
    input: (provided) => ({
        ...provided,
        color: "white"
    })
  }
const SelectFormProduct = ({options , placeholder , className , onChange , errors , fieldName , required = false , register , defaultValues}) => {
    return (
        <>
         <Select styles={customStyles} className={className} options={options} placeholder={placeholder} onChange={onChange} value={defaultValues}  rules={{ required: required }}/>
        </>
    )
}

export default SelectFormProduct
