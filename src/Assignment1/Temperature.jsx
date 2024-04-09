import React from "react";
import { message } from "./data.js";

const Temperature = (props) => {
  return (
    <h1 style={{ textAlign: "center" }}>
      {props.value > 25 ? message[0] : message[1]}
    </h1>
  );
};

export default Temperature;
