import React from "react";

const Temperature = (props) => {
  const status = () => {
    if (props.value > 25) return "It's sunny today!🌅";
    else return "It's cold today! ❄";
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{status()}</h1>
      <hr />
    </>
  );
};

export default Temperature;
