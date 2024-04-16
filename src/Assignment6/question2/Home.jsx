import React from "react";

const Home = () => {
  if (Math.random() > 0.5) {
    throw new Error("Simulated Error");
  }
  return (
    <div>
      <h1>HOME PAGE</h1>
      
    </div>
  );
};

export default Home;
