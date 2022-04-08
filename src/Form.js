import { useState } from "react";
import { ReactDOM } from "react-dom";

export default function CarForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value)
        setInputs(values => ({...values, [name]: value}))
    }

    const submit = (event) => {
        console.log("submitted")
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={submit}>
        <label> Car Brand:
            <input
            type="text"
            name="carbrand"
            value={inputs.carbrand || ""}
            onChange={handleChange}
            />
            </label>

        <label>  Quantity:
            <input
            type="number"
            name="quantity"
            value={inputs.quantity || ""}
            onChange={handleChange}
            />
            </label>
            

        <label>  Price:
            <input
            type="number"
            name=" price"
            value={inputs.price || ""}
            onChange={handleChange}
            />
            </label>
            
            <input type="submit" />
            </form>
    )
     
     }
        
// ReactDOM.render(<CarForm />, document.getElementById('root'))