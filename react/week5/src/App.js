import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import UserProfile from "./UserProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/users/:name" exact component={UserProfile} />
    </BrowserRouter>
  );
}

export default App;
