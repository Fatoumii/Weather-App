import React from "react";

class Form extends React.Component {
  state = {
    city: "",
    country: ""
  };
  render() {
    const { getWeather } = this.props;
    console.log(this.state);
    return (
      <div>
        <div className="form">
          <p>Enter your location below</p>
          <form onSubmit={getWeather}>
            <input
              type="text"
              name="city"
              placeholder="City..."
              className="city"
              onChange={event => {
                this.setState({ city: event.target.value });
              }}
            />

            <input
              type="text"
              name="country"
              placeholder="Country..."
              className="country"
              onChange={event => {
                this.setState({ country: event.target.value });
              }}
            />
            <button className="getWeather">Get Weather</button>
          </form>
        </div>
        <button onClick={this.resetData}>Reset</button>
      </div>
    );
  }
  resetData = () => {
    this.setState({ city: "", country: "" });
  };
}

//reset isn't working - media queries - images
export default Form;
