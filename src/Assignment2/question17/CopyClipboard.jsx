import { useState } from "react";
import useClipboard from "./useClipboard";
import styles from "../assignment.module.css";
import { copied, copy } from "../data";
const CopyClipboard = () => {
  const [text, setText] = useState("");
  const { success, copyToClipboard } = useClipboard();

  const copyText = () => {
    copyToClipboard(text);
  };

  return (
    <div className={styles.div}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={copyText}>{success ? copied : copy}</button>
    </div>
  );
};
export default CopyClipboard;
