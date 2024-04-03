import React from "react";
const Tasklist = (props) => {
  return (
    <>
      {props.taskArray.map((element) => (
        <h2>{element}</h2>
      ))}
    </>
  );
};
export default Tasklist;
