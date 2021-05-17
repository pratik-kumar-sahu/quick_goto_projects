import { connect } from "react-redux";
import { productActions } from "../../actions";
import React, { useEffect } from "react";
import ProductCard from "../ProductCard";

function Product({ productList, dispatch }) {
  useEffect(() => {
    dispatch(productActions.productList);
  }, [dispatch]);

  return (
    <div className="product">
      {productList.data &&
        productList.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

const mapStateToProps = (data) => ({
  productList: data,
});

export default connect(mapStateToProps)(Product);
