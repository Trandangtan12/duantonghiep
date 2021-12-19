import React, { useState } from 'react'
import { Tab } from "@headlessui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/fontawesome-free-solid';

const TabListMobileComponent = (props) => {
    const { listWaiting, listUnconfimed, listActived, listRejected, listDeposit, listDone } = props
    const [state, setState] = useState(false);
    return (
        <div>
            <div className='tw-fixed tw-z-10 tw-top-2 tw-right-2'>
                <button type='button' onClick={() => setState(!state)}>
                    {state ? <FontAwesomeIcon icon={faWindowClose} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
            </div>
            <Tab.Group>
                <Tab.List className={`tw-fixed tw-h-full tw-border tw-border-gray-300 tw-z-20 tw-transition tw-duration-500 
                tw-ease-in-out tw-delay-150 
                ${state ? "tw-translate-x-0" : "tw--translate-x-80"} tw-bg-white tw-flex tw-flex-col tw-p-4`}>
                    <Tab className={({ selected }) =>
                        selected ? 'tw-py-4 tw-text-left tw-border-b-2 tw-border-black ' : 'tw-py-4 tw-text-left tw-text-black'
                    }>
                        Vé chưa xác nhận
                    </Tab>
                    <Tab className={({ selected }) =>
                        selected ? 'tw-py-4 tw-text-left tw-border-b-2 tw-border-black' : 'tw-py-4 tw-text-left tw-text-black'
                    }>
                        Vé chưa thanh toán
                    </Tab>
                    <Tab className={({ selected }) =>
                        selected ? 'tw-py-4 tw-text-left tw-border-b-2 tw-border-black ' : 'tw-py-4 tw-text-left tw-text-black'
                    }>
                        Vé đã thanh toán
                    </Tab>
                    <Tab className={({ selected }) =>
                        selected ? 'tw-py-4 tw-text-left tw-border-b-2 tw-border-black' : 'tw-py-4 tw-text-left tw-bg-white tw-text-black'
                    }>
                        Vé đã hủy
                    </Tab>
                    <Tab className={({ selected }) =>
                        selected ? 'tw-py-4 tw-text-left tw-border-b-2 tw-border-black' : 'tw-py-4 tw-text-left tw-bg-white tw-text-black'
                    }>
                        Đặt cọc
                    </Tab>
                    <Tab className={({ selected }) =>
                        selected ? 'tw-py-4 tw-text-left tw-border-b-2 tw-border-black' : 'tw-py-4 tw-text-left tw-bg-white tw-text-black'
                    }>
                        Vé đã đi
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className='tw-p-2 tw-bg-white tw-sticky tw-top-0 tw-border-b-2 tw-border-gray-300'>
                            <h1 className='tw-text-center'>Vé chưa xác nhận</h1>
                        </div>
                        <div className="tw-p-4">
                            {listUnconfimed.length === 0 ? <div>Bạn chưa đặt chuyến nào</div> : listUnconfimed.map(items => <div className="tw-mb-3">
                                <div className="tw-font-bold tw-pb-3">{items.buses.date_active}</div>
                                <div className="tw-flex tw-justify-between tw-border tw-border-black tw-rounded-lg tw-p-4">
                                    <div className="col">
                                        <p className="tw-text-3xl tw-font-black tw-pb-2">{items.buses.start_time}</p>
                                        <p className="tw-text-sm">{items.buses.name}</p>
                                        <p className="tw-text-sm">Số lượng: {items.quantity} vé</p>
                                        <p className="tw-text-sm">Giá: {new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(items.totalPrice)}</p>
                                    </div>
                                    <div className="col">
                                        <p className="tw-bg-yellow-400 tw-text-black tw-p-1">Chưa thanh toán</p>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>

                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='tw-p-2 tw-bg-white  tw-sticky tw-top-0 tw-border-b-2 tw-border-gray-300'>
                            <h1 className='tw-text-center'>Vé chưa thanh toán</h1>
                        </div>
                        <div className="tw-p-4">
                            {listWaiting.length === 0 ? <div>Bạn chưa đặt chuyến nào</div> : listWaiting.map(items => <div className="tw-mb-3">
                                <div className="tw-font-bold tw-pb-3">{items.buses.date_active}</div>
                                <div className="tw-flex tw-justify-between tw-border tw-border-black tw-rounded-lg tw-p-4">
                                    <div className="col">
                                        <p className="tw-text-3xl tw-font-black tw-pb-2">{items.buses.start_time}</p>
                                        <p className="tw-text-sm">{items.buses.name}</p>
                                        <p className="tw-text-sm">Số lượng: {items.quantity} vé</p>
                                        <p className="tw-text-sm">Giá: {new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(items.totalPrice)}</p>
                                    </div>
                                    <div className="col">
                                        <p className="tw-bg-green-500 tw-text-black tw-p-1">Đã xác nhận</p>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='tw-p-2 tw-bg-white  tw-sticky tw-top-0 tw-border-b-2 tw-border-gray-300'>
                            <h1 className='tw-text-center'>Vé đã thanh toán</h1>
                        </div>
                        <div className="tw-p-4">
                            {listActived.length === 0 ? <div>Bạn chưa đặt chuyến nào</div> : listActived.map(items => <div className="tw-mb-3">
                                <div className="tw-font-bold tw-pb-3">{items.buses.date_active}</div>
                                <div className="tw-flex tw-justify-between tw-border tw-border-black tw-rounded-lg tw-p-4">
                                    <div className="col">
                                        <p className="tw-text-3xl tw-font-black tw-pb-2">{items.buses.start_time}</p>
                                        <p className="tw-text-sm">{items.buses.name}</p>
                                        <p className="tw-text-sm">Số lượng: {items.quantity} vé</p>
                                        <p className="tw-text-sm">Giá: {new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(items.totalPrice)}</p>
                                    </div>
                                    <div className="col">
                                        <p className="tw-bg-green-600 tw-text-white tw-p-1">Đã thanh toán</p>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='tw-p-2 tw-bg-white  tw-sticky tw-top-0 tw-border-b-2 tw-border-gray-300'>
                            <h1 className='tw-text-center'>Vé đã hủy</h1>
                        </div>
                        <div className="tw-p-4">
                            {listRejected.length === 0 ? <div>Bạn chưa đặt chuyến nào</div> : listRejected.map(items => <div className="tw-mb-3">
                                <div className="tw-font-bold tw-pb-3">{items.buses.date_active}</div>
                                <div className="tw-flex tw-justify-between tw-border tw-border-black tw-rounded-lg tw-p-4">
                                    <div className="col">
                                        <p className="tw-text-3xl tw-font-black tw-pb-2">{items.buses.start_time}</p>
                                        <p className="tw-text-sm">{items.buses.name}</p>
                                        <p className="tw-text-sm">Số lượng: {items.quantity} vé</p>
                                        <p className="tw-text-sm">Giá: {new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(items.totalPrice)}</p>
                                    </div>
                                    <div className="col">
                                        <p className="tw-bg-red-600 tw-text-white tw-p-1">Đã hủy</p>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='tw-p-2 tw-bg-white  tw-sticky tw-top-0 tw-border-b-2 tw-border-gray-300'>
                            <h1 className='tw-text-center'>Vé đã đặt cọc</h1>
                        </div>
                        <div className="tw-p-4">
                            {listDeposit.length === 0 ? <div>Bạn chưa đặt chuyến nào</div> : listDeposit.map(items => <div className="tw-mb-3">
                                <div className="tw-font-bold tw-pb-3">{items.buses.date_active}</div>
                                <div className="tw-flex tw-justify-between tw-border tw-border-black tw-rounded-lg tw-p-4">
                                    <div className="col">
                                        <p className="tw-text-3xl tw-font-black tw-pb-2">{items.buses.start_time}</p>
                                        <p className="tw-text-sm">{items.buses.name}</p>
                                        <p className="tw-text-sm">Số lượng: {items.quantity} vé</p>
                                        <p className="tw-text-sm">Giá: {new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(items.totalPrice)}</p>
                                    </div>
                                    <div className="col">
                                        <p className="tw-bg-blue-400 tw-text-black tw-p-1">Đã đặt cọc</p>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className='tw-p-2 tw-bg-white  tw-sticky tw-top-0 tw-border-b-2 tw-border-gray-300'>
                            <h1 className='tw-text-center'>Vé đã đi</h1>
                        </div>
                        <div className="tw-p-4">
                            {listDone.length === 0 ? <div>Bạn chưa đặt chuyến nào</div> : listDone.map(items => <div className="tw-mb-3">
                                <div className="tw-font-bold tw-pb-3">{items.buses.date_active}</div>
                                <div className="tw-flex tw-justify-between tw-border tw-border-black tw-rounded-lg tw-p-4">
                                    <div className="col">
                                        <p className="tw-text-3xl tw-font-black tw-pb-2">{items.buses.start_time}</p>
                                        <p className="tw-text-sm">{items.buses.name}</p>
                                        <p className="tw-text-sm">Số lượng: {items.quantity} vé</p>
                                        <p className="tw-text-sm">Giá: {new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(items.totalPrice)}</p>
                                    </div>
                                    <div className="col">
                                        <p className="tw-bg-green-400 tw-text-black tw-p-1">Đã đi</p>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default TabListMobileComponent
