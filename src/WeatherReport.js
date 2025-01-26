import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherReportDay from "./WeatherReportDay";
import "./WeatherReport.css";

export default function WeatherReport(props) {
  let [loaded, setLoaded] = useState(false);
  let [weatherReport, setWeatherReport] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setWeatherReport(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherReport">
        <div className="row">
          {weatherReport.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherReportDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let city = props.city;
    let apiKey = "0cod3f6efbetca0af47e36320cff442c";
    let forecastURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(forecastURL).then(handleResponse);

    return null;
  }
}
