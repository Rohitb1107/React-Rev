import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { setProducts } from "../Redux/actions/productAction";

const Home = () => {
  const API = "https://fakestoreapi.com/products";
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
  console.log(allProducts);
  return (
    <div className="main-content-div row w-75">
      <h1>All Products</h1>
      {allProducts.map((item) => {
        return (
          <div className="col-4" key={item.id}>
            <Product data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
