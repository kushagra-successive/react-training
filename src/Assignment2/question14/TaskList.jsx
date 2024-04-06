import { useCallback, useState } from "react";
import styles from "../assignment.module.css";
const taskArray = [
  { task: "Wakeup", color: "red", button: "Complete 🙃", margin: "29px" },
  { task: "Bath", color: "red", button: "Complete 🙃", margin: "59px" },
  { task: "Prayer", color: "red", button: "Complete 🙃", margin: "43px" },
  { task: "Office", color: "red", button: "Complete 🙃", margin: "49px" },
];

const TaskList = () => {
  const [taskDone, setTaskDone] = useState(taskArray);
  const updateStatus = useCallback(
    (index) => {
      const newArray = [...taskDone];
      newArray[index].button = "Completed 😃";
      newArray[index].color = "green";
      setTaskDone(newArray);
    },
    [taskDone]
  );

  return (
    <div className={styles.div}>
      <ul>
        {taskDone.map((element, index) => (
          <li>
            <strong>{element.task}</strong>
            <button
              style={{
                marginLeft: element.margin,
                color: element.color,
              }}
              onClick={() => updateStatus(index)}
            >
              {element.button}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;