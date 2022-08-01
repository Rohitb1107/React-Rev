import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Product = (allProducts) => {
  const { data } = allProducts;
  const { id } = data;

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
          <p className="card-text">{data.category}</p>
          <div className="row">
            <div className="col-6">{data.price}</div>
            <div className="col-6">{data.rating.rate}</div>
          </div>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
          <Link to={`product/${id}`}>
            <button className="btn btn-primary mx-2">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
