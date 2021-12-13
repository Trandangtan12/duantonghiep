import React, { useState, useEffect } from "react";
import { actionGetBuses, actionSearchBuses, ACTION_SEARCH_BUSES } from "../../redux/actions/buses";
import { useDispatch, useSelector } from "react-redux";
import { getAllProvince } from "../../redux/actions/province";
import { useHistory, useParams } from "react-router";
import "react-datepicker/dist/react-datepicker.css";
import alertify from "alertifyjs";
import moment from "moment";
import { isMobile } from 'mobile-device-detect';
import MobileComponent from "./MobileComponent";
import DesktopComponent from "./DesktopComponent";

const UpdateSearch = (props) => {
  const { handleOpenFilterMobile} = props
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.province);
  const provinceFilter = city.map((city) => {
    return {
      value: city.code,
      label: city.name,
    };
  });

  const history = useHistory()
  const { start, end, date } = useParams();
  const provinceFilterStart = provinceFilter
    .filter((item) => item.value == start)
    .map((item) => item.label);
  const provinceFilterEnd = provinceFilter
    .filter((item) => item.value == end)
    .map((item) => item.label);
  const TODAY = new Date()
  const [startDate, setStartDate] = useState(new Date(date));
  const [startPoint, setstartPoint] = useState(start);
  const [endPoint, setEndPoint] = useState(end);
  const handleChangeStartPoint = (original) => {
    setstartPoint(original.value);
  };
  const handleChangeStartTime = (date) => {
    setStartDate(date);
  };
  const handleChangeEndPoint = (original) => {
    setEndPoint(original.value);
  };
  const handleSearch = async () => {

    // const date_active = moment(startDate).utc(true).format("YYYY-MM-DD")
    if (startPoint == null || endPoint == null) {
      alertify.alert('Vui lòng chọn địa điểm').set({ title: "Thông báo" })
        .set("movable", false)
        .set("ok", "Alright!")
        .set("notifier", "position", "top-right");
      return
    } else {
      dispatch(actionSearchBuses(startPoint, endPoint))
      history.push(`/product/start=${startPoint}/and/end=${endPoint}`)
    }
  }

  useEffect(() => {
    dispatch(getAllProvince());
    dispatch(actionGetBuses());
  }, []);
  return (
    <div className="tw-bg-green-500">
      <>{isMobile ? <MobileComponent
        provinceFilterStart={provinceFilterStart}
        provinceFilter={provinceFilter}
        handleChangeStartPoint={handleChangeStartPoint}
        provinceFilterEnd={provinceFilterEnd}
        provinceFilter={provinceFilter}
        handleChangeEndPoint={handleChangeEndPoint}
        handleChangeStartTime={handleChangeStartTime}
        startDate={startDate}
        TODAY={TODAY}
        handleSearch={handleSearch}
        handleOpenFilterMobile={handleOpenFilterMobile}
      /> :
        <DesktopComponent
          provinceFilterStart={provinceFilterStart}
          provinceFilter={provinceFilter}
          handleChangeStartPoint={handleChangeStartPoint}
          provinceFilterEnd={provinceFilterEnd}
          provinceFilter={provinceFilter}
          handleChangeEndPoint={handleChangeEndPoint}
          handleChangeStartTime={handleChangeStartTime}
          handleSearch={handleSearch}
          startDate={startDate}
          TODAY={TODAY}
        />}</>

    </div>
  );
};

export default UpdateSearch;
