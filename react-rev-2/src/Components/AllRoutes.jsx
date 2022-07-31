import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import SingleProd from "./SingleProd";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <SingleProd />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> */}
    </div>
  );
};

export default AllRoutes;
