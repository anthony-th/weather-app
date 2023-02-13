import React, { useState } from "react";
import APIRequest from "./shared/APIRequest";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Weather from "./components/Weather";
import WeatherFive from "./components/WeatherFive";

const App = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [fiveDaysWeather, setFiveDaysWeather] = useState({});

  const handleSubmit = APIRequest(
    city,
    setWeather,
    setFiveDaysWeather,
    setError
  );

  return (
    <div className="min-w-[320px] bg-winter bg-cover flex flex-col min-h-screen items-center justify-between gap-8">
      <Header
        handleSubmit={handleSubmit}
        city={city}
        setCity={setCity}
        error={error}
      />
      <div className="flex flex-col gap-6 items-center">
        <Weather weather={weather} setWeather={setWeather} />
        <WeatherFive
          fiveDaysWeather={fiveDaysWeather}
          setFiveDaysWeather={setFiveDaysWeather}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
