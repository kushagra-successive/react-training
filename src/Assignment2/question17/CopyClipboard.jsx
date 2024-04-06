import { useState } from "react";
import useClipboard from "./useClipboard";
import styles from "../assignment.module.css";
const CopyClipboard = () => {
  const [text, setText] = useState("");
  const { success, copyToClipboard } = useClipboard();

  const copy = () => {
    copyToClipboard(text);
  };

  return (
    <div className={styles.div}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={copy}>{success ? "copied" : "copy"}</button>
    </div>
  );
};
export default CopyClipboard;
