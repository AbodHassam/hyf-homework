import React, {Component} from 'react';
import Header from "./Header";
import List from "./List";
import "./index.css";

let getUsers = () => {
  return fetch("https://api.github.com/users").then(response =>
    response.json()
  );
};

class App extends Component {
  state = {
    users: [],
    requestState: ""
  };

  filteringUsers = name => {
    const users = this.state.users.filter(user => {
      return user.login === name;
    });
    this.setState({ users });
  };
  
  componentWillMount() {
    this.setState({ requestState: "loading" });
  }

  componentDidMount() {
    getUsers().then(users =>
      this.setState({ users, requestState: "done" })
    );
  }

  /* componentWillUpdate() {
    if (this.state.requestState === 'done') {

      this.setState({ requestState: "loading" })
    }
  }

  componentDidUpdate() {
    if (this.state.requestState === 'loading') {

      this.setState({ requestState: "done" })
    }
  } */
  
  render() {
    const { users, requestState } = this.state;
    return (
      <div className="app container">
        <Header filteringUsers={this.filteringUsers} />
        {requestState === "loading" ? (
          <p>Loading...</p>
        ) : (
          <List users={users} />
        )}
      </div>
    );
  }
}

export default App;
