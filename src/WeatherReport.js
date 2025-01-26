import React from "react";
import axios from "axios";

import "./WeatherReport.css";

export default function WeatherReport(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let city = props.city;
  let apiKey = "0cod3f6efbetca0af47e36320cff442c";
  let forecastURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(forecastURL).then(handleResponse);

  return (
    <div className="WeatherReport">
      <div className="row"></div>
      <div className="col"></div>
      <div className="WeatherReport-Day">Thurs</div>
      ICON
      <div className="WeatherReport-temperatures">
        <span className="WeatherReport-max-temperature">10°</span>
        <span className="WeatherReport-min-temperature">5°</span>
      </div>
    </div>
  );
}
