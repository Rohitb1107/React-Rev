import { createStore, combineReducers } from "redux";
import { counterReducer } from "./Features/Counter/reducer";
import { todoReducer } from "./Features/Todo/reducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());
