import React, { useState } from 'react'
import Form from './components/Form'
import "../Form.css"
import CarForm from './components/Form'

const [total, setTotal] = useState(0);

setCarInfo(CarInfo)
calculateAvgRating(CarInfo)

const calculateAvgRating = CarInfo => {
    const {
        name,
        distance,
        litersRefuel,
        priceRefuel,
    } = CarInfo;
    const newTotal = 
    Number(name) +
    Number(distance) + 
    Number(litersRefuel) + 
    Number(priceRefuel);

    const finalAvg = newTotal / 5;
    setTotal(finalAvg);
    console.log("GGGG." + finalAvg);
};

