import React from 'react'

export default function CarList({allCars}){
  return (
    <div>
       {allCars.map((car)=>(
         <div className="nameCar" key={car.priceRefuel}>
           <p className='card-name'>{car.nameCar}</p>
           <p>{car.distance}</p>
           <p>{car.litersRefuel}</p>
           <p>{car.priceRefuel}</p>
          </div>
       ))}
    </div>
  );
}

