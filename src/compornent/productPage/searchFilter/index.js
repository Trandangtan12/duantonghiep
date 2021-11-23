import React, { useState } from 'react'
import InpRange from '../InpRange'

const SearchFilter = (props) => {

    return (
        <div className="tw-mr-4  tw-rounded-lg tw-h-[max-content] tw-w-[17.813rem] tw-sticky 
        tw-top-[0.5rem] tw-flex-none tw-bg-white">
            <div className="tw-flex tw-justify-between tw-items-end tw-border-b-2 tw-border-gray-200 tw-p-3">
                <span className="tw-font-bold tw-uppercase">Bộ lọc tìm kiếm</span>
                <span onClick={() => props.onRemoveChange()} className="tw-text-sm tw-text-green-500 tw-cursor-pointer">Xóa lọc</span>
            </div>
            <div className="tw-p-3">
                <h3 className="tw-mb-5">Giá vé</h3>
                <div className="tw-px-3">
                    <InpRange {...props} />
                </div>
            </div>

            <div className="tw-p-3">
                <h3>Số ghế trống</h3>
                <div className="tw-py-4">
                    <button type="button" className="tw-cursor-pointer tw-px-4 tw-py-1 tw-border tw-border-gray-300" onClick={() => props.onDecreateQty()}>-</button>
                    <button type="button" className="tw-cursor-default tw-px-4 tw-py-1 tw-border tw-border-gray-300">{props.qtyFilter}</button>
                    <button type="button" className="tw-cursor-pointer tw-px-4 tw-py-1 tw-border tw-border-gray-300" onClick={() => props.onIncreateQty()}>+</button>
                </div>
            </div>

        </div>
    )
}

export default SearchFilter
