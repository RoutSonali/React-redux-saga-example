import { combineReducers } from "redux";
import userReducer from "./Reducers/usersReducers";

const rootReducer = combineReducers ({
    user : userReducer
})

export default rootReducer;