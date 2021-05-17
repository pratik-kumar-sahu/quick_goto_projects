import React from "react";

function ProductCard({ product }) {
  const { title, image, description, category, price } = product;

  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-price">${price}</div>
      <div className="card-scroll">
        <div className="card-title">{title}</div>
        <div className="card-category">{category}</div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
}

export default ProductCard;
