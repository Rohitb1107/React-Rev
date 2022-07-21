import React, { useState } from "react";
import { Button, ButtonGroup, Slider } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import CaptionCarousel from "./HeroPart.jsx";
import ProCard from "./ProCard.jsx";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = res.data;
    setData(data);
  };
  return (
    <div>
      <h1>Home</h1>
      <div className="banner-slider">
        <CaptionCarousel />
      </div>

      <div className="btn-div">
        <ButtonGroup variant="solid" spacing="3">
          <Button colorScheme="teal">All</Button>
          <Button colorScheme="teal">Men's</Button>
          <Button colorScheme="teal">Women's</Button>
          <Button colorScheme="teal">Jewelery</Button>
          <Button colorScheme="teal">Electronics</Button>
        </ButtonGroup>
      </div>

      <div className="product-div">
        <ProCard data={data} />
      </div>
    </div>
  );
};

export default Home;
