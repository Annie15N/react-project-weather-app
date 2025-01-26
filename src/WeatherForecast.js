import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherForecast(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.condition}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img src={props.data.iconURL} alt={props.data.condition} />
            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">℃</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humiditiy: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
