import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Home = () => {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div>
      <h1>All Products</h1>
      <Product />
    </div>
  );
};

export default Home;
