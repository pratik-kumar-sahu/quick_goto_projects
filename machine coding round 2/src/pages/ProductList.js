import React, { useContext, useEffect } from "react";
import data from "../product.json";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../state/ProductContext";

function ProductList() {
  const {
    productData: { products },
    dispatch,
  } = useContext(ProductContext);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: data });
  }, [dispatch]);

  return (
    <div className="app">
      {products.map((item) => (
        <ProductCard key={item._id} item={item} />
      ))}
    </div>
  );
}

export default ProductList;
