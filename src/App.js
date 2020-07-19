import React from "react";
import TodoForm from "./TodoForm";
import "./App.css";

class App extends React.Component {
  state = {
    todos:[]
  }

  addTodo = (todo) => {
  
    this.setState({
      todos:[todo, ...this.state.todos]
    })
  }
  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo}/>
        {/* {JSON.stringify(this .state.todos)} */}
    {this.state.todos.map(todo =>(<div key={todo.id}>{todo.text}</div>))}
      </div>
    );
  }
}

export default App;
