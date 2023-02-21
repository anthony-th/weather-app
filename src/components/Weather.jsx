import React from "react";
import sunrise from "../assets/img/sunrise.png";
import sunset from "../assets/img/sunset.png";
import { IMG_URL } from "../shared/utils";
import { motion } from "framer-motion";
import { weatherItem } from "../shared/utils";
import { weatherContainer } from "../shared/utils";

const Weather = (props) => {
  const { weather } = props;

  return (
    <motion.div variants={weatherContainer} initial="hidden" animate="visible">
      {weather.main && (
        <motion.div
          className="min-w-[227px] flex flex-col w-fit p-6 pt-4 bg-[#92afd9c2] rounded-2xl text-black/75 items-center justify-center shadow-lg"
          variants={weatherItem}
        >
          <p className="text-4xl font-medium text-center">{weather.name}</p>
          <div className="text-center w-fit relative">
            <img
              className="w-fit h-fit"
              src={`${IMG_URL}/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p className="text-3xl font-medium">
              {Math.trunc(weather.main.temp)}°C
            </p>
            <p className="text-lg font-medium">UV Index: {weather.uv}</p>
          </div>
          <p className="text-lg font-medium">
            Feels like: {Math.trunc(weather.main.feels_like)}°C
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
              <img className="w-[15px] h-[15px]" src={sunrise} alt="Sunrise" />
              <p className="text-base font-medium">
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
              <p className="text-base font-medium">
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
        </motion.div>
      )}
    </motion.div>
  );
};

export default Weather;
