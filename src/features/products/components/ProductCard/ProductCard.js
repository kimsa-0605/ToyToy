import React from "react";
import './ProductCard.css';

function ProductCard({ imgSrc, altText, title, price }) {
  return (
    <div className="product-card">
      <div className="product-card-content">
        <img src={imgSrc} alt={altText} className="product-photo" />
        <h3 className="product-title">{title}</h3>
        <span className="product-cost">{price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
