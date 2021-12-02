import { NewsService } from "../../service/news"

export const ACTION_GET_ALL_NEWS = "ACTION_GET_ALL_NEWS"

export const actionGetNews = () =>{
    return async (dispatch) =>{
        const res = await NewsService.getAllNews()
        if (res.status === 200) {
            dispatch({
                type : ACTION_GET_ALL_NEWS,
                payload : res.data
            })
        }
    }
}