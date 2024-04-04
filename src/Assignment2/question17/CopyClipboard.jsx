import React, { useState } from "react";
import useClipboard from "./useClipboard";

export default function CopyClipboard() {
  const [text, setText] = useState("");
  const { success, copyToClipboard } = useClipboard();

  const copy = () => {
    copyToClipboard(text);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "larger",
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={copy}>{success ? "copied" : "copy"}</button>
    </div>
  );
}
