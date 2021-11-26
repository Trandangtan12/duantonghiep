import React, { useEffect } from "react";
import { BusesService } from "../../../service/productService";
import successImage from "../../../asset/images/success.png";
import { useHistory } from "react-router";
const SuccessPayment = () => {
  const history = useHistory()
  const ticket = JSON.parse(localStorage.getItem('ticket'))
  useEffect(() => {
    const updateTicket = async () => {
      const deposit = localStorage.getItem("deposit")
      console.log(deposit);
      const paymentMethod = localStorage.getItem("paymentMethod")
      if (deposit === 'true') {
        await BusesService.depositedTicket(ticket.id)
      }
      else if(deposit === 'false' && paymentMethod === "ATM"){
        await BusesService.approvalTicket(ticket.id);
      }   
    };
    const sendEmail = async () =>{
      await BusesService.sendEmail(ticket.id)
    }
    updateTicket();
    sendEmail()
  }, []);
  return (
    <div>
      <div className="tw-flex tw-justify-center tw-p-5">
        <img src={successImage} alt="" className="tw-w-[200px]" />
      </div>
      <div className="tw-flex tw-justify-center">
        <p className="tw-text-2xl">
          Thanh toán thanh công ! đơn hàng sẽ được gửi đến email của bạn sau ít
          phút
        </p>
      </div>
      <div className="tw-flex tw-justify-center">
        <button className="tw-bg-green-600 tw-p-4 tw-mb-3 tw-rounded-md tw-text-white tw-mt-3" onClick={()=> history.push("/")}>
          Trở về trang chủ
        </button>
      </div>
    </div>
  );
};

export default SuccessPayment;
