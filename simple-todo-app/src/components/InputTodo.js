import React, {Component} from "react"

class InputTodo extends Component {

  state = {
    title: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title:""
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <input type="text"
      placeholder="Add stuff"
      value={this.state.title}
      name="title"
      onChange={this.onChange} />
      <input type="submit" value= "submit" />
      </form>
    )
  };
}

export default InputTodo
