import { ActionTypes } from "./actionMakers";

export const addItem = (value) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: value,
  };
};
