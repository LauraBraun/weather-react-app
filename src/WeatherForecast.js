import React, { useState } from "react";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function WeatherForecast (props) {
    const [load, setLoad] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoad(true);
    }

    if (load) {
         return(<div className="weatherForecast">
        <div className="col">
          <ForecastDay data={forecast[0]}/>
        </div>
    </div>)
    } else {
    let apiKey =`2312e7899c189d46fb63d2d7ce28c492`;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&exclude={minutely}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading..."
    }
}