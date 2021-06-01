import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function Todo(props) {
  const { dispatch } = useContext(TodoContext);
  const { todo: {id, todo} } = props;

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id
    });
  };

  return (
    <div className="todo" onClick={() => handleDelete(id)}>
      {todo}
    </div>
  );
}
