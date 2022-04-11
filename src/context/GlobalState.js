import React, {createContext, useReducer } from "react";
import AppReducer from './AppReducer'

// Initial state
const initialState = {fuelExpenses: []}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Add fuel expense
    function addFuelExpense(fuelExpense){
        dispatch({
            type: 'ADD_FUEL_EXPENSE',
            payload: fuelExpense
        })
    }

    return (<GlobalContext.Provider value={{
        fuelExpenses: state.fuelExpenses,
        addFuelExpense
    }}>
        {children}
    </GlobalContext.Provider>)
}