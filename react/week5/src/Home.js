import React, { Component } from "react";
import Header from "./Header";
import List from "./List";

class Home extends Component {
  state = {
    users: [],
    requestState: "done",
    error: false,
    errorMessage: ""
  };

  searchingUsers = name => {
    if (name === "") {
      this.setState({ requestState: "loading" });
      return fetch(`https://api.github.com/search/users?q=${name}`).then(
        response =>
          response.json().then(users =>
            this.setState({
              error: true,
              errorMessage: users.message,
              requestState: "done"
            })
          )
      );
    }
    this.setState({ requestState: "loading" });
    return fetch(`https://api.github.com/search/users?q=${name}`).then(
      response =>
        response
          .json()
          .then(users =>
            this.setState({ users: users.items, requestState: "done" })
          )
    );
  };

  render() {
    const { users, requestState, error, errorMessage } = this.state;
    return (
        <div className="Home container">
         <Header searchingUsers={this.searchingUsers} />
          {requestState === "loading" ? (
            <p>Loading...</p>
          ) : (
            <List users={users} errorMessage={errorMessage} error={error} />
          )}
        </div>
      
    );
  }
}

export default Home;
