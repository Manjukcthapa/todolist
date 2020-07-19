import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this)
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem)
  }
  render() {
    return (
      <div className="app">
        <header>
          <form id="todo-form" onSubmit={this.addItem}>
            <input
              className="input"
              type="text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
              placeholder="Enter Text"
            ></input>
            <button className="button" type="submit">
              Submit
            </button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
