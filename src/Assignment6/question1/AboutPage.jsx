import React from "react";
import { Link, useNavigate } from "react-router-dom";
const AboutPage = () => {
  const navigate = useNavigate();
  const users = [
    { id: 1, name: "USER1" },
    { id: 2, name: "USER2" },
    { id: 3, name: "USER3" },
    { id: 4, name: "USER4" },
  ];
  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <button onClick={() => navigate("/order")}>order</button>
      {users.map((element) => {
        return <Link to={`/about/${element.id}`}>{element.name}</Link>;
      })}
    </div>
  );
};

export default AboutPage;
