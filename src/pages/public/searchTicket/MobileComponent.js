import React from 'react'

const MobileComponent = (props) => {
    const { handleSearch, addSearch, availableSearchTicket, setAddSearch } = props
    return (
        <div className="tw-w-full tw-px-2">
            <div className="tw-rounded-lg tw-my-4 tw-bg-white tw-py-2 tw-px-4 tw-mx-auto">
                <div className="tw-w-full">
                        <textarea onChange={(e) => setAddSearch(e.target.value)}
                        placeholder="VD: SL1234 ..." 
                        className='tw-w-full tw-py-4 tw-px-2 tw-border tw-border-gray-200"'></textarea>
                </div>
                <div className="tw-w-full tw-my-2">
                    <button className="tw-w-full" className="tw-border tw-border-green-500 tw-w-full tw-py-2 tw-bg-green-500" type="button" onClick={() => handleSearch(addSearch)}>Tìm kiếm</button>
                </div>
            </div>

            <div >
                {availableSearchTicket.map(item => <div className="tw-my-4  tw-bg-white tw-rounded-lg">
                    <div className="tw-text-center tw-py-3 tw-text-xl tw-font-bold tw-text-red-500 tw-bg-green-100">Mã vé {item.ticket_code}</div>
                    <div className="tw-flex tw-justify-around">
                        <div className=" tw-rounded-lg tw-py-6 tw-px-4">
                            {/* <h1 className="tw-text-center">Thông tin khách hàng</h1> */}
                            <div>
                                <p>Tên khách hàng: {item.customer_name}</p>
                                <p>Email: {item.email}</p>
                                <p>Số điện thoại: {item.phone_number}</p>
                                <p>Số lượng ghế: {item.quantity}</p>
                            </div>
                        </div>
                        <div className=" tw-rounded-lg tw-py-6 tw-px-4">
                            {/* <h1 className="tw-text-center">Thông tin chuyến xe</h1> */}
                            <img src={item.buses.image} alt="" />
                            Chuyến: {item.buses.name}
                        </div>
                    </div>

                </div>)}
            </div>
        </div>
    )
}

export default MobileComponent
