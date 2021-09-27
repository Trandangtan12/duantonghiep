import React from 'react'

const LayoutWebsite = ({children}) => {
    return (
        <div className="container tw-w-full md:tw-max-w-full tw-mx-auto">
            {children}
        </div>
    )
}

export default LayoutWebsite
