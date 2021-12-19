// gọi ở đây và lưu dữ liệu lên redux
import HttpClient from "../api/axiosClient";
import {
  API_EXPORT,
  API_GET_BUSES,
  API_GET_BUSES_TYPE,
  API_GET_SERVICE,
  API_PAYMENT,
  API_SEARCH,
  API_SEARCH_TICKET,
  API_SEND_EMAIL,
  API_TICKET,
} from "../config";
export const BusesService = {
  getAllBuses() {
    return HttpClient.get(`${API_GET_BUSES}`);
  },
  getIdBuses(id) {
    return HttpClient.get(`${API_GET_BUSES}/${id}`);
  },
  deleteBuses(id) {
    return HttpClient.delete(`${API_GET_BUSES}/${id}`);
  },

  addBuses(buses) {
    return HttpClient.post(API_GET_BUSES, buses);
  },
  getInfoBuses(id) {
    return HttpClient.get(`${API_GET_BUSES}/${id}`);
  },
  updateBusses(id, busses) {
    return HttpClient.put(`${API_GET_BUSES}/${id}`, busses);
  },
  getALlService() {
    return HttpClient.get(`${API_GET_SERVICE}`);
  },
  getALlBusesType() {
    return HttpClient.get(`${API_GET_BUSES_TYPE}`);
  },
  searchBuses(start, end) {
    return HttpClient.get(
      `${API_SEARCH}?startPointId=${start}&endPointId=${end}`
    );
  },
  searchTicketCode(ticket_code) {
    return HttpClient.get(`${API_SEARCH_TICKET}?ticket_code=${ticket_code}`)
  },
  addTicket(data) {
    return HttpClient.post("/ticket", data);
  },
  createVehicel(data) {
    return HttpClient.post(`${API_GET_BUSES_TYPE}`, data);
  },
  deleteVehicel(id) {
    return HttpClient.delete(`${API_GET_BUSES_TYPE}/${id}`);
  },
  updateVehicel(id, vehicel) {
    return HttpClient.put(`${API_GET_BUSES_TYPE}/${id}`, vehicel);
  },
  deleteService(id) {
    return HttpClient.delete(`${API_GET_SERVICE}/${id}`);
  },
  updateService(id, service) {
    return HttpClient.put(`${API_GET_SERVICE}/${id}`, service);
  },
  createService(data) {
    return HttpClient.post(`${API_GET_SERVICE}`, data);
  },
  getService(id) {
    return HttpClient.get(`${API_GET_SERVICE}/${id}`);
  },
  getVehicel(id) {
    return HttpClient.get(`${API_GET_BUSES_TYPE}/${id}`);
  },
  getAllOder() {
    return HttpClient.get(`${API_TICKET}`);
  },
  getInfoTicket(id) {
    return HttpClient.get(`${API_TICKET}/${id}`);
  },
  updateTicket(id, data) {
    return HttpClient.put(`${API_TICKET}/${id}`, data);
  },
  approvalTicket(id) {
    return HttpClient.put(`${API_TICKET}/${id}`, { status: "ACTIVED" });
  },
  rejectTicket(id) {
    return HttpClient.put(`${API_TICKET}/${id}`, { status: "REJECTED" });
  },
  depositedTicket(id) {
    return HttpClient.put(`${API_TICKET}/${id}`, { status: "DEPOSIT" });
  },
  reservationTicket(id) {
    return HttpClient.put(`${API_TICKET}/${id}`, { status: "RESERVATION" });
  },
  doneTicket(id) {
    return HttpClient.put(`${API_TICKET}/${id}`, { status: "DONE" });
  },
  inActiveTicket(id) {
    return HttpClient.put(`${API_TICKET}/${id}`, { status: "WAITING_ACTIVE" });
  },
  inWatingActiveTicket(id) {
    return HttpClient.put(`${API_TICKET}/${id}`, { status: "UNCONFIMRED" });
  },
  deleteTicket(id) {
    return HttpClient.delete(`${API_TICKET}/${id}`);
  },
  exportListTicket(today) {
    return HttpClient.get(`${API_EXPORT}?today=${today}`, {
      responseType: "arraybuffer",
    });
  },
  exportAboutDays(startDate, endDate) {
    return HttpClient.get(`${API_EXPORT}?from_date=${startDate}&to_date=${endDate}`, {
      responseType: "arraybuffer",
    });
  },
  sendEmail(id) {
    return HttpClient.post(`${API_SEND_EMAIL}`, {
      id: id,
    });
  },
  paymentTicket(price) {
    return HttpClient.post(`${API_PAYMENT}`, {
      amount: price,
      order_desc: "Thanh toán hóa đơn nhà xe sixleaf",
      order_type: "billpayment",
      language: "vn",
      bank_code: "NCB",
    });
  },
  getBussesByTime(start, end, start_time) {
    return HttpClient.get(
      `${API_SEARCH}?startPointId=${start}&endPointId=${end}&start_time=${start_time}`
    );
  },
  deActivedBuses(id) {
    return HttpClient.put(`${API_GET_BUSES}/${id}`, {
      status: "WAITING_ACTIVE"
    })
  },
  activedBuses(id) {
    return HttpClient.put(`${API_GET_BUSES}/${id}`, {
      status: "ACTIVED"
    })
  }
  // successTicket(){
  //   return HttpClient.post(`${API_SEND_EMAIL}`, {
  //     id: id,
  //   });
  // }
};
