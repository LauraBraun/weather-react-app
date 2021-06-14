import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import CurrentTemp from "./CurrentTemp";
import "./Weather.css";

export default function Weather (props) {
    return (<div className="Weather">
        <WeatherIcon code={props.info.icon} id="currentConditions" />
        <CurrentTemp celsius={props.info.temp}/>
          <div className="col">
            <h2 id="displayCity">{props.info.city}</h2>
            <h2 id="currentDay"><FormattedDate date={props.info.date}/></h2> 
            <br />
            <br />
            <div id="weatherDescription" className="text-capitalize">{props.info.description}</div>
            <div id="humidity">Humidity:{props.info.humidity}</div>
            <div id="windspeed">Wind: {props.info.wind} m/s</div>
            <div id="precipitation">Precipitation: 20%</div>
          </div>
          </div>);
}