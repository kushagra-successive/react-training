import Practise from "./question3/Practise";
import LoginForm from "./question4/LoginForm";
import LazyLoad from "./question1/LazyLoad";
import LazyLoadTwo from "./question2/LazyLoadTwo";
// import { createContext } from "react";
import DataProvider from "./question5/DataProvider";
// export const User1 = createContext();
// export const User2 = createContext();

const WrapAssignment6 = () => {
  return (
    <div>
      <LazyLoad />
      <hr />
      <LazyLoadTwo />
      <hr />
      <Practise />
      <hr />
      <LoginForm />
      <hr />
      <DataProvider />
    </div>
  );
};

export default WrapAssignment6;
