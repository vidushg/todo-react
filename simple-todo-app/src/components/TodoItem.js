import React, {useEffect} from "react"


const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const {completed, id, title} = props.todo

  useEffect(() => {
    return ()=>{
      alert("Item deleted: "+title)
    }
  },[])

  return(
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
        />
      <button onClick={() => props.deleteTodoProps(id)}>
      Delete </button>
      <span style={completed ? completedStyle: null}> {title}</span>
      </li>
  )
}


/*class TodoItem extends React.Component{

  componentWillUnmount(){
    alert("!Item will be deleted!")
  }

  render(){
    const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const { completed, id, title } = this.props.todo

    return(<li className="todo-item">
      <input type="checkbox"
      checked={completed}
      onChange={() => this.props.handleChangeProps(id)}/>
      <button onClick={() => this.props.deleteTodoProps(id)}>
      Delete</button>
      <span style={completed ? completedStyle: null}>
      {title}
      </span>
      </li>);
  }
}*/

export default TodoItem
