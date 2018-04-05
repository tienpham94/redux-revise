import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux'

class TodoList extends Component {
  state = {
    task: ""
  }


  handleSubmit = (e) => {
    
  }

  handleChange = (e) => {
    console.log('changed');
    this.setState({
      [e.target.name]:[e.target.value]
    })
  }

  render() { 
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task</label>
          <input type="text" name="task" id="task" onChange={this.handleChange}/>
          <button>Add a Todo!</button>
        </form>
        <ul>
          {this.props.todos.map((todo, ind) => <Todo todo={todo} key={ind} />)}
        </ul>
      </div>
      )
  }
}

function mapStateToProps(reduxState){
  return {
    todos: reduxState.todos
  }
}
 
export default connect(mapStateToProps)(TodoList);