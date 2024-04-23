import axios from "axios";
import { useState } from "react";
import { url } from "../data";
const FormAxios = () => {
  const [data, setData] = useState({
    title: "",
    completed: "",
  });
  const [result, setResult] = useState({});
  const handleChange = (e) => {
    const val = e.target.value;
    setData({
      ...data,
      [e.target.name]: val,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(url, data).then((response) => {
      setResult(response.data);
      console.log(response.data, response.status);
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="isCompleted"
        name="status"
        onChange={handleChange}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default FormAxios;
