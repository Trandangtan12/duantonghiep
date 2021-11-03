// gọi ở đây và lưu dữ liệu lên redux
import HttpClient from "../api/axiosClient";
import {
  API_GET_BUSES,
  API_GET_BUSES_TYPE,
  API_GET_IMAGE,
  API_GET_SERVICE,
} from "../config";
import { v4 as uuidv4 } from "uuid";
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
};
