import React, {useState} from 'react'

const SearchFilter = () => {
    return (
        <div className="tw-mr-4  tw-rounded-lg tw-p-3 tw-h-[max-content] tw-w-[17.813rem] tw-sticky tw-top-0 tw-flex-none tw-bg-white">
            <div className="tw-flex tw-justify-between tw-items-end">
                <span>Bộ lọc tìm kiếm</span>
                <span className="tw-text-sm tw-text-green-500">Xóa lọc</span>
            </div>
            <div>
            <input type="range" min="0" max="100" id="" step="5"/>
            </div>
            
        </div>
    )
}

export default SearchFilter
