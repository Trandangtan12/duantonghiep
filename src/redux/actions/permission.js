import { PermissionService } from "../../service/permissionService"

export const ACTION_GET_ALL_ROLE = "ACTION_GET_ALL_ROLE"
export const ACTION_GET_ALL_PERMISSION = "ACTION_GET_ALL_PERMISSION"
export const actionGetAllRole = () =>{
    return async (dispatch) =>{
        const res = await PermissionService.getAllPermission()
        if (res.status === 200) {
            dispatch({
                type : ACTION_GET_ALL_ROLE,
                payload : res.data
            })
        }
    }
}

export const getAllPermission = () =>{
    return async (dispatch) =>{
        const res = await PermissionService.getAllRole()
        if (res.status === 200) {
            dispatch({
                type : ACTION_GET_ALL_PERMISSION,
                payload : res.data
            })
        }
    }
}