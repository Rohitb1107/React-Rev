import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Product from "./Product";

const Home = () => {
  const API = "https://fakestoreapi.com/products";
  const products = useSelector((state) => state);

  const getData = async () => {
    try {
      const res = await axios.get(API);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>All Products</h1>
      <Product />
    </div>
  );
};

export default Home;
