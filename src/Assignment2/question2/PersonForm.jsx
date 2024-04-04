import React, { useState } from "react";

export default function PersonForm() {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [age, setAge] = useState();

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="firstName"
          onChange={(e) => setFName(e.target.value)}
        />
        <p>{fName}</p>
        <input
          type="text"
          placeholder="lastName"
          onChange={(e) => setLName(e.target.value)}
        />
        <p>{lName}</p>
        <input
          type="text"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <p>{age}</p>
      </form>
    </>
  );
}
