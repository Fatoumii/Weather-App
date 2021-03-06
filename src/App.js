import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import APIKey from "./config.js";
import "./App.css";

class App extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: undefined
  };
  render() {
    return (
      <div>
        <Header />
        <h3>Real Time Weather at your fingertips...</h3>
        <div className="content">
          <Form
            getWeather={this.getWeather}
            city={this.state.city}
            country={this.state.country}
          />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
            getWeather={this.getWeather}
          />
        </div>
      </div>
    );
  }

  getWeather = async event => {
    event.preventDefault();

    const city = event.target.city.value;
    const country = event.target.country.value;

    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${APIKey}`
    );
    const data = await apiCall.json();

    if (city && country) {
      this.setState({
        temperature: data.list[0].main.temp,
        city: data.city.name,
        country: data.city.country,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Error! You must enter a value"
      });
    }
  };
}

export default App;
