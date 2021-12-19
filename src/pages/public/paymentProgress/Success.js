import React, { useEffect } from "react";
import { BusesService } from "../../../service/productService";
import successImage from "../../../asset/images/success.png";
import { useHistory } from "react-router";
const SuccessPayment = () => {
  const history = useHistory()
  const ticket = JSON.parse(localStorage.getItem('ticket'))
  const sendEmail = async () =>{
    await BusesService.sendEmail(ticket?.id)
  }
  useEffect(() => {
    if (ticket === undefined || ticket === null) {
      history.push("/")
    }
    const updateTicket = async () => {
      // lấy trạng thái đặt trước với phương thức thanh toán từ local 
      const deposit = localStorage.getItem("deposit")
      const paymentMethod = localStorage.getItem("paymentMethod")
      const reservation = localStorage.getItem("reservation")
      // đặt cọc
      if (paymentMethod === "OFFLINE" && reservation === 'true' && deposit === 'true') {
        await BusesService.reservationTicket(ticket?.id)
        sendEmail()
        localStorage.removeItem('ticket')
        localStorage.removeItem('paymentMethod')
        localStorage.removeItem('deposit')
        localStorage.removeItem('reservation')
        localStorage.removeItem('ticketLocal')
        return
      }
      if (paymentMethod === "ATM" && reservation === 'true') {
        const data = {
          status : "RESERVATION",
          depositAmount : ticket?.totalPrice
        }
        await BusesService.updateTicket(ticket?.id, data)
        sendEmail()
        localStorage.removeItem('ticket')
        localStorage.removeItem('ticketLocal')
        localStorage.removeItem('paymentMethod')
        localStorage.removeItem('deposit')
        localStorage.removeItem('reservation')
        return
      }
      //atm deposit
      else if(paymentMethod === "ATM" && deposit === 'true' && reservation === 'false'){
        await BusesService.depositedTicket(ticket?.id);
        sendEmail()
        localStorage.removeItem('ticket')
        localStorage.removeItem('paymentMethod')
        localStorage.removeItem('deposit')
        localStorage.removeItem('reservation')
        localStorage.removeItem('ticketLocal')
        return
      }
      // offline deposit 
      else if(paymentMethod === "OFFLINE" && deposit === 'true' && reservation === 'false'){
        await BusesService.depositedTicket(ticket?.id);
        sendEmail()
        localStorage.removeItem('ticket')
        localStorage.removeItem('paymentMethod')
        localStorage.removeItem('deposit')
        localStorage.removeItem('reservation')
        localStorage.removeItem('ticketLocal')
        return
      }
      /// atm desposit  reservation
      else if(paymentMethod === "OFFLINE" && deposit === 'false' && reservation === 'true'){
        await BusesService.reservationTicket(ticket?.id);
        sendEmail()
        localStorage.removeItem('ticket')
        localStorage.removeItem('paymentMethod')
        localStorage.removeItem('deposit')
        localStorage.removeItem('reservation')
        localStorage.removeItem('ticketLocal')
        return
      }
       else if(paymentMethod === "ATM" && deposit === 'false' && reservation === 'true'){
        const data = {
          status : "RESERVATION",
          depositAmount : ticket?.totalPrice
        }
        await BusesService.updateTicket(ticket?.id, data)
        sendEmail()
        localStorage.removeItem('ticket')
        localStorage.removeItem('paymentMethod')
        localStorage.removeItem('deposit')
        localStorage.removeItem('reservation')
        localStorage.removeItem('ticketLocal')
        return
      }
      // atm
      else if(paymentMethod === "ATM" && deposit === 'false' && reservation === 'false'){
        await BusesService.approvalTicket(ticket?.id);
        sendEmail()
        localStorage.removeItem('ticket')
        localStorage.removeItem('paymentMethod')
        localStorage.removeItem('deposit')
        localStorage.removeItem('reservation')
        localStorage.removeItem('ticketLocal')
        return
      }
      // offline
      else if(paymentMethod === "OFFLINE"  && deposit === 'false' && reservation === 'false' ){
        await BusesService.inWatingActiveTicket(ticket?.id)
        // localStorage.removeItem('ticket')
        // localStorage.removeItem('paymentMethod')
        return
      }   
    };
    updateTicket();
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
