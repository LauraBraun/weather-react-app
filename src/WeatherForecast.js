import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast () {
    return(<div className="weatherForecast">
        <div className="col">
           <span className="ForecastDay">Wed</span>
           <div className="ForecastIcon"> <WeatherIcon code="01d" size={54}/></div> 
           <span className="ForecastMaxTemp">25°</span>
           <span className="ForecastMinTemp">18°</span>
        </div>
    </div>)
}