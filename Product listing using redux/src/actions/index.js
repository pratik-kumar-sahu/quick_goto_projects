import { productsType } from "../actionTypes";

export const productActions = {
  productList: (dispatch) => {
    const PRODUCT_API = "https://fakestoreapi.com/products";
    return fetch(PRODUCT_API)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: productsType.list,
          payload: data,
        });
      });
  },
};
