import React, { useState } from "react";
const PersonForm = () => {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [age, setAge] = useState();

  return (
    <>
      <form>
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
};
export default PersonForm;
