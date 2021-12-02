import { ACTION_GET_ALL_PROVINCE, ACTION_GET_ALL_WARD_PROVINCE } from "../actions/province";

const initialState = {
    city: [],
    ward: []
}

const provinceReducers = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_GET_ALL_PROVINCE:
            return {
                ...state,
                city: action.payload
            }
        case ACTION_GET_ALL_WARD_PROVINCE:
            return {
                ...state,
                ward: action.payload
            }
        default:
            return state
    }
}

export default provinceReducers