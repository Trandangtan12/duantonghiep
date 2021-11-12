import { ACTION_LOGIN } from "../../pages/public/User/signin";

const initialState = {
    user : {}
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_LOGIN:
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducers;