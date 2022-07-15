export const ADD_COUNT = "ADD_COUNT";
export const SUB_COUNT = "SUB_COUNT";

export const addCount = (payload) => {
  return {
    type: ADD_COUNT,
    payload,
  };
};

export const subCount = (payload) => {
  return {
    type: SUB_COUNT,
    payload,
  };
};
