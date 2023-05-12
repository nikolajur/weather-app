import React, { useContext } from "react";
import LocationContext from "../store/location-context";

const WeatherGraphic = () => {
  const ctx = useContext(LocationContext);
  return (
    <>
      <h1>{ctx.weather.name}</h1>
      <h2>{ctx.weather.weather[0].description}</h2>
      <p>temperature: {Math.round(ctx.weather.main.temp)}°C</p>
      <p>feels like: {Math.round(ctx.weather.main.feels_like)}°C</p>
      <p>humidity: {Math.round(ctx.weather.main.humidity)} %</p>
      <p>cloudiness: {Math.round(ctx.weather.clouds.all)} %</p>
      <p>wind speed: {Math.round(ctx.weather.wind.speed)} km/h</p>
    </>
  );
};

export default WeatherGraphic;
