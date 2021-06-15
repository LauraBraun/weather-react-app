import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay (props) {

    function maxTemp () {
        let temperature=Math.round(props.data.temp.max);
        return `${temperature}`
    }

    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`
    }

    function day (){
    let date = new Date (props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day]
}
    return(<div>
         <span className="ForecastDay">{day()}</span>
           <div className="ForecastIcon"> <WeatherIcon code={props.data.weather[0].icon} size={54} /></div> 
           <span className="ForecastMaxTemp">{maxTemp()}°</span>
           <span className="ForecastMinTemp">{minTemp()}°</span>
    </div>)
}