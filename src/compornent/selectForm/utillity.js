export let selectErrorStyles = {
    control: (provided, state) => ({
        ...provided,
        borderColor: state.isFocused ? "#51912D !important" : "#ea5455 !important",
    }),
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            color: "#5f5f5f",
            fontSize: "0.96rem",
            opacity: "0.5"
        };
    }
  }
  
  export let selectNormalStyles = {
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            color: "#5f5f5f",
            fontSize: "0.96rem",
            opacity: "0.5"
        };
    }
  }
  
  
  
  export let selectStyled = {
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            color: "#D4D5D6",
            fontSize: "0.85rem",
            opacity: "1"
        };
    }
  }
  