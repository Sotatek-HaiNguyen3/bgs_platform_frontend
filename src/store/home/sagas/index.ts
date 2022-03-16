import { delay, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';

export function* handleDecrementSaga(_: any) {
  try {
    yield delay(500);
    yield put(actions.decrementSuccess({}));
  } catch (error) {
    console.log(error);
  }
}

export function* handleIncrementSaga(_: any) {
  try {
    yield delay(500);
    yield put(actions.incrementSuccess({}));
  } catch (error) {
    console.log(error);
  }
}

export function* watchCount() {
  yield takeLatest(actions.DECREMENT, handleDecrementSaga);
  yield takeLatest(actions.INCREMENT, handleIncrementSaga);
}
