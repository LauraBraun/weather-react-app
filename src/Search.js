import React, { useState} from "react";
import axios from "axios";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast"
import "./Search.css";

export default function Search(props){
  const [city, setCity] = useState (props.defaultCity);  
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      coords: response.data.coord,
      temp: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon : response.data.weather[0].icon,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity
    })
  }

  function search() {
 let apiKey=`2312e7899c189d46fb63d2d7ce28c492`;
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  }
 
  function handleSubmit (event) {
    event.preventDefault();
    search();
  }

   function updateCity (event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
  return (
    <div className="Search"> 
        <div>
          <div>
            <form id="citysearch" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search City"
                  aria-label="Search City"
                  aria-describedby="button-addon2"
                  id="search-city"
                  onChange = {updateCity}
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
                            <Weather info={weather} />
               </section>
               <br />
        </div>
        <WeatherForecast coords={weather.coords}/>
      </div>
      </div>);
  } else {
  search();
  return "Loading...."

  }
}