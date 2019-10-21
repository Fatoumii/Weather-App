import React from "react";

const Form = props => {
  const { getWeather } = props;
  return (
    <div className="form">
      <p>Find the temperature conditions in your area!</p>
      <form onSubmit={getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
