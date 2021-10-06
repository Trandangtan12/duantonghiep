import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Chart from '../../../compornent/admin/chart'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionGetBuses } from "../../../redux/actions/buses";
const DashBoard = () => {
    const dispatch =  useDispatch()
  return (
    <div>
    <Chart />
    </div>
  );
};

export default DashBoard;
