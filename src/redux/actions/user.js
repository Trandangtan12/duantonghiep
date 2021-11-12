import { UserApi } from "../../service/userService"

export const ACTION_LOGIN = "ACTION_LOGIN"
export const ACTION_GET_ALL_USERS = "ACTION_GET_ALL_USERS"
// export const login = (user) =>{
//     return async (dispatch) =>{
        
//     }
// }

export const actionGetAllUsers = () =>{
    return async (dispatch) =>{
        const res = await UserApi.getUser()
        if (res.status === 200) {
           const data = res.data || []
           dispatch({
               type : ACTION_GET_ALL_USERS ,
               payload : data || []
           })            
        }
    }
}