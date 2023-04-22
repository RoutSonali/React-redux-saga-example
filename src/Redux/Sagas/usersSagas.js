import { createUserApi, deleteUserApi, loadUsersApi, updateUserApi } from '../APIs/usersApis';
import * as types from '../ActionTypes/usersActionTypes';
import { createUserError, createUserSuccess, deleteUserSuccess, loadUsersError, loadUsersSuccess, updateUserError, updateUserSuccess } from '../Actions/userActions';
import {
    all,
    put,
    call,
    fork,
    takeLatest,
} from 'redux-saga/effects';

export function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUsersApi);
        console.log('RESPONSE~~~~~~>>', response)
        yield put(loadUsersSuccess(response.data))
    } catch (error) {
        yield put(loadUsersError(error.response))
    }
} 

export function* onCreateUserStartAsync({ payload }) {
    try {
        const response = yield call(createUserApi, payload)
        yield put(createUserSuccess(response.data))
    } catch(error){
        yield put(createUserError(error.response))
    }
}

export function* onUpdateUserStartAsync ({ payload }){
    try {
        const response = yield call(updateUserApi , payload)
        console.log('RESPONSE~~~~~~~>>', response)
        yield put(updateUserSuccess(response.data))
        console.log('RESPONSE~~~~~~~>>', response)
    } catch (error){
        yield put(updateUserError(error.response))
    }
}

export function* onDeleteUserStartAsync ({ payload }){
    try {
        const response = yield call(deleteUserApi , payload)
        yield put(deleteUserSuccess(response.data))
    } catch(error) {
        yield put(updateUserError(error.response))
    }
}

export function* onLoadUser() {
    yield takeLatest(types.LOAD_USERS_START , onLoadUsersStartAsync)
}

export function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START , onCreateUserStartAsync)
}

export function* onUpdateUser() {
    yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync)
}

export function* onDeleteUser() {
    yield takeLatest(types.DELETE_USER_START, onDeleteUserStartAsync)
}


const userSagas = [
    fork(onLoadUser),
    fork(onCreateUser),
    fork(onUpdateUser),
    fork(onDeleteUser)
]

export default function* userSaga() {
    yield all([...userSagas])
}