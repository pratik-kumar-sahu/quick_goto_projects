import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../state/ProductContext";

const ProductCard = ({ item }) => {
  const {
    productData: { cartItems },
    dispatch,
  } = useContext(ProductContext);

  const { _id, name, brand, price, image } = item;

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div className="productCard">
      <img className="productCard__img" src={image} alt={name} />
      <div className="productCard__content">
        <div className="productCard__content-brand">{brand}</div>
        <div className="productCard__content-name">
          {name.length > 27 ? name.substring(0, 27) + "..." : name}
        </div>
        <div className="productCard__content-extras">
          <div className="productCard__content-extras--price">₹{price}</div>
          {cartItems.filter((item) => item._id === _id).length ? (
            <Link className="productCard__content-extras--addCart" to="/cart">
              Go to Cart
            </Link>
          ) : (
            <Link
              className="productCard__content-extras--addCart"
              onClick={addToCart}
              to="#"
            >
              Add to Cart
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
