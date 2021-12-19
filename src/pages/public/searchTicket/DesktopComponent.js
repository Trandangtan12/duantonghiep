import React from 'react'

const DesktopComponent = (props) => {
    const { handleSearch, addSearch, availableSearchTicket, setAddSearch } = props
    return (
        <div className="tw-w-3/4 tw-mx-auto">
            <div className="tw-flex tw-justify-between tw-rounded-lg tw-my-4 tw-bg-white tw-py-16 tw-px-4 tw-mx-auto">
                <div className="tw-flex-grow">
                    <input className="tw-w-full tw-py-4 tw-px-2 tw-border tw-border-gray-200" onChange={(e) => setAddSearch(e.target.value)}
                        placeholder="Tra cứu mã vé..."
                        type="text" />
                </div>
                <div className="tw-w-60">
                    <button className="tw-w-full" className="tw-border tw-border-green-500 tw-w-full tw-py-4 tw-px-2 tw-bg-green-500" type="button" onClick={() => handleSearch(addSearch)}>Tìm kiếm</button>
                </div>
            </div>
            <div >
                {availableSearchTicket.map(item => <div className="tw-my-4  tw-bg-white tw-rounded-lg">
                    <div className="tw-text-center  tw-py-3 tw-text-xl tw-font-bold tw-text-red-500 tw-bg-green-100">Mã vé {item.ticket_code}</div>
                    <div className='tw-p-6'>
                        <div className="tw-flex tw-rounded-lg tw-border tw-border-black">

                            <div className="tw-rounded-lg tw-py-6 tw-px-4">
                                {/* <h1 className="tw-text-center">Thông tin chuyến xe</h1> */}
                                <img src={item.buses.image} className='tw-w-[20rem] tw-h-[15rem] tw-object-cover' alt="" />

                            </div>
                            <div className="tw-rounded-lg tw-py-6 tw-px-4">
                                {/* <h1 className="tw-text-center">Thông tin khách hàng</h1> */}
                                <div>
                                    <p> <span className='tw-font-bold'>Tên khách hàng:</span>  <span className=' tw-text-sm'>{item.customer_name}</span> </p>
                                    <p><span className='tw-font-bold'>Email:</span>  <span className=' tw-text-sm'>{item.email}</span></p>
                                    <p><span className='tw-font-bold'>Số điện thoại:</span>  <span className=' tw-text-sm'>{item.phone_number}</span></p>
                                    <p><span className='tw-font-bold'>Vé </span>  <span className=' tw-text-sm'>{item.quantity}</span></p>
                                    <p><span className='tw-font-bold'>Giá:</span>  <span className=' tw-text-sm'>{item.totalPrice}</span></p>
                                    <p><span className='tw-font-bold'>Trạng thái:</span> {item.status === "REJECTED" ? <span className='tw-bg-red-500 tw-text-white tw-p-1'>Đã hủy</span> :
                                        item.status === "DONE" ? <span className='tw-bg-green-600 tw-text-white tw-p-1'>Đã đi</span> :
                                            item.status === "WAITING_ACTIVE" ? <span className='tw-bg-green-400 tw-text-white tw-p-1'>Đã xác nhận</span> :
                                                item.status === "ACTIVED" ? <span className='tw-bg-green-500 tw-text-white tw-p-1'>Đã Đã thanh toán</span> :
                                                    item.status === "DEPOSIT" ? <span className='tw-bg-blue-500 tw-text-white tw-p-1'>Đã đặt cọc</span> : 
                                                    <span className='tw-bg-yellow-500 tw-text-white tw-p-1'>Chờ xác nhận</span>}</p>
                                    <p><span className='tw-font-bold'>Chuyến:</span> <span className=' tw-text-sm'>{item.buses.name}</span> </p>
                                    <p > <span className='tw-font-bold'>Thời gian khởi hành:</span> <span className=' tw-text-sm'>{item.buses.start_time}</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default DesktopComponent
