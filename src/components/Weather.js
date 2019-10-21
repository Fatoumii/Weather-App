import React from "react";

const Weather = props => {
  const { temperature, city, country, humidity, description, error } = props;
  return (
    <div>
      {city && country ? (
        <p>
          Location: {city}, {country}
        </p>
      ) : null}
      {description ? <p>Conditions: {description}</p> : null}
      {temperature ? <p>Temperature: {temperature}</p> : null}
      {humidity ? <p>Humidity: {humidity}</p> : null}
      {error ? <p>{error}</p> : null}
    </div>
  );
};
export default Weather;
