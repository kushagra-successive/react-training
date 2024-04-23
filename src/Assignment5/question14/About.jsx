// About.js
import React from "react";
import WithAuth from "./WithAuth";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to={"/profile"}>profile</Link>
      <h1>About</h1>
    </div>
  );
};

export default WithAuth(About);
