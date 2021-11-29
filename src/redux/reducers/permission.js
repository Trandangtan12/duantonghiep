import { ACTION_GET_ALL_PERMISSION, ACTION_GET_ALL_ROLE } from "../actions/permission";

const initialState = {
  availableRole: [],
  availablePermission: [],
};

const roleReducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_GET_ALL_ROLE:
      return {
        ...state,
        availableRole: action.payload,
      };
    case ACTION_GET_ALL_PERMISSION:
      return {
        ...state,
        availablePermission: action.payload,
      };
    default:
      return state;
  }
};

export default roleReducers;
