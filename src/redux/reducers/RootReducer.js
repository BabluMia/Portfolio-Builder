import { combineReducers } from "redux";


import LogInReducer from "../../modules/authentication/_redux/reducer/LogInReducer";


// combine all of the reducers here
const rootReducer = combineReducers({
  logInInfo: LogInReducer,
 
});

export default rootReducer;
