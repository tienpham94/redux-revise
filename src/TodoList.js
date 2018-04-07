import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux'
import { addTodo, removeTodo} from './actionCreators'

class TodoList extends Component {
  state = {
    task: ""
  }


  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props);
    
    this.props.addTodo(this.state.task)
    e.target.reset()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  removeTodo = (id) => {
    this.props.removeTodo(id)
  }

  render() { 

    const todos = this.props.todos.map((val, ind) => <Todo removeTodo={this.removeTodo.bind(this, val.id)} task={val.task} key={ind} />)
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

function mapState(reduxState){
  return {
    todos: reduxState.todos
  }
}
 
export default connect(mapState, { addTodo, removeTodo })(TodoList);