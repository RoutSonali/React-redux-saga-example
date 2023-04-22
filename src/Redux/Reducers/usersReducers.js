import * as types from '../ActionTypes/usersActionTypes';

const initialState = {
    user : [],
    loading : false,
    error : null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOAD_USERS_START:
        case types.CREATE_USER_START:
        case types.UPDATE_USER_START:
        case types.DELETE_USER_START:
            return {
                ...state,
                loading: true
            }
        
        case types.LOAD_USERS_SUCCESS:
        case types.CREATE_USER_SUCCESS:
        case types.UPDATE_USER_SUCCESS:
        case types.DELETE_USER_SUCCESS:
            return{
                ...state,
                loading : true,
                user : action.payload
            }

        case types.LOAD_USERS_ERROR:
        case types.CREARTE_USER_ERROR:
        case types.UPDATE_USER_ERROR:
        case types.DELETE_USER_ERROR:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        
        default:
            return state;
    }
}

export default userReducer;