import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="left">
        <div className="details-block">
          <div className="location">
            <p className="city">{data.city}</p>
            <p className="weather-description">{data.weather[0].description}</p>
          </div>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure} hPs</span>
            </div>
          </div>
        </div>
        <div className="weather-icon-block">
          <img
            alt="weather"
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.svg`}
          />
        </div>
      </div>
      <div className="right">
        <div className="temperature-details">
          <p className="temperature">{Math.round(data.main.temp)}</p>
          <p className="temperature-c">°C</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
