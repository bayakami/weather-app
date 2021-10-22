import React from 'react';
import './styles.css';
import moment from 'moment';

const WeatherCard = ({weatherData}) => (
  <div className="main">
      <p className="header">{weatherData.name}</p>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Max Temperature: {(weatherData.main.temp_max  - 273.15).toFixed(1) }&deg;C</p>
        <p className="temp">Min Temperature: {(weatherData.main.temp_min - 273.15).toFixed(1) } &deg;C</p>
      </div>

      <div className="flex">
        <p> <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            /></p>
        <p className="wind">Wind Speed: {(weatherData.wind.speed)}m/s</p>
      </div>

      
    
  </div>
)

export default WeatherCard;