import React, { useContext, useState } from "react";
import LocationContext from "../store/location-context";
import { getWeatherForecast } from "../helpers/getWeatherForecast";
import CurrentWeather from "./CurrentWeather";

const WeatherGraphics = () => {
  console.log("render weather graphics");
  const ctx = useContext(LocationContext);

  const [weatherForecast, setWeatherForecast] = useState(null);
  const [showCurrentWeather, setShowCurrentWeather] = useState(true);

  const onNextBtnHandler = async () => {
    try {
      const weatherForecast = await getWeatherForecast(
        ctx.coordinates[0].lat,
        ctx.coordinates[0].lng
      );

      if (weatherForecast) {
        console.log(weatherForecast);
        setWeatherForecast(weatherForecast);
        setShowCurrentWeather(false);
      }
    } catch (error) {
      console.log(error);
      // error handler
    }
  };

  return (
    <div className="weather">
      {showCurrentWeather && (
        <>
          <CurrentWeather />
          <div className="weather_next">
            <p className="weather__next-text">next</p>
            <p className="weather__next-text">7 days</p>

            <button className="weather__next-btn" onClick={onNextBtnHandler}>
              <img
                className="weather__next-icon"
                src="https://img.icons8.com/ios-filled/50/ffffff/more-than.png"
                alt="next-7-days"
              />
            </button>
          </div>
        </>
      )}
      {weatherForecast && <h1>data ve state</h1>}
    </div>
  );
};

export default WeatherGraphics;
