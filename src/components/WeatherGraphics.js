import React, { useContext } from "react";
import LocationContext from "../store/location-context";
import WeatherIcon from "./WeatherIcon";

const WeatherGraphics = () => {
  const ctx = useContext(LocationContext);
  return (
    <div className="weather">
      <h1>{ctx.weather.name}</h1>
      <h2>{ctx.weather.weather[0].description}</h2>
      <WeatherIcon icon={ctx.weather.weather[0].icon} />
      <p>time: {new Date(ctx.weather.dt * 1000).toLocaleString()}</p>
      <p>temperature: {Math.round(ctx.weather.main.temp)}°C</p>
      <p>feels like: {Math.round(ctx.weather.main.feels_like)}°C</p>
      <p>humidity: {Math.round(ctx.weather.main.humidity)} %</p>
      {/* <p>cloudiness: {Math.round(ctx.weather.clouds.all)} %</p> */}
      <p>wind speed: {Math.round(ctx.weather.wind.speed)} km/h</p>
    </div>
  );
};

export default WeatherGraphics;
