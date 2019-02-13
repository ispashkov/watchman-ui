import { AuthCredentials } from '../interfaces';
import * as types from './actionTypes';

export const auth = (credentials: AuthCredentials) => ({
  type: types.AUTH,
  payload: credentials
});

export const authSuccess = (payload: any) => ({
  type: types.AUTH_SUCCESS,
  payload
});

export const authFailure = (payload: any) => ({
  type: types.AUTH_FAILURE,
  payload
});

export const logout = () => ({
  type: types.LOGOUT
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
});

export const logoutFailure = ({ payload }: any) => ({
  type: types.LOGOUT_FAILURE,
  payload
});
