// gọi ở đây và lưu dữ liệu lên redux
import HttpClient from '../api/axiosClient';
import { API_GET_BUSES, API_GET_IMAGE } from '../config';
import { v4 as uuidv4 } from 'uuid';
export const BusesService = {
   getAllBuses(){
       return HttpClient.get(`${API_GET_BUSES}`)
   },
   deleteBuses(id){
       return HttpClient.delete(`${API_GET_BUSES}/${id}`)
   },
   addBuses(buses){
       return HttpClient.post(API_GET_BUSES , buses)
   }
}
