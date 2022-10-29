import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <>
      <Link to={`/product/${props.id}`}>
        <li className="container-product">
          <div className="container-img">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="container-infos">
            <div className="product-price">
              <h3>{props.price}</h3>
            </div>
            <div className="product-title">
              <h2>{props.name}</h2>
            </div>
            <div className="product-rating">
              <h2>{props.rating}</h2>
            </div>
          </div>
        </li>
      </Link>
    </>
  );
};

export default ProductItem;
