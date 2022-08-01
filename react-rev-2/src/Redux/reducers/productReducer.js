import { ActionTypes } from "../actions/actionTypes";

const initState = {
  products: [],
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS: {
      return { ...state, products: payload };
    }
    default: {
      return state;
    }
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS: {
      return { ...state, products: payload };
    }
    default: {
      return state;
    }
  }
};
