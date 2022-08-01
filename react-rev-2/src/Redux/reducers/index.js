import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedProductReducer } from "./productReducer";

const rootReducer = combineReducers({
  allProds: productReducer,
  product: selectedProductReducer,
});

export default rootReducer;
