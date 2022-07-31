import React from "react";
import { useSelector } from "react-redux";

const Product = (allProducts) => {
  const { data } = allProducts;
  return (
    <div>
      <div style={{ width: "18rem" }}>
        <img
          className="card-img-top pro-img"
          src={data.image}
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <p className="card-text">{data.category}</p>
          <div className="row">
            <div className="col-6">{data.price}</div>
            <div className="col-6">{data.rating.rate}</div>
          </div>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
          <a href="#" className="btn btn-primary mx-2">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
