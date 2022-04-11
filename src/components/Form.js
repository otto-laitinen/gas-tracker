import '../Form.css'
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function CarForm() {

    const [carInfo, setCarInfo] = useState({
        name:"",
        distance:"",
        litersRefuel:"",
        priceRefuel:"",
    });

    const {addFuelExpense} = useContext(GlobalContext)

    
        // handleChange updates the input field.
    const handleChange = (event) => {
        // setCarInfo is a function that updates the current state boject.
        setCarInfo({ ...carInfo, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (event) => {
        // prevents the subumit button from refresheing the page
        event.preventDefault();
        setCarInfo({ name: "", distance: "", litersRefuel: "",priceRefuel:""});
        addFuelExpense(carInfo);
    };


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}> 
                <div>
                    <middle><h3>Car Form</h3></middle>
                </div>
                <div>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name of car"
                    value={carInfo.name}
                    onChange={handleChange} //onChange is how react updates the input fields in real time.
                    required //input required
                    />
                </div>
                <div>
                <input
                    type="number"
                    name="distance"
                    placeholder="Distance driven"
                    value={carInfo.distance}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                <input
                    type="number"
                    name="litersRefuel"
                    placeholder="Liters of refuel"
                    value={carInfo.litersRefuel}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
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
                    <button>Submit Car</button>
                </div>
                
            </form>
        </div>
    );
}

        
// ReactDOM.render(<CarForm />, document.getElementById('root'))