import { combineReducers } from "redux";
import { addItemReducer } from "./reducer";

const rootReducer = combineReducers({
  addItemReducer,
});

export default rootReducer;
