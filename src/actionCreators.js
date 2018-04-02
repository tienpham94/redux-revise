//action types
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO"

//action creators
export function addTodo(){
  return {
    type: ADD_TODO,
    task
  }
}

export function removeTodo(id){
  return {
    type: REMOVE_TODO,
    id
  }
}