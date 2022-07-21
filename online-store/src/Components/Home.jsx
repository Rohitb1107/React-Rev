import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
  };
  return (
    <div>
      <h1>Home</h1>
      <ButtonGroup variant="solid" spacing="3">
        <Button colorScheme="teal">All</Button>
        <Button colorScheme="teal">Men's</Button>
        <Button colorScheme="teal">Women's</Button>
        <Button colorScheme="teal">Jewelery</Button>
        <Button colorScheme="teal">Electronics</Button>
      </ButtonGroup>
    </div>
  );
};

export default Home;
