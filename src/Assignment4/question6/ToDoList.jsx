import { useState } from "react";

const ToDoList = () => {
  const [item, setItem] = useState([]);
  const [select, setSelect] = useState("");
  const addItem = () => {
    setItem((prevItem) => {
      return [...prevItem, select];
    });
    setSelect("");
  };
  const deleteItem = (index) => {
    item.splice(index, 1);
    setItem([...item]);
  };
  return (
    <div>
      <input
        type="text"
        value={select}
        placeholder="Add Task"
        onChange={(e) => setSelect(e.target.value)}
      />
      <button onClick={addItem}>ADD</button>
      {item.map((element, index) => {
        return (
          <ul>
            <li>{element}</li>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </ul>
        );
      })}
    </div>
  );
};

export default ToDoList;
