import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/types";
import * as actions from "../actions";
import { loginUsernameEffect } from "../effects";

export function* authLoginSaga(action) {
  try {
    const { data } = yield call(loginUsernameEffect(action.loginData));
    console.log(data);
    yield put(actions.authLoginSuccessAction());
  } catch (error) {
    yield put(actions.authLoginFailedAction(error));
  }
}

export function* watchAuth() {
  yield takeLatest(actionTypes.AUTH_LOGIN, authLoginSaga);
}
