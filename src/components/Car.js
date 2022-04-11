import React from 'react'

export default function CarList(props){
  return (
    <div className='list'>
         <div className="car-info-list" key={props.fuelExpense.priceRefuel}>
           <p className='name-box'>{props.fuelExpense.name}</p>
           <p className='distance-box'>{props.fuelExpense.distance}</p>
           <p className='liters-box'>{props.fuelExpense.litersRefuel}</p>
           <p className='price-box'>{props.fuelExpense.priceRefuel}</p>
          </div>
    </div>
  );
}

