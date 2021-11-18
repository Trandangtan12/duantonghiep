import React, { useEffect } from "react";
import { BusesService } from "../../../service/productService";
import failImage from "../../../asset/images/fail.png";
import { useHistory } from "react-router";

const FailPayment = () => {
  const ticket = JSON.parse(localStorage.getItem('ticket'))
  const history = useHistory();
  const handlePaymentAgain = async () =>{
    const res = await BusesService.paymentTicket(ticket.totalPrice)
    if (res.status === 200) {
      window.location.href = res.data.data
    }
  }
  useEffect(() => {
    const updateTicket = async () => {
      await BusesService.rejectTicket(ticket.id);
    };
    updateTicket();
  }, []);
  return (
    <div>
      <div className="tw-flex tw-justify-center tw-p-5">
        <img src={failImage} alt="" className="tw-w-[200px]" />
      </div>
      <div className="tw-flex tw-justify-center">
        <p className="tw-text-2xl">
          Thanh toán thất bại ! Vui lòng thanh toán lại hoặc chọn phương thức
          thanh toán khác
        </p>
      </div>
      <div className="tw-flex tw-justify-center">
        <button
          className="tw-bg-green-600 tw-p-4 tw-mb-3 tw-rounded-md tw-text-white tw-mt-3"
          onClick={() => history.push("/")}
        >
          Trở về trang chủ
        </button>
        <button
          className="tw-bg-green-600 tw-p-4 tw-mb-3 tw-rounded-md tw-text-white tw-mt-3 tw-ml-2"
          onClick={() => {handlePaymentAgain()}}
        >
          Thanh toán lại
        </button>
      </div>
    </div>
  );
};

export default FailPayment;
