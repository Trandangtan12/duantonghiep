import React from 'react'
import TabList from "./tabList";
import { Link } from "react-router-dom";



const DesktopComponent = (props) => {
    const {isLogged} = props
    return (
        <div className="tw-w-3/4 tw-mx-auto tw-my-4 tw-mb-3">
            {isLogged ? <div className="tw-flex ">
                <div className="tw-flex-grow"> <TabList {...props} /></div>
            </div> : <div> Hãy <Link to="/signin" className="tw-text-green-600">Đăng nhập</Link> để đặt vé!</div>}
        </div>
    )
}

export default DesktopComponent
