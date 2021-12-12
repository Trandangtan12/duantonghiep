import React from 'react'
import {
    faCircle, faDotCircle, faStar
} from "@fortawesome/fontawesome-free-solid";
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileComponent = (props) => {
    const { productFilter } = props
    const ListError = () => {
        return (<div className="tw-bg-white tw-p-5 tw-text-center">
            <img src="https://storage.googleapis.com/fe-production/images/route-no-schedule.png" alt="" />
            <p className="tw-font-bold tw-text-xl">Không có chuyến nào để hiển thị</p>
        </div>)
    }


    const mapProduct = productFilter.map((item, index) => {
        return (
            <div key={index} className="tw-rounded-lg tw-bg-white tw-mb-3">
                <div className='tw-p-3 tw-border-b-2 tw-border-gray-200'>
                    <div className='tw-flex '>
                        <p className='tw-text-3xl tw-font-black tw-mr-2'>{item.start_time}</p>
                        <div className='tw-flex tw-items-center tw-flex-1'>
                            <FontAwesomeIcon icon={faDotCircle} className='tw-text-xs tw-text-green-600' />
                            <div className='tw-flex-1 tw-border-solid tw-border-b tw-border-gray-400'></div>
                            <p className="tw-text-sm tw-px-2">{item.range_time} giờ</p>

                            <div className='tw-flex-1 tw-border-solid tw-border-b tw-border-gray-400'></div>
                            <FontAwesomeIcon icon={faDotCircle} className='tw-text-xs tw-text-red-500' />
                        </div>

                        <p className='tw-text-3xl tw-font-black tw-ml-2'>{item.end_time}</p>
                    </div>

                    <div className='tw-flex tw-justify-between'>
                        <div>
                            <p className='tw-text-xs'>{item.startWard_name}</p>
                        </div>
                        <div>
                            <p className='tw-text-xs'>{item.endWard_name}</p>
                        </div>
                    </div>

                </div>

                <div className='tw-flex tw-justify-between tw-p-3'>
                    <div className='tw-flex'>
                        <div className='tw-mr-2'>
                            <img src={item.image} className='tw-w-[2.5rem] tw-rounded-full tw-h-[2.5rem] tw-object-cover' alt="" />
                        </div>
                        <div>
                            <p className='tw-text-sm tw-truncate tw-w-40 tw-font-bold'>{item.name}</p>
                            <p className='tw-text-xs tw-text-green-500'>{item.seat} chỗ</p>
                        </div>
                    </div>

                    <div>
                        <p className='tw-font-bold'>5.0 <FontAwesomeIcon className='tw-text-yellow-400' icon={faStar}/></p>
                        <p className='tw-text-xs tw-text-gray-400'>2 đánh giá</p>
                        
                    </div>
                </div>
                <div className='tw-p-3'>
                    {item.service.map(item => <span className='tw-bg-yellow-400 tw-p-1 tw-text-sm tw-ml-2'>{item.name}</span>)}
                </div>

                <div className='tw-flex tw-items-end tw-justify-between tw-p-3 tw-border-t-2 tw-border-gray-200'>
                    <div>
                        <p className='tw-text-sm'>Còn {item.seat_empty} chỗ trống</p>
                    </div>
                    <div>
                    <p className="tw-text-2xl tw-font-black">{new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(item.price)}</p>
                    </div>
                </div>
                <div className='tw-p-3'>
                {item.seat_empty <= 0 ? null :
                    <Link to={`/productdetail/${item.id}`}>
                      <button className="tw-p-2 tw-bg-red-500 tw-w-full tw-text-white tw-rounded-lg">
                        Chọn chuyến
                      </button></Link>}
                </div>
            </div>
        )
    }
    )

    return (
        <div className="tw-flex-grow tw-w-full">
            {mapProduct == null || mapProduct.length == 0 ? ListError() : mapProduct}
        </div>
    )
}

export default MobileComponent
