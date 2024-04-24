import { useEffect, useState } from "react";
import { url } from "../data";
import axios from "axios";

const FetchDataAxios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);
  return (
    <div>
      {data.slice(0, 5).map((element, index) => {
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

export default FetchDataAxios;
