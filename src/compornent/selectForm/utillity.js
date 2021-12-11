export let selectErrorStyles = {
  control: (provided, state) => ({
    ...provided,
    borderWidth: "1px",
    borderColor: state.isFocused ? "#51912D !important" : "#ea5455 !important",
    height: 50,
    minHeight: 50
  
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#5f5f5f",
      fontSize: "0.96rem",
      opacity: "1",
      height: "40px",
      lineHeight: "40px",
    };
  },
};
export let selectNormalStyles = {
    control: base => ({
        ...base,
        height: 50,
        minHeight: 50
     }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#D4D5D6",
      fontSize: "0.96rem",
      opacity: "1",
      height: "40px",
      lineHeight: "40px",
    };
  },
};

export let selectStyled = {
    control: base => ({
        ...base,
        height: 50,
        minHeight: 50
     }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#D4D5D6",
      fontSize: "0.85rem",
      opacity: "1",
      height: "40px",
      lineHeight: "40px",
    };
  },
};
