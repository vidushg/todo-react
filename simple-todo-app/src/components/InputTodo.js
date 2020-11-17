import React, {Component} from "react"

class InputTodo extends Component {

  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  render(){
    return(
      <form>
      <input type="text"
      placeholder="Add stuff"
      value={this.state.title}
      onChange={this.onChange} />
      <input type="submit" value= "submit" />
      </form>
    )
  };
}

export default InputTodo
