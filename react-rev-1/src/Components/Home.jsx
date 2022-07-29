import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const API = "https://fakestoreapi.com/products";

  const getData = async () => {
    try {
      const res = await axios.get(API);
      setIsLoading(false);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Home;
