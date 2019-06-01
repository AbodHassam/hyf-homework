import React from "react";
import { Link } from "react-router-dom";
let About = () => {
  return (
    <div className="about container">
      <div className="nav">
      <Link to="/" style={{ textDecoration: 'none' , color: '#55e7c4' }}>Home</Link>
      </div>
      <p><i>This project is about searching github users</i></p>
    </div>
  );
};

export default About;
