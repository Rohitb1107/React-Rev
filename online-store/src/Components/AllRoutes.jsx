import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default AllRoutes;
