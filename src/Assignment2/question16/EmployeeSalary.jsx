import React, { useMemo, useState } from "react";
// const employeeData = [
//   { name: "Pawan", salary: 60450 },
//   { name: "Amit", salary: 40000 },
//   { name: "Himanshu", salary: 59000 },
//   { name: "Varun", salary: 64500 },
// ];
export default function EmployeeSalary() {
  const [name1, setName1] = useState("");
  const [salary1, setSalary1] = useState("");
  const [employeeData, setEmployeeData] = useState([
    { name: "Pawan", salary: 6 },
    { name: "Amit", salary: 4 },
    { name: "Himanshu", salary: 5 },
    { name: "Varun", salary: 6 },
  ]);

  const modify = () => {
    const updatedEmployeeData = employeeData.map((element, index) => {
      if (element.name === name1) {
        return { salary: Number(salary1) }; // Create a new object with updated salary
      } else if (element.name !== name1 && index === employeeData.length - 1) {
        //checks upto its length
        return { name: name1, salary: Number(salary1) };
      } else return element; // Keep other elements unchanged
    });

    setEmployeeData(updatedEmployeeData);
  };

  const avgSalary = useMemo(() => {
    const average = employeeData.reduce(
      (accum, employee) => (accum += employee.salary),
      0
    );
    return average / employeeData.length;
  }, [employeeData]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "larger",
      }}
    >
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Salary"
        onChange={(e) => setSalary1(e.target.value)}
      />
      <button onClick={modify}>Add</button>

      <h1>Average Salary:{avgSalary}</h1>
    </div>
  );
}
