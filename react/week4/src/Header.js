import React from "react";

class Header extends React.Component {
  state = {
    inputValue: ""
  };

  inputChangeHandler = e => {
    const newText = e.target.value;
    this.setState({ inputValue: newText });
  };

  clickHandler = () => {
    const inputValue = this.state.inputValue;
    this.props.filteringUsers(inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <input
          placeholder="Enter a name"
          value={inputValue}
          onChange={this.inputChangeHandler}
        />
        <button onClick={this.clickHandler}>Search</button>
      </div>
    );
  }
}

export default Header;
