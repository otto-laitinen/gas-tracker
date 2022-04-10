import React, { useState } from 'react'
import Form from './Form'

function App() {
  // Example list. Instead of a hard coded list like this, we want to add objects to this list by submitting the form:
  //const [allCars, seAllCars] = useState([{name:"Toyota", year:"2020"}, {name:"Subaru", year:"2011"}, {name:"Mustang", year:"1999"}])

  //const allCarComponents = allCars.map((car) => (
 // <Car 
  //name={car.name} 
  //year={car.year}
  // />))

  return (
    <div>
    <Form/>
    </div>
  );
}

export default App;
