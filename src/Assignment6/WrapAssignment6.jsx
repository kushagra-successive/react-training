import Practise from "./question3/Practise";
import LoginForm from "./question4/LoginForm";
import LazyLoad from "./question1/LazyLoad";
import LazyLoadTwo from "./question2/LazyLoadTwo";
import Check from "./Check/Check";
import { createContext } from "react";
export const User1 = createContext();
export const User2 = createContext();

const WrapAssignment6 = () => {
  return (
    <div>
      <LazyLoad />
      <hr />
      <Practise />
      <hr />
      <LoginForm />
      <hr />
      <LazyLoadTwo/>
      <Check />
    </div>
  );
};

export default WrapAssignment6;
