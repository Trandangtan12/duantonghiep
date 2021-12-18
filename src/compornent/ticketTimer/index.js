import { faDownload, faLongArrowAltDown } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { BusesService } from "../../service/productService";
import { isMobile } from 'mobile-device-detect';
import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';
const TicketTimer = () => {
    const localTicket = () => {
        if (typeof window === undefined) {
            return false
        }
        if (localStorage.getItem("ticketLocal")) {
            return JSON.parse(localStorage.getItem("ticketLocal"))
        } else {
            return false
        }

    }
    const { pathname } = useLocation();
    const [timeTicket, setTimeTicket] = useState(false)
    const ticket = JSON.parse(localStorage.getItem('ticketDetail'))
    const cancelTimeCountdown = async () => {
        const question = window.confirm("Bạn chắc chắn muốn hủy vé?")
        if (question) {
            setTimeTicket(false)
            localStorage.removeItem("ticketLocal")
            try {
                await BusesService.rejectTicket(ticket?.id)
            } catch (error) {
                console.log(error);
            }
        } else {
            setTimeTicket(true)
        }

    }
    useEffect(() => {
        localTicket() && setTimeTicket(true)
    }, [pathname])
    return (
        <>
            {isMobile ? <MobileComponent
                timeTicket={timeTicket}
                pathname={pathname}
                localTicket={localTicket}
                cancelTimeCountdown={cancelTimeCountdown}
            /> : <DesktopComponent
                timeTicket={timeTicket}
                pathname={pathname}
                localTicket={localTicket}
                cancelTimeCountdown={cancelTimeCountdown}
            />}


        </>
    )
}

export default TicketTimer
