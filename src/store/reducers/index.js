/*
    Combining Reducers here
*/

import { combineReducers } from "redux"
import postReducer from "./postReducer"
//import counter from "./counterReducer";

export default combineReducers({
  postReducer
})
