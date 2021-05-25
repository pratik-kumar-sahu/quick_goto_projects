const userReducer = (state, action) => {
  switch (action.type) {
    case "VERIFY_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default userReducer;
