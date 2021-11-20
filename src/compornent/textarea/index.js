import React from 'react'

const TextArea = ({title , placeholder , register , fieldName}) => {
    return (
        <div className="tw-flex tw-flex-wrap">
        <div className="tw-w-full lg:tw-w-12/12 tw-px-4">
          <div className="tw-relative tw-w-full tw-mb-3">
            <label
              className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
              htmlfor="grid-password"
            >
              {title}
            </label>
            <textarea
              type="text"
              className="tw-border-[1px] tw-border-gray-600 tw-px-3 tw-py-3 placeholder-blueGray-300 text-blueGray-600 tw-bg-white tw-rounded tw-text-sm tw-shadow focus:tw-outline-none focus:tw-ring tw-w-full tw-ease-linear tw-transition-all tw-duration-150"
              rows={4}
              placeholder={placeholder}
              {...register(fieldName)}
              
            />
          </div>
        </div>
      </div>
    )
}

export default TextArea
