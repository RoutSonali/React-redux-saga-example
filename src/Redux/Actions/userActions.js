import * as types from '../ActionTypes/usersActionTypes';

export const loadUsersStart = (user) => ({
    type: types.LOAD_USERS_START,
    payload: user
})

export const loadUsersSuccess = (user) => ({
    type: types.LOAD_USERS_SUCCESS,
    payload: user
})

export const loadUsersError = (error) => ({
    type: types.LOAD_USERS_ERROR,
    payload: error
})

export const createUserStart = (user) => ({
    type: types.CREATE_USER_START,
    payload: user
})

export const createUserSuccess = (user) => ({
    type: types.CREATE_USER_SUCCESS,
    payload: user
})

export const createUserError = (error) => ({
    type: types.CREARTE_USER_ERROR,
    payload: error
})

export const updateUserStart = (user) => ({
    type: types.UPDATE_USER_START,
    payload: user
})

export const updateUserSuccess = (user) => ({
    type: types.UPDATE_USER_SUCCESS,
    payload: user
})

export const updateUserError = (error) => ({
    type: types.UPDATE_USER_ERROR,
    payload: error
})

export const deleteUserStart = (user) => ({
    type: types.DELETE_USER_START,
    payload: user
})

export const deleteUserSuccess = (user) => ({
    type: types.DELETE_USER_SUCCESS,
    payload: user
})

export const deleteUserError = (error) => ({
    type: types.DELETE_USER_ERROR,
    payload: error
})