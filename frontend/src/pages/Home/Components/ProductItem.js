import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";
import Rating from "../../../shared/components/UI/Rating";

const ProductItem = (props) => {
  return (
    <>
      <Link to={`/product/${props.id}`}>
        <li className="container-product">
          <div className="container-img">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="container-infos">
            <div className="product-title">
              <h2>{props.name}</h2>
            </div>
            <div className="product-casting">
              <h3>{props.casting}</h3>
            </div>
            <div className="product-price">
              <h3>{props.price}</h3>
            </div>
            <div className="product-rating">
              <Rating value={props.rating} text={`${props.numReview} ${props.numReview === '1' ? 'Critique' : 'Critiques'}`}/>
            </div>
          </div>
        </li>
      </Link>
    </>
  );
};

export default ProductItem;
