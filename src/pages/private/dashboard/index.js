import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionGetBuses } from "../../../redux/actions/buses";
const DashBoard = () => {
    const dispatch =  useDispatch()
    const {availableBuses} = useSelector(state => state.buses)
    useEffect(() => {
      dispatch(actionGetBuses())
    }, []);
  return (
    <div>
    {availableBuses.map((image)=>(
        <LazyLoadImage
        alt={"lazy load image"}
        height={"50px"}
        effect="opacity"
        src={
            image.image
        } // use normal <img> attributes as props
        width={"50px"}
      />
    ))}
    
      
    </div>
  );
};

export default DashBoard;
