import { useState } from "react";
import { ReactDOM } from "react-dom";

export default function CarForm({addCar}) {

    const [carInfo, setCarInfo] = useState({
        name:"",
        email:"",
        phonenumber:"",
    });

    const handleChange = (event) => {
        setCarInfo({ ...carInfo, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (event) => {
        //prevents the sbumit button from refresheing the page
        event.preventDefault();
        addCar(carInfo);
        setCarInfo({ name: "", email: "", phonenumber: ""});
    };


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}> 
                <div>
                    <h3>Car Form</h3>
                </div>
                <div>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={carInfo.name}
                    onChange={handleChange}
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
                    <button>Submit Car</button>
                </div>
                
            </form>
        </div>
    );
}

        
// ReactDOM.render(<CarForm />, document.getElementById('root'))