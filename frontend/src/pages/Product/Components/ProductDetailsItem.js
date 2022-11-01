import React from "react";
import { useParams } from "react-router-dom";
import Rating from "../../../shared/components/UI/Rating";
import products from "../../../product";
import Button from "../../../shared/components/UI/Button/Button";
import "./ProductDetailsItem.css";

const ProductDetailsItem = () => {
  const { pid } = useParams();
  const product = products.find((p) => p.id === pid);

  return (
    <div className="container-product__product-item">
      <div className="container-name__product-item">
        <h1>{product.name}</h1>
      </div>
      <div className="container-img-infos__product-item">
        <div className="container-img__product-item">
          <img src={product.image} alt="" />
        </div>
        <div className="container-infos__product-item">
          <div className="container-infos__text">
            <h3>Résumé</h3>
            <div className="container-infos__synopsis">
              <p>{product.description}</p>
            </div>
            <div className="rating-container">
              <Rating value={product.rating} text={`${product.numReview} ${product.numReview === '1' ? 'client a laissé un avis' : 'clients ont laissé un avis'}`} />
            </div>
          </div>
          <div className="container-infos__price-container">
            <h4>Prix</h4>
            <h4 className="container-infos__price">{product.price}</h4>
            <div className="container-infos__btn">
              <Button disabled={product.countInStock === '0'}>{product.countInStock === '0' ? 'Rupture de stock' : 'Ajouter au panier'}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsItem;
