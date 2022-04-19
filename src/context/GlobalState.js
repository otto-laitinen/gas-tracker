import React, {createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {fuelExpenses: []}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

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