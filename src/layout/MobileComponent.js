import React from 'react'
import MenuMobileBottom from "../compornent/menuMobileBottom"

const MobileComponent = ({ children }) => {
    return (
        <>
            <MenuMobileBottom />
            <div className="container tw-w-full tw-mx-auto tw-bg-[#f4f5f4]">
                {children}
            </div>
        </>
    )
}

export default MobileComponent
