import { Dialog, Transition } from "@headlessui/react";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import { BusesService } from "../../../service/productService";
import { UserApi } from "../../../service/userService";
import ToggleButton from "react-toggle-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from '@fortawesome/fontawesome-free-solid'
const ModalStyled = styled.div`
`
export const InputNumberStyle = styled.div`
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button { 
	-webkit-appearance: none;
}
`
const ModalGetInfoTicket = ({ isOpen, setIsOpenModal, product }) => {
  const { user } = UserApi.isAuthenticated()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({});
  function closeModal() {
    setIsOpenModal(false);
  }
  const history = useHistory()
  const [emp, setEmp] = useState();
  const [qty, setQty] = useState(1)
  const TODAY = new Date()
  const checkLocal = window.localStorage.hasOwnProperty("ticketLocal")
  const addToday = moment(TODAY)
  const addWeek = moment(TODAY).add(1, "weeks")
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
  const ticket = JSON.parse(localStorage.getItem("ticketDetail"))
  const handlePayTicket = async (data) => {
      try {
          const updateBuses = {
              seat_empty: emp
          }
          const ticketLocal = {
              id: product.id,
              startTime: product.start_time,
              form: product.startPointName,
              to: product.endPointName,
              quantity: qty,
              dateStart: ticket?.date_ticket,
          }
          if (currentRadioValue === "OFFLINE" && qty < 3 && startDate < addWeek) {
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
                  localStorage.setItem('ticketDetail', JSON.stringify(resTicket.data))
                  localStorage.setItem('ticketLocal', JSON.stringify(ticketLocal))
                  history.push("/payment/success")
                  localStorage.setItem('ticket', JSON.stringify(resTicket.data))
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
                  localStorage.setItem('ticketLocal', JSON.stringify(ticketLocal))
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
              currentRadioValue === "OFFLINE" && startDate >= addWeek && sucess === true) {
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
                  localStorage.setItem('ticketLocal', JSON.stringify(ticketLocal))
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
          else if (currentRadioValue === "ATM" && startDate >= addWeek && sucess === true) {
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
                  localStorage.setItem('ticketLocal', JSON.stringify(ticketLocal))
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
                  localStorage.setItem('ticketLocal', JSON.stringify(ticketLocal))
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
    <ModalStyled className="tw-z-50">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="tw-fixed tw-inset-0 tw-z-40 tw-overflow-y-auto"
          onClose={closeModal}
        >
          <div className="tw-min-h-screen tw-px-4 tw-text-center">
            <Transition.Child
              as={Fragment}
              enter="tw-ease-out tw-duration-300"
              enterFrom="tw-opacity-0"
              enterTo="tw-opacity-100"
              leave="tw-ease-in tw-duration-200"
              leaveFrom="tw-opacity-100"
              leaveTo="tw-opacity-0"
            >
              <Dialog.Overlay className="tw-fixed tw-inset-0" />
            </Transition.Child>
            <span
              className="tw-inline-block tw-h-screen tw-align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="tw-ease-out tw-duration-300"
              enterFrom="tw-opacity-0 tw-scale-95"
              enterTo="tw-opacity-100 tw-scale-100"
              leave="tw-ease-in tw-duration-200"
              leaveFrom="tw-opacity-100 tw-scale-100"
              leaveTo="tw-opacity-0 tw-scale-95"
            >
              <div className="tw-inline-block tw-w-full tw-overflow-hidden tw-text-left tw-align-middle tw-p-4 
              tw-transition-all tw-transform tw-bg-white tw-shadow-xl tw-rounded-lg">
                <div className="tw-flex tw-justify-between tw-items-center">
                <Dialog.Title
                  as="h3"
                  className="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"
                >
                  Thông tin thanh toán
                </Dialog.Title>
                <div>
                  <button onClick={() => setIsOpenModal(false)} type="button" className="tw-text-xl">x</button>
                </div>
                </div>
               
                <form onSubmit={handleSubmit(handlePayTicket)}>
                <input type="hidden" {...register("user_id")} defaultValue={user == null ? "" : user?.id} />
                <input type="hidden" {...register("status")} defaultValue="WAITING_ACTIVE" />
                <div className='tw-my-3'>
                    <div className='tw-my-2 tw-uppercase tw-text-xs tw-font-bold'>
                        <label>* Họ và tên </label>
                    </div>
                    <div className='tw-my-2 '>
                        <input type="text"
                            className='tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-p-2'
                            defaultValue={user == null ? ticket?.customer_name : user.name}
                            {...register('customer_name', { required: true })}

                        />
                        {errors.customer_name && (
                            <span className="tw-text-red-500">Bạn chưa điền tên!!!</span>
                        )}
                    </div>
                </div>

                <div className='tw-my-3'>
                    <div className='tw-my-2 tw-uppercase tw-text-xs tw-font-bold'>
                        <label>* Địa chỉ email </label>
                    </div>
                    <div className='tw-my-2 '>
                        <input type="text"
                            className='tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-p-2'
                            defaultValue={user == null ? ticket?.email : user.email}
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
                    <div className='tw-my-2 tw-uppercase tw-text-xs tw-font-bold'>
                        <label>* Số điện thoại </label>
                    </div>
                    <div className='tw-my-2 '>
                        <input type="text"
                            className='tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-p-2'
                            defaultValue={user == null ? ticket?.phone_number : user.phone_number}
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
                    <div className='tw-my-2 tw-uppercase tw-text-xs tw-font-bold'>
                        <label>* Số CMND/CCCD </label>
                    </div>
                    <div className='tw-my-2'>
                        <input type="text"
                            className='tw-w-full tw-rounded-lg tw-border tw-border-gray-300 tw-p-2'
                            defaultValue={user == null ? ticket?.identity_card : user?.identity_card}
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
                                <label className="tw-uppercase tw-text-xs tw-font-bold tw-mb-3">
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
                                className={`tw-p-2 tw-w-44 tw-border tw-border-gray-300`}
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
                    <div className='tw-my-2 tw-uppercase tw-text-xs tw-font-bold'>
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
                                    {qty >= 3 || startDate >= addWeek ? "Đặt cọc 30%" : "Thanh toán bằng tiền mặt"}
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

                <div className='tw-my-3'>
                    <div className='tw-my-2 tw-uppercase tw-text-xs tw-font-bold'>
                        <label> <FontAwesomeIcon icon={faExclamationCircle} /> Những lưu ý trước khi đặt vé </label>
                    </div>
                    <ul className='tw-text-xs'>
                        <li className='tw-pl-2'>- Nếu bạn đặt trước một tuần bạn phải đặt cọc 30% vé</li>
                        <li className='tw-pl-2'>- Bạn phải nhập đúng địa chỉ email của bạn đang dùng</li>
                        <li className='tw-pl-2'>- Khi bạn đặt vé không thanh toán qua VNPAY bạn hãy gọi số <span className='tw-text-red-500 tw-text-sm tw-font-bold'>19001910</span> để 
                        xác nhận giữ vé</li>
                    </ul>
                </div>


                <div className="tw-flex tw-justify-between ">
                <h1 className="tw-font-bold tw-text-xl">Tổng thanh toán</h1>
                <div>
                    <span className="tw-font-bold tw-text-xl">
                        {currentRadioValue === "OFFLINE" && qty >= 3 || currentRadioValue === "OFFLINE" && sucess === true && startDate >= addWeek ? <> {new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(depositPrice)}
                            <span className='tw-text-sm'>(30%)</span> </> : `${new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(totalPrice)}`}
                    </span>
                </div>
            </div>

                <div className="tw-flex tw-mt-6">
                    {checkLocal && currentRadioValue === "OFFLINE" && qty < 3 && startDate < addWeek ? <button
                        type="button"
                        className="tw-w-full tw-p-2 tw-rounded-md tw-bg-red-600 tw-text-white"
                    >
                        Gọi điện cho tổng đài
                    </button> :
                        <button
                            type="submit"
                            className="tw-w-full tw-p-2 tw-rounded-md tw-bg-red-600 tw-text-white"
                        >
                            Đặt vé
                        </button>}

                </div>
            </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </ModalStyled>
  );
};

export default ModalGetInfoTicket;
