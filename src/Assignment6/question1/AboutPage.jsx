import React from "react";
import { Link } from "react-router-dom";
import { users } from "../Data";

const AboutPage = () => {
  return (
    <div>
      <h1>ABOUT PAGE</h1>

      {users.map((element) => {
        return <Link to={`/about/${element.id}`}>{element.name}</Link>;
      })}
    </div>
  );
};

export default AboutPage;
