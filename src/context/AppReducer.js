export default (state, action) => {
    switch(action.type) {
        case 'ADD_FUEL_EXPENSE':
            return {fuelExpenses: [action.payload, ...state.fuelExpenses]}

        case 'UPDATE_FUEL_EXPENSE':
            for (let car of state.fuelExpenses){
                if (car.name === action.payload.name){
                    car.distance += action.payload.distance
                    car.litersRefuel += action.payload.litersRefuel
                    car.priceRefuel += action.payload.priceRefuel
                    return {fuelExpenses: [...state.fuelExpenses]}
                }
            }

        default:
            return state;
    }
}