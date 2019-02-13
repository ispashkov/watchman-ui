import * as types from '../actions/actionTypes';
import { AuthReducer } from '../interfaces'

const initialState: AuthReducer = {
  isLoading: false,
  errors: {
    general: false
  },
  user: null
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case types.AUTH:
      return {
        ...state,
        isLoading: true
      };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload
      };
    case types.AUTH_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case types.LOGOUT:
      return state;
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null
      };
    case types.LOGOUT_FAILURE:
      return state;
    default:
      return state;
  }
}
