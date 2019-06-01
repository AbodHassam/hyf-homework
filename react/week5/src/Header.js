import React from "react";
import { Link } from "react-router-dom";

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
    this.props.searchingUsers(inputValue);
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
        <span className="nav">
          <Link to="/about" style={{ textDecoration: 'none', color: '#55e7c4' }}>About</Link>
        </span>
      </div>
    );
  }
}

export default Header;
