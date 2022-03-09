import {combineReducers} from "redux";
import errorsReducer from "./errors";
import projectReducer from "./project"

export default combineReducers({
    projects: projectReducer,
    errors: errorsReducer
})