import { createPortal } from "react-dom"
import HttpClient from "../api/axiosClient"
import { API_GET_ALL_PERMISSION, API_ROLE } from "../config"

export const PermissionService = {
    getAllRole(){
        return HttpClient.get(`${API_ROLE}`)
    },
    createRole(data){
        return HttpClient.post(`${API_ROLE}` ,data)
    },
    getAllPermission(){
        return HttpClient.get(`${API_GET_ALL_PERMISSION}`)
    }
}