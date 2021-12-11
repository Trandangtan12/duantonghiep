import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetTicket, actionSearchTicket } from '../../../redux/actions/buses'
import { isMobile } from 'mobile-device-detect';
import MobileComponent from "./MobileComponent";
import DesktopComponent from "./DesktopComponent"

const TicketSearch = () => {
    const [addSearch, setAddSearch] = useState("")
    const { availableSearchTicket } = useSelector(state => state.buses)
    const dispatch = useDispatch()
    const handleSearch = (data) => {
        if (data === "") {
            return alert("bạn chưa nhập dữ liệu!")
        } else {
            dispatch(actionSearchTicket(data))
        }

    }
    return (
        <>
            {isMobile ? <MobileComponent setAddSearch={setAddSearch}
                addSearch={addSearch}
                availableSearchTicket={availableSearchTicket}
                handleSearch={handleSearch} /> : <DesktopComponent
                setAddSearch={setAddSearch}
                addSearch={addSearch}
                availableSearchTicket={availableSearchTicket}
                handleSearch={handleSearch}
            />}
        </>
    )
}

export default TicketSearch
