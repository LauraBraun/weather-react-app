import React, { useState } from "react";
import "./CurrentTemp.css";

export default function CurrentTemp (props) {
    const [unit, setUnit] = useState("celsius")

    function changeFahrenheit (event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function changeCelsius (event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
    return (<div className="currentTemp"> <span>{Math.round(props.celsius)}</span>
              <button id="degreeConversion" onClick={changeFahrenheit}>°C</button></div>)
} else {
    let fahrenheit =  (props.celsius * 9/5) + 32;
    return(<div className="currentTemp"> <span>{Math.round(fahrenheit)}</span>
              <button id="degreeConversion" onClick={changeCelsius}>°F</button></div>)
}
}