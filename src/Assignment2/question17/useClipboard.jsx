import { useState } from "react";

const useClipboard = () => {
  const [success, setSuccess] = useState(false);

  const copyToClipboard = (text) => {
    try {
      navigator.clipboard.writeText(text);
      setSuccess(true);
    } catch (error) {
      console.error("Failed to copy text: ", error);
      setSuccess(false);
    }
  };

  return { success, copyToClipboard };
};
export default useClipboard;
