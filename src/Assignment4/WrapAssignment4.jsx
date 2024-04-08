import React from "react";
import Input from "./question1/Input";
import Form from "./question2/Form";
import ShowComponent from "./question3/ShowComponent";
import PasswordMatch from "./question4/PasswordMatch";
import DropDown from "./question5/DropDown";
import ToDoList from "./question6/ToDoList";
import DynamicSearch from "./question7/DynamicSearch";
import TemperatureConverter from "./question8/TemperatureConverter";
import Routing from "./question9/Routing";
import TextFields from "./question10/TextFields";
import ModalDialog from "./question11/ModalDialog";
import FormValidation from "./question13/FormValidation";
import FormData from "./question14/FormData";
import Table from "./question12/Table";

const WrapAssignment3 = () => {
  return (
    <div>
      <Input />
      <hr />
      <Form />
      <hr />
      <ShowComponent />
      <hr />
      <PasswordMatch />
      <hr />
      <DropDown />
      <hr />
      <ToDoList />
      <hr />
      <DynamicSearch />
      <hr />
      <TemperatureConverter />
      <hr />
      <Routing />
      <hr />
      <TextFields />
      <hr />
      <ModalDialog />
      <hr />
      <Table />
      <hr />
      <FormValidation />
      <hr />
      <FormData />
    </div>
  );
};

export default WrapAssignment3;
