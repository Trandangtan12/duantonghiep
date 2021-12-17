import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown';
import { useLocation } from 'react-router-dom';
import { BusesService } from "../../service/productService";
const TicketTimer = () => {
    const localTicket = JSON.parse(localStorage.getItem("ticketLocal"))
    const { pathname } = useLocation();
    const checkLocal = window.localStorage.hasOwnProperty("ticketLocal")
    const [timeTicket, setTimeTicket] = useState(false)
    const ticket = JSON.parse(localStorage.getItem('ticket'))
    console.log(ticket);
    const Completionist = () => <></>
    const cancelTimeCountdown = async () => {
        setTimeTicket(false)
        localStorage.removeItem("ticketLocal")
        try {
            await BusesService.rejectTicket(ticket.id)
        } catch (error) {
            console.log(error);
        }
    }
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            setTimeTicket(false)
            localStorage.removeItem("ticketLocal")
            try {
                BusesService.rejectTicket(ticket.id)
            } catch (error) {
                console.log(error);
            }
            return <Completionist />;
        } else {
            return <>
                <div className='tw-flex'>
                    <div className='tw-bg-white tw-p-4 tw-my-auto tw-text-center tw-rounded-lg tw-shadow-xl'>
                        <p className='tw-text-2xl tw-font-black'>{localTicket?.startTime}</p>
                        <p className='tw-text-xs tw-text-gray-500'>{localTicket?.dateStart}</p>
                        <p className='tw-text-xs tw-text-gray-500'>{localTicket?.quantity} vé</p>
                    </div>
                    <div className='tw-bg-white tw-relative tw-p-4 tw-rounded-lg tw-ml-1 tw-shadow-xl'>
                        <div className='tw-absolute tw-right-[0.5rem] tw-top-[0.1rem]'>
                            <button onClick={cancelTimeCountdown}>x</button>
                        </div>
                        <div className=''>
                            <p className='tw-font-black'>{localTicket?.form}</p>
                            <p className='tw-font-black'>{localTicket?.to}</p>
                            <p className='tw-text-xs tw-text-red-500'>
                                Còn {minutes} phút {seconds} giây để giữ vé</p>
                        </div>

                    </div>
                </div>
                <p className='tw-rounded-lg tw-shadow-xl tw-text-xs tw-text-gray-400 tw-my-2 tw-py-2 tw-ml-1 tw-px-1 tw-bg-white'>
                    Gọi số 19001009 để giữ vé hoặc thanh toán qua VPN</p>
            </>
        }
    };

    useEffect(() => {
        checkLocal && setTimeTicket(true)
    }, [pathname])
    return (
        <>
            {timeTicket ? <div className='tw-fixed tw-z-20 tw-bottom-[7rem] tw-right-0 tw-rounded-lg'>
                <Countdown
                    date={Date.now() + 900000}
                    renderer={renderer}
                    autoStart={true}
                />
            </div> : null}

        </>
    )
}

export default TicketTimer
