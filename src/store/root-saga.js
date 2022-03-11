import { all } from "redux-saga/effects"
import { watchCount } from './home/sagas'

export default function* rootSaga() {
    yield all([
        watchCount()
    ])
}