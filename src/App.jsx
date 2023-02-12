import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import sunrise from "./assets/img/sunrise.png";
import sunset from "./assets/img/sunset.png";
import { API_KEY, API_URL, IMG_URL } from "./shared/utils";

const App = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [fiveDaysWeather, setFiveDaysWeather] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city.length < 3) {
      setError("Please enter a city name with more than 2 characters!");
      return;
    }
    setError(null);

    try {
      const result = await axios(
        `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const result5Days = await axios(
        `${API_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      setFiveDaysWeather(result5Days.data);
      setWeather(result.data);
    } catch (err) {
      setError("City not found! Please correct!");
    }
  };

  return (
    <div className="min-w-[320px] bg-winter bg-cover flex flex-col min-h-screen items-center justify-between gap-8">
      <Header
        handleSubmit={handleSubmit}
        city={city}
        setCity={setCity}
        error={error}
      />
      <div className="flex flex-col gap-6 items-center">
        {weather.main && (
          <div className="flex flex-col w-fit p-6 pt-4 bg-[#92afd9c2] rounded-2xl text-black/75 items-center justify-center shadow-lg">
            <p className="text-4xl font-medium text-center">{weather.name}</p>
            <div className="text-center w-fit relative">
              <img
                className="w-fit h-fit"
                src={`${IMG_URL}/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p className="text-3xl font-medium">{weather.main.temp}°C</p>
            </div>
            <p className="text-lg font-medium">
              Feels like: {weather.main.feels_like}°C
            </p>
            <p className="text-lg font-medium">
              {weather.weather[0].description}
            </p>
            <p className="text-lg font-medium">
              Humidity: {weather.main.humidity}%
            </p>
            <p className="text-lg font-medium">
              Pressure: {weather.main.pressure}hPa
            </p>
            {weather.wind && weather.wind.gust && (
              <p className="text-lg font-medium">
                Wind gust: {weather.wind.gust}m/s
              </p>
            )}
            {weather.wind && weather.wind.speed && (
              <p className="text-lg font-medium">
                Wind speed: {weather.wind.speed}m/s
              </p>
            )}
            <div className="flex gap-2">
              <div className="lowercase flex items-center gap-1">
                <img
                  className="w-[15px] h-[15px]"
                  src={sunrise}
                  alt="Sunrise"
                />
                <p className="text-base">
                  {new Date(weather.sys.sunrise * 1000)
                    .toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                    .replace(" AM", "AM")
                    .replace(" PM", "PM")}
                </p>
              </div>
              <div className="lowercase flex items-center gap-1">
                <img className="w-[15px] h-[15px]" src={sunset} alt="Sunset" />
                <p className="text-base">
                  {new Date(weather.sys.sunset * 1000)
                    .toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                    .replace(" AM", "AM")
                    .replace(" PM", "PM")}
                </p>
              </div>
            </div>
          </div>
        )}

        {fiveDaysWeather.list && (
          <div className="flex flex-wrap justify-center text-gray-600 gap-2 max-w-[320px] sm:max-w-full">
            {Object.values(
              fiveDaysWeather.list.reduce((acc, day) => {
                const date = new Date(day.dt * 1000).toLocaleDateString();
                acc[date] = acc[date] || {
                  date,
                  ...day.main,
                  weather: day.weather[0],
                };
                return acc;
              }, {})
            ).map((day, index) => (
              <div
                key={index}
                className="shadow-lg flex flex-col py-4 px-3 bg-[#92afd9c2] rounded-lg text-black/75 items-center"
              >
                <p className="text-center text-xl font-medium">{day.date}</p>
                <div className="text-center">
                  <img
                    className="w-[70px] h-[70px]"
                    src={`${IMG_URL}/${day.weather.icon}@2x.png`}
                    alt={day.weather.description}
                  />
                  <p className="text-center text-xl font-medium">
                    {day.temp}°C
                  </p>
                </div>
                <p className="text-sm font-medium">
                  Feels like: {day.feels_like}°C
                </p>
                <p className="text-center text-smfont-medium">
                  {day.weather.description}
                </p>
                <p className="text-center text-sm font-medium">
                  Humidity: {day.humidity}
                </p>
                <p className="text-center text-sm font-medium">
                  Pressure: {day.pressure}hPa
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
