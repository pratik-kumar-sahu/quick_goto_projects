import { productsType } from "../actionTypes";

const initialState = {
  products: [],
};

const reducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case productsType.list:
      return { data: action.payload || state.data };

    default:
      return state;
  }
};

export default reducer;
