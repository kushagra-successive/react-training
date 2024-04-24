import { useEffect, useState } from "react";
import { url1 } from "../data";
import axios from "axios";

const ErrorHandlingAxios = () => {
  const [data, setData] = useState([]);
  const [fault, setFault] = useState("");

  const fetchingData = async () => {
    try {
      const result = await axios.get(url1);
      setData(result.data);
    } catch (error) {
      setFault(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <div>
      {fault && <li>{fault.message}</li>}
      {fault && <button onClick={() => fetchingData()}>Retry</button>}

      {!fault &&
        data.slice(0, 5).map((element, index) => {
          const { id, title } = element;
          return (
            <h2>
              <p key={index}>id:{id}</p>
              <li>title: {title}</li>
            </h2>
          );
        })}
    </div>
  );
};

export default ErrorHandlingAxios;
