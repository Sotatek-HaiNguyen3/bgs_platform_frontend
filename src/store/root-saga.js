import { all } from "redux-saga/effects";
import { watchCount } from "./home/sagas";
import { watchAuth } from "./auth/sagas";

export default function* rootSaga() {
  yield all([watchCount(), watchAuth()]);
}
