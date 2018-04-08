import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { addTodo, removeTodo, getTodos } from "./actionCreators";
import { Switch, Route } from "react-router-dom";

class TodoList extends Component {
  state = {
    task: ""
  };

  componentDidMount = () => {
    this.props.getTodos()
  }

  handleAdd = val => {
    this.props.addTodo(val);
  };

  removeTodo = id => {
    this.props.removeTodo(id);
  };

  render() {
    const todos = this.props.todos.map(val => (
      <Todo
        removeTodo={this.removeTodo.bind(this, val._id)}
        task={val.task}
        key={val._id}
      />
    ));
    return (
      <div>
        <Switch>
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
        </Switch>
      </div>
    );
  }
}

function mapState(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(mapState, { addTodo, removeTodo, getTodos })(TodoList);
