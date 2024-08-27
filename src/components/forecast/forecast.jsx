import { motion } from "framer-motion";
import "./forecast.css";
import { cardAnimate, cardVariants } from "../../shared/motion-animate";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  const filteredData = data.list.filter(item => {
    const [date, time] = item.dt_txt.split(" ");
    return date !== currentDate && time === "12:00:00";
  });

  const lastDayDate = filteredData.length ? filteredData[filteredData.length - 1].dt_txt.split(" ")[0] : null;
  if (lastDayDate) {
    const lastDayItems = data.list.filter(item => item.dt_txt.startsWith(lastDayDate));
    if (lastDayItems.every(item => !item.dt_txt.includes("12:00:00"))) {
      filteredData.push(lastDayItems[lastDayItems.length - 1]);
    }
  }

  return (
    <motion.div
      className="forecast-container"
      variants={cardAnimate}
      initial="hidden"
      animate="visible"
    >
      {filteredData.map((item, idx) => (
        <motion.div key={idx} className="card" variants={cardVariants}>
          <div className="daily-item">
            <img
              src={`icons/${item.weather[0].icon}.svg`}
              className="icon-small"
              alt="weather icon"
            />
            <label className="day">{forecastDays[idx]}</label>
            <label className="description">{item.weather[0].description}</label>
            <label className="max-temperature">{Math.round(item.main.temp_max)}°C</label>
          </div>
          <div className="daily-details">
            <div className="daily-details-item">
              <label>Pressure:</label>
              <label>{item.main.pressure}</label>
            </div>
            <div className="daily-details-item">
              <label>Humidity:</label>
              <label>{item.main.humidity}</label>
            </div>
            <div className="daily-details-item">
              <label>Clouds:</label>
              <label>{item.clouds.all}%</label>
            </div>
            <div className="daily-details-item">
              <label>Wind:</label>
              <label>{item.wind.speed} m/s</label>
            </div>
            <div className="daily-details-item">
              <label>Sea level:</label>
              <label>{item.main.sea_level} m</label>
            </div>
            <div className="daily-details-item">
              <label>Feels like:</label>
              <label>{Math.round(item.main.feels_like)}°C</label>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Forecast;
