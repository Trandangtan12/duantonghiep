import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import SelectFormProduct from "../selectForm/selectFormProduct";
import {
    faArrowLeft,
    faCircle, faDotCircle, faFilter, faSearch, faStar
} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const MobileComponent = (props) => {
    const { provinceFilterStart, provinceFilter, handleChangeStartPoint, provinceFilterEnd,
        handleChangeEndPoint, startDate, handleChangeStartTime, handleSearch, TODAY, handleOpenFilterMobile
         } = props
    const [hidden, setHidden] = useState(false);
    return (
        <div >
            <div className="formTrip tw-relative tw-z-20 tw-items-center 
            tw-w-full tw-px-4 tw-py-2">
                <div className="tw-flex tw-py-2 tw-justify-between tw-items-center">
                    <div className='tw-flex tw-items-center'>
                    <div className='tw-pr-4'>
                        <Link to="/"><FontAwesomeIcon className='tw-text-white' icon={faArrowLeft} /></Link>
                    </div>
                    <h2 className='tw-text-white tw-bg-green-700 tw-py-1 tw-px-2 tw-rounded-lg' onClick={() => setHidden(!hidden)}>
                         <FontAwesomeIcon className='tw-text-white' icon={faSearch} /> Chọn điểm khác
                    </h2>
                   
                    </div>
                    <h2 onClick={() => handleOpenFilterMobile()} className='tw-text-white tw-bg-green-700 tw-py-1 tw-px-2 tw-rounded-lg'>
                        Lọc <FontAwesomeIcon className='tw-text-white' icon={faFilter} />
                    </h2>
                </div>
               
                <div className={`tw-flex tw-flex-col ${hidden ? "tw-block" : "tw-hidden"}`}>
                    <div className="tw-w-full">
                        <p className="tw-text-white">Điểm đi</p>
                        <SelectFormProduct
                            placeholder={provinceFilterStart}
                            className="tw-text-black tw-cursor-text"
                            options={provinceFilter}
                            onChange={handleChangeStartPoint}
                        // fieldName="startPointId"
                        />
                    </div>
                    <div className="tw-w-full">
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
                        <DatePicker className="tw-p-2 tw-w-full tw-rounded-lg tw-bg-green-700 tw-text-white" selected={startDate}
                            onChange={handleChangeStartTime} dateFormat="dd/MM/yyyy" minDate={TODAY} />
                    </div>
                    <div>
                        <button onClick={handleSearch}
                            className="tw-flex tw-flex-col tw-justify-center tw-items-center 
                            tw-h-12 tw-text-red-800 tw-bg-white tw-text-xl tw-px-4 tw-font-bold 
                            tw-rounded-lg tw-shadow-lg tw-mt-4"
                        >
                            Tìm kiếm
                        </button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default MobileComponent
