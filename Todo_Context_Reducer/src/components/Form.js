import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Form = (props) => {
  const { todos, dispatch } = useContext(TodoContext);
  const { text, setText } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({
        type: "ADD_TODO",
        payload: text,
      });
      setText("");
    }
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Write today's task"
      />
      <button className="form-button" type="submit">
        Save
      </button>
    </form>
  );
};

export default Form;
