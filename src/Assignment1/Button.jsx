import React from "react";
import "./Button.css";
export default function Button(props) {
  const change = {
    color: props.color,
    backgroundColor: "bisque",
    border: "3px solid black",
    padding: "16px",
    fontSize: "larger",
    display: "flex",
  };
  return (
    <>
      <div className="border">
        <button style={change}>{props.text}</button>
      </div>
    </>
  );
}
