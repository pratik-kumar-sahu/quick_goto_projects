export const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "ADD_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case "REMOVE_FROM_CART":
      return { ...state, cartItems: action.payload };

    case "ADD_TO_SAVE_LATER":
      return {
        ...state,
        saveLaterItems: [...state.saveLaterItems, action.payload],
      };

    case "REMOVE_FROM_SAVE_LATER":
      return { ...state, saveLaterItems: action.payload };

    default:
      break;
  }
};
