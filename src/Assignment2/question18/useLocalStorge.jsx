import { useState } from "react";

const useLocalStorge = () => {
  const [key, setKey] = useState();
  const [val, setValue] = useState();
  const [get, setGet] = useState("");

  const setting = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val)); //converting value in JSONstring because local storage only understand value in string form
  };

  const getting = (key) => {
    const storedValue = JSON.parse(localStorage.getItem(key)); //initially its value is in string then it later converted into Javascript Object
    if (storedValue) setGet(storedValue);
    else if (storedValue === null) setGet("no value found");
  };

  const removing = (key) => {
    localStorage.removeItem(key);
  };

  return { setKey, setValue, get, key, val, setting, getting, removing };
};

export default useLocalStorge;
