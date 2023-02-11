import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherFive = ({ city }) => {
  const [weatherForecast, setWeatherForecast] = useState([]);
  const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const fetchWeatherForecast = async () => {
    const result = await axios(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=91d2dd3e0546bacc1b50edc59b6c0069`
    );
    setWeatherForecast(result.data.list);
  };

  return (
    <div>
      {weatherForecast.reduce((result, forecast, index, array) => {
        if (
          index === 0 ||
          new Date(array[index - 1].dt * 1000).toDateString() !==
            new Date(forecast.dt * 1000).toDateString()
        ) {
          result.push(
            <div key={forecast.dt} className="flex">
              <p className="mr-2">
                Date: {new Date(forecast.dt * 1000).toDateString()}
              </p>
              <p className="mr-2">Temperature (Kelvin): {forecast.main.temp}</p>
              <p className="mr-2">
                Temperature (Celsius):{" "}
                {convertKelvinToCelsius(forecast.main.temp).toFixed(2)}°C
              </p>
              <p className="mr-2">Humidity: {forecast.main.humidity}</p>
              <p className="mr-2">
                Description: {forecast.weather[0].description}
              </p>
              <p className="mr-2">Wind speed: {forecast.wind.speed}</p>
              <p className="mr-2">Wind gust: {forecast.wind.gust}</p>
            </div>
          );
        }
        return result;
      }, [])}
    </div>
  );
};

export default WeatherFive;

