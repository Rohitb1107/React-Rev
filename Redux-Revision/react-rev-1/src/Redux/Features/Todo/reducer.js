import { ADD_TODO } from "./action";

const initState = {
  todo: [],
};

export const todoReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        ...store,
        todo: [...store.todo, ...payload],
      };
    }
    default: {
      return store;
    }
  }
};
