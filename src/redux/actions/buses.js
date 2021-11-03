//tạo các action creator ở đây

import { BusesService } from "../../service/productService"

export const ACTION_GET_ALL_BUSES = "ACTION_GET_ALL_BUSES"
export const ACTION_GET_ALL_SERVICE = "ACTION_GET_ALL_SERVICE"
export const ACTION_GET_ALL_BUSES_TYPE = "ACTION_GET_ALL_BUSES_TYPE"
export const actionGetBuses = () =>{
    return async (dispatch) =>{
        const res = await BusesService.getAllBuses()
        if (res.status !== 200 || res.data === []) {
            return
        }
        else{
            dispatch({
                type : ACTION_GET_ALL_BUSES,
                payload : res.data
            })
        }
    }
}

export const actionGetService = () =>{
    return async (dispatch) =>{
        const res = await BusesService.getALlService()
        if (res.status !== 200 || res.data === []) {
            return
        }
        else{
            dispatch({
                type : ACTION_GET_ALL_SERVICE,
                payload : res.data
            })
        }
    }
}


export const actionGetAllBusesTypes = () =>{
    return async (dispatch) =>{
        const res = await BusesService.getALlBusesType()
        if (res.status !== 200 || res.data === []) {
            return
        }
        else{
            dispatch({
                type : ACTION_GET_ALL_BUSES_TYPE,
                payload : res.data
            })
        }
    }
}