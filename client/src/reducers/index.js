import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import courseReducer from "./course";
import enrolledReducer from "./enrolled";
export default combineReducers({
    authReducer,
    currentUserReducer,
    courseReducer,
    enrolledReducer
   
})

