import { useState } from "react";
import { ReactDOM } from "react-dom";
import {omit} from 'lodash';

export default function CarForm({addCar}) {

    //Form values
    const [carInfo, setCarInfo] = useState({
        nameCar:"",
        distance:"",
        litersRefuel:"",
        priceRefuel:"",
    });
    

        // handleChange updates the input field.
    const handleChange = (event) => {
        // setCarInfo is a function that updates the current state boject.
        setCarInfo({ ...carInfo, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (event) => {
        // prevents the subumit button from refresheing the page
        event.preventDefault();
        addCar(carInfo);
        setCarInfo({ nameCar: "", distance: "", litersRefuel: "",priceRefuel:""});
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
                    nameCar="name"
                    placeholder="Name of car"
                    value={carInfo.name}
                    onChange={handleChange} //onChange is how react updates the input fields in real time.
                    />
                </div>
                <div>
                <input
                    type="number"
                    name="distance"
                    placeholder="Distance driven"
                    value={carInfo.distance}
                    onChange={handleChange}
                    />
                </div>
                <div>
                <input
                    type="number"
                    name="litersRefuel"
                    placeholder="Liters of refuel"
                    value={carInfo.litersRefuel}
                    onChange={handleChange}
                    />
                </div>
                <div>
                <input
                    type="number"
                    name="priceRefuel"
                    placeholder="Price of refuel"
                    value={carInfo.priceRefuel}
                    onChange={handleChange}
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