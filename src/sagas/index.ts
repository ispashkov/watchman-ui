import { all, takeLatest } from "redux-saga/effects"
import { auth, logout } from './auth';
import * as types from '../actions/actionTypes';

function* actionWatcher() {
  yield takeLatest(types.AUTH, auth);
  yield takeLatest(types.LOGOUT, logout);
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ]);
}
