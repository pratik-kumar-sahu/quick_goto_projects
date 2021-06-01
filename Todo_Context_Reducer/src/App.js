import { useContext, useState } from "react";
import { TodoContext } from "./contexts/TodoContext";
import "./styles.css";
import Form from "./components/Form";
import Todo from "./components/Todo";

export default function App() {
  const [text, setText] = useState("");
  const { todos } = useContext(TodoContext);

  return (
    <div className="App">
      <Form text={text} setText={setText} todos={todos} />
      <div className="todo-container">
        {todos.length > 0 ? (
          todos.map((todo) => <Todo key={todo.id} todo={todo} />)
        ) : (
          <div style={{ margin: "0 auto" }}>
            No Tasks created 🤨 add one here 👆🏻
          </div>
        )}
      </div>
    </div>
  );
}
