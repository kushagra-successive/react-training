import { useEffect, useState } from "react";
import { itemArray } from "../data";
const DynamicSearch = () => {
  const [items, setItems] = useState(itemArray);
  const [search, setSearch] = useState("");
  const [filterArray, setfilteredArray] = useState(itemArray);

  useEffect(() => {
    const filteredItems = items.filter((val) => val.startsWith(search));
    setfilteredArray(filteredItems);
  }, [search, items]);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filterArray.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
    </div>
  );
};

export default DynamicSearch;
