import { useState } from "react";
import ModalCreation from "./ModalCreation";
const Toggle = () => {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <button onClick={() => setStatus(!status)}>Toggle</button>
      {status ? <ModalCreation status={status} setStatus={setStatus} /> : null}
    </div>
  );
};

export default Toggle;
