import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
//   const products = useSelector((state) => state.productReducer.products);
//   console.log(products);
  return (
    <div>
      {/* <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top pro-img"
          src={products[0].image}
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">{products[0].title}</h5>
          <p className="card-text">{products[0].description}</p>
          <p className="card-text">{products[0].category}</p>
          <div className="row">
            <div className="col-6">{products[0].price}</div>
            <div className="col-6">{products[0].rating.rate}</div>
          </div>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
          <a href="#" className="btn btn-primary mx-2">
            Buy Now
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Product;
