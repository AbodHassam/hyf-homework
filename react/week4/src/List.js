import React from "react";

class List extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <ul>
        {users.length > 0 ? (
          users.map(user => <li key={user.id}>{user.login}</li>)
        ) : (
          <li>user not found</li>
        )}
      </ul>
    );
  }
}

export default List;
