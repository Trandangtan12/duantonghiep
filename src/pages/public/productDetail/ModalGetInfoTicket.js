import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../../../compornent/admin/input/Input";
import { UserApi } from "../../../service/userService";
import { BusesService } from "../../../service/productService";
const ModalStyled = styled.div`
`
export const InputNumberStyle = styled.div`
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button { 
	-webkit-appearance: none;
}
`
const ModalGetInfoTicket = ({ isOpen, setIsOpenModal , product }) => {
  // const {user} = useSelector(state => state.auth)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({

  });
  function closeModal() {
    setIsOpenModal(false);
  }
  const [qty, setQty] = useState(1)
  const Increase = () => {
    setQty(qty + 1)
  }
  const Decrease = () => {
    if(qty <= 1) {

    }else {
      setQty(qty - 1)
    }
  }
  const totalPrice = product.price * qty
  const handlePayTicket = async (data) => {
    const ticket = {...data, quantity: qty, totalPrice: totalPrice}
    console.log(ticket);
    try {
      await BusesService.addTicket(ticket)
    } catch (error) {
      console.log(error.response.data.message);
    }
    
  }
  
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
              <div className="tw-inline-block tw-w-full tw-max-w-md tw-p-6 tw-my-8 tw-overflow-hidden tw-text-left tw-align-middle tw-transition-all tw-transform tw-bg-white tw-shadow-xl tw-rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900"
                >
                  Thông tin thanh toán
                </Dialog.Title>
                <form className="tw-w-full tw-max-w-lg" onSubmit={handleSubmit(handlePayTicket)}>
                  <input type="hidden" {...register("buses_id")} defaultValue={product.id}/>
                  <input type="hidden" {...register("status")} defaultValue="WAITING_ACTIVE"/>
                  <div className="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
                    <div className="tw-w-full tw-px-3 tw-mb-6 md:tw-mb-0">
                      <label
                        className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                        htmlFor="grid-first-name"
                      >
                        Họ và tên
                      </label>
                      <input
                        className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                        id="grid-first-name"
                        type="text"
                        // defaultValue={user.name}
                        placeholder="Tên hành khách"
                        {...register('customer_name')}
                        
                      />
                    </div>


                    <div className="tw-w-full tw-px-3 tw-mb-6 md:tw-mb-0">
                      <label
                        className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                        htmlFor="grid-first-name"
                      >
                        Email
                      </label>
                      <input
                        className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border  tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Nhập email"
                        // defaultValue={user.email}
                        {...register('email')}
                      />
                    </div>

                    <div className="tw-w-full  tw-px-3">
                      <label
                        className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                        htmlFor="grid-last-name"
                      >
                        Số điện thoại
                      </label>
                      <input
                        className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white focus:tw-border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Số điện thoại"
                        // defaultValue={user.phoneNumber}
                        {...register('phone_number')}
                      />
                    </div>
                  </div>
                  
                  <div className="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
                    <div className="tw-w-full tw-px-3">
                      <label
                        className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                        htmlFor="grid-password"
                      >
                        Số CMND/CCDD
                      </label>
                      <input
                        className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white focus:tw-border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Nhập số cmnd"
                        {...register('identity_card')}
                      />
                    </div>
                  </div>

                  <div className="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
                    <div className="tw-w-full tw-px-3">
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
                  <div className="tw-flex tw-justify-between tw-align-middle tw-mt-2">
                  <div className="tw-text-xl">Tổng tiền</div>
                  <div>{totalPrice}đ</div>
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
