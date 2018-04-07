import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux'

class TodoList extends Component {
  state = {
    task: ""
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch({
      type:'ADD_TODO',
      task: this.state.task
    })
    e.target.reset()
  }

  handleChange = (e) => {
    console.log('changed');
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() { 

    const todos = this.props.todos.map((val, ind) => <Todo todo={val.task} key={ind} />)
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task</label>
          <input type="text" name="task" id="task" onChange={this.handleChange}/>
          <button>Add a Todo!</button>
        </form>
        <ul>
          {todos}
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