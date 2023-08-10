import React from "react";
import Employee from "./Employee.jsx";
import "./EmployeeList.css";

export const EmployeeList = ({employeesArray}) => {
console.log(employeesArray)

 const employeeToRender = employeesArray.map((eachEmployee) =>  

  <Employee 
  key={eachEmployee.id}
  employeeToRender={eachEmployee}
  />

 )

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeeToRender}
      </section>
    </main>
  );
};

export default EmployeeList;
