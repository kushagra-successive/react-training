import { useState } from "react";
import styles from "../assignment.module.css";

export const ToDoList = () => {
  const [value, fetchValue] = useState();
  const [todos, addValue] = useState([]);

  const deleteTask = (index) => {
    todos.splice(index, 1);
    addValue([...todos]);
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.centre_div}>
        <br />
        <h1> TO DO LIST</h1>
        <br />
        <input
          type="text"
          placeholder="taks"
          value={value}
          onChange={(e) => fetchValue(e.target.value)}
        />
        <button
          onClick={() => {
            addValue((prevValue) => {
              return [...prevValue, value]; //it will store track of previous values and return array along with new value
            });
            fetchValue(""); //empty the array after initialization
          }}
        >
          {" "}
          +{" "}
        </button>
        <ul>
          {todos.map((element, index) => {
            return (
              <>
                <li style={{ fontSize: "larger" }}>{element}</li>
                <input type="checkbox" />
                <button onClick={() => deleteTask(index)}> DELETE</button>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ToDoList;
