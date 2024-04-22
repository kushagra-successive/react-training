import { useState } from "react";
import UI from "./UI";
import { show } from "../data";
const ShowComponent = () => {
  const [state, setState] = useState("");
  const [isClick, setIsClick] = useState(false);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter show"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button
        onClick={() => {
          setIsClick(!isClick);
          if (isClick) {
            setState("");
          }
        }}
      >
        Enter
      </button>
      {isClick && state === show ? <UI /> : null}
    </div>
  );
};

export default ShowComponent;
