import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const FormPayTicket = (props) => {
    const { product, handleOpenModal } = props
    return (
        <div className="tw-rounded-lg tw-bg-white tw-p-3 tw-ml-5 tw-mb-5 tw-sticky tw-top-[1rem]">
            <div className="tw-flex tw-justify-between ">
                <h1 className="tw-font-bold tw-text-xl">Tổng thanh toán</h1>
                <div>
                    <span className="tw-font-bold tw-text-xl">
                        {new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(product.price)}
                    </span>
                </div>
            </div>
            <form>
                <div className='tw-my-3'>(Form này đang phát triển)</div>
                <div className='tw-my-3'>
                    <div className='tw-my-2'>
                        <label>* Họ và tên </label>
                    </div>
                    <div className='tw-my-2'>
                        <input type="text"
                            className='tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-p-2' />
                    </div>
                </div>

                <div className='tw-my-3'>
                    <div className='tw-my-2'>
                        <label>* Địa chỉ email </label>
                    </div>
                    <div className='tw-my-2'>
                        <input type="text"
                            className='tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-p-2' />
                    </div>
                </div>

                <div className='tw-my-3'>
                    <div className='tw-my-2'>
                        <label>* Số điện thoại </label>
                    </div>
                    <div className='tw-my-2'>
                        <input type="text"
                            className='tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-p-2' />
                    </div>
                </div>

                <div className='tw-my-3'>
                    <div className='tw-my-2'>
                        <label>Ghi chú </label>
                    </div>
                    <div className='tw-my-2'>
                        <textarea className='tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-p-2' >
                        </textarea>
                    </div>
                </div>

                <div className='tw-my-3'>
                    <div className='tw-my-2'>
                        <label>Chọn phương thức thanh toán </label>
                    </div>
                    <div className='tw-my-2'>
                        
                    </div>
                </div>

                <div className="tw-flex tw-mt-6">
                    <button
                        type='button'
                        className="tw-w-full tw-p-2 tw-rounded-md tw-bg-red-600 tw-text-white"
                        onClick={() => {
                            handleOpenModal()
                        }}
                    >
                        Đặt vé
                    </button>
                </div>
            </form>



        </div>
    )
}

export default FormPayTicket
