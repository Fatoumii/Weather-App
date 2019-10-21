import React from "react";
const kelvinToCelsius = require("kelvin-to-celsius");

const Weather = props => {
  const { temperature, city, country, humidity, description, error } = props;
  return (
    <div className="results">
      <div className="info">
        {city && country ? (
          <p>
            Location: {city}, {country}
          </p>
        ) : null}
        {description ? (
          <p>
            Conditions:{" "}
            {description
              .split(" ")
              .map(x => {
                return x[0].toUpperCase() + x.slice(1);
              })
              .join(" ")}
          </p>
        ) : null}
        {temperature ? (
          <p>Temperature: {kelvinToCelsius(temperature).toFixed(1)}°C</p>
        ) : null}
        {humidity ? <p>Humidity: {humidity}</p> : null}
        {error ? <p>{error}</p> : null}
      </div>
      <p className="pic">**place pic here**</p>
    </div>
  );
};
export default Weather;
