import { ACTION_LOGIN } from "../../pages/public/User/signin";
import { ACTION_GET_ALL_RATING } from "../actions/rating";

const initialState = {
    rating : []
}

const ratingReducers = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_GET_ALL_RATING:
        return {
          ...state,
          rating: action.payload || [],
        };
      default:
        return state;
    }
  };
  
  export default ratingReducers;