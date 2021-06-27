import React, { createContext, useReducer } from "react";
import { productReducer } from "./productReducer";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [productData, dispatch] = useReducer(productReducer, {
    products: [],
    cartItems: [],
    saveLaterItems: [],
  });

  return (
    <ProductContext.Provider value={{ productData, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
