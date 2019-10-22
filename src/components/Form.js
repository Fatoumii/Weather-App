import React from "react";

const Form = props => {
  const { getWeather } = props;
  return (
    <div className="form">
      <p>Find the weather conditions in your area!</p>
      <form onSubmit={getWeather}>
        <input type="text" name="city" placeholder="City..." className="city" />

        <input
          type="text"
          name="country"
          placeholder="Country..."
          className="country"
        />
        <button className="getWeather">Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
