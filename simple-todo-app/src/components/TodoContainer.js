import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import {v4 as uuidv4} from "uuid";

class TodoContainer extends React.Component{

  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy",
        completed: false
      }
    ]
  };

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render(){
    return (
      <>
      <Header />
      <InputTodo addTodoProps={this.addTodoItem}/>
      <TodosList todos={this.state.todos}
      handleChangeProps={this.handleChange}
      deleteTodoProps={this.delTodo}/>
      </>
    );
  }
}
export default TodoContainer
