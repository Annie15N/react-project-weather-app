import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      condition: response.data.condition.description,
      city: response.data.city,
      iconURL: response.data.condition.icon_url,
      date: "Wednesday 07.00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-entry w-100"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>

        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.condition}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <img src={weatherData.iconURL} alt={weatherData.condition} />
              <div>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">℃</span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humiditiy: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0cod3f6efbetca0af47e36320cff442c";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
