import React from 'react'

export default function CarList({allCars}){
  return (
    <div>
       {allCars.map((car)=>(
         <div className="name" key={car.phonenumber}>
           <p className='card-name'>{car.name}</p>
           <p>{car.email}</p>
           <p>{car.phonenumber}</p>
          </div>
       ))}
    </div>
  );
}

