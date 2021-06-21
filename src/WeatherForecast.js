import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function WeatherForecast (props) {
    const [load, setLoad] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoad(false);
    },[props.coords])

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoad(true);
    }

    function search() {
 let apiKey =`2312e7899c189d46fb63d2d7ce28c492`;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&exclude={minutely}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    if (load) {
         return(
         <div className="weatherForecast">
             <div className= "row ">
             {forecast.map(function (daily, index) {
                 if (index < 4 ) {
                 return (<div className="col mb-5" key={index}>
          <ForecastDay data={daily}/>
        </div>);
             } else {
                 return null;
             }
             } ) } 
                     </div>
    </div>)
    } else {
   search()
    return "loading..."
    }
}