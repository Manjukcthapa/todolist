import React from "react";
import shortid from "shortid"
import "./todo.css";

class TodoForm extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
handleSubmit = (e) => {
  e.preventDefault();
  this.props.onSubmit({
    id:shortid.generate(),
    text:this.state.text,
    complete:false
  });
  this.setState({
    text:""
  })

}

  render() {
    return (
      <div className="app">
        <form  onSubmit = {this.handleSubmit}>
        <input 
        name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button  className="formbutton" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
