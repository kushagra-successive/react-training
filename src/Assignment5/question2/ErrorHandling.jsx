import { useEffect, useState } from "react";
import { url1 } from "../data";
const ErrorHandling = () => {
  const [data, setData] = useState([]);
  const [fault, setFault] = useState("");

  const fetchingData = async () => {
    try {
      const result = await fetch(url1);
      if (!result.ok) {
        throw Error(result.status);
      } else {
        const d = await result.json();
        setData(d);
      }
    } catch (error) {
      setFault(error.message);
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <div>
      <h1>
        {fault && <li>Status Code: {fault}</li>}
        {data.length > 0
          ? data.splice(0, 5).map((element) => <li>tittle: {element.title}</li>)
          : null}
        <button onClick={() => fetchingData()}>FETCH</button>
      </h1>
    </div>
  );
};

export default ErrorHandling;
