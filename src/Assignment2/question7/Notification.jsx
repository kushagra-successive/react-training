import React, { useEffect, useState } from "react";

export default function Notification() {
  const [message, setState] = useState("Successive Digital 🤎");
  useEffect(() => {
    setState(message);
    return () => {
      setTimeout(() => {
        setState(" "); //hiding the notification 
      }, 5000);
    };
  }, [message]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p style={{ color: "Brown" }}>{message}</p>
    </div>
  );
}
