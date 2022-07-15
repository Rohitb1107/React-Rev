import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount } from "../Redux/Features/Counter/action";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((store) => {
    return store.count.count;
  });

  return (
    <>
      <div>
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            dispatch(addCount(1));
          }}
        >
          Add
        </button>

        <button
          onClick={() => {
            dispatch(subCount(1));
          }}
        >
          Sub
        </button>
      </div>
    </>
  );
};

export default Counter;
