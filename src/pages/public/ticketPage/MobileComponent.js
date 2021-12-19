import React from 'react'
import TabList from "./tabList";
import { Link } from "react-router-dom";
const MobileComponent = (props) => {
    const {isLogged} = props
    return (
        <div className="tw-w-full">
            {isLogged ? <div className="tw-flex ">
                <div className="tw-flex-grow"> <TabList {...props} /></div>
            </div> : <div> Hãy <Link to="/signin" className="tw-text-green-600">Đăng nhập</Link> để đặt vé!</div>}
        </div>
    )
}

export default MobileComponent
