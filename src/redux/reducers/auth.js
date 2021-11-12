import { ACTION_LOGIN } from "../../pages/public/User/signin";
import { ACTION_GET_ALL_USERS } from "../actions/user";

const initialState = {
    user : {},
    avaibleUsers : []
}

const authReducers = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_LOGIN:
        return {
          ...state,
          user: action.payload,
        };
      case ACTION_GET_ALL_USERS :
        return{
          ...state ,
          avaibleUsers : action.payload
        }
      default:
        return state;
    }
  };
  
  export default authReducers;