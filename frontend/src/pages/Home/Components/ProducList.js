import React, { useState, useRef } from "react";
import products from "../../../product";
import ProductItem from "./ProductItem";
import leftArrow from "../../../assets/left-arrow.svg";
import rightArrow from "../../../assets/right-arrow.svg";
import "./ProductList.css";

const ProducList = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x;
    let rightStop = Math.trunc((products.length + 1) / 2); 
 
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber((prevslideNumber) => prevslideNumber - 1);
      listRef.current.style.transform = `translateX(${240 + distance}px)`;
    }

    if (direction === "right" && slideNumber <= rightStop) {
      setSlideNumber((prevslideNumber) => prevslideNumber + 1);
      listRef.current.style.transform = `translateX(${-260 + distance}px)`;
      console.log(slideNumber)
      console.log(rightStop)
     
    }
  };

  return (
    <>
      <div className="product-container">
        <div className="title-container">
          <h1>Nouveautés</h1>
        </div>
        <div className="container-list">
          <img
            src={leftArrow}
            alt="icone fleche vers la gauche"
            className="slidearrow left"
            onClick={() => handleClick("left")}
          />
          <ul className="movie-list" ref={listRef}>
            {products.map((item) => {
              return (
                <ProductItem
                  key={item.id}
                  id={item.id}
                  casting={item.casting}
                  image={item.image}
                  price={item.price}
                  name={item.name}
                  rating={item.rating}
                  numReview={item.numReview}
                />
              );
            })}
          </ul>
          <img
            src={rightArrow}
            alt="icone fleche vers la droite"
            className="slidearrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
};

export default ProducList;
