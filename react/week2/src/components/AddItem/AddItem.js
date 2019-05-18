import React, { Component } from "react";
//import "./AddItem.css";
class AddItem extends Component {
  state = {
    description: '',
    done: '' 
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (e.target.description.value === "" || e.target.done.value === "-Select-" ) {
      return false;
    } else {
      this.props.addItem(this.state);
      this.setState({
        description: "",
        done: ''
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter description..." id="description" onChange={this.handleChange} value={this.state.description} />
          <input id="done" type="button" value="Checked" />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default AddItem;
