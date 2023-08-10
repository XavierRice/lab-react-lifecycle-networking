export const PetList = ({petsToRender}) => {

  const nameOPets = petsToRender.map(pet => {
    return <h3>{pet.name}<hr></hr></h3>
    });
  
  return (
    <aside className="pets-list" >
      {nameOPets === "" ? <h2>"no pets listed" </h2>: nameOPets}
    </aside>
  );
};

export default PetList;
