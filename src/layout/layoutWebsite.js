import React from 'react'

const LayoutWebsite = ({children}) => {
    return (
        <div className="container tw-w-full md:tw-max-w-full tw-mx-auto tw-p-3">
            {children}
        </div>
    )
}

export default LayoutWebsite
