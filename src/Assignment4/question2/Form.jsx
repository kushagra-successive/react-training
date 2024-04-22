import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [check, setCheck] = useState(false);
  const [option, setOption] = useState("");

  const handleSubmit = () => {
    console.log(`Name: ${name}`);
    console.log(`Above 18: ${check}`);
    console.log(`Gender: ${option}`);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/*default behaviour of form to reload the page after clicking any button now to prevent it use preventDefault */}
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => {
          setCheck(e.target.checked);
        }}
      />
      Above 18
      <br />
      <input
        type="radio"
        value="male"
        name="gender"
        onChange={(e) => setOption(e.target.value)}
      />
      Male
      <input
        type="radio"
        value="female"
        name="gender"
        onChange={(e) => setOption(e.target.value)}
      />
      Female
      <input
        type="radio"
        value="other"
        name="gender"
        onChange={(e) => setOption(e.target.value)}
      />
      Other
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
