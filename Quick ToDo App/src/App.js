import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  state = {
    todo: "",
    todos: [],
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.todo.trim()) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            title: this.state.todo,
            id: uuidv4(),
          },
        ],
        todo: "",
      });
    }
  };

  changeHandler = (e) => {
    const value = e.target.value;
    this.setState({
      todo: value,
    });
  };

  deleteHandler = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <form className="app-form" onSubmit={this.submitHandler}>
            <input
              autoFocus
              required
              className="app-input"
              value={this.state.todo}
              onChange={this.changeHandler}
              type="text"
              placeholder="Write a todo"
            />
            <button className="app-button">Save</button>
          </form>
        </div>
        <div className="todo-list-container">
          {this.state.todos[0] ? (
            this.state.todos.map((todo) => {
              return (
                <div
                  key={todo.id}
                  className="todo"
                  onClick={() => this.deleteHandler(todo.id)}
                >
                  {todo.title}
                </div>
              );
            })
          ) : (
            <div style={{ pointerEvents: "none" }} className="todo">
              No Todos created 😐
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
