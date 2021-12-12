import React from 'react'
import DatePicker from "react-datepicker";
import SelectFormProduct from "../selectForm/selectFormProduct";

const DesktopComponent = (props) => {
    const {provinceFilterStart,provinceFilter,handleChangeStartPoint,provinceFilterEnd,
        handleChangeEndPoint,startDate,handleChangeStartTime,handleSearch,TODAY} = props
    return (
        <div className="formTrip tw-relative tw-z-20 tw-flex tw-items-center tw-w-3/4 tw-mx-auto">
            <div className="tw-flex tw-flex-grow tw tw-items-center tw-h-20 ">
                <div className="tw-w-full tw-mr-2">
                    <p className="tw-text-white">Điểm đi</p>
                    <SelectFormProduct
                        placeholder={provinceFilterStart}
                        className="tw-text-black tw-cursor-text"
                        options={provinceFilter}
                        onChange={handleChangeStartPoint}
                    // fieldName="startPointId"
                    />
                </div>
                <div className="tw-w-full tw-mr-2">
                    <p className="tw-text-white">Điếm đến</p>
                    <SelectFormProduct
                        placeholder={provinceFilterEnd}
                        className="tw-text-black tw-cursor-text"
                        options={provinceFilter}
                        onChange={handleChangeEndPoint}
                    // fieldName="startPointId"
                    />
                </div>
                <div>
                    <p className="tw-text-white ">Ngày đi</p>
                    <DatePicker className="tw-p-2 tw-rounded-lg tw-bg-green-700 tw-text-white" selected={startDate}
                        onChange={handleChangeStartTime} dateFormat="dd/MM/yyyy" minDate={TODAY} />
                </div>
            </div>
            <button onClick={handleSearch}
                className="tw-flex tw-flex-col tw-justify-center tw-ml-2 tw-items-center tw-h-12 tw-text-red-800 
       tw-bg-white tw-text-xl tw-px-4 tw-font-bold tw-rounded-lg tw-shadow-lg tw-mt-4"
            >
                Tìm kiếm
            </button>
        </div>
    )
}

export default DesktopComponent
