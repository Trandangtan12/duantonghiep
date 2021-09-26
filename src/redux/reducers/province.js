import { ACTION_GET_ALL_PROVINCE } from "../actions/province";

const initialState = {
    province : []
}

 const provinceReducers = (state = initialState , action) =>{
    switch (action.type) {
        case ACTION_GET_ALL_PROVINCE:
            return {
                ...state , 
                province : action.payload
            }    
        default:
            return state
    }
}

export default provinceReducers