import { ACTION_GET_ALL_BUSES } from "../actions/buses";
const initialState = {
      availableBuses : []
}
 const busesReducers = (state = initialState , action) =>{
    switch (action.type) {
        case ACTION_GET_ALL_BUSES:
            return {
                ...state , 
                availableBuses : action.payload
            }    
        default:
            return state
    }
}

export default busesReducers