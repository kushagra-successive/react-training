import React, { useMemo, useState } from "react";
const studentNames = ["Kushagra", "Himanshu", "Amit", "Pawan"];
export default function StudentList() {
  const [list, setList] = useState(studentNames);
  const [value, setValue] = useState("");

  const append = () => {
    setList([...list, value]);
    setValue("");
  };
  const memoizedList = useMemo(() => list, [list]);
  //this memoization wont create new array everytime when new entry inserted it cached all previous data(memoized the list)
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Enter Name"
      ></input>
      <button onClick={append}>AppendName</button>
      {memoizedList.map((element) => {
        return (
          <>
            <li>{element}</li>
          </>
        );
      })}
    </div>
  );
}
