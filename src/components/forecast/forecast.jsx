import "./forecast.css";

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
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="forecast-container">
      {data.list.slice(0, 7).map((item, idx) => (
        <div key={idx} className="card">
          <div className="daily-item">
            <img
              src={`icons/${item.weather[0].icon}.png`}
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
        </div>
      ))}
    </div>
  );
};

export default Forecast;
