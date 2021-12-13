import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { actionGetBuses, actionSearchBuses } from "../../redux/actions/buses";
import { getAllProvince } from "../../redux/actions/province";
import { isMobile } from 'mobile-device-detect';
import MobileComponent from "./MobileComponent";
import DesktopComponent from "./DesktopComponent";
const SearchCars = () => {
  // const TODAY = new Date()
  const [startPoint, setstartPoint] = useState('');
  // const [startDate, setStartDate] = useState(new Date());
  const [endPoint, setEndPoint] = useState('');
  const dispatch = useDispatch();
  const history = useHistory()
  const { city } = useSelector((state) => state.province);
  const provinceFilter = city.map((city) => {
    return {
      value: city.code,
      label: city.name,
    };
  });
  const handleChangeStartPoint = (original) => {
    setstartPoint(original.value);
  };
  // const handleChangeStartTime = (date) => {
  //   setStartDate(date);
  // };
  const handleChangeEndPoint = (original) => {
    setEndPoint(original.value);
  };
  const handleSearch = async () => {
    if (startPoint === '' || endPoint === '') {
      alertify.alert('Vui lòng chọn địa điểm').set({ title: "Thông báo" })
        .set("movable", false)
        .set("ok", "Alright!")
        .set("notifier", "position", "top-right");
      return
    }
    history.push(`/product/start=${startPoint}/and/end=${endPoint}`)
    if (startPoint == null || endPoint == null) {
    } else {
      dispatch(actionSearchBuses(startPoint, endPoint))
      history.push(`/product/start=${startPoint}/and/end=${endPoint}`)
    }
  }
  useEffect(() => {
    dispatch(actionGetBuses());
    dispatch(getAllProvince());
  }, []);
  return (
    <>
      {isMobile ?
        <MobileComponent handleSearch={handleSearch}
          // handleChangeStartTime={handleChangeStartTime}
          handleChangeStartPoint={handleChangeStartPoint}
          provinceFilter={provinceFilter}
          handleChangeEndPoint={handleChangeEndPoint}
          // TODAY={TODAY}
          // startDate={startDate}
        />
        :
        <DesktopComponent
          handleSearch={handleSearch}
          handleChangeStartPoint={handleChangeStartPoint}
          provinceFilter={provinceFilter}
          handleChangeEndPoint={handleChangeEndPoint}
        />}
    </>
  );
};

export default SearchCars;
