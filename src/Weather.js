import React from "react";
import "./Weather.css";

export default function Weather() {
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

      <h1>London</h1>

      <ul>
        <li>Wednesday 07.00</li>
        <li>Mostly cloudy</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="mostly cloudy"
              className=""
            />
            <span className="temperature">7</span>
            <span className="unit">℃</span>
          </div>
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
