import { useCallback, useState } from "react";
import styles from "../assignment.module.css";
import { taskArray, completed, green } from "../data";
const TaskList = () => {
  const [taskDone, setTaskDone] = useState(taskArray);
  const updateStatus = useCallback(
    (index) => {
      const newArray = [...taskDone];
      newArray[index].button = completed;
      newArray[index].color = green;
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
