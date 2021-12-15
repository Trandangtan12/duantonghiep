import HttpClient from '../api/axiosClient'
import { API_STATISTICAL_DEFAULT, API_STATISTICAL, API_STATISTICAL_BY_ABOUT_DATE } from '../config'

export const statisticalService ={
    getDataByAboutDate(start,end){
        return HttpClient.post(`${API_STATISTICAL_BY_ABOUT_DATE}?date_from=${start}&date_to=${end}`)
    },
    getDataByAboutDay(day){
        return HttpClient.post(`${API_STATISTICAL}?date_loc=${day}`)
    },
    getDataBy30Day(){
        return HttpClient.get(`${API_STATISTICAL_DEFAULT}`)
    }
}
