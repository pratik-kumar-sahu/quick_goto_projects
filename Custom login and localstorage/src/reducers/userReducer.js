const userReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "VERIFY_USER":
      return {
        user: action.user,
      };

    case "LOGOUT":
      return null;

    default:
      return state;
  }
};

export default userReducer;
