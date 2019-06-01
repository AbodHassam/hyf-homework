import React from "react";

let getUserData = component => {
  var name = component.props.match.params.name;
  var api = `https://api.github.com/users/${name}`;
  return fetch(api)
    .then(response => response.json())
    .then(userData => component.setState({ userData }));
};

let getUserRepos = component => {
  var name = component.props.match.params.name;
  var api = `https://api.github.com/users/${name}/repos`;
  return fetch(api)
    .then(response => response.json())
    .then(userRepos =>
      component.setState({ userRepos: userRepos.slice(0, 10) })
    );
};

class UserProfile extends React.Component {
  state = {
    userData: "",
    userRepos: ""
  };

  componentDidMount() {
    getUserData(this);
    getUserRepos(this);
  }

  render() {
    const { userRepos } = this.state;
    const {
      avatar_url,
      name,
      login,
      bio,
      followers,
      location,
      following
    } = this.state.userData;
    return (
      <div className="container user-p">
        <div className="info-box">
          <img className="useravatar" src={avatar_url} alt="pic" />
          <div className="p-nickname">{name}</div>
          <div className="p-name">{login}</div>

          <div>{bio}</div>
          <div>
            <img
              className="icon"
              src="https://cdn4.iconfinder.com/data/icons/colicon/24/pin_location-256.png"
              alt="pic"
            />
            {location}
          </div>
          <div>Followers : {followers}</div>
          <div>Following : {following}</div>
        </div>
        <div className="p-header">Popular repositories </div>
        <div className="repos-box">
          {userRepos
            ? userRepos.map(repo => (
                <div className="repo" key={repo.id}>
                  <p>
                    <img
                      className="icon repo-icon"
                      src="https://cdn0.iconfinder.com/data/icons/octicons/1024/repo-256.png"
                      alt="pic"
                    />
                    {repo.name}
                  </p>
                  <p>{repo.description}</p>
                  <p>
                    <span
                      className="repo-language-color"
                      style={{
                        backgroundColor:
                          repo.language === "JavaScript"
                            ? "#f1e05a"
                            : repo.language === "HTML"
                            ? "#e34c26"
                            : repo.language === "CSS"
                            ? "#563d7c"
                            : repo.language === "Elixir"
                            ? "#6e4a7e"
                            : repo.language === "Ruby"
                            ? "#701516"
                            : repo.language === "Java"
                            ? "#b07219"
                            : repo.language === "TypeScript"
                            ? "#2b7489"
                            : repo.language === "C#" || 'Objective-C'
                            ? "#178600"
                            : repo.language === "Vim script"
                            ? "#199f4b"
                            : repo.language === "Shell"
                            ? "#89e051"
                            : ""
                      }}
                    />
                    {repo.language}
                  </p>
                </div>
              ))
            : "No repos"}
        </div>
      </div>
    );
  }
}

export default UserProfile;
