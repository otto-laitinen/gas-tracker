import React from 'react'

// INDIVIDUAL CAR
export default function Car(props){
  return (
    <div>
         <div className="car-info-list" key={props.fuelExpense.priceRefuel}> 
           <p className='name-box'>{props.fuelExpense.name}</p>
           <p className='distance-box'>{props.fuelExpense.distance} km</p>
           <p className='liters-box'>{props.fuelExpense.litersRefuel} l</p>
           <p className='price-box'>{props.fuelExpense.priceRefuel} €</p>
          </div>
    </div>
  );
}

