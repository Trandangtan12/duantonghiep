// gọi ở đây và lưu dữ liệu lên redux

import React from 'react'
import HttpClient from '../api/axiosClient'
import { API_GET_BUSES } from '../config'

export const BusesService = {
   getAllBuses(){
       return HttpClient.get(API_GET_BUSES)
   }
}
