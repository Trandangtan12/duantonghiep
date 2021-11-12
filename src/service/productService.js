// gọi ở đây và lưu dữ liệu lên redux
import HttpClient from "../api/axiosClient";
import {
  API_GET_BUSES,
  API_GET_BUSES_TYPE, API_GET_SERVICE,
  API_SEARCH,
  API_TICKET
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
  addTicket(data){
    return HttpClient.post("/ticket", data)
  },
  createVehicel(data){
    return HttpClient.post(`${API_GET_BUSES_TYPE}`,data);
  },
  deleteVehicel(id){
    return HttpClient.delete(`${API_GET_BUSES_TYPE}/${id}`);
  },
  updateVehicel(id,vehicel){
    return HttpClient.put(`${API_GET_BUSES_TYPE}/${id}`,vehicel);
  },
  deleteService(id){
    return HttpClient.delete(`${API_GET_SERVICE}/${id}`);
  },
  updateService(id,service){
    return HttpClient.put(`${API_GET_SERVICE}/${id}`,service);
  },
  createService(data){
    return HttpClient.post(`${API_GET_SERVICE}`,data);
  },
  getService(id){
    return HttpClient.get(`${API_GET_SERVICE}/${id}`);
  },
  getVehicel(id){
    return HttpClient.get(`${API_GET_BUSES_TYPE}/${id}`);
  },
  getAllOder(){
    return HttpClient.get(`${API_TICKET}`)
  }
};
