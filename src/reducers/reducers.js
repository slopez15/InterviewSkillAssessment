import {combineReducers} from "redux";

import userReducer from "./userReducer";

//join all reducers. below are the attributes to look for respective state data.
export default combineReducers({
  userReducer,
});
