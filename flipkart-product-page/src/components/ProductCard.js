import React from "react";

const ProductCard = ({ item }) => {
  const { name, brand, price, image, size } = item;

  return (
    <div className="productCard">
      <img className="productCard__img" src={image} alt={name} />
      <div className="productCard__content">
        <div className="productCard__content-brand">{brand}</div>
        <div className="productCard__content-name">{name}</div>
        <div className="productCard__content-size">
          {size.map((e) => (
            <div className="productCard__content-size--item">{e}</div>
          ))}
        </div>
        <div className="productCard__content-price">₹{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
