import { useState } from "react";
import { fruits } from "../data";
const DropDown = () => {
  const [select, setSelect] = useState(fruits);
  return (
    <div>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option>Banana 🍌</option>
        <option>Apple 🍎</option>
        <option>Orange 🍊</option>
        <option>Mango 🥭</option>
      </select>
      <h1>{select}</h1>
    </div>
  );
};

export default DropDown;
