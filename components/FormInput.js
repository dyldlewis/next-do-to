import React from "react";
import TodoList from "./TodoList";

class FormInput extends React.Component {
  constructor(props) {
    console.log("test")
    super(props);
    this.state = {
      masterTodoList: []
    };
    this.handleTodoSubmission = this.handleTodoSubmission.bind(this);
  }

  handleTodoSubmission(e) {
    e.preventDefault();
    const { _name, _description } = this.refs;
    const newMasterTodoList = this.state.masterTodoList.slice();
    const task = {
      name: _name.value,
      description: _description.value
    }
    newMasterTodoList.push(task);
    this.setState({ masterTodoList: newMasterTodoList })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleTodoSubmission}>
          <input
            ref="_name"
            type="text"
            id="name"
            placeholder="Name"></input>
          <br/>
            <input
              ref="_description"
              type="text"
              id="description"
              placeholder="Description"></input>
            <h5><button type="submit">Add</button></h5>
      </form>
      <TodoList
        masterTodoList={this.state.masterTodoList}/>
    </div>
    )
  }
}


export default FormInput;
