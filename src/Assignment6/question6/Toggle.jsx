import { useState } from "react";
import ModalCreation from "./Modal";
const Toggle = () => {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <button onClick={() => setStatus(!status)}>Toggle</button>
      <h1>Modal</h1>
      {status ? <ModalCreation status={status} setStatus={setStatus} /> : null}
    </div>
  );
};

export default Toggle;
