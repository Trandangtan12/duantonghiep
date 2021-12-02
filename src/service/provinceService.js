import ProvinceAPI from "../api/provinceAPI";
import { API_GET_ALL_CITY, API_GET_ALL_WARD, API_GET_DISTRICTS, API_GET_PROVINCE, API_GET_WARD } from "../config";
import { v4 as uuidv4 } from "uuid";
export const ProvinceService = {
  getAllCity() {
    return ProvinceAPI.get(API_GET_ALL_CITY);
  },
  getDistrict(id) {
    return ProvinceAPI.get(`${API_GET_DISTRICTS}/${id}?depth=2`);
  },
  getWard(id){
    return ProvinceAPI.get(`${API_GET_WARD}/${id}?depth=2`);
  },
  getAllWard() {
    return ProvinceAPI.get(API_GET_ALL_WARD);
  }
};
