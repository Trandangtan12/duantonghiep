import React from 'react'
import DatePicker from "react-datepicker";
import SelectFormHome from "../selectForm/selectFormHome";

const DesktopComponent = (props) => {
    const { handleSearch,
        handleChangeEndPoint,
        handleChangeStartPoint,
        provinceFilter,
         } = props
    return (
        <div className="tw-bg-white tw-w-full tw-p-5 tw-h-[15rem] tw-rounded-lg tw-shadow-lg tw-mr-5">
            <div className="formTiket tw-relative">
                <div className="formTrip tw-flex tw-flex-col">
                    <div className="tw-flex tw-flex-col ">
                        <div className="tw-w-full tw-py-2">
                            <p className="tw-mb-1 tw-text-gray-400">Điểm đi </p>
                            <SelectFormHome
                                placeholder="Chọn điểm xuất phát"
                                className="tw-text-black tw-font-bold tw-cursor-text"
                                options={provinceFilter}
                                onChange={handleChangeStartPoint}
                                fieldName="startPointId"
                            />
                        </div>
                        <div className="tw-w-full tw-py-2">
                            <p className="tw-mb-2 tw-text-gray-400">Điểm đến </p>
                            <SelectFormHome
                                placeholder="Chọn điểm kết thúc"
                                className="tw-text-black tw-font-bold tw-cursor-text"
                                options={provinceFilter}
                                onChange={handleChangeEndPoint}
                                fieldName="endPointId"
                            />
                        </div>
                       
                    </div>
                    <button
                        onClick={handleSearch}
                        className="tw-flex tw-flex-col tw-justify-center tw-ml-2 tw-items-center tw-h-16 tw-bg-red-800 
        tw-text-white tw-text-xl tw-w-40 tw-font-bold tw-shadow-lg tw-absolute tw-translate-x-[-50%] 
        tw-translate-y-[-50%] tw-bottom-[-8rem] tw-left-[50%] tw-rounded-full"
                    >
                        Tìm xe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DesktopComponent
