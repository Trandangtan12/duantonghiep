import { Dialog, Transition } from "@headlessui/react";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import { BusesService } from "../../../service/productService";
import { UserApi } from "../../../service/userService";
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
  const addToday = moment(TODAY).add(1, "days")
  const addTodayFormat = moment(addToday).format("yyyy-MM-DD")
  const todayFormatMoment = new Date(addTodayFormat)
  // const [hiddenCancel, setHiddenCancel] = useState()
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
          quantity: qty,
          totalPrice: totalPrice,
          paymentMethod: currentRadioValue,
          depositAmount: 0,
        }
        const resTicket = await BusesService.addTicket(ticket)
        if (resTicket.status === 201 || resTicket.status === 200) {
          localStorage.setItem('ticket', JSON.stringify(resTicket.data))
        }
        if (emp < 0) {
          alert("Hết ghế trống!!!")
        } else {
          localStorage.setItem('ticket', JSON.stringify(resTicket.data))
          history.push("/payment/success")
          setIsOpenModal(false);
          await BusesService.updateBusses(product.id, updateBuses)
        }

      } else if (currentRadioValue === "OFFLINE" && qty >= 3) {
        localStorage.setItem('deposit', true)
        localStorage.setItem('paymentMethod', "OFFLINE")
        const ticket = {
          ...data,
          quantity: qty,
          totalPrice: totalPrice,
          paymentMethod: currentRadioValue,
          status: "WAITING_ACTIVE",
          depositAmount: depositPrice,
        }
        const resTicket = await BusesService.addTicket(ticket)
        if (resTicket.status === 201 || resTicket.status === 200) {
          localStorage.setItem('ticket', JSON.stringify(resTicket.data))
        }
        const res = await BusesService.paymentTicket(depositPrice)
        if (res.data.message === "success") {
          window.location.href = res.data.data
        }
        if (emp < 0) {
          alert("Hết ghế trống!!!")
        } else {
          setIsOpenModal(false);
          await BusesService.updateBusses(product.id, updateBuses)
        }

      }
      else if (
        currentRadioValue === "OFFLINE" && sucess === true) {
        localStorage.setItem('deposit', true)
        localStorage.setItem('paymentMethod', "OFFLINE")
        const ticket = {
          ...data,
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
        }
        const res = await BusesService.paymentTicket(depositPrice)
        if (res.data.message === "success") {
          window.location.href = res.data.data
        }
        if (emp < 0) {
          alert("Hết ghế trống!!!")
        } else {
          setIsOpenModal(false);
          await BusesService.updateBusses(product.id, updateBuses)
        }

      }
      else if (currentRadioValue === "ATM" && sucess === true) {
        localStorage.setItem('deposit', false)
        localStorage.setItem('paymentMethod', "ATM")
        const ticket = {
          ...data,
          quantity: qty,
          totalPrice: totalPrice,
          paymentMethod: currentRadioValue,
          reservationTime: startDate
        }
        console.log("Thanh toán VPN", ticket);
        const resTicket = await BusesService.addTicket(ticket)
        if (resTicket.status === 201 || resTicket.status === 200) {
          localStorage.setItem('ticket', JSON.stringify(resTicket.data))
        }
        const res = await BusesService.paymentTicket(totalPrice)
        if (res.data.message === "success") {
          window.location.href = res.data.data
        }
        if (emp < 0) {
          alert("Hết ghế trống!!!")
        } else {
          setIsOpenModal(false);
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
          buses_id : product.id
        }
        const resTicket = await BusesService.addTicket(ticket)
        if (resTicket.status === 201 || resTicket.status === 200) {
          localStorage.setItem('ticket', JSON.stringify(resTicket.data))
        }
        const res = await BusesService.paymentTicket(totalPrice)
        if (res.data.message === "success") {
          window.location.href = res.data.data
        }
        if (emp < 0) {
          alert("Hết ghế trống!!!")
        } else {
          setIsOpenModal(false);
          await BusesService.updateBusses(product.id, updateBuses)
        }
      }
    } catch (error) {
      setIsOpenModal(true);
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
              <div className="tw-inline-block tw-w-full tw-max-w-lg tw-p-6 tw-my-8 tw-overflow-hidden tw-text-left tw-align-middle tw-transition-all tw-transform tw-bg-white tw-shadow-xl tw-rounded-2xl">
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
               
                <form className="tw-w-full tw-max-w-lg" onSubmit={handleSubmit(handlePayTicket)}>
                  <input type="hidden" {...register("user_id")} defaultValue={user == null ? "" : user.id} />
                  <input type="hidden" {...register("buses_id")} defaultValue={product.id} />
                  <input type="hidden" {...register("status")} defaultValue="WAITING_ACTIVE" />
                  <div className="tw-flex tw-flex-wrap tw-mb-3">
                    <div className="tw-w-full tw-mb-6 md:tw-mb-3">
                      <label
                        className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                        htmlFor="grid-first-name"
                      >
                        * Họ và tên
                      </label>
                      <input
                        className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                        id="grid-first-name"
                        type="text"
                        defaultValue={user == null ? "" : user.name}
                        placeholder="Tên hành khách"
                        {...register('customer_name', { required: true })}

                      />
                      {errors.customer_name && (
                        <span className="tw-text-red-500">Bạn chưa điền tên!!!</span>
                      )}
                    </div>


                    <div className="tw-w-full tw-mb-6">
                      <label
                        className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                        htmlFor="grid-first-name"
                      >
                        * Email
                      </label>
                      <input
                        className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border  tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Nhập email"
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


                    <div className="tw-flex tw-justify-between tw-w-full">
                      <div className="tw-w-full tw-mb-6 md:tw-mb-3 tw-mr-3">
                        <label
                          className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                          htmlFor="grid-last-name"
                        >
                          * Số điện thoại
                        </label>
                        <input
                          className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white focus:tw-border-gray-500"
                          id="grid-last-name"
                          type="text"
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

                      <div className="tw-w-full tw-mb-6 md:tw-mb-3">
                        <label
                          className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                          htmlFor="grid-password"
                        >
                          * Số CMND/CCDD
                        </label>
                        <input
                          className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white focus:tw-border-gray-500"
                          id="grid-last-name"
                          type="text"
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
                  </div>


                  <div className="tw-flex tw-w-full tw-items-center tw-justify-between tw-mb-6">
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
                      <label
                        className="tw-uppercase tw-text-green-500 tw-cursor-pointer no-underline 
                        tw-tracking-wide tw-text-xs tw-font-bold tw-mb-5"
                        htmlFor="grid-password"
                        onClick={() => {
                          setHidden(!hidden)
                        }}
                      >
                        {hidden === false ? <p>{sucess === true ?
                          <span>Đã chọn ngày đi!!! Nếu bạn muốn sửa hãy Click vào đây</span> 
                          :"Click vào đây để Đặt trước"}
                        </p>
                          : <p>
                            <span className="tw-mr-2" onClick={() => {
                              setStartDate(startDate)
                              setSucess(true)
                            }}>
                              Đồng ý
                            </span>
                            <span className=" tw-text-red-500" onClick={() => {
                              setStartDate(startDate)
                              setSucess(false)
                            }}>Hủy</span>
                          </p>}
                      </label>
                      <p className={`${hidden === false ? "tw-block tw-py-2" : "tw-hidden"}`}>

                        {sucess === true ? moment(startDate).format("DD/MM/yyy HH:mm") :
                          moment(TODAY).format("DD/MM/yyy HH:mm")}
                      </p>
                      <div className={`${hidden ? "tw-block" : "tw-hidden tw-p-0"}`}>
                        <DatePicker
                          className={`tw-p-2 tw-border tw-border-gray-300`}
                          onChange={(date) => setStartDate(date)}
                          dateFormat="dd/MM/yyyy HH:mm"
                          showTimeSelect
                          minDate={todayFormatMoment}
                          selected={startDate} />
                      </div>

                    </div>
                  </div>

                  <div>
                    <label
                      className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                      htmlFor="grid-password"
                    >
                      Ghi chú
                    </label>
                    <textarea className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white focus:tw-border-gray-500" rows="5"  {...register('description')}></textarea>
                  </div>

                  <div className="tw-my-6">
                    <p className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2">Chọn phương thức thanh toán</p>
                    <div className="tw-flex ">

                      <div className="tw-mr-4">
                        <input
                          type="radio"
                          id="OFFLINE"
                          name="payMoney"
                          value="OFFLINE"
                          onChange={(e) => setCurrentRadioValue(e.target.value)}
                          defaultChecked={currentRadioValue === "OFFLINE"} />
                        <label for="OFFLINE">
                          {qty >= 3 || sucess === true && TODAY !== startDate ? "Đặt cọc 30%" : "Thanh toán bằng tiền mặt"}
                        </label></div>

                      <div>
                        <input type="radio" id="ATM" name="payMoney" value="ATM"
                          onChange={(e) => setCurrentRadioValue(e.target.value)}
                          defaultChecked={currentRadioValue === "ATM"} />
                        <label for="ATM">
                          Thanh toán qua VNPAY
                        </label>
                      </div>



                    </div>


                  </div>

                  <div className="tw-flex tw-justify-between tw-align-middle tw-mt-2">
                    <div className="tw-text-xl"> Tổng tiền</div>
                    <div> {currentRadioValue === "OFFLINE" && qty >= 3 ||currentRadioValue === "OFFLINE" && sucess === true && TODAY !== startDate ?  `${new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(depositPrice)}` : `${new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(totalPrice)}`}
                    </div>
                  </div>
                  <button type="submit" className="tw-w-full tw-mt-2 tw-bg-green-500 tw-p-3 tw-rounded-md tw-text-white">Xác nhận</button>
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
