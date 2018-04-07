import React, { Component } from 'react';

export default class NewTodoForm extends Component {
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task</label>
          <input type="text" name="task" id="task" onChange={this.handleChange}/>
          <button>Add a Todo!</button>
        </form>
    )
  }
}