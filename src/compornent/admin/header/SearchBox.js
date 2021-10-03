import React from 'react'
import {faSearch} from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const SearchBox = () => {
    return (
        <div className="tw-shadow tw-flex tw-ml-5">
        <input
          className="tw-w-full tw-rounded tw-p-2 tw-outline-none tw-border-none"
          type="text"
          placeholder="Tìm kiếm ..."
        />
        <button className="tw-bg-white tw-w-auto tw-flex tw-justify-end tw-items-center tw-text-blue-500 tw-p-2 hover:tw-text-blue-400">
          <FontAwesomeIcon  icon={faSearch}/>
        </button>
      </div>
    )
}
