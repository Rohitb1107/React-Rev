import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const API = "https://hn.algolia.com/api/v1/search?query=html";

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
      <h1>Welcome</h1>
    </div>
  );
};

export default Home;
