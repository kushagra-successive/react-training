import { useEffect, useState } from "react";
import { url } from "../data";

const LargeData = () => {
  const [data, setData] = useState([]);
  const [firstIndex, setFirstIndex] = useState(1);
  const [lastIndex, setLastIndex] = useState(10);

  const fetchData = async () => {
    const result = await fetch(url);
    const d = await result.json();
    setData(d);
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data only once when the component mounts

  const currentData = data.slice(firstIndex, lastIndex);

  return (
    <div>
      <h1>
        {/*PREV- We take previous first index-10 and for limit of title we take previous first index*/}
        <button
          onClick={() => {
            setFirstIndex(firstIndex - 10);
            setLastIndex(firstIndex);
          }}
        >
          PREV
        </button>
        {/*NEXT- For next page we take previous index and for limit of title previous index +10*/}
        <button
          onClick={() => {
            setFirstIndex(lastIndex);
            setLastIndex(lastIndex + 10);
          }}
        >
          NEXT
        </button>
        {currentData.map((element, index) => (
          <li key={index}>Title: {element.title}</li>
        ))}
      </h1>
      <p>{(data.length - lastIndex) / 10}</p>
    </div>
  );
};

export default LargeData;
