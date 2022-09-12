import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import courseReducer from "./course";

export default combineReducers({
    authReducer,
    currentUserReducer,
    courseReducer
   
})

