import React from 'react'
import { Link } from 'react-router-dom'

const MobileComponent = (props) => {
    const {timeTicket, pathname, localTicket, cancelTimeCountdown} = props
    return (
        <div>
             {timeTicket && pathname !== `/productdetail/${localTicket().id}` && pathname !== "/payment/success" ?
                <div className='tw-rounded-lg tw-mt-20'>
                    <div className='tw-flex tw-justify-center'>
                        <div className='tw-bg-white tw-p-4 tw-my-auto tw-text-center tw-rounded-lg tw-shadow-xl'>
                            <p className='tw-text-2xl tw-font-black'>{localTicket().startTime}</p>
                            <p className='tw-text-xs tw-text-gray-500'>{localTicket().dateStart}</p>
                            <p className='tw-text-xs tw-text-gray-500'>{localTicket().quantity} vé</p>
                        </div>
                        <div className='tw-bg-white tw-relative tw-p-4 tw-rounded-lg tw-ml-1 tw-shadow-xl'>
                            <div className='tw-absolute tw-right-[0.5rem] tw-top-[0.1rem]'>
                                <button onClick={cancelTimeCountdown}>x</button>
                            </div>
                            <div className='tw-pt-3 tw-flex tw-flex-col'>
                                <p className='tw-font-black'>{localTicket().form}</p>
                                <p className='tw-font-black'>{localTicket().to}</p>
                                <p className='tw-text-xs tw-text-red-500'></p>
                            </div>

                        </div>
                    </div>
                    <p className='tw-rounded-lg tw-shadow-xl tw-text-xs tw-text-red-500 tw-my-2 tw-p-2 tw-bg-white'>
                        Gọi số 19001009 để giữ vé hoặc <Link to={`/productdetail/${localTicket().id}`}><span className='tw-text-green-500 tw-underline'>thanh toán qua VNPAY</span></Link>  </p>
                </div> : null}
        </div>
    )
}

export default MobileComponent
