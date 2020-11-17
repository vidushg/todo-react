import React from "react"
import TodosList from "./TodosList"

class TodoContainer extends React.Component{

  state = {
    todos: [
      {
        id: 1,
        title: "Setup",
        completed: true
      },
      {
        id: 2,
        title: "Develop website",
        completed: false
      },
      {
        id: 3,
        title: "Deploy",
        completed: false
      }
    ]
  };

  render(){
    return (
      <>
      <TodosList todos={this.state.todos} />
      </>
    );
  }
}
export default TodoContainer
