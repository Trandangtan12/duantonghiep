import React, {useState} from 'react'
import InpRange from '../InpRange'

const SearchFilter = () => {
    return (
        <div className="tw-mr-4  tw-rounded-lg tw-p-3 tw-h-[max-content] tw-w-[17.813rem] tw-sticky 
        tw-top-[0.5rem] tw-flex-none tw-bg-white">
            <div className="tw-flex tw-justify-between tw-items-end">
                <span>Bộ lọc tìm kiếm</span>
                <span className="tw-text-sm tw-text-green-500">Xóa lọc</span>
            </div>
            <div className="tw-h-24 tw-p-1">
                <h3 className="tw-mb-5 tw-font-bold">Giá vé</h3>
                <div className="tw-px-3">
            <InpRange/>
            </div>
            </div>
            
        </div>
    )
}

export default SearchFilter