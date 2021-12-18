import React from 'react'
import { Tab } from "@headlessui/react";


const TabListDesktopComponent = (props) => {
    const { listWaiting, listActived, listRejected, listDeposit, listDone, listUnconfimed } = props
    console.log(listUnconfimed);
    return (
        <div>
            <Tab.Group>
                <Tab.List className="tw-px-2 tw-sticky tw-top-0 tw-bg-white tw-border-b-2 tw-border-gray-100">
                    <Tab className={({ selected }) =>
                        selected ? 'tw-mr-14 tw-py-4 tw-border-b-2 tw-border-black' : 'tw-mr-14 tw-py-4 tw-bg-white tw-text-black'
                    }>
                        Vé chưa xác nhận
                    </Tab>
                    <Tab className={({ selected }) =>
                        selected ? 'tw-mr-14 tw-py-4 tw-border-b-2 tw-border-black' : 'tw-mr-14 tw-py-4 tw-bg-white tw-text-black'
                    }>
                        Vé đã xác nhận
                    </Tab>
                    <Tab className={({ selected }) =>
                        selected ? 'tw-mr-14 tw-py-4 tw-border-b-2 tw-border-black ' : 'tw-mr-14 tw-py-4 tw-bg-white tw-text-black'
                    }>
                        Vé đã thanh toán
                    </Tab>
                    <Tab className={({ selected }) =>
                        selected ? 'tw-mr-14 tw-py-4 tw-border-b-2 tw-border-black' : 'tw-mr-14 tw-py-4 tw-bg-white tw-text-black'
                    }>
                        Vé đã hủy
                    </Tab>
                    <Tab className={({ selected }) =>
                        selected ? 'tw-mr-14 tw-py-4 tw-border-b-2 tw-border-black' : 'tw-mr-14 tw-py-4 tw-bg-white tw-text-black'
                    }>
                        Đặt cọc
                    </Tab>
                    <Tab className={({ selected }) =>
                        selected ? 'tw-mr-14 tw-py-4 tw-border-b-2 tw-border-black' : 'tw-mr-14 tw-py-4 tw-bg-white tw-text-black'
                    }>
                        Vé đã đi
                    </Tab>
                </Tab.List>
                <Tab.Panels className="tw-p-4">
                    <Tab.Panel>
                        {listUnconfimed.length === 0 ? <div>Bạn chưa đặt chuyến nào</div> : listWaiting.map(items => <div className="tw-mb-3">
                            <div className="tw-font-bold tw-pb-3">{items.buses.date_active}</div>
                            <div className="tw-flex tw-justify-between tw-border tw-border-black tw-rounded-lg tw-p-4">
                                <div className="col">
                                    <p className="tw-text-3xl tw-font-black tw-pb-2">{items.buses.start_time}</p>
                                    <p className="tw-text-sm">{items.buses.name}</p>
                                    <p className="tw-text-sm">Số lượng: {items.quantity} vé</p>
                                    <p className="tw-text-sm">Giá: {new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(items.totalPrice)}</p>
                                </div>
                                <div className="col">
                                    <p className="tw-bg-yellow-400 tw-text-black tw-p-1">Chưa xác nhận</p>
                                </div>
                            </div>
                        </div>
                        )}
                    </Tab.Panel>
                    <Tab.Panel>
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
                    </Tab.Panel>
                    <Tab.Panel>
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
                    </Tab.Panel>
                    <Tab.Panel>
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
                    </Tab.Panel>
                    <Tab.Panel>
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
                    </Tab.Panel>
                    <Tab.Panel>
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
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default TabListDesktopComponent
