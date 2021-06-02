import { useState } from "react";
import "./styles.css";
import useStateClone from "./CustomHook/useStateClone";

const [todo, setTodo] = useStateClone([]);

export default function App() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      setTodo(text);
      setText("");
    }
  };

  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="write a todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
      {todo.map((e, i) => (
        <span key={i} className="todo-span">
          {e}
        </span>
      ))}
    </div>
  );
}
