import { faUpload } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const UploadFile = ({label , onChange , type  = "file" , multiple = false ,className}) => {
    return (
        <label class={`tw-w-64 tw-flex tw-flex-col tw-items-center tw-py-2 tw-bg-white tw-rounded-md tw-shadow-md tw-tracking-wide tw-uppercase tw-border tw-border-blue tw-cursor-pointer hover:tw-bg-purple-600 hover:tw-text-white tw-text-purple-600 tw-ease-linear tw-transition-all tw-duration-150  ${className}`}>
        <FontAwesomeIcon icon={faUpload} />
        <span class="tw-mt-2 tw-text-[13px] tw-leading-normal">
          {label}
        </span>
        <input
          type={type}
          id="photo-upload"
          onChange={onChange}
          className="tw-hidden"
          multiple={multiple}
        />
      </label>
    )
}

export default UploadFile
