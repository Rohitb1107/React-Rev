import { ActionTypes } from "../actions/actionTypes";

const initState = {
  products: [
    {
      id: 1,
      name: "Rohit",
      category: "Programmer",
    },
  ],
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS: {
      return state;
    }
    default: {
      return state;
    }
  }
};
