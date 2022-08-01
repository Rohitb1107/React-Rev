import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import SingleProd from "./SingleProd";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<SingleProd />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
