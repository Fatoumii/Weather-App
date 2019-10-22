import React from "react";
import Clouds from "../weather-images/clouds.jpg";
import Rain from "../weather-images/rain.jpg";
import Snow from "../weather-images/snow.jpg";
import Sun from "../weather-images/sun.jpg";
import Clear from "../weather-images/clearsky.jpg";

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
        ) : (
          <p>Please enter a location >></p>
        )}
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
      <div>
        <img
          src={
            description.includes("cloud")
              ? Clouds
              : description.includes("sun")
              ? Sun
              : description.includes("snow")
              ? Snow
              : description.includes("rain")
              ? Rain
              : Clear
          }
          className="weatherimg"
        />
      </div>
    </div>
  );
};
export default Weather;
