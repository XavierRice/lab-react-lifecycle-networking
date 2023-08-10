const test = console.log
import { useState, useEffect } from "react";
import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";




function App () {

const [employeesArray, setEmployeesArray] = useState([])


useEffect( () => {
  fetch("http://localhost:5005/api/employees")
    .then((response) => response.json())
    .then(data => setEmployeesArray(data))
    .catch(err => {console.log(err)}) 
}, [])

test(employeesArray)

  return (
    <>
      <NavBar />
      <EmployeeList employeesArray={employeesArray} />
    </>
  );
};

export default App;


/*

<APP>
  <NAVBAR> && <EMPLOYEELIST>
                     <Employee> 
                        <petlist>
*/