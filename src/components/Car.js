import React from 'react'

export default function CarList({allCars}){
  return (
    <div className='list'>
      <div>
        <h2 className='title_car_info'>Car information</h2>
      </div>
       {allCars.map((car)=>(
         <div className="car-info-list" key={car.priceRefuel}>
           <p className='name-box'>{car.name}</p>
           <p className='distance-box'>{car.distance}</p>
           <p className='liters-box'>{car.litersRefuel}</p>
           <p className='price-box'>{car.priceRefuel}</p>
          </div>
       ))}
    </div>
  );
}

