import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { setProducts } from "../Redux/actions/productAction";
import { useParams } from "react-router-dom";

const SingleProd = () => {
  const { prod_Id } = useParams();
  const API = `https://fakestoreapi.com/products/${prod_Id}`;
  const allProducts = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const res = await axios.get(API);
      dispatch(setProducts(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div style={{ width: "18rem" }}>
        <img
          className="card-img-top pro-img"
          src={data.image}
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.category}</p>
          <div className="row">
            <div className="col-6">{data.price}</div>
            <div className="col-6">{data.rating.rate}</div>
          </div>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
          <Link to={`/${id}`}>
            <button href="#" className="btn btn-primary mx-2">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProd;
