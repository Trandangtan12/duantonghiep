import {
  ACTION_GET_ALL_BUSES,
  ACTION_GET_ALL_BUSES_TYPE,
  ACTION_GET_ALL_SERVICE,
  ACTION_GET_ORDER,
  ACTION_SEARCH_BUSES,
  ACTION_SEARCH_TICKET,
} from "../actions/buses";
const initialState = {
  availableBuses: [],
  availableService: [],
  availableBusesTypes: [],
  availableSearch : [],
  availableOrder : [],
  availableSearchTicket: []
};
const busesReducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_GET_ALL_BUSES:
      return {
        ...state,
        availableBuses: action.payload,
      };
    case ACTION_GET_ALL_SERVICE:
      return {
        ...state,
        availableService: action.payload,
      };
    case ACTION_GET_ALL_BUSES_TYPE:
      return {
        ...state,
        availableBusesTypes: action.payload,
      };
    case ACTION_SEARCH_BUSES :
      return{
        ...state , 
        availableSearch : action.payload
      }
    case ACTION_GET_ORDER:
      return{
        ...state,
        availableOrder : action.payload
      }
      case ACTION_SEARCH_TICKET: 
      return {
        ...state,
        availableSearchTicket: action.payload
      }
    default:
      return state;
  }
};

export default busesReducers;
