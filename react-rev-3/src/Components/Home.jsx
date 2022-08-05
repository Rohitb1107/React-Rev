import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/actions/actionTypes";
import { addItemReducer } from "../Redux/reducers/reducer";

const Home = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addItem(1));
    alert("Item added to cart successfully!");
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <button className="btn btn-info" onClick={clickHandler}>
            Add to cart
          </button>
        </div>
        <div className="col-4">
          <button className="btn btn-info" onClick={clickHandler}>
            Add to cart
          </button>
        </div>
        <div className="col-4">
          <button className="btn btn-info" onClick={clickHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
