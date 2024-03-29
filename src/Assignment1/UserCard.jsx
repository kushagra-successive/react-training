import React from "react";
const cssStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid black",
  width: "fit-content",
  padding: "1rem 3rem",
  backgroundColor: "bisque",
  borderRadius: "8px",
};
export default function UserCard(props) {
  return (
    <>
      {props.info.map((element) => (
        <div style={cssStyle}>
          <h1>{element.name}</h1>
          <img src={element.avatarURL} alt="avatar" />
          <h2>{element.age}</h2>
        </div>
      ))}
    </>
  );
}
