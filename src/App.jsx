import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [fiveDaysWeather, setFiveDaysWeather] = useState({});
  const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city.length < 3) {
      setError("Please enter a city name with more than 2 characters!");
      return;
    }
    setError(null);

    try {
      const result = await axios(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=91d2dd3e0546bacc1b50edc59b6c0069`
      );
      const result5Days = await axios(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=91d2dd3e0546bacc1b50edc59b6c0069`
      );
      setFiveDaysWeather(result5Days.data);
      setWeather(result.data);
    } catch (err) {
      setError("City not found!");
    }
  };

  return (
    <div className="bg-zinc-800 flex flex-col min-h-screen items-center justify-between">
      <Header
        handleSubmit={handleSubmit}
        city={city}
        setCity={setCity}
        error={error}
      />
      {weather.main && (
        <div className="flex flex-col p-4">
          <p className="mt-2 text-lg font-medium">
            T(Kelvin): {weather.main.temp}
          </p>
          <p className="mt-2 text-lg font-medium">
            T(Celsius):{" "}
            {convertKelvinToCelsius(weather.main.temp).toFixed(2)}°C
          </p>
          <p className="mt-2 text-lg font-medium">
            Humidity: {weather.main.humidity}
          </p>
          <p className="mt-2 text-lg font-medium">
            Description: {weather.weather[0].description}
          </p>
          <p className="mt-2 text-lg font-medium">
            Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
          </p>
          <p className="mt-2 text-lg font-medium">
            Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
          </p>
          <p className="mt-2 text-lg font-medium">
            Wind gust: {weather.wind.gust}
          </p>
          <p className="mt-2 text-lg font-medium">
            Wind speed: {weather.wind.speed}
          </p>
        </div>
      )}

      {fiveDaysWeather.list && (
        <div className="flex p-4">
          {Object.values(
            fiveDaysWeather.list.reduce((acc, day) => {
              const date = new Date(day.dt * 1000).toLocaleDateString();
              acc[date] = acc[date] || { date, ...day.main };
              return acc;
            }, {})
          ).map((day, index) => (
            <div key={index} className="flex flex-col">
              <p className="mt-2 text-lg font-medium">{day.date}</p>
              <p className="mt-2 text-lg font-medium">T (Kelvin): {day.temp}</p>
              <p className="mt-2 text-lg font-medium">
                T(Celsius): {convertKelvinToCelsius(day.temp).toFixed(2)}°C
              </p>
              <p className="mt-2 text-lg font-medium">
                Humidity: {day.humidity}
              </p>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
