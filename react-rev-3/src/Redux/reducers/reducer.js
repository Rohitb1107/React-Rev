import { ActionTypes } from "../actions/actionMakers";

const initState = {
  count: 0,
};

export const addItemReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      return { ...state, count: state.count + action.payload };
    }
    default: {
      return state;
    }
  }
};
