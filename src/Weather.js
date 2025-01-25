import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          className="form-entry"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>

      <h1>London</h1>
      <ul>
        <li>Wednesday 07.00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="mostly cloudy"
          />
          7℃
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humiditiy: 57%</li>
            <li>Wind: 3 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
