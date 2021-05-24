const initialState = false;

const userReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case "LOGIN":
      return true;

    case "LOGOUT":
      return false;

    default:
      return state;
  }
};

export default userReducer;
