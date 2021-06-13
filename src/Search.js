import React from "react";
import "./Search.css";

export default function Search(){
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
              <img src="" alt="weather description" id="currentConditions" />
              <span className="currentTemp">20</span>
              <button id="degreeConversion">°C</button>
            </section>
          </div>
          <div className="col">
            <h2 id="displayCity">Amsterdam</h2>
            <h2 id="currentDay">Thursday</h2>
            <span id="currentDate">10:30</span>
            <br />
            <br />
            <div id="weatherDescription">Description</div>
            <div id="humidity">Humidity:</div>
            <div id="windspeed">Wind: m/s</div>
            <div id="precipitation">Precipitation</div>
          </div>
        </div>

      <br />

      <footer>
        <div className="row" id="forecast"></div>
      </footer>
      </div>);
}