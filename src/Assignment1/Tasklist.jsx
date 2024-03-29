import React from "react";

const cssStyle = {
  textAlign: "center",
};
export default function Tasklist(props) {
  return (
    <>
      {props.taskArray.map((element) => (
        <h2 style={cssStyle}>{element}</h2>
      ))}
    </>
  );
}
