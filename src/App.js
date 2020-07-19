import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className= "app">
      <header>
        <form id="todo-form">
         <input type="text" placeholder="Enter Text"></input>
         <button type="submit">Submit</button>
        </form>
      </header>
      </div>
    )
  }
}

export default App;
