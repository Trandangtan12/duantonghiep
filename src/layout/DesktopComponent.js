import React from 'react'
import Footer from '../compornent/footer'
import Header from '../compornent/header'


const DesktopComponent = ({ children }) => {
    return (
        <div className="tw-flex tw-w-full tw-flex-col tw-h-screen">
            <Header />

            <div className="tw-flex tw-flex-grow">
                <div className="container tw-w-full tw-mx-auto tw-bg-[#f4f5f4]">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DesktopComponent
