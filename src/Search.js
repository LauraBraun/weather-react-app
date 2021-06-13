import React, { useState} from "react";
import axios from "axios";
import "./Search.css";

export default function Search(){
    const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data)
    setWeather({
      ready: true,
      temp: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity
    })
  }
 
  if (weather.ready) {
  return (
    <div className="Search"> 
        <div className="row">
          <div className="col-sm">
            <form id="citysearch">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search City"
                  aria-label="Search City"
                  aria-describedby="button-addon2"
                  id="search-city"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </form>
            <section id="displayCurrentWeather">
              <button className="btn btn-outline-secondary" id="coordinates">
                Current location
              </button>
              <img src="" alt={weather.description} id="currentConditions" />
              <span className="currentTemp">{Math.round(weather.temp)}</span>
              <button id="degreeConversion">°C</button>
            </section>
          </div>
          <div className="col">
            <h2 id="displayCity">{weather.city}</h2>
            <h2 id="currentDay">Thursday</h2>
            <span id="currentDate">10:30</span>
            <br />
            <br />
            <div id="weatherDescription" className="text-capitalize">{weather.description}</div>
            <div id="humidity">Humidity:{weather.humidity}</div>
            <div id="windspeed">Wind: {weather.wind} m/s</div>
            <div id="precipitation">Precipitation: 20%</div>
          </div>
        </div>

      <br />

      <footer>
        <div className="row" id="forecast"></div>
      </footer>
      </div>);
  } else {
     let city ="Amsterdam"
  let apiKey=`2312e7899c189d46fb63d2d7ce28c492`;
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...."

  }
}