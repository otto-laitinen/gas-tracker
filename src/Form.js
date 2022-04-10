import { useState } from "react";
import { ReactDOM } from "react-dom";
import './Form.css'

export default function CarForm({addCar}) {

    const [carInfo, setCarInfo] = useState({
        name:"",
        email:"",
        phonenumber:"",
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
        setCarInfo({ name: "", email: "", phonenumber: ""});
    };


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}> 
                <div>
                    <h1 className="title">Car Form</h1>
                </div>
                <div>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={carInfo.name}
                    onChange={handleChange} //onChange is how react updates the input fields in real time.
                    />
                </div>
                <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={carInfo.email}
                    onChange={handleChange}
                    />
                </div>
                <div>
                <input
                    type="number"
                    name="phonenumber"
                    placeholder="Phone number"
                    value={carInfo.phonenumber}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <button className="Submit">Submit Car</button>
                </div>
                
            </form>
        </div>
    );
}

        
// ReactDOM.render(<CarForm />, document.getElementById('root'))