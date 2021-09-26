import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProvince } from "../../../redux/actions/province";
import { ProvinceService } from "../../../service/provinceService";

const HomePages = () => {
  const dispatch = useDispatch();
  const {province} = useSelector(state => state.province)
  console.log(province);
  useEffect(() => {
    dispatch(getAllProvince());
  }, []);
  return <div>trang chur</div>;
};

export default HomePages;
