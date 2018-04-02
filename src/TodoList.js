import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: ["Eat", "Sleep", "Run"]
     }
  }
  render() { 
    return ( 
      <ul>
        {this.state.todos.map((todo, ind) => <Todo todo={todo} key={ind} />)}
      </ul>
      )
  }
}
 
export default TodoList;