import React from 'react'

export default function CarList(props){
  return (
    <div className='list'>
      <div>
        <h2 className='title_car_info'>Car information</h2>
      </div>
         <div className="car-info-list" key={props.Car.priceRefuel}>
           <p className='name-box'>{props.Car.name}</p>
           <p className='distance-box'>{props.Car.distance}</p>
           <p className='liters-box'>{props.Car.litersRefuel}</p>
           <p className='price-box'>{props.Car.priceRefuel}</p>
          </div>
    </div>
  );
}

