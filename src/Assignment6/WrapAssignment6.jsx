import Practise from "./question3/Practise";
import LoginForm from "./question4/LoginForm";
import LazyLoad from "./question1/LazyLoad";
import LazyLoadTwo from "./question2/LazyLoadTwo";
import DataProvider from "./question5/DataProvider";
import Toggle from "./question6/Toggle";

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
      <hr />
      <Toggle />
    </div>
  );
};

export default WrapAssignment6;
