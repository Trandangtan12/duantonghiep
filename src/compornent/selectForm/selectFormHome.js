import React from 'react'
import Select from 'react-select'
const customStyles = {
   
    control: () => ({
      // none of react-select's styles are passed to <Control />
    //   width: 200,
    display: "flex",
    borderBottom: "2px solid rgba(243, 244, 246, var(--tw-bg-opacity))",
    background: "white",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    },
    valueContainer: (provided) => ({
        ...provided,
        padding: "0px",
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        display: "none"
    })
  }
const SelectFormHome = ({options , placeholder , className , onChange , errors , fieldName , required = false , register , defaultValues}) => {
    return (
        <>
         <Select styles={customStyles} className={className} options={options} placeholder={placeholder} onChange={onChange} value={defaultValues}  rules={{ required: required }}/>
        </>
    )
}

export default SelectFormHome
