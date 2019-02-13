import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from '../utils/axios';
import { authSuccess, authFailure, logoutSuccess, logoutFailure } from '../actions/auth';
import * as routes from '../constants/routes';
import AuthService from '../services/Auth';

export function* auth({ payload }: any) {
  try {
    const { data: { token, header, user } } = yield call(axios.post, '/api/auth', payload);

    AuthService.saveToken(token, header);

    yield put(authSuccess(user));
    yield put(push(routes.home.path))
  } catch (e) {
    yield put(authFailure(e.message))
  }
};

export function* logout() {
  try {
    yield call(axios.get, '/api/logout');

    yield put(logoutSuccess());
    AuthService.removeToken();

    yield put(push(routes.auth.path))
  } catch (e) {
    yield put(logoutFailure(e.message))
  }

}
