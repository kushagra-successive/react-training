import { useEffect, useState } from "react";
import { url } from "../data";
const FetchData = () => {
  const [data, setData] = useState([]);
  const fetchingData = async () => {
    const result = await fetch(url);
    const d = await result.json();
    setData(d);
  };
  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <h1>
        {data.splice(0, 5).map((element) => (
          <li>tittle: {element.title}</li>
        ))}
      </h1>
    </div>
  );
};

export default FetchData;
