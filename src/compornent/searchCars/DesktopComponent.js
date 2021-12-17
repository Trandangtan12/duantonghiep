import { faArrowCircleLeft, faArrowLeft, faArrowRight } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className="tw-bg-white tw-w-full  tw-p-6 tw-rounded-lg">
            <div className="formTiket tw-relative">
                <div className="formTrip tw-flex tw-items-center">
                    <div className="tw-w-full">
                        <p className=" tw-text-gray-400">Điểm đi </p>
                        <SelectFormHome
                            placeholder="Chọn điểm xuất phát"
                            className="tw-text-black tw-font-bold tw-cursor-text"
                            options={provinceFilter}
                            onChange={handleChangeStartPoint}
                            fieldName="startPointId"
                        />
                    </div>
                    <div className="tw-w-full tw-mx-5">
                        <p className=" tw-text-gray-400">Điểm đến </p>
                        <SelectFormHome
                            placeholder="Chọn điểm kết thúc"
                            className="tw-text-black tw-font-bold tw-cursor-text"
                            options={provinceFilter}
                            onChange={handleChangeEndPoint}
                            fieldName="endPointId"
                        />
                    </div>
                    <div>
                        <button
                            onClick={handleSearch}
                            className="tw-justify-center tw-ml-2 tw-items-center tw-h-16 tw-bg-red-800 
        tw-text-white tw-text-xl tw-w-40 tw-font-bold tw-shadow-lg tw-rounded-lg"
                        >
                            Tìm xe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopComponent
