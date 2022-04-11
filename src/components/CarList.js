import React, { useContext } from 'react'
import { Car } from './Car'
import { GlobalContext } from '../context/GlobalState'

// List of all individual expenses
export default function CarList () {
  const context = useContext(GlobalContext);

  return (
    <div>
        <h3>History</h3>
        <ul>
          {context.fuelExpenses.map(
            fuelExpense => (<Car key={fuelExpense.id} fuelExpense={fuelExpense}/>)
          )}
        </ul>
    </div>
  )
}
