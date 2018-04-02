import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux'

class TodoList extends Component {
  render() { 
    return ( 
      <ul>
        {this.props.todos.map((todo, ind) => <Todo todo={todo} key={ind} />)}
      </ul>
      )
  }
}

function mapStateToProps(reduxState){
  return {
    todos: reduxState.todos
  }
}
 
export default connect(mapStateToProps)(TodoList);