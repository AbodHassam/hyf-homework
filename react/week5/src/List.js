import React from "react";
import { Link } from "react-router-dom";

class List extends React.Component {
  render() {
    const { users, errorMessage, error } = this.props;
    return (
      <div className="users">
        {users.length > 0 &&
          users.map(user => (
            <span key={user.id}>
              <img className="avatar" src={user.avatar_url} alt="" />
              <p>{user.login}</p>
              <p> Score: {user.score}</p>

              <Link to={"/users/" + user.login}>
                <img
                  className="git-logo"
                  src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png"
                  alt=""
                />
              </Link>

              <span />
            </span>
          ))}
        <div className="nousers">
          {!users.length && <p>No users...</p>}
          {error && <p>{errorMessage}</p>}
        </div>
      </div>
    );
  }
}

export default List;
