import PersonForm from "./question2/PersonForm";
import ToDoList from "./question3/ToDoList";
import RandomNumberGenerator from "./question4/RandomNumberGenerator";
import CounterWithStep from "./question5/CounterWithStep";
import Notification from "./question7/Notification";
import SlideShow from "./question8/SlideShow";
import ThemeProvider from "./question9/ThemeProvider";
import LanguageProvider from "./question10/LanguageProvider";
import CartProvider from "./question11/CartProvider";
import Voting from "./question12/Voting";
import Parent from "./question13/Parent";
import TaskList from "./question14/TaskList";
import StudentList from "./question15/StudentList";
import EmployeeSalary from "./question16/EmployeeSalary";
import CopyClipboard from "./question17/CopyClipboard";
import ManageStorage from "./question18/ManageStorage";
import Timer from "./question19/Timer";
import Wrapper from "./question6/Wrapper";

function Wrap() {
  return (
    <div>
      <PersonForm />
      <hr />
      <ToDoList />
      <hr />
      <RandomNumberGenerator />
      <hr />
      <CounterWithStep />
      <hr />
      <Wrapper />
      <hr />
      <Notification />
      <hr />
      <SlideShow />
      <hr />
      <ThemeProvider />
      <hr />
      <LanguageProvider />
      <hr />
      <CartProvider />
      <hr />
      <Voting />
      <hr />
      <Parent />
      <hr />
      <TaskList />
      <hr />
      <StudentList />
      <hr />
      <EmployeeSalary />
      <hr />
      <CopyClipboard />
      <hr />
      <ManageStorage />
      <hr />
      <Timer />
    </div>
  );
}

export default Wrap;
