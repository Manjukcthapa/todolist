import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./todo";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [],
    TodoShow: "all",
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          //suppose to update
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id != id),
    });
  };

  removeallComplete = (id) => [
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    }),
  ];

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div className="wholediv">
        <div>
          <TodoForm  className="todo" onSubmit={this.addTodo} />
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              toggleComplete={() => this.toggleComplete(todo.id)}
              onDelete={() => this.handleDeleteTodo(todo.id)}
              todo={todo}
            />
          ))}
          todos left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button
            className="button"
            onClick={() => this.updateTodoToShow("all")}
          >
            All
          </button>
          <button  className="button" onClick={() => this.updateTodoToShow("active")}>
            Active
          </button>
          <button className="button" onClick={() => this.updateTodoToShow("complete")}>
            Complete
          </button>
          <button className="button" onClick={this.removeallComplete}>Remove all</button>
        </div>
      </div>
    );
  }
}

export default App;
