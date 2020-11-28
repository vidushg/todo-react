import React from "react"
import TodoItem from "./TodoItem"


const TodosList = (props) => {
  return(
    <>
     {props.todos.map(todo => (<TodoItem
                                  key={todo.id}
                                  todo={todo}
                                  handleChangeProps={props.handleChangeProps}
                                  deleteTodoProps={props.deleteTodoProps}/>))}
    </>

  )
}

/*class TodosList extends React.Component{
  render(){
    return(<>
      {this.props.todos.map(todo => (<TodoItem
                                      key={todo.id}
                                      todo={todo}
                                      handleChangeProps={this.props.handleChangeProps}
                                      deleteTodoProps={this.props.deleteTodoProps} />))}
      </>
    )
  };
}*/

export default TodosList
