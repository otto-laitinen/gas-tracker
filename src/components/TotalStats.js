import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalStats = () => {
  const context = useContext(GlobalContext);

  // List of all the expenses
  const prices1 = context.fuelExpenses.map(fuelExpense => parseInt(fuelExpense.distance));
  const prices2 = context.fuelExpenses.map(fuelExpense => parseInt(fuelExpense.litersRefuel));
  const prices3 = context.fuelExpenses.map(fuelExpense => parseInt(fuelExpense.priceRefuel));
  const names = context.fuelExpenses.map(fuelExpense => (fuelExpense.name));
  
  //Totals
    const namesTotal = names.length;
    const distanceTotal = prices1.reduce((acc,item)=> acc + item,0);
    const litersTotal = prices2.reduce((acc,item)=> acc + item,0);
    const priceTotal = prices3.reduce((acc,item)=> acc + item,0);
  
    // Average
  const priceAverage1 = (prices1.reduce((acc, item) => (acc += item), 0) / prices1.length).toFixed(2)
  const priceAverage2 = (prices2.reduce((acc, item) => (acc += item), 0) / prices2.length).toFixed(2)
  const priceAverage3 = (prices3.reduce((acc, item) => (acc += item), 0) / prices3.length).toFixed(2)

  // Consumption and price per 100km (of all cars combined)
  const pricePerHundredKm = (priceTotal / distanceTotal * 100).toFixed(2);
  const litersPerHundredKm = (litersTotal / distanceTotal * 100).toFixed(2);

  return (
    <div>
            <h2>Totals</h2>
            <h4>Cars</h4>
            <p classname="">{namesTotal}</p>
            <h4>Distance</h4>
            <p classname="">{distanceTotal}</p>
            <h4>Liters</h4>
            <p classname="">{litersTotal}</p>
            <h4>Price</h4>
            <p classname="">${priceTotal}</p>

            <h2>Average:</h2>
            <h4>Distance</h4>
            <p className="">{priceAverage1}</p>
            <h4>Liters refuel</h4>
            <p className="">{priceAverage2}</p>
            <h4>Price refuel</h4>
            <p className="">${priceAverage3}</p>

            <h2>Average per 100km:</h2>
            <p>{pricePerHundredKm}€ / 100km</p>
            <p>{litersPerHundredKm}l / 100km</p>
        

    </div>
  )
} 