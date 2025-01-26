import React from "react";

import "./WeatherReport.css";

export default function WeatherReport() {
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
