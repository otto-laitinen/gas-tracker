import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalStats = () => {
  const context = useContext(GlobalContext);

  // List of all the expenses
  const distances = context.fuelExpenses.map(fuelExpense => parseInt(fuelExpense.distance));
  const liters = context.fuelExpenses.map(fuelExpense => parseInt(fuelExpense.litersRefuel));
  const prices = context.fuelExpenses.map(fuelExpense => parseInt(fuelExpense.priceRefuel));
  const names = context.fuelExpenses.map(fuelExpense => (fuelExpense.name));
  
  //Totals
  const namesTotal = names.length;
  const distanceTotal = distances.reduce((acc,item)=> acc + item,0);
  const litersTotal = liters.reduce((acc,item)=> acc + item,0);
  const priceTotal = prices.reduce((acc,item)=> acc + item,0);
  
  // Average
  const distanceAverage = (distances.reduce((acc, item) => (acc += item), 0) / distances.length).toFixed(2)
  const litersAverage = (liters.reduce((acc, item) => (acc += item), 0) / liters.length).toFixed(2)
  const priceAverage = (prices.reduce((acc, item) => (acc += item), 0) / prices.length).toFixed(2)

  // Consumption and price per 100km (all cars combined)
  const pricePerHundredKm = (priceTotal / distanceTotal * 100).toFixed(2);
  const litersPerHundredKm = (litersTotal / distanceTotal * 100).toFixed(2);

  return (
    <div className="average">
            <h2 id="a1">Totals:</h2>
            <h4>Cars <i className="arrow down"></i></h4>
            <p className="">{namesTotal}</p>
            <h4>Distance <i className="arrow down"></i></h4>
            <p className="">{distanceTotal}</p>
            <h4>Liters <i className="arrow down"></i></h4>
            <p className="">{litersTotal}</p>
            <h4>Price <i className="arrow down"></i></h4>
            <p className="">${priceTotal}</p>

            <h2 id="a2">Average:</h2>
            <h4>Distance <i className="arrow down"></i></h4>
            <p className="">{distanceAverage}</p>
            <h4>Liters refuel <i className="arrow down"></i></h4>
            <p className="">{litersAverage}</p>
            <h4>Price refuel <i className="arrow down"></i></h4>
            <p className="">${priceAverage}</p>

            <h2>Average per 100km:</h2>
            <p>{pricePerHundredKm}€ / 100km</p>
            <p>{litersPerHundredKm}l / 100km</p>
    </div>
  )
} 