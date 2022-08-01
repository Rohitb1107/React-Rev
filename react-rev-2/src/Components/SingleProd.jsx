import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../Redux/actions/productAction";

const SingleProd = () => {
  const product = useSelector((state) => state.product);
  const { id } = useParams();
  const API = `https://fakestoreapi.com/products/${id}`;
  const dispatch = useDispatch();

  const getSingleProd = async () => {
    try {
      const res = await axios.get(API);
      dispatch(selectedProduct(res.data));
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (id && id !== "") {
      getSingleProd();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);

  return (
    <div>
      <div style={{ width: "18rem" }}>
        <img
          className="card-img-top pro-img"
          src={product.image}
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.category}</p>
          <div className="row">
            <div className="col-6">{product.price}</div>
            <div className="col-6">rate 4.5</div>
          </div>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>

          <button href="#" className="btn btn-primary mx-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProd;
