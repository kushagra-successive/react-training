// Profile.js
import React from "react";
import WithAuth from "./WithAuth";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Link to={"/"}>about</Link>
      <h1>Profile</h1>
    </div>
  );
};

export default WithAuth(Profile);
