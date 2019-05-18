import React, { Component } from "react";
export class AddItem extends Component {
  state = {
    description: "",
    date: "",
    done: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (e.target.description.value === "" || e.target.date.value === "") {
      return false;
    } else {
      this.props.addItem(this.state);
      this.setState({
        description: "",
        date: "",
        done: ""
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter description..."
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <input
            type="date"
            id="date"
            onChange={this.handleChange}
            value={this.state.date}
          />
          <input id="done" type="button" value="Undone" />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
