import FetchData from "./question1/FetchData";
import ErrorHandling from "./question2/ErrorHandling";
import Loading from "./question3/Loading";
import LargeData from "./question4/LargeData";
import FetchDataAxios from "./question5/FetchDataAxios";
import ErrorHandlingAxios from "./question6/ErrorHandlingAxios";
import FormAxios from "./question7/FormAxios";
const wrapAssignment5 = () => {
  return (
    <div>
      <FetchData />
      {/* <hr />
      <ErrorHandling />
      <hr />
      <Loading />
      <hr />
      <LargeData />
      <hr />
      <FetchDataAxios />
      <hr />
      <ErrorHandlingAxios /> */}
      <hr />
      <FormAxios />
    </div>
  );
};

export default wrapAssignment5;
