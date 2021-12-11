import React from 'react'
import {
    faArrowLeft,
    faCircle, faDotCircle, faStar
} from "@fortawesome/fontawesome-free-solid";
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalGetInfoTicket from './ModalGetInfoTicket'

const MobileComponent = (props) => {
    const { handleOpenModal, product, id, isOpenModal, setIsOpenModal } = props
    return (
        <div className="">
            <div className="tw-bg-green-500 tw-py-3">
                <div className="tw-w-full tw-px-2 tw-flex tw-text-white">

                    <div>
                        <div className='tw-flex tw-font-bold'>
                            <p className='tw-w-40 tw-truncate'>{product.startPointName}, {product.startDistrict_name}, {product.startWard_name}</p>
                            <p className='tw-w-40 tw-truncate'> - {product.endPointName}, {product.endDistrict_name}, {product.endWard_name}</p>
                        </div>
                        <div className='tw-text-sm'>
                            <span>Thời gian khởi hành {product.date}</span> -{" "}
                            <span>{product.start_time}</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="tw-w-full">
                <div className="">
                    <div className="">
                        <div className="tw-rounded-lg tw-bg-white tw-p-3 tw-mb-3">
                            <div className="tw-flex">
                                <img
                                    src={product.image}
                                    className="tw-w-40 tw-h-28 tw-object-cover"
                                    alt=""
                                />
                                <div className="tw-ml-5">
                                    <div className="tw-mb-3 tw-flex tw-justify-bet">
                                        <div>
                                            <h3 className="tw-font-bold tw-text-sm">{product.name}</h3>
                                            <p className="tw-text-sm tw-text-gray-500">
                                                {product.seat} ghế
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="tw-text-sm tw-text-gray-500" >{product.seat_empty} ghế trống</p>
                                    </div>

                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tw-w-full tw-fixed tw-bottom-[4.5rem]">
                        <div className="tw-rounded-lg tw-bg-white tw-p-3">
                            <div className="tw-flex tw-justify-between ">
                                <h1 className="tw-font-bold tw-text-xl">Tổng thanh toán</h1>
                                <div>
                                    <span className="tw-font-bold tw-text-xl">
                                        {new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(product.price)}
                                    </span>
                                </div>
                            </div>
                            <div className="tw-flex tw-pt-12">
                                <button
                                    className="tw-w-full tw-p-2 tw-rounded-md tw-bg-red-600 tw-text-white"
                                    onClick={() => {
                                        handleOpenModal()
                                    }}
                                >
                                    Thanh toán ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalGetInfoTicket id={id} isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} product={product} />
        </div>
    )
}

export default MobileComponent
