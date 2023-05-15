import React, { useContext } from "react";
import LocationContext from "../store/location-context";
import WeatherIcon from "./WeatherIcon";

const WeatherGraphics = () => {
  const ctx = useContext(LocationContext);
  // console.log(ctx.weather);
  return (
    <div className="weather">
      <div className="weather__location">
        <h1 className="weather__location-name">{ctx.weather.name}</h1>
        <p className="weather__location-timestamp">
          at&nbsp;{new Date(ctx.weather.dt * 1000).toLocaleTimeString()}
        </p>
      </div>
      <div className="weather__description">
        <h2 className="weather__description-text">{ctx.weather.weather[0].description}</h2>
        <WeatherIcon icon={ctx.weather.weather[0].icon} />
      </div>
      <p className="weather__property">
        temperature:
        <span className="weather__property-value">
          &nbsp;&nbsp;{Math.round(ctx.weather.main.temp)}°C
        </span>
      </p>
      <p className="weather__property">
        feels like:
        <span className="weather__property-value">
          &nbsp;&nbsp;{Math.round(ctx.weather.main.feels_like)}°C
        </span>
      </p>
      <p className="weather__property">
        humidity:
        <span className="weather__property-value">
          &nbsp;&nbsp;{Math.round(ctx.weather.main.humidity)}&nbsp;%
        </span>
      </p>
      {/* <p>cloudiness: {Math.round(ctx.weather.clouds.all)} %</p> */}
      <p>
        wind speed:
        <span className="weather__property-value">
          &nbsp;&nbsp;{Math.round(ctx.weather.wind.speed)}&nbsp;km/h
        </span>
      </p>
    </div>
  );
};

export default WeatherGraphics;
