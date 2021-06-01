import ReactDOM from "react-dom";
import App from "./App";
import TodoContextProvider from "./contexts/TodoContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>,
  rootElement
);
