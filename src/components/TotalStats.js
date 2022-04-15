import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalStats = () => {
  const context = useContext(GlobalContext);

  // List of all the expenses
  const prices = context.fuelExpenses.map(fuelExpense => parseInt(fuelExpense.priceRefuel));

  // Average
  const priceAverage = prices.reduce((acc, item) => (acc += item), 0).toFixed(2) / prices.length

  return (
    <div>

        <div>
            <h4>Average price</h4>
            <p className="">${priceAverage}</p>
        </div>

    </div>
  )
}