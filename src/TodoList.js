import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actionCreators";
import { Route } from "react-router-dom";

class TodoList extends Component {
  state = {
    task: ""
  };

  handleAdd = val => {
    this.props.addTodo(val);
  };

  removeTodo = id => {
    this.props.removeTodo(id);
  };

  render() {
    const todos = this.props.todos.map((val, ind) => (
      <Todo
        removeTodo={this.removeTodo.bind(this, val.id)}
        task={val.task}
        key={ind}
      />
    ));
    return (
      <div>
        <Route
          path="/todos/new"
          component={props => (
            <NewTodoForm {...props} handleSubmit={this.handleAdd} />
          )}
        />
        <Route
          exact
          path="/todos"
          component={() => (
            <div>
              <ul>{todos}</ul>
            </div>
          )}
        />
      </div>
    );
  }
}

function mapState(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(mapState, { addTodo, removeTodo })(TodoList);
