import { ratingService } from "../../service/rating"

export const ACTION_GET_ALL_RATING = "ACTION_GET_ALL_RATING"

export const getAllRating = () =>{
    return async (dispatch) =>{
        const res = await ratingService.getAllRating()
        if (res.status === 200) {
            dispatch({
                type : ACTION_GET_ALL_RATING , 
                payload : res.data || []
            })
        }
    }
}