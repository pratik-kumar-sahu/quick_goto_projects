import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../state/ProductContext";

function Cart() {
  const {
    productData: { products, cartItems, saveLaterItems },
    dispatch,
  } = useContext(ProductContext);

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: cartItems.filter((item) => item._id !== id),
    });
  };

  const moveToSaveLater = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: cartItems.filter((item) => item._id !== id),
    });
    dispatch({
      type: "ADD_TO_SAVE_LATER",
      payload: products.filter((item) => item._id === id)[0],
    });
  };

  const removeFromSaveLater = (id) => {
    dispatch({
      type: "REMOVE_FROM_SAVE_LATER",
      payload: saveLaterItems.filter((item) => item._id !== id),
    });
  };

  const moveToCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_SAVE_LATER",
      payload: saveLaterItems.filter((item) => item._id !== id),
    });
    dispatch({
      type: "ADD_TO_CART",
      payload: products.filter((item) => item._id === id)[0],
    });
  };

  const countHandler = (id) => {
    cartItems.forEach((item) => {
      if (item._id === id) {
        console.log(item);
        item.qty = item.qty - 1;
      }
    });
  };

  return (
    <>
      <div className="header">
        <Link className="header__home" to="/">
          Home
        </Link>
        <div className="header__num">{cartItems.length} Items in Cart</div>
      </div>
      <div className="cart">
        <div style={{ marginBottom: ".5rem" }}>Cart</div>
        {cartItems.map((item, i) => (
          <div key={i} className="cart__item">
            <img
              className="cart__item-img"
              src={item.image}
              alt="product-img"
            />
            <div>
              <div className="cart__item-name">{item.name}</div>
              <div className="cart__item-price">₹{item.price}</div>
              <div>
                <span
                  className="counters"
                  onClick={() => countHandler(item._id)}
                >
                  ➖
                </span>{" "}
                {item.qty} <span className="counters">➕</span>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  className="cart__item-btn"
                  onClick={() => moveToSaveLater(item._id)}
                >
                  Save for later
                </div>
                <div
                  className="cart__item-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="saveLater">
        <div style={{ marginBottom: ".5rem" }}>Save For Later</div>
        {saveLaterItems.map((item, i) => (
          <div key={i} className="cart__item">
            <img
              className="cart__item-img"
              src={item.image}
              alt="product-img"
            />
            <div>
              <div className="cart__item-name">{item.name}</div>
              <div className="cart__item-price">₹{item.price}</div>
              <div style={{ display: "flex" }}>
                <div
                  className="cart__item-btn"
                  onClick={() => moveToCart(item._id)}
                >
                  Move to Cart
                </div>
                <div
                  className="cart__item-btn"
                  onClick={() => removeFromSaveLater(item._id)}
                >
                  Remove
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
