import { combineReducers } from "redux";
import  LoginReducer  from "./../../components/Login/_redux/reducers/LoginReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  logInInfo: LoginReducer,
});

export default rootReducer;
