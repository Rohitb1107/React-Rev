import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { setProducts } from "../Redux/actions/productAction";

const Home = () => {
  const API = "https://fakestoreapi.com/products";
  const products = useSelector((state) => state);
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
  console.log(products);
  return (
    <div>
      <h1>All Products</h1>
      <Product />
    </div>
  );
};

export default Home;
