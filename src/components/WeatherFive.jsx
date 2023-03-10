import React from "react";
import { IMG_URL } from "../shared/utils";
import { motion } from "framer-motion";
import { weatherItem } from "../shared/utils";
import { weatherContainer } from "../shared/utils";

const WeatherFive = (props) => {
  const { fiveDaysWeather } = props;
  
  return (
    <>
      {fiveDaysWeather.daily && (
        <motion.div
          className="flex flex-wrap justify-center text-gray-600 gap-2 max-w-[320px] sm:max-w-full"
          variants={weatherContainer}
          initial="hidden"
          animate="visible"
        >
          {fiveDaysWeather.daily.slice(1).map((day, index) => (
            <motion.div
              variants={weatherItem}
              key={index}
              className="min-w-[138px] shadow-lg flex flex-col py-4 px-3 bg-[#92afd9c2] rounded-lg text-black/75 items-center"
            >
              <p className="text-center text-xl font-medium">
                {new Date(day.dt * 1000).toLocaleDateString()}
              </p>
              <div className="text-center">
                <img
                  className="w-[70px] h-[70px]"
                  src={`${IMG_URL}/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                />
                <p className="text-center text-xl font-medium">
                  {Math.trunc(day.temp.day)}°C
                </p>
              </div>
              <p className="text-sm font-medium">
                Feels like: {Math.trunc(day.feels_like.day)}°C
              </p>
              <p className="text-center text-sm font-medium">
                {day.weather[0].description}
              </p>
              <p className="text-center text-sm font-medium">
                UV index: {day.uvi}
              </p>
              <p className="text-center text-sm font-medium">
                Humidity: {day.humidity}
              </p>
              <p className="text-center text-sm font-medium">
                Pressure: {day.pressure}hPa
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default WeatherFive;