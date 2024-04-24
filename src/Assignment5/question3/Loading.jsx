import { useEffect, useState } from "react";
import { url } from "../data";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  const [data, setData] = useState([]);
  const [fault, setFault] = useState();

  const fetchingData = async () => {
    try {
      const result = await fetch(url);
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
    setTimeout(() => {
      fetchingData();
    }, 3000);
  }, []);
  return (
    <div>
      <h1>
        {fault && <li>Status Code: {fault}</li>}
        {data.length > 0 ? (
          data.splice(0, 5).map((element) => <li>tittle: {element.title}</li>)
        ) : (
          <CircularProgress />
        )}
      </h1>
    </div>
  );
};

export default Loading;
