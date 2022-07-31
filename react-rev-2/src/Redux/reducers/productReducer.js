import { ActionTypes } from "../actions/actionTypes";

const initState = {
  products: [
    {
      id: 1,
      name: "Rohit",
      category: "programmer",
    },
  ],
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS: {
      return state;
    }
    default: {
      return state;
    }
  }
};
