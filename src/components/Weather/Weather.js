import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {
  state = {
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    latitude:  undefined,
    longitude: undefined,
    temp_min: undefined,
    temp_max: undefined,
    sunrise: undefined,
    sunset: undefined
  }
  getWeather = async () => {
    const api_Key = 'dd0ce0a7ac4d926d09a62d6273bfdef9';
    const city = this.props.city;
    const country = this.props.country;
    const api_Url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_Key}&units=metric`;
    const api_data = await fetch(api_Url);
    const data = await api_data.json();
    if(city && country && data.cod!== '404' &&  data.cod!== '429') {
      this.setState({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        latitude:  data.coord.lat,
        longitude: data.coord.lon,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset
      })
    } else if(data.cod === '429') {
      this.setState({
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        latitude:  undefined,
        longitude: undefined,
        temp_min: undefined,
        temp_max: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: 'The App is down, please try again after few hours.'
      });
    }
  }
  render() {
    this.getWeather();
    return (
      <React.Fragment>
        <h2>Weather</h2>
        <h4>Temperature: {this.state.temperature} &#176;C</h4>
        <h4>Humidity: {this.state.humidity} %</h4>
        <h4>Min Temp: {this.state.temp_min} &#176;C</h4>
        <h4>Max Temp: {this.state.temp_max} &#176;C</h4>
        <h4 style={{textTransform: 'capitalize'}}>Description: {this.state.description}</h4>
      </React.Fragment>
    );
  }
}

export default Weather;
