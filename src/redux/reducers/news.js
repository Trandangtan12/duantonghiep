import { ACTION_GET_ALL_NEWS } from "../actions/news";

const initialState = {
    news : []
}

const newsReducers = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_GET_ALL_NEWS:
        return {
          ...state,
          news: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default newsReducers;