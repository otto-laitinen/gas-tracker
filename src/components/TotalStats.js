import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalStats = () => {
  const context = useContext(GlobalContext);

  // List of all the expenses
  const prices1 = context.fuelExpenses.map(fuelExpense => parseInt(fuelExpense.distance));
  const prices2 = context.fuelExpenses.map(fuelExpense => parseInt(fuelExpense.litersRefuel));
  const prices3 = context.fuelExpenses.map(fuelExpense => parseInt(fuelExpense.priceRefuel));

  // Average
  const priceAverage1 = prices1.reduce((acc, item) => (acc += item), 0).toFixed(2) / prices1.length
  const priceAverage2 = prices2.reduce((acc, item) => (acc += item), 0).toFixed(2) / prices2.length
  const priceAverage3 = prices3.reduce((acc, item) => (acc += item), 0).toFixed(2) / prices3.length

  return (
    <div className="average">
             <h1 id="a1"> Average prices:</h1>
        <div>
            <h4>Distance</h4>
            <p className="">{priceAverage1}</p>
            <h4>Liters refuel</h4>
            <p className="">{priceAverage2}</p>
            <h4>Price refuel</h4>
            <p className="">${priceAverage3}</p>
        </div>

    </div>
  )
}