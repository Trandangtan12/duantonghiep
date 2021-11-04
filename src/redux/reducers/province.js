import { ACTION_GET_ALL_PROVINCE } from "../actions/province";

const initialState = {
    city : []
}

 const provinceReducers = (state = initialState , action) =>{
    switch (action.type) {
        case ACTION_GET_ALL_PROVINCE:
            return {
                ...state , 
                city : action.payload
            }    
        default:
            return state
    }
}

export default provinceReducers