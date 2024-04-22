import FetchData from "./question1/FetchData";
import ErrorHandling from "./question2/ErrorHandling";
import Loading from "./question3/Loading";
import LargeData from "./question4/LargeData";
import FetchDataAxios from "./question5/FetchDataAxios";
import ErrorHandlingAxios from "./question6/ErrorHandlingAxios";
import FormAxios from "./question7/FormAxios";
import GqlIndex from "./question8/GqlIndex";
import PaginationGqlIndex from "./question9/PaginationGqlIndex";
import HandlerButton from "./question12/HandlerButton";
import Toggle from "./question13/Toggle";
import AppAuth from "./question14/AppAuth";
import Component from "./question15/Component";
import ShowData from "./question16/ShowData";

const wrapAssignment5 = () => {
  return (
    <div>
      <FetchData />
      <hr />
      <ErrorHandling />
      <hr />
      <Loading />
      <hr />
      <LargeData />
      <hr />
      <FetchDataAxios />
      <hr />
      <ErrorHandlingAxios />
      <hr />
      <FormAxios />
      <hr />
      <GqlIndex />
      <hr />
      <PaginationGqlIndex />
      <hr />
      <HandlerButton />
      <hr />

      <Toggle />
      <hr />
      <AppAuth />
      <hr />
      <Component />
      <hr />
      <ShowData />
    </div>
  );
};

export default wrapAssignment5;
