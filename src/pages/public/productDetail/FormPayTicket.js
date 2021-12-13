import moment from 'moment'
import React, { useState } from 'react'
import { useEffect } from 'react'
import ReactDatePicker from 'react-datepicker'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { BusesService } from '../../../service/productService'
import { UserApi } from '../../../service/userService'
import ToggleButton from "react-toggle-button";

const FormPayTicket = ({product}) => {
    const { user } = UserApi.isAuthenticated()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({});
    const history = useHistory()
    const [emp, setEmp] = useState();
    const [qty, setQty] = useState(1)
    const TODAY = new Date()
    const addToday = moment(TODAY).add(1, "days")
    const addTodayFormat = moment(addToday).format("yyyy-MM-DD")
    const todayFormatMoment = new Date(addTodayFormat)
    const [startDate, setStartDate] = useState(todayFormatMoment);
    const [currentRadioValue, setCurrentRadioValue] = useState('OFFLINE');
    const [hidden, setHidden] = useState(false)
    const [sucess, setSucess] = useState(false)
    const totalPrice = product.price * qty;
    const depositPrice = Math.round(totalPrice * 0.3)
    const Increase = () => {

        if (qty >= product.seat_empty) {
        } else {
            setQty(qty + 1)
            if (emp >= 0) {

                setEmp(emp - 1)
            }
        }
    }
    const Decrease = () => {
        if (qty <= 1) {

        } else {
            setQty(qty - 1)
            if (product.seat >= emp) {
                setEmp(emp + 1)
            }
        }
    }
    const handlePayTicket = async (data) => {
        try {
            const updateBuses = {
                ...data,
                seat_empty: emp
            }
            if (currentRadioValue === "OFFLINE" && qty < 3 && sucess !== true) {
                localStorage.setItem('deposit', false)
                localStorage.setItem('paymentMethod', "OFFLINE")
                const ticket = {
                    ...data,
                    buses_id: product.id,
                    quantity: qty,
                    totalPrice: totalPrice,
                    paymentMethod: currentRadioValue,
                    depositAmount: 0,
                }
                const resTicket = await BusesService.addTicket(ticket)
                if (resTicket.status === 201 || resTicket.status === 200) {
                    localStorage.setItem('ticket', JSON.stringify(resTicket.data))
                    alert("Đặt vé thành công")
                }
                if (emp < 0) {
                    alert("Hết ghế trống!!!")
                } else {
                    localStorage.setItem('ticket', JSON.stringify(resTicket.data))
                    history.push("/payment/success")
                    await BusesService.updateBusses(product.id, updateBuses)
                }

            } else if (currentRadioValue === "OFFLINE" && qty >= 3) {
                localStorage.setItem('deposit', true)
                localStorage.setItem('paymentMethod', "OFFLINE")
                const ticket = {
                    ...data,
                    buses_id: product.id,
                    quantity: qty,
                    totalPrice: totalPrice,
                    paymentMethod: currentRadioValue,
                    status: "WAITING_ACTIVE",
                    depositAmount: depositPrice,
                }
                const resTicket = await BusesService.addTicket(ticket)
                if (resTicket.status === 201 || resTicket.status === 200) {
                    localStorage.setItem('ticket', JSON.stringify(resTicket.data))
                    alert("Đặt vé thành công")
                }
                const res = await BusesService.paymentTicket(depositPrice)
                if (res.data.message === "success") {
                    window.location.href = res.data.data
                }
                if (emp < 0) {
                    alert("Hết ghế trống!!!")
                } else {
                    await BusesService.updateBusses(product.id, updateBuses)
                }

            }
            else if (
                currentRadioValue === "OFFLINE" && sucess === true) {
                localStorage.setItem('deposit', true)
                localStorage.setItem('paymentMethod', "OFFLINE")
                const ticket = {
                    ...data,
                    buses_id: product.id,
                    quantity: qty,
                    totalPrice: totalPrice,
                    paymentMethod: currentRadioValue,
                    status: "WAITING_ACTIVE",
                    depositAmount: depositPrice,
                    reservationTime: startDate
                }
                const resTicket = await BusesService.addTicket(ticket)
                if (resTicket.status === 201 || resTicket.status === 200) {
                    localStorage.setItem('ticket', JSON.stringify(resTicket.data))
                    alert("Đặt vé thành công")
                }
                const res = await BusesService.paymentTicket(depositPrice)
                if (res.data.message === "success") {
                    window.location.href = res.data.data
                }
                if (emp < 0) {
                    alert("Hết ghế trống!!!")
                } else {
                    await BusesService.updateBusses(product.id, updateBuses)
                }

            }
            else if (currentRadioValue === "ATM" && sucess === true) {
                localStorage.setItem('deposit', false)
                localStorage.setItem('paymentMethod', "ATM")
                const ticket = {
                    ...data,
                    buses_id: product.id,
                    quantity: qty,
                    totalPrice: totalPrice,
                    paymentMethod: currentRadioValue,
                    reservationTime: startDate
                }
                const resTicket = await BusesService.addTicket(ticket)
                if (resTicket.status === 201 || resTicket.status === 200) {
                    localStorage.setItem('ticket', JSON.stringify(resTicket.data))
                    alert("Đặt vé thành công")
                }
                const res = await BusesService.paymentTicket(totalPrice)
                if (res.data.message === "success") {
                    window.location.href = res.data.data
                }
                if (emp < 0) {
                    alert("Hết ghế trống!!!")
                } else {
                    await BusesService.updateBusses(product.id, updateBuses)
                }
            }
            else {
                localStorage.setItem('deposit', false)
                localStorage.setItem('paymentMethod', "ATM")
                const ticket = {
                    ...data,
                    quantity: qty,
                    totalPrice: totalPrice,
                    paymentMethod: currentRadioValue,
                    buses_id: product.id
                }
                const resTicket = await BusesService.addTicket(ticket)
                if (resTicket.status === 201 || resTicket.status === 200) {
                    localStorage.setItem('ticket', JSON.stringify(resTicket.data))
                    alert("Đặt vé thành công")
                }
                const res = await BusesService.paymentTicket(totalPrice)
                if (res.data.message === "success") {
                    window.location.href = res.data.data
                }
                if (emp < 0) {
                    alert("Hết ghế trống!!!")
                } else {
                    await BusesService.updateBusses(product.id, updateBuses)
                }
            }
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
        const seat_empty = product.seat_empty - 1
        setEmp(seat_empty)
    }, [product])
    return (
        <div className="tw-rounded-lg tw-bg-white tw-p-3 tw-ml-5 tw-mb-5 tw-sticky tw-top-[1rem]">
            <div className="tw-flex tw-justify-between ">
                <h1 className="tw-font-bold tw-text-xl">Tổng thanh toán</h1>
                <div>
                    <span className="tw-font-bold tw-text-xl">
                        {currentRadioValue === "OFFLINE" && qty >= 3 || currentRadioValue === "OFFLINE" && sucess === true && TODAY !== startDate ? <> {new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(depositPrice)}
                            <span className='tw-text-sm'>(30%)</span> </> : `${new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(totalPrice)}`}
                    </span>
                </div>
            </div>
            <form onSubmit={handleSubmit(handlePayTicket)}>
                <input type="hidden" {...register("user_id")} defaultValue={user == null ? "" : user.id} />
                <input type="hidden" {...register("status")} defaultValue="WAITING_ACTIVE" />
                <div className='tw-my-3'>
                    <div className='tw-my-2'>
                        <label>* Họ và tên </label>
                    </div>
                    <div className='tw-my-2'>
                        <input type="text"
                            className='tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-p-2'
                            defaultValue={user == null ? "" : user.name}
                            placeholder="Tên hành khách"
                            {...register('customer_name', { required: true })}

                        />
                        {errors.customer_name && (
                            <span className="tw-text-red-500">Bạn chưa điền tên!!!</span>
                        )}
                    </div>
                </div>

                <div className='tw-my-3'>
                    <div className='tw-my-2'>
                        <label>* Địa chỉ email </label>
                    </div>
                    <div className='tw-my-2'>
                        <input type="text"
                            className='tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-p-2'
                            defaultValue={user == null ? "" : user.email}
                            {...register('email', {
                                required: ("Bạn chưa điền email!!!"), pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Email không hợp lệ',
                                },
                            })}
                        />
                        {errors.email?.message && (
                            <span className="tw-text-red-500">{errors.email?.message}</span>
                        )}
                    </div>
                </div>

                <div className='tw-my-3'>
                    <div className='tw-my-2'>
                        <label>* Số điện thoại </label>
                    </div>
                    <div className='tw-my-2'>
                        <input type="text"
                            className='tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-p-2'
                            defaultValue={user == null ? "" : user.phone_number}
                            placeholder="Số điện thoại"
                            {...register('phone_number', {
                                required: ("Bạn chưa điền số điện thoại!!!"), pattern: {
                                    value: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                                    message: 'Số điện thoại không hợp lệ',
                                },
                            })}
                        />
                        {errors.phone_number?.message && (
                            <span className="tw-text-red-500">{errors.phone_number?.message}</span>
                        )}
                    </div>
                </div>

                <div className='tw-my-3'>
                    <div className='tw-my-2'>
                        <label>* Số CMND/CCCD </label>
                    </div>
                    <div className='tw-my-2'>
                        <input type="text"
                            className='tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-p-2'
                            defaultValue={user == null ? "" : user.identity_card}
                            placeholder="Nhập số cmnd"
                            {...register('identity_card', {
                                required: ("Bạn chưa nhập số cmnd!"), pattern: {
                                    value: /^(\d{9}|\d{12})$/,
                                    message: "Số cmnd/cccd không hợp lệ"
                                }
                            })}
                        />
                        {errors.identity_card?.message && (
                            <span className="tw-text-red-500">{errors.identity_card?.message}</span>
                        )}
                    </div>
                </div>

                <div className="tw-flex tw-w-full tw-items-center tw-justify-between tw-my-3">
                    <div className="tw-w-full">
                        <label
                            className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                            htmlFor="grid-password"
                        >
                            Số lượng vé
                        </label>
                        <div>
                            <button type="button" className="tw-cursor-pointer tw-px-4 tw-py-1 tw-border tw-border-gray-300" onClick={() => Decrease()}>-</button>
                            <button type="button" className="tw-cursor-default tw-px-4 tw-py-1 tw-border tw-border-gray-300">{qty}</button>
                            <button type="button" className="tw-cursor-pointer tw-px-4 tw-py-1 tw-border tw-border-gray-300" onClick={() => Increase()}>+</button>
                        </div>
                    </div>
                    <div className="tw-w-full">
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <div className='tw-mr-3'>
                                <ToggleButton
                                    value={sucess}
                                    onToggle={() => {
                                        setHidden(!hidden)
                                        setSucess(!sucess)
                                    }}
                                />
                            </div>
                            <div>
                                <label className="tw-uppercase tw-text-xs tw-font-bold tw-mb-5">
                                    Đặt trước
                                </label>
                            </div>
                        </div>

                        <p className={`${sucess === false ? "tw-block tw-p-2" : "tw-hidden"}`}>

                            {sucess === true ? moment(startDate).format("DD/MM/yyy HH:mm") :
                                moment(TODAY).format("DD/MM/yyy HH:mm")}
                        </p>
                        <div className={`${sucess ? "tw-block" : "tw-hidden tw-p-0"}`}>
                            <ReactDatePicker
                                className={`tw-p-2 tw-w-40 tw-border tw-border-gray-300`}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy HH:mm"
                                showTimeSelect
                                minDate={todayFormatMoment}
                                selected={startDate} />
                        </div>

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
                        <div className="tw-flex tw-flex-col tw-justify-between">

                            <div>
                                <input
                                    type="radio"
                                    id="OFFLINE"
                                    name="payMoney"
                                    value="OFFLINE"
                                    onChange={(e) => setCurrentRadioValue(e.target.value)}
                                    defaultChecked={currentRadioValue === "OFFLINE"} />
                                <label for="OFFLINE" className='tw-text-sm'>
                                    {qty >= 3 || sucess === true && TODAY !== startDate ? "Đặt cọc 30%" : "Thanh toán bằng tiền mặt"}
                                </label></div>

                            <div>
                                <input type="radio" id="ATM" name="payMoney" value="ATM"
                                    onChange={(e) => setCurrentRadioValue(e.target.value)}
                                    defaultChecked={currentRadioValue === "ATM"} />
                                <label for="ATM" className='tw-text-sm'>
                                    Thanh toán qua VNPAY
                                </label>
                            </div>



                        </div>
                    </div>
                </div>

                <div className="tw-flex tw-mt-6">
                    <button
                        type="submit"
                        className="tw-w-full tw-p-2 tw-rounded-md tw-bg-red-600 tw-text-white"
                    >
                        Đặt vé
                    </button>
                </div>
            </form>



        </div>
    )
}

export default FormPayTicket
