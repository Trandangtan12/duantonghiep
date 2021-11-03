import {
  ACTION_GET_ALL_BUSES,
  ACTION_GET_ALL_BUSES_TYPE,
  ACTION_GET_ALL_SERVICE,
} from "../actions/buses";
const initialState = {
  availableBuses: [],
  availableService: [],
  availableBusesTypes: [],
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
    default:
      return state;
  }
};

export default busesReducers;
