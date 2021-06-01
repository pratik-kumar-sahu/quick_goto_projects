import { v4 as uuidv4 } from "uuid";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        {
          id: uuidv4(),
          todo: action.payload
        },
        ...state
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default todoReducer;
