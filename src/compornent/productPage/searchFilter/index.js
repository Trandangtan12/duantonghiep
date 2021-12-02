import React, { useEffect, useState } from 'react'
import InpRange from '../InpRange'

const SearchFilter = (props) => {
    const { timeNight, timeMoning, timeLunch, timeAfternoon, districtStart, districtEnd, onChangeFilterCheckBox } = props
    return (
        <div className="tw-mr-4  tw-rounded-lg tw-h-[max-content] tw-w-[16rem] tw-sticky 
        tw-top-[0.5rem] tw-flex-none tw-bg-white">
            <div className="tw-flex tw-justify-between tw-items-end tw-border-b-2 tw-border-gray-200 tw-p-3">
                <span className="tw-font-bold tw-uppercase">Bộ lọc tìm kiếm</span>
                <span onClick={() => props.onRemoveChange()} className="tw-text-sm tw-text-green-500 tw-cursor-pointer">Xóa lọc</span>
            </div>

            <div className="tw-p-3">
                <h3 className="tw-font-semibold">Giờ đi</h3>
                <div className="tw-flex tw-flex-wrap tw-justify-between tw-py-4 tw-text-sm">
                    <button type="button" onClick={() => (timeMoning.length == 0 ? "" : props.handleCheckedMoning())} className={`tw-flex tw-flex-col tw-items-center tw-p-2 tw-my-1 tw-w-28 
                    ${timeMoning.length == 0 ? "tw-text-gray-400 tw-cursor-not-allowed" : ""} tw-border-2  
                    tw-transition tw-duration-400 tw-ease-in-out tw-rounded-md 
                    ${props.checkedMoning ? "tw-border-green-500" : "tw-border-gray-200 "}`}>
                        <span>Sáng sớm ({timeMoning.length})</span>
                        <span>00:00 - 06:00</span>
                    </button>
                    <button type="button" onClick={() => (timeLunch.length == 0 ? "" : props.handleCheckedLunch())} className={`tw-flex tw-flex-col tw-items-center tw-p-2 tw-my-1 tw-w-28 
                    ${timeLunch.length == 0 ? "tw-text-gray-400 tw-cursor-not-allowed" : ""} tw-border-2  
                    tw-transition tw-duration-400 tw-ease-in-out tw-rounded-md 
                    ${props.checkedLunch ? "tw-border-green-500 " : "tw-border-gray-200"}`}>
                        <span>Buổi sáng ({timeLunch.length})</span>
                        <span>06:01 - 12:00</span>
                    </button>
                    <button type="button" onClick={() => (timeAfternoon.length == 0 ? "" : props.handleCheckedAfternoon())} className={`tw-flex tw-flex-col tw-items-center tw-p-2 tw-w-28 
                    ${timeAfternoon.length == 0 ? "tw-text-gray-400 tw-cursor-not-allowed" : ""} tw-my-1 tw-border-2 
                    tw-transition tw-duration-400 tw-ease-in-out tw-rounded-md 
                    ${props.checkedAfternoon ? "tw-border-green-500" : "tw-border-gray-200"}`}>
                        <span>Buổi chiều ({timeAfternoon.length})</span>
                        <span>12:01 - 18:00</span>
                    </button>
                    <button type="button" onClick={() => (timeNight.length == 0 ? "" : props.handleCheckedNigth())} className={`tw-flex tw-flex-col tw-items-center tw-p-2 tw-my-1 tw-w-28 
                    ${timeNight.length == 0 ? "tw-text-gray-400 tw-cursor-not-allowed" : ""} tw-border-2 
                    tw-transition tw-duration-400 tw-ease-in-out tw-rounded-md 
                    ${props.checkedNigth ? "tw-border-green-500" : "tw-border-gray-200"}`}>
                        <span>Buổi tối ({timeNight.length})</span>
                        <span>18:01 - 23:59</span>
                    </button>
                </div>
            </div>


            <div className="tw-p-3">
                <h3 className="tw-mb-5 tw-font-semibold">Giá vé</h3>
                <div className="tw-px-3">
                    <InpRange {...props} />
                </div>
            </div>

            <div className="tw-p-3">
                <h3 className="tw-font-semibold">Số ghế trống</h3>
                <div className="tw-py-4">
                    <button type="button" className="tw-cursor-pointer tw-px-4 tw-py-1 tw-border tw-border-gray-300" onClick={() => props.onDecreateQty()}>-</button>
                    <button type="button" className="tw-cursor-default tw-px-4 tw-py-1 tw-border tw-border-gray-300">{props.qtyFilter}</button>
                    <button type="button" className="tw-cursor-pointer tw-px-4 tw-py-1 tw-border tw-border-gray-300" onClick={() => props.onIncreateQty()}>+</button>
                </div>
            </div>


            <div className="tw-p-3">
                <h3 className="tw-font-semibold">Điểm đi</h3>
                <div className="tw-my-4 tw-h-60 tw-overflow-auto">
                    <ul>
                        {districtStart.map(item =>
                            <li className="tw-py-1">
                                <input onClick={() => onChangeFilterCheckBox(item.value)} type="checkbox" name="" className="tw-mr-1" id={item.value} />
                                <label htmlFor={item.value}>{item.label}</label>
                            </li>
                        )}
                    </ul>

                </div>
            </div>

            <div className="tw-p-3">
                <h3 className="tw-font-semibold">Điểm điến</h3>
                <div className="tw-my-4 tw-h-60 tw-overflow-auto">
                    <ul>

                        {districtEnd.map(item =>
                            <li className="tw-py-1">
                                <input type="checkbox" name="" className="tw-mr-1" id={item.value} />
                                <label htmlFor={item.value}>{item.label}</label>
                            </li>
                        )}
                    </ul>


                </div>
            </div>

        </div>
    )
}

export default SearchFilter
