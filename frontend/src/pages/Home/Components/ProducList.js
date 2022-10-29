import React from "react";
import products from "../../../product";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProducList = () => {
  return (
    <>
      <div className="product-container">
        <div className="title-container">
          <h1>Nouveautés</h1>
        </div>
        <ul className="movie-list">
          {products.map((item) => {
            return (
              <ProductItem
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                name={item.name}
                rating={item.rating}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProducList;
