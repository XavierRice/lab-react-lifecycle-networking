import { useState, useEffect } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employeeToRender}) => {

const [showPets, setShowPets] = useState(false)
const [allPets, setAllPets] = useState([])

useEffect( () => {
  fetch("http://localhost:5005/api/pets")
    .then((response) => response.json())
    .then(data => setAllPets(data))
    .catch(err => {console.log(err)}) 
}, [])

const filterPets = allPets.filter(pet => pet.employeeId === employeeToRender.id)

  return (
    <article className="employee">
      <h3>
        {employeeToRender.prefix}
        {" "}
        {employeeToRender.firstName} 
        {" "}
        {employeeToRender.lastName}</h3>
      <h4>{employeeToRender.postfix}</h4>
      <button onClick={ ()=> {setShowPets(!showPets)}}>{showPets ? "Close Pets": "Show Pets"}</button>
      { showPets ? 
        <PetList key={employeeToRender.id} petsToRender={filterPets} /> : <></>}

    </article>
  );
};

export default Employee;
