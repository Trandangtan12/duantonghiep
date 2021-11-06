// gọi ở đây và lưu dữ liệu lên redux
import HttpClient from "../api/axiosClient";
import {
  API_GET_BUSES,
  API_GET_BUSES_TYPE, API_GET_SERVICE,
  API_SEARCH
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
  searchBuses(start , end){
    return HttpClient.get(`${API_SEARCH}?startPointId=${start}&endPointId=${end}`)
  },
  addOder(order){
    return HttpClient.post("/order", order)
  },
  addCart(id, cart) {
    return HttpClient.patch(`/users/${id}`, {cart})
  }
};
