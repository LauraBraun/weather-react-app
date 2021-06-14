import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weather (props) {
    return (<div className="Weather">
        <img src={props.info.icon} alt={props.info.description} id="currentConditions" />
              <span className="currentTemp">{Math.round(props.info.temp)}</span>
              <button id="degreeConversion">°C</button>
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