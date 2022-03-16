import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import * as actionTypes from '../actions/types';
import { loginUsernameEffect } from '../effects';

export function* authLoginSaga(action: any): Generator<any> {
  try {
    const { data } = (yield call(loginUsernameEffect, action.loginData)) as any;
    console.log(data);
    yield put(actions.authLoginSuccessAction({}));
  } catch (error) {
    yield put(actions.authLoginFailedAction(error));
  }
}

export function* watchAuth() {
  yield takeLatest(actionTypes.AUTH_LOGIN, authLoginSaga);
}
