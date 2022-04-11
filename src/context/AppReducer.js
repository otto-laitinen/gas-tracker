export default (state, action) => {
    switch(action.type) {
        case 'ADD_FUEL_EXPENSE':
            return {
                ...state,
                fuelExpenses: [action.payload, ...state.fuelExpenses]
            }
        default:
            return state;
    }
}