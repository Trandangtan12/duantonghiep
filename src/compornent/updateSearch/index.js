import React, { useEffect } from 'react'
import SelectForm from '../selectForm';
import { actionGetBuses } from "../../redux/actions/buses";
import { useDispatch, useSelector } from "react-redux";
import DatePickerProduct from '../datePicker/DatePickerProduct';

const UpdateSearch = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(actionGetBuses())
    }, []);
    return (
        <div className="tw-bg-green-500">
        <div className="formTrip tw-relative tw-z-20 tw-flex tw-items-center tw-w-3/4 tw-mx-auto">
       <div className="tw-flex tw-flex-grow tw tw-items-center tw-h-20 ">
       <div className="tw-w-full tw-mr-2">
           <p className="tw-text-white">Điểm đi</p>
           <SelectForm placeholder="Đi" /></div>
       <div className="tw-w-full tw-mr-2">
           <p className="tw-text-white">Điếm đến</p>
           <SelectForm placeholder="Đến" />
           </div>
       <div>
       <p className="tw-text-white ">Ngày đi</p>
           <DatePickerProduct /></div>
       </div>
       <button className="tw-flex tw-flex-col tw-justify-center tw-ml-2 tw-items-center tw-h-12 tw-text-red-800 
       tw-bg-white tw-text-xl tw-px-4 tw-font-bold tw-rounded-lg tw-shadow-lg tw-mt-4">
       Tìm kiếm
       </button>
     </div>
     </div>
    )
}

export default UpdateSearch
