import '../Form.css'
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function CarForm() {
    const context = useContext(GlobalContext);

    const [carInfo, setCarInfo] = useState({
        name:"",
        distance:"",
        litersRefuel:"",
        priceRefuel:"",
    });

    const {addFuelExpense, updateFuelExpense} = useContext(GlobalContext);
    // const {updateFuelExpense} = useContext(GlobalContext)

    const handleChange = (event) => {
        setCarInfo({ ...carInfo, [event.target.name]: event.target.name === "name" ? event.target.value : parseFloat(event.target.value)})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setCarInfo({ name: "", distance: "", litersRefuel: "", priceRefuel:""});
        console.log(carInfo);
        let x = true
        for ( let i of context.fuelExpenses){
            if (i.name === carInfo.name){
                x = false
            }
        }
        if (x){
            addFuelExpense(carInfo);
        } else{
            updateFuelExpense(carInfo);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}> 
                <div>
                    <h1 className="title">Car Form</h1>
                </div>
                <div id="d1">
                    <input
                    type="text"
                    name="name"
                    placeholder="Name of car"
                    value={carInfo.name}
                    onChange={handleChange} //onChange is how react updates the input fields in real time.
                    required //input required
                    />
                </div>
                <div id="d2">
                <input
                    type="number"
                    name="distance"
                    placeholder="Distance driven"
                    value={carInfo.distance}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div id="d3">
                <input
                    type="number"
                    name="litersRefuel"
                    placeholder="Liters of refuel"
                    value={carInfo.litersRefuel}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div id="d4">
                <input
                    type="number"
                    name="priceRefuel"
                    placeholder="Price of refuel"
                    value={carInfo.priceRefuel}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <button className="submit">Submit Car</button>
                </div>
                
            </form>
        </div>
    );
}
