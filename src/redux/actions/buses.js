//tạo các action creator ở đây

import { BusesService } from "../../service/productService"

export const ACTION_GET_ALL_BUSES = "ACTION_GET_ALL_BUSES"
export const actionGetBuses = () =>{
    return async (dispatch) =>{
        const res = await BusesService.getAllBuses()
        if (res.status !== 200 || res.data === []) {
            return
        }
        else{
            dispatch({
                type : ACTION_GET_ALL_BUSES,
                payload : res.data.product
            })
        }
    }
}