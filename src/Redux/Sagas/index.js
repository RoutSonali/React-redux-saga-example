import { all } from 'redux-saga/effects';
import userSaga from "./usersSagas";

export default function* rootSaga() {
    yield all([
        userSaga()
    ])
}